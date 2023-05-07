from django.urls import path, include
from home import views

urlpatterns = [
    path('', views.home, name="home"),
    path('login', views.userlogin, name="login"),
    path('logout', views.userlogout, name="logout"),
    path('posts-info', views.posts_info, name="posts-info"),
    path('verified-info', views.verified_info, name="verified-info")
]
