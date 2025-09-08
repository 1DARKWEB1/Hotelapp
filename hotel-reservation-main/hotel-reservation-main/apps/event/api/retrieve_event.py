from rest_framework.generics import RetrieveAPIView

from apps.event.models import Event
from apps.event.serializers.event_serializer import EventSerializer


class RetrieveEvent(RetrieveAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
