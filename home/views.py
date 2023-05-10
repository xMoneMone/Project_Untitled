from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import AuthenticationForm
from django.contrib import messages
from posts.models import Post
from django.http import HttpResponse
import json
from posts.filter import filter_post


def home(request):
    context = {}
    return render(request, template_name="home.html", context=context)


def userlogin(request):
    form = AuthenticationForm()
    if request.method == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect(request.GET.get('next', 'home'))
            else:
                messages.info(request, "Wrong username or password.")
        else:
            messages.info(request, "Wrong username or password.")

    context = {"form": form}
    return render(request, template_name="login.html", context=context)


def userlogout(request):
    logout(request)
    return redirect('login')


def posts_info(request):
    min_age = request.GET.get('min-age')
    max_age = request.GET.get('max-age')
    lang = request.GET.get('languages')
    tier = request.GET.get('tier')
    role = request.GET.get('role')
    verified = request.GET.get('verified')
    shown = int(request.GET.get('shown'))

    all_data = Post.objects.all().order_by('-id').values()
    filtered_data = []

    for data in all_data:
        if filter_post(min_age, max_age, lang, tier, role, verified, data):
            filtered_data.append(data)

    mydata = filtered_data[shown - 15: shown]
    print(len(mydata))
    data_object = {}

    for data in mydata:
        data_object[data['id']] = data

    data_json = json.dumps(data_object)

    return HttpResponse(data_json, content_type='application/json')
