from django.shortcuts import render, redirect
from posts.forms import PostForm, AdminPostForm
from posts.models import Post
from django.contrib.auth.decorators import login_required
from django.contrib import messages


@login_required(login_url='login')
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
    current_user = request.user
    post = Post.objects.get(pk=pk)
    context = {"post": post,
               "user": current_user}
    return render(request, template_name="details.html", context=context)


@login_required(login_url='login')
def verify(request, pk):
    post = Post.objects.get(pk=pk)
    tier_message = ''
    if request.method == 'GET':
        form = AdminPostForm(instance=post, initial=post.__dict__)
    if request.method == 'POST':
        form = AdminPostForm(request.POST, instance=post)
        if not form.data['tier']:
            tier_message = 'Please input tier.'
        if form.is_valid() and form.data['tier']:
            form.save()
            post.verified = True
            post.save()
            return redirect('pending')
    context = {"form": form,
               "post": post,
               "tier_message": tier_message}
    return render(request, template_name="verify.html", context=context)


@login_required(login_url='login')
def delete(request, pk):
    post = Post.objects.get(pk=pk)
    post.delete()
    return redirect('pending')
