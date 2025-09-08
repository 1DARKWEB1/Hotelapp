import django_filters
from rest_framework.generics import ListAPIView
from rest_framework import filters

from apps.room.models import Room
from apps.room.serilaizers.room_serializer import RoomSerializer


class ListRoom(ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
    search_fields = (
        'name',
        'area',
        'info',
        'single_beds',
        'double_beds',
        'price',
        'category__name',
        'type_room__name',
    )
    filterset_fields = (
        'category',
        'type_room',
        'floor',
        'air_conditioner',
        'kitchen',
        'hair_dryer',
        'iron',
        'wifi',
        'TV',
        'busy',
        'single_beds',
        'double_beds',
    )
