from django.shortcuts import render
from .serializers import DataSerializer
from .models import Data
from rest_framework import viewsets
from django.http import HttpResponse
import json
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt

def add(request,format=None):
        data = request.body.decode('utf-8')
        print(data)
        datas = json.loads(data)
        serializer = DataSerializer(data=datas)
        if serializer.is_valid():
            serializer.save()
            return HttpResponse("Data saved successfully!")
        else:
            return HttpResponse("Error saving data!")

def show_data(self):
    data = Data.objects.all()
    return HttpResponse(data)
