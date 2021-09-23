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

class Sentence(models.Model):
    filepath = models.URLField(null=True)
    sentence = models.TextField()
    intonation = models.CharField(max_length=255)
    pitch = models.JSONField(null=True)
    prominent_words = models.CharField(max_length=255, null=True) # { words: 'word1,word2 ]}

class Task(models.Model):
    experiment = models.ForeignKey(Experiment, on_delete=models.DO_NOTHING)
    type = models.CharField(max_length=255)
    attempts = models.IntegerField(default=3)
    config = models.JSONField(null=True, blank=True)
    instructions_text = models.TextField(null=True, blank=True)
    instructions_short = models.TextField(null=True, blank=True)
    example_text = models.TextField(null=True, blank=True)
    example_sentence = models.ForeignKey(Sentence, on_delete=models.DO_NOTHING, null=True, blank=True)

class Trial(models.Model):
    TARGET_CHOICES = [("intonation", "Intonation"), ("prominent_words", "Prominent words"), ("id", "Prominence")]

    task = models.ForeignKey(Task, on_delete=models.DO_NOTHING, null=True)
    sentences = models.ManyToManyField(Sentence, blank=True)
    target_sentence = models.ForeignKey(Sentence, on_delete=models.DO_NOTHING, related_name='correct_sentence', null=True)
    target_field = models.CharField(max_length=25, choices=TARGET_CHOICES, null=True, blank=True)

class UserResponse(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    experiment = models.ForeignKey(Experiment, on_delete=models.DO_NOTHING,  null=True, blank=True)
    trial = models.ForeignKey(Trial, on_delete=models.DO_NOTHING, null=True)
    complete = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)
    started = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    completed = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    is_correct = models.BooleanField(null=True, blank=True)
    response = models.JSONField(null=True)

class Action(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    type = models.JSONField(null=True)
    created = models.DateTimeField(auto_now_add=True)
    response = models.ForeignKey(UserResponse, on_delete=models.DO_NOTHING, null=True)


    