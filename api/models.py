from typing import Any
from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Todo(models.Model):
    user = models.ForeignKey(User, unique=True, on_delete=models.CASCADE, null=True, blank=True)
    title = models.CharField(max_length=120)
    description = models.TextField()
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.title

class AudioFile(models.Model):
    file_name = models.CharField(max_length=255, default='', unique=True)
    raw_audio = models.BinaryField()
    pitch_array = models.JSONField()

    def _str_(self):
        return self.file_name

class Experiment(models.Model):
    title = models.CharField(max_length=255, default='', unique=True)
    created = models.DateTimeField(auto_now_add=True)
    code = models.CharField(max_length=8, default='', unique=True)
    
    def _str_(self):
        return self.title

class Task(models.Model):
    experiment = models.ForeignKey(Experiment, on_delete=models.DO_NOTHING)
    attempts = models.IntegerField(default=2)
    data = models.JSONField()


class Response(models.Model):
    user = models.ForeignKey(User, unique=True, on_delete=models.CASCADE, null=True, blank=True)
    experiment = models.ForeignKey(Experiment, on_delete=models.DO_NOTHING,  null=True, blank=True)
    task = models.ForeignKey(Task, on_delete=models.DO_NOTHING, null=True, blank=True)
    complete = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)
    started = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    completed = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    userInput = models.JSONField()

class Activity(models.Model):
    user = models.ForeignKey(User, unique=True, on_delete=models.CASCADE, null=True, blank=True)
    type = models.JSONField()
    created = models.DateTimeField(auto_now_add=True)

class Task(models.Model):
    experiment = models.ForeignKey(Experiment, on_delete=models.DO_NOTHING)
    attempts = models.IntegerField(default=2)
    data = models.JSONField()


    