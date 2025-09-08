from rest_framework.generics import RetrieveUpdateAPIView

from apps.event.models import Event
from apps.event.serializers.event_serializer import EventSerializer


class UpdateEvent(RetrieveUpdateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
