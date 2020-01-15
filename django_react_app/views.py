from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated
from rest_framework.response import Response

from django_react_app.models import Lead, Badge
from django_react_app.serializers import BadgeSerializer
from rest_framework import generics, status
from rest_framework import mixins


class BadgeUserList(generics.ListCreateAPIView, mixins.DestroyModelMixin):
    # generics.mixins.DestroyModelMixin
    queryset = Badge.objects.all()
    serializer_class = BadgeSerializer
    permission_classes = [IsAuthenticated]
    lookup_field = 'id'

    def get_queryset(self):
        queryset = self.queryset.filter(user=self.request.user)
        return queryset

    # def destroy(self, request, *args, **kwargs):
    #     i = 0

    def delete(self, request, id, format=None):
        badge = Badge.objects.get(id=id)
        badge.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
    #
    # def perform_destroy(self, instance):
    #     i = 0


class SellingBadgeList(generics.ListCreateAPIView):
    queryset = Badge.objects.all()
    serializer_class = BadgeSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        queryset = self.queryset.filter(on_sale=True)
        return queryset
