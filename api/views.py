
from django.core.files.temp import NamedTemporaryFile
import numpy as np
import requests
from rest_framework import viewsets          # add this
from .serializers import TodoSerializer      # add this
from rest_framework.views import APIView
from .models import Experiment, Todo
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

class process(APIView):
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
            time.sleep(3)
            # upload_response = b2_util.upload_file(f)

            # print(upload_response)

            return HttpResponse(data)

class sign_s3(APIView):
    model = None
    create_field = None

    def get(self, request):
        print(request.data)

class newResponse(APIView):
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

class getResponseSet(APIView):
    model = None
    create_field = None

    def post(self, request):
        
        '''Handle when a user begins a new experiment. Takes user + experiment id as input:
        Returns:
        - if no responses related to user -> create response set.
        - get response list, return most recent incomplete task. 
        '''



    # def put(self, request):
    #     '''Handle when user submits question'''
    #     requestData = json.loads(request.data)
    #     response = Response(experiment=requestData['response_id'])




# Enter experiment -> get all tasks related to experiment -> create all responses for that task -> return first task without response
