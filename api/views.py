
from django.core.files.temp import NamedTemporaryFile
import numpy as np
import requests
from rest_framework import viewsets
from rest_framework import response          # add this
from .serializers import TaskSerializer, ExperimentSerializer, ResponseSerializer, ActivitySerializer       # add this
from rest_framework.views import APIView
from .models import Experiment, Tasks, Responses, User
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

def upload_file(file_name, object_name=None):
    """Upload a file to an S3 bucket
    :param file_name: File to upload
    :param bucket: Bucket to upload to
    :param object_name: S3 object name. If not specified then file_name is used
    :return: True if file was uploaded, else False
    """

    # If S3 object_name was not specified, use file_name
    if object_name is None:
        object_name = os.path.basename(file_name.name)

    # Upload the file
    s3_client = boto3.client('s3')
    try:
        response = s3_client.upload_file(file_name.name, 'intonation-trainer', 'pilot-reponse-data/' + object_name + '.wav')
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
        audio_data = [y for x,y in json.loads(request.data).items()]
        temp_file = NamedTemporaryFile(delete=True)
        with temp_file as f:
            custom_audio_convert.write(f.name, 44100, np.asarray(audio_data))
            
            data = audio_utils.analyze_pitch(f)
            # time.sleep(3)
            upload_response = upload_file(f)
            print(request.user)
            print(upload_response)

            return HttpResponse(data)

class NewResponseSet(APIView):
    model = Responses
    create_field = None
    queryset = Tasks.objects.all() 

    def create_set(self,tasks,user):
        '''Create the reponse set'''
        print ("Creating...")
        for task in tasks:
            if task.attempts > 0:
                for i in range(task.attempts):
                    r = Responses(user=user, experiment=task.experiment, task=task)
                    r.save()
            print(task.type)
            r = Responses(user=user, experiment=task.experiment, task=task)
            r.save()
            
        return 


    def post(self, request):
        '''Handle when user begins new experiment.'''
        code = (request.data['code'])
        experiment = Experiment.objects.filter(code=code).values_list(flat=True).first()

        responses = Tasks.objects.filter(experiment=experiment)
        
        self.create_set(responses, request.user)
        # print(Tasks.objects.get(10))
        # requestData = json.loads(request.data.items())
        # taskSet = Tasks.objects.filter(experiment_code=requestData['code'])
        # responseSet = Responses.objects.filter(reponses_user=User)

        # print(responseSet[0]) # Sort these, pick first...

        return HttpResponse( json.dumps('') )
    

class GetResponseSet(APIView):
    model = Responses
    create_field = None
    queryset = Responses.objects.all()            # add this

    def get(self, request):
        
        '''Handle when a user begins a new experiment. Takes user + experiment id as input:
        Returns:
        - if no responses related to user -> create response set.
        - get response list, return most recent incomplete task. 
        '''
        user = request.user
        print(user.id)
        print(user.is_authenticated)

        responses = Responses.objects.filter(user=1).values_list(flat=True).first()

        if responses == None:
            return HttpResponse(None)
        
        current_response = Responses.objects.filter(complete=False).first()
        
        
        if current_response == []:
            return HttpResponse({'data': [], 'message': 'All responses recorded for user.', 'user': user})
        
        return HttpResponse(json.dumps({"taskData":current_response.task.config, "response_id": current_response.task.id}))


class SubmitResponse(APIView):
    model = Responses
    create_field = None
    queryset = Responses.objects.filter(complete=False)        # add this

    def post(self, request):
        '''Handle when user submits question'''
        print(request)
        r_id = request.data['response_id']
        r = Responses.objects.get(r_id)
        return HttpResponse(r.data)


class PostActivity(APIView):
    model = Responses
    create_field = None
    queryset = Responses.objects.filter(complete=False)        # add this

    def post(self, request):
        '''Handle when user submits question'''
        requestData = json.loads(request.data)
        return HttpResponse(requestData)



# Enter experiment -> get all tasks related to experiment -> create all responses for that task -> return first task without response
