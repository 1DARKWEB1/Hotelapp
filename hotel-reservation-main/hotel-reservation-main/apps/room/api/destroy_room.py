from rest_framework.generics import RetrieveDestroyAPIView

from apps.room.models import Room
from apps.room.serilaizers.room_serializer import RoomSerializer


class DestroyRoom(RetrieveDestroyAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
