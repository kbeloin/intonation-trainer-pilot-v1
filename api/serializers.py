# todo/serializers.py
from rest_framework import serializers # This is important
from .models import Action, UserResponse, Experiment, Task, Sentence, Trial
from typing import Any
from django.db import models

class ExperimentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experiment
        fields = ('id', 'title', 'code')

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('id', 'experiement', 'type', 'attempts', 'config', 'instructions_text', 'instructions_short','example_text', 'example_sentence')

class ResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserResponse
        fields = ('id', 'user', 'experiment', 'trial', 'complete', 'created', 'started', 'completed', 'data')

class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Action
        fields = ('id', 'title', 'code')

class SentenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sentence
        fields = ('id', 'audio', 'sentence', 'intonation', 'pitch', 'prominent_words', 'trial')

class TrialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trial
        fields = ('id', 'sentence' 'task', 'correct_sentence_id', 'target_field')

