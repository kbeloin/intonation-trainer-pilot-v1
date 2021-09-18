from django.contrib import admin
from .models import Experiment,Task

# Register your models here.
admin.site.register(Experiment)
admin.site.register(Task)