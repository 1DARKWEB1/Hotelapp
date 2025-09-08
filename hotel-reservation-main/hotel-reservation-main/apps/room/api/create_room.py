from rest_framework.generics import CreateAPIView

from apps.room.models import Room
from apps.room.serilaizers.room_serializer import RoomSerializer


class CreateRoom(CreateAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
