from rest_framework import serializers

from apps.room.models import Room


class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = [
            'id',
            'category',
            'type_room',
            'name',
            'area',
            'info',
            'image1',
            'image2',
            'image3',
            'image4',
            'floor',
            'room_number',
            'single_beds',
            'double_beds',
            'air_conditioner',
            'kitchen',
            'hair_dryer',
            'iron',
            'wifi',
            'TV',
            'price',
            'busy',
        ]
