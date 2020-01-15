from django.urls import path
from . import views


urlpatterns = [
    path('home', views.home_index, name='home'),
    path('sale', views.sale_index, name='sale')
]
