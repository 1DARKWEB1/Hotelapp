from rest_framework.generics import RetrieveDestroyAPIView

from apps.type_room.models import TypeRoom
from apps.type_room.serializers.typeroom_serializer import TypeRoomSerializer


class DestroyTypeRoom(RetrieveDestroyAPIView):
    queryset = TypeRoom.objects.all()
    serializer_class = TypeRoomSerializer
