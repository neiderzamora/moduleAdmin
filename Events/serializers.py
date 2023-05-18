from rest_framework import serializers
from .models import Event
from datetime import datetime

class EventSerializer(serializers.ModelSerializer):
    """ date = serializers.DateField(format='%d-%m-%Y')
    hour = serializers.TimeField(format='%H:%M:%S') """
    date_created = serializers.DateTimeField(format='%d-%m-%Y %H:%M:%S', read_only=True)
    is_upcoming = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Event
        fields = ['id', 'title', 'description', 'date', 'hour', 'location', 'date_created', 'is_upcoming']
        read_only_fields = ['date_created', 'is_upcoming']

    def get_is_upcoming(self, obj):
        return obj.date > datetime.now().date()
