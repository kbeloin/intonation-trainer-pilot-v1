# todo/serializers.py
from rest_framework import serializers # This is important
from .models import Activity, Response, Todo, AudioFile
from typing import Any
from django.db import models

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'title', 'description', 'completed')

class AudioDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = AudioFile
        fields = ('id', 'experiment', 'raw_audio', 'pitch_array', 'public_url')

class ResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Response
        fields = ('id', 'user', 'experiment', 'complete', 'created', 'started', 'completed', 'userInput')

class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = ('id', 'user', 'type', 'created')
