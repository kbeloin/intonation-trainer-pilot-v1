
import datetime
import base64
import requests
import json


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

def upload_file(file):
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
        'X-Bz-Info-Author' : 'intonation-trainer' # No spaces allowed here
        }

    response = requests.request("POST", upload_url, data=file, headers=header)

    return response.text