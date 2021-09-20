# todo/serializers.py
from rest_framework import serializers # This is important
from .models import Activities, Responses, Experiment, Tasks
from typing import Any
from django.db import models

class ExperimentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experiment
        fields = ('id', 'title', 'code')

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Activities
        fields = ('id', 'experiement', 'type', 'attempts', 'config')

class ResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Responses
        fields = ('id', 'user', 'experiment', 'task', 'complete', 'created', 'started', 'completed', 'data')

class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activities
        fields = ('id', 'title', 'code')



