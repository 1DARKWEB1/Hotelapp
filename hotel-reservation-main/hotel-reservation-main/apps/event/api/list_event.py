from rest_framework.generics import ListAPIView

from apps.event.models import Event
from apps.event.serializers.event_serializer import EventSerializer


class ListEvent(ListAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    search_fields = (
        'name',
        'info',
        'where',
    )
