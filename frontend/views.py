from django.shortcuts import render


def home_index(request):
    return render(request, 'frontend/home_index.html')


def sale_index(request):
    return render(request, 'frontend/sale_index.html')
