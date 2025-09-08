from rest_framework import serializers

from apps.type_room.models import TypeRoom


class TypeRoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = TypeRoom
        fields = [
            'id',
            'name'
        ]
