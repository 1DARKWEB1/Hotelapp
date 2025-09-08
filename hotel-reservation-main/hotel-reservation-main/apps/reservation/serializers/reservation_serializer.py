from rest_framework import serializers

from apps.reservation.models import Reservation


class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        exclude = ['user', 'paid']
