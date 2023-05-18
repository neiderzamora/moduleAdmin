from rest_framework import serializers
from django.contrib.auth import get_user_model

from .models import CustomUser

class CustomUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    date_joined = serializers.DateTimeField(format='%Y-%m-%e %H:%M', read_only=True)

    class Meta:
        model = CustomUser
        fields = ('id', 'email', 'first_name', 'last_name', 'faculty', 'phone_number', 'idU', 'password', 'date_joined')
        read_only_fields = ['id', 'date_joined']
        extra_kwargs = {'password': {'write_only': True}}
    
    def create(self, validated_data):
        password = validated_data.pop('password')
        user = CustomUser(**validated_data)
        user.set_password(password)
        user.save()
        return user