from rest_framework.generics import CreateAPIView

from apps.event.models import Event
from apps.event.serializers.event_serializer import EventSerializer


class CreateEvent(CreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
