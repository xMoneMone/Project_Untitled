from django.shortcuts import render, redirect
from posts.forms import PostForm


def pending(request):
    context = {}
    return render(request, template_name="pending.html", context=context)


def submit(request):
    form = PostForm()
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('success')
        else:
            print('no')
    context = {"form": form}
    return render(request, template_name="submit.html", context=context)


def success(request):
    context = {}
    return render(request, template_name="success.html", context=context)


def details(request, pk):
    context = {}
    return render(request, template_name="details.html", context=context)


def pending_details(request, pk):
    context = {}
    return render(request, template_name="pending_details.html", context=context)
