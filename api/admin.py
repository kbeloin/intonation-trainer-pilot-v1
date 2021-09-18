from django.contrib import admin
from .models import Experiment,Response,Task

# Register your models here.
admin.site.register(Experiment)
admin.site.register(Task)
admin.site.register(Response)