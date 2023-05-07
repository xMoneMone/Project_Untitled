from django.urls import path, include
from posts import views

urlpatterns = [
    path('pending', views.pending, name="pending"),
    path('submit', views.submit, name="submit"),
    path('success', views.success, name="success"),
    path('<int:pk>', views.details, name="details")
]
