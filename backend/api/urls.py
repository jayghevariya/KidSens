from django.urls import path
from api import views

urlpatterns = [
    path('data/', views.DataViewSet.as_view({'get': 'list'})),
]