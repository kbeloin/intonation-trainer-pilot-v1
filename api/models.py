import uuid
from typing import Any
from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Experiment(models.Model):
    title = models.CharField(default='intonation-trainer', max_length=255,unique=True)
    created = models.DateTimeField(auto_now_add=True)
    code = models.CharField(default='ABCDEF',  max_length=255, unique=True)
    
    def _str_(self):
        return self.title

class Tasks(models.Model):
    experiment = models.ForeignKey(Experiment, on_delete=models.DO_NOTHING)
    type = models.CharField(max_length=255)
    attempts = models.IntegerField(default=3)
    config = models.JSONField()

class Responses(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    experiment = models.ForeignKey(Experiment, on_delete=models.DO_NOTHING,  null=True, blank=True)
    task = models.ForeignKey(Tasks, on_delete=models.DO_NOTHING)
    complete = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)
    started = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    completed = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    data = models.JSONField(null=True)

class Activities(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    type = models.JSONField(null=True)
    created = models.DateTimeField(auto_now_add=True)
    response = models.ForeignKey(Responses, on_delete=models.DO_NOTHING, null=True)

class Sentence(models.Model):
    audio = models.URLField(null=True)
    sentence = models.TextField()
    intonation = models.CharField(max_length=255)
    pitch = models.JSONField(null=True)
    prominent_words = models.JSONField(null=True) # { words: [ word1, word2 ]}
    task = models.ManyToManyField(Tasks)


    