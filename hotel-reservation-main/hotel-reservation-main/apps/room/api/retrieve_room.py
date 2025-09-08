from rest_framework.generics import RetrieveAPIView

from apps.room.models import Room
from apps.room.serilaizers.room_serializer import RoomSerializer


class RetrieveRoom(RetrieveAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
