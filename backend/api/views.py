from django.shortcuts import render
from .serializers import DataSerializer
from .models import Data
from rest_framework import viewsets
from django.http import HttpResponse
import json
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
# Create your views here.

# class DataAddToDB(request, *args, **kwargs):
#     if request.method == 'POST':
#         data = request.POST.copy()
#         serializer = DataSerializer(data=data)
#         if serializer.is_valid():
#             serializer.save()
#             return render(request, 'add.html', {'message': 'Data saved successfully!'})
#         else:
#             return render(request, 'add.html', {'message': 'Error saving data!'}


def add(request,format=None):
    # print("ascas")
    # return HttpResponse("Hello World")
    # if request.method == 'POST':
        data = request
        print(data.POST)
        serializer = DataSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return HttpResponse("Data saved successfully!")
        else:
            return HttpResponse("Error saving data!")
    

# def hello(self):
#     return HttpResponse("Hello World")

def show_data(self):
    data = Data.objects.all()
    return HttpResponse(data)
 

