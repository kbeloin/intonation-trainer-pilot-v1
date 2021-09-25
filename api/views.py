
from django.core.files.temp import NamedTemporaryFile
import numpy as np
import requests
from rest_framework import viewsets
from rest_framework import response          # add this
from .serializers import TaskSerializer, ExperimentSerializer, ResponseSerializer, ActivitySerializer, Sentence       # add this
from rest_framework.views import APIView
from .models import Experiment, Task, UserResponse, User, Trial
from django.views import View
from rest_framework.response import Response
from django.http import HttpResponse, HttpResponseNotFound
import os           # add this
from rest_framework.decorators import api_view,parser_classes
import json
from .parsers import AudioParser
from .tools import audio_utils, custom_audio_convert, b2_util
import time
import boto3
from botocore.exceptions import ClientError
import logging

def remove_outiers(arr):
    
    mean = np.mean(arr)
    standard_deviation = np.std(arr)
    distance_from_mean = abs(arr - mean)
    max_deviations = 3
    not_outlier = distance_from_mean < max_deviations * standard_deviation
    no_outliers = arr[not_outlier]

    return no_outliers

def upload_file(file_name, user, response_id):
    """Upload a file to an S3 bucket
    :param file_name: File to upload
    :param bucket: Bucket to upload to
    :param object_name: S3 object name. If not specified then file_name is used
    :return: True if file was uploaded, else False
    """

    response_type = UserResponse.objects.get(id=response_id).trial.task.id
    trial = UserResponse.objects.get(id=response_id).trial.id
    object_name = f'{user}-{trial}-{trial}-{response_type}'

    # If S3 object_name was not specified, use file_name
    if object_name is None:
        object_name = os.path.basename(file_name.name)

    # Upload the file
    s3_client = boto3.client('s3')
    try:
        response = s3_client.upload_file(file_name.name, 'intonation-trainer', 'pilot-reponse-data/' + object_name + '.wav')
        return response
    except ClientError as e:
        logging.error(e)
        return False
    return True

class ProcessAudio(APIView):
    model = None
    create_field = None
    parser_classes = [AudioParser]

    def post(self, request):
        # audio_file = io.BytesIO(request.data.keys())
        
        response_id = json.loads(request.data)['response_id']
        print(response_id)
        audio_data = [y for x,y in json.loads(request.data)['audio'].items()]
        temp_file = NamedTemporaryFile(delete=True)
        with temp_file as f:
            custom_audio_convert.write(f.name, 44100, np.asarray(audio_data))
            
            data = audio_utils.analyze_pitch(f)
            
            upload_response = upload_file(f, request.user.id, response_id)
            print("User: ", request.user)
            print(upload_response)
            # response = UserResponse.objects.get(id=response_id)
            # response.complete = True
            # response.response = json.loads(data)
            # response.save()

            return HttpResponse(data)

class NewResponseSet(APIView):
    model = UserResponse
    create_field = None
    queryset = Task.objects.all() 

    def create_set(self,tasks,user):
        '''Create the reponse set'''
        print ("Creating...")
        

        for task in tasks:
            trials = Trial.objects.filter(task=task)
            for trial in trials:
                if task.attempts > 0:
                    for i in range(task.attempts - 1):
                        r = UserResponse(user=user, experiment=task.experiment, trial=trial)
                        r.save()
                
                r = UserResponse(user=user, experiment=task.experiment, trial=trial)
                r.save()
        return 


    def post(self, request):
        '''Handle when user begins new experiment.'''
        code = request.data['code']

        experiment = Experiment.objects.filter(code=code).values_list(flat=True).first()

        tasks = Task.objects.filter(experiment=experiment)
        
        self.create_set(tasks, request.user)
        # print(Task.objects.get(10))
        # requestData = json.loads(request.data.items())
        # taskSet = Task.objects.filter(experiment_code=requestData['code'])
        # responseSet = UserResponse.objects.filter(reponses_user=User)

        # print(responseSet[0]) # Sort these, pick first...

        return HttpResponse( json.dumps('') )
    

