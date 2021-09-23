from django.contrib import admin
from .models import Action, Experiment,UserResponse,Task,Sentence,Trial

# Register your models here.
admin.site.register(Experiment)
admin.site.register(Task)
admin.site.register(UserResponse)
admin.site.register(Action)
admin.site.register(Sentence)
admin.site.register(Trial)

