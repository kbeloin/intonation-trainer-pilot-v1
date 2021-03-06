"""server URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView
from rest_framework import routers
from api import views as api_views
from client import urls as client_urls

router = routers.DefaultRouter()

urlpatterns = [
    path('process/', api_views.ProcessAudio.as_view(), name='Audio'),
    path('get-responses/', api_views.GetResponseSet.as_view(), name='Set'),
    path('create-response-set/', api_views.NewResponseSet.as_view(), name="Create"),
    path('submit-response/', api_views.SubmitResponse.as_view(), name="Submit"), 
    path('post-activity/', api_views.PostActivity.as_view(), name="Activity")
]