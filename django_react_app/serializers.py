from django.contrib.auth.models import User
from rest_framework import serializers
from django_react_app.models import Lead, Badge


class BadgeSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), required=False)
    name = serializers.CharField()
    info = serializers.CharField(allow_blank=True, required=False)
    on_sale = serializers.BooleanField(required=False, default=False)
    id = serializers.PrimaryKeyRelatedField(queryset=Badge.objects.all(), required=False, allow_empty=True)

    def create(self, validated_data):
        return Badge.objects.create(**validated_data)

    # def create(self, validated_data):
    #     return Badge(**validated_data)

    # def save(self, owner):
    #     user = owner
    #     name = self.validated_data["name"]
    #     info = self.validated_data["info"]
    #     on_sale = self.validated_data["on_sale"]

    class Meta:
        model = Badge
        fields = '__all__'
        # fields = ('id', 'name', 'info', 'on_sale')
