from django.contrib.auth.models import User
from django.db import models


class Lead(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.CharField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True)


class Badge(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    info = models.CharField(max_length=500, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    on_sale = models.BooleanField(default=False)
