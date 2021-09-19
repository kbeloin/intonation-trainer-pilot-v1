
from django.core.files.temp import NamedTemporaryFile
import numpy as np
import requests
from rest_framework import viewsets          # add this
from .serializers import TodoSerializer      # add this
from rest_framework.views import APIView
from .models import Experiment, Todo, Task
from django.views import View
from rest_framework.response import Response
from django.http import HttpResponse, HttpResponseNotFound
import os           # add this
from rest_framework.decorators import api_view,parser_classes
import json
import base64
import datetime
from .parsers import AudioParser
from .tools import audio_utils, custom_audio_convert, b2_util
import time
import boto3
from botocore.exceptions import ClientError
import logging



class TodoView(viewsets.ModelViewSet):       # add this
    serializer_class = TodoSerializer          # add this
    queryset = Todo.objects.all()              # add this

# Add this CBV
class Assets(View):

    def get(self, _request, filename):
        path = os.path.join(os.path.dirname(__file__), 'static', filename)

        if os.path.isfile(path):
            with open(path, 'rb') as file:
                return HttpResponse(file.read(), content_type='application/javascript')
        else:
            return HttpResponseNotFound()

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

class sign_s3(APIView):
    model = None
    create_field = None

    def get(self, request):
        print(request.data)

class NewResponse(APIView):
    model = Response
    create_field = None

    def post(self, request):
        '''Handle when user begins new question'''
        requestData = json.loads(request.data)
        response = Response(experiment=requestData['experiment_id'])
        response.save()
    
    # def put(self, request):
    #     '''Handle when user submits question'''
    #     requestData = json.loads(request.data)
    #     response = Response(experiment=requestData['response_id'])

class GetResponseSet(APIView):
    model = Response
    create_field = None
    queryset = Task.objects.all()              # add this

    def post(self, request):
        
        '''Handle when a user begins a new experiment. Takes user + experiment id as input:
        Returns:
        - if no responses related to user -> create response set.
        - get response list, return most recent incomplete task. 
        '''
        
        print(request.user)


    # def put(self, request):
    #     '''Handle when user submits question'''
    #     requestData = json.loads(request.data)
    #     response = Response(experiment=requestData['response_id'])


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


# Enter experiment -> get all tasks related to experiment -> create all responses for that task -> return first task without response
