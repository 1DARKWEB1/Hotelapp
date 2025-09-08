from rest_framework.generics import RetrieveDestroyAPIView

from apps.event.models import Event
from apps.event.serializers.event_serializer import EventSerializer


class DestroyEvent(RetrieveDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
