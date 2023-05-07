from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import AuthenticationForm
from django.contrib import messages


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
