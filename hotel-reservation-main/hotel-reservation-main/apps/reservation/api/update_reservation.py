from rest_framework.generics import RetrieveUpdateAPIView

from apps.reservation.models import Reservation
from apps.reservation.serializers.reservation_serializer import ReservationSerializer


class UpdateReservation(RetrieveUpdateAPIView):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer
