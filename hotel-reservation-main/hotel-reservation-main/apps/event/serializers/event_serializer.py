from rest_framework.serializers import ModelSerializer

from apps.event.models import Event


class EventSerializer(ModelSerializer):
    class Meta:
        model = Event
        fields = [
            'id',
            'name',
            'info',
            'where',
            'when',
            'image',
        ]
