from django.shortcuts import render


def pending(request):
    context = {}
    return render(request, template_name="pending.html", context=context)


def submit(request):
    context = {}
    return render(request, template_name="submit.html", context=context)


def success(request):
    context = {}
    return render(request, template_name="success.html", context=context)


def details(request):
    context = {}
    return render(request, template_name="details.html", context=context)
