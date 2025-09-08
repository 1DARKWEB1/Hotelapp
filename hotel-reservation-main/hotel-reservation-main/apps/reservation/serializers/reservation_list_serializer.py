from rest_framework import serializers

from apps.reservation.models import Reservation
from apps.room.serilaizers.room_serializer import RoomSerializer
from user.serializers.client_serializer import ClientSerializer


class ReservationListSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField(read_only=True)
    room = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Reservation
        fields = '__all__'

    def get_user(self, obj):
        return ClientSerializer(obj.user).data

    def get_room(self, obj):
        return RoomSerializer(obj.room, many=True).data
