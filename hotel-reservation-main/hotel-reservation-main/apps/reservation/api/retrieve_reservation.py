from rest_framework.generics import RetrieveAPIView

from apps.reservation.models import Reservation
from apps.reservation.serializers.reservation_serializer import ReservationSerializer


class RetrieveReservation(RetrieveAPIView):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer
