from django.contrib import admin
from .models import Activities, Experiment,Responses,Tasks,Sentence

# Register your models here.
admin.site.register(Experiment)
admin.site.register(Tasks)
admin.site.register(Responses)
admin.site.register(Activities)
admin.site.register(Sentence)
