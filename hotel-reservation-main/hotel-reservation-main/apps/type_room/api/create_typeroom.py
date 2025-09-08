from rest_framework.generics import CreateAPIView

from apps.type_room.models import TypeRoom
from apps.type_room.serializers.typeroom_serializer import TypeRoomSerializer


class CreateTypeRoom(CreateAPIView):
    queryset = TypeRoom.objects.all()
    serializer_class = TypeRoomSerializer
