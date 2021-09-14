from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.contrib.auth.views import LoginView
from django.shortcuts import redirect
from django.urls import reverse_lazy
# Create your views here.

class CustomLoginView(LoginView):
    template_name = "login.html"
    fields = '__auth__'
    redirect_authenticated_user = True

    def get_success_url(self):
        return '../'

@login_required(login_url="login/")
def index(request, *args, **kwargs):
    return render(request, 'client/index.html')

def redirect_to_home(request):
    # assuming home has an urlconf name of 'home'
    return redirect(reverse_lazy('index'))


