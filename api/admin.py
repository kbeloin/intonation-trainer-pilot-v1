from django.contrib import admin
from .models import Activities, Experiment,Responses,Tasks

# Register your models here.
admin.site.register(Experiment)
admin.site.register(Tasks)
admin.site.register(Responses)
admin.site.register(Activities)