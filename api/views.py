
import requests
from rest_framework import viewsets          # add this
from .serializers import TodoSerializer      # add this
from rest_framework.views import APIView
from .models import Todo
from django.views import View
from rest_framework.response import Response
from django.http import HttpResponse, HttpResponseNotFound
import os           # add this
from rest_framework.decorators import api_view,parser_classes
from urllib.request import FileHandler
import json
from django.core.files.temp import NamedTemporaryFile
import base64
import datetime
from .parsers import AudioParser
from .custom_audio_convert import *
import numpy as np
import parselmouth as snd


def get_auth_token():
    '''Initial upload task. 
    Takes: None
    Returns: (token, api_url)
    '''
    string = b'8d8e7988e8cd:000b6d15ee63ea250dbe47ac45c0d1f73ace21fc85' # Generate bytestring for key
    id_and_key = repr(base64.b64encode(string))[2:-1] # Use repr method to get str representation of bytestring

    basic_auth_string = f'Basic {str(id_and_key)}'
    headers = { 'Authorization': basic_auth_string }
    response = requests.request("GET",
        'https://api.backblazeb2.com/b2api/v2/b2_authorize_account',
        headers = headers
        )

    data = json.loads(response.text)
    token, api_url = (data['authorizationToken'], data['apiUrl'])
    return (token, api_url)

def get_url(auth):
    '''Fetches upload url and auth for upload function.
    Takes: (token, api_url) as arguments.
    Returns: (token, upl_url)
    '''
    headers = {
        'Authorization': auth[0]
    }
    url = f'{auth[1]}/b2api/v2/b2_get_upload_url'
    querystring = {
        'bucketId' : 'e88da87ee7e978487e880c1d'
    }
    response = requests.request('GET', url, headers=headers, params=querystring)
    data = json.loads(response.text)
    token, upl_url = (data['authorizationToken'], data['uploadUrl'])
    return (token, upl_url)

def upload_file():
    '''Takes transformed data as input.'''
    auth = get_auth_token() # Get api auth, url
    upl_auth = get_url(auth) # Get upl auth, url
    upload_url = upl_auth[1] # Provided by b2_get_upload_url

    upload_authorization_token = upl_auth[0] # Provided by b2_get_upload_url
    
    date = datetime.date.today()
    file_name = f"{date}-audio.wav" # Set unique name for file.
    file_checksum = 'do_not_verify'# Generate checksum for file

    header = {
        'Authorization' : upload_authorization_token,
        'X-Bz-File-Name' :  file_name,
        'Content-Type' : "b2/x-auto", # Auto detect content-type
        'X-Bz-Content-Sha1' : file_checksum,
        'X-Bz-Info-Author' : 'azureRunbook' # No spaces allowed here
        }

    return (upload_url, header)
    print(response)

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
        print(len(request.data))
        
        audio_data = [y for x,y in json.loads(request.data).items()]
        # audio_file = io.BytesIO(request.data.keys())
        temp_file = NamedTemporaryFile(delete=True)
        print(len(audio_data))
        with temp_file as f:
            
            write(f.name, 44100, np.asarray(audio_data))

            s = snd.Sound(f.name)

            pitch = s.to_pitch()
            pitch_values = pitch.selected_array['frequency']

            x,y = (pitch.xs().tolist(), pitch_values.tolist())
            x_lim, y_lim = (0, pitch.ceiling)
            
            return HttpResponse(json.dumps({'data': {'time': x, 'pitch': y, 'x_lim': x_lim, 'y_lim': y_lim}}))
        return Response('Other response')

class sign_s3(APIView):
    model = None
    create_field = None
    

    def get(self, request):
        print(request.data)
        url, headers = upload_file()

        return HttpResponse(json.dumps({'data': headers,'url': url}))

