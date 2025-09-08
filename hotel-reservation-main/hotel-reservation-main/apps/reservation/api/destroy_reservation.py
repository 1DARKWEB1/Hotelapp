from rest_framework.generics import RetrieveDestroyAPIView

from apps.reservation.models import Reservation
from apps.reservation.serializers.reservation_serializer import ReservationSerializer


class DestroyReservation(RetrieveDestroyAPIView):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer
