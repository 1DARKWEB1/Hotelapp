from rest_framework.generics import RetrieveUpdateAPIView

from apps.type_room.models import TypeRoom
from apps.type_room.serializers.typeroom_serializer import TypeRoomSerializer


class UpdateTypeRoom(RetrieveUpdateAPIView):
    queryset = TypeRoom.objects.all()
    serializer_class = TypeRoomSerializer
