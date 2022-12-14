from django.urls import path
from api import views

urlpatterns = [
    path('show/', views.show_data),
    path('add/', views.add)
]