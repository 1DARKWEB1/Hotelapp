from rest_framework.generics import ListAPIView

from apps.type_room.models import TypeRoom
from apps.type_room.serializers.typeroom_serializer import TypeRoomSerializer


class ListTypeRoom(ListAPIView):
    queryset = TypeRoom.objects.all()
    serializer_class = TypeRoomSerializer
