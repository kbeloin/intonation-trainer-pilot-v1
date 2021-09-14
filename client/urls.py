from django.urls import path, re_path
from .views import index, CustomLoginView, redirect_to_home
from django.contrib.auth.views import LogoutView


urlpatterns = [
    path('', index, name='index'),
    path('login/', CustomLoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(next_page='login'), name='logout'),
    re_path('^.*/$', redirect_to_home,name='redirect-to-home')
]
