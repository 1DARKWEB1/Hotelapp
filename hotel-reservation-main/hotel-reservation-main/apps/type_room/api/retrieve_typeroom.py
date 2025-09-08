from rest_framework.generics import RetrieveAPIView

from apps.type_room.models import TypeRoom
from apps.type_room.serializers.typeroom_serializer import TypeRoomSerializer


class RetrieveTypeRoom(RetrieveAPIView):
    queryset = TypeRoom.objects.all()
    serializer_class = TypeRoomSerializer
