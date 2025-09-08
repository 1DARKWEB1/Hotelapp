from rest_framework.generics import RetrieveUpdateAPIView

from apps.room.models import Room
from apps.room.serilaizers.room_serializer import RoomSerializer


class UpdateRoom(RetrieveUpdateAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