class GetResponseSet(APIView):
    model = UserResponse
    create_field = None
    queryset = UserResponse.objects.all()            # add this

    def post(self, request):
        
        '''Handle when a user begins a new experiment. Takes user + experiment id as input:
        Returns:
        - if no responses related to user -> create response set.
        - get response list, return most recent incomplete task. 
        '''
        user = request.user
        responses = UserResponse.objects.filter(user=user.id)
        
        if len(responses) == 0:
            print('Hello from user creation1')
            return HttpResponse(None)

       
        request_params = request.data['params'] # list of expected data about sentences.

        current_response = responses.filter(complete=False).first()

        if len(responses.filter(complete=False)) == 0:
            print('Hello from creation2')
            return HttpResponse(json.dumps({"type":'done'}))

        if current_response == None:
            print('Hello from creation3')
            return HttpResponse(None)
        
        current_sentence = Sentence.objects.filter(trial=current_response.trial)

        if len(current_sentence) == 1:
            sentence_data = {}
            current_sentence = current_sentence.first()
            for param in request_params:
                sentence_data[f'{param}'] = getattr(current_sentence, param)
        else:
            sentence_data = []
            for sentence in current_sentence:
                s = {}
                for param in request_params:
                    s[f'{param}'] = getattr(sentence, param)
                sentence_data.append(s)
        print(sentence_data)
        
        meta = { "instructions": current_response.trial.task.instructions_text, "instructions_short": current_response.trial.task.instructions_short, "example_text":current_response.trial.task.instructions_short } 
        
        if current_response.trial.target_field != None:
            target = getattr(current_response.trial.target_sentence, current_response.trial.target_field)
        else:
            target = getattr(current_response.trial.target_sentence, 'id')

        return HttpResponse(json.dumps({"type":current_response.trial.task.type, "attempts":current_response.trial.task.attempts, "trial_id": current_response.trial.id, "response_id": current_response.id, "task_id": current_response.trial.task.id, "sentence": sentence_data, "text": meta, "target": target }))


class SubmitResponse(APIView):
    model = UserResponse
    create_field = None
    queryset = UserResponse.objects.filter(complete=False)        # add this

    def post(self, request):
        '''Handle when user submits question'''
        current_response = UserResponse.objects.get(id=request.data['response_id']) # What response is being saved?
         # What values are being submitted? (JSON)
        
        # print(request.data['eval'])
        
        if request.data['eval'] == 1:
            print("Correct. Changing all related to complete.")
            current_response.is_correct = True
            current_response.response = json.dumps(request.data['response'])
            current_response.save()
            related_responses = UserResponse.objects.filter(user=request.user).filter(trial=current_response.trial)
            related_responses.update(complete=True)
        else:
            print("Incorrect. Changing only one to complete.")
            current_response.is_correct = False
            current_response.complete = True
            current_response.response = json.dumps(request.data['response'])
            current_response.save()

        next_response = UserResponse.objects.filter(user=current_response.user).filter(complete=False).first()
        if next_response == None:
            return  HttpResponse(json.dumps({"nextType": "end"}))

        # print(current_response.trial.task.type, current_response.trial.task.id)
        return HttpResponse(json.dumps({"nextTaskId": next_response.trial.task.id, "nextType":next_response.trial.task.type, "nextTrialId": next_response.trial.id, "nextResponseId": next_response.id }))


class PostActivity(APIView):
    model = UserResponse
    create_field = None
    queryset = UserResponse.objects.filter(complete=False)        # add this

    def post(self, request):
        '''Handle when user submits question'''
        requestData = json.loads(request.data)
        return HttpResponse(requestData)



# Enter experiment -> get all tasks related to experiment -> create all responses for that task -> return first task without response
