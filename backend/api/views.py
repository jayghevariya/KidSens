from django.shortcuts import render
from .serializers import DataSerializer
from .models import Data
from rest_framework import viewsets

# Create your views here.
class DataViewSet(viewsets.ModelViewSet):
    queryset = Data.objects.all()
    serializer_class = DataSerializer

 

