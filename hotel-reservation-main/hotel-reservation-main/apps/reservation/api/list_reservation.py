from rest_framework.generics import ListAPIView

from apps.reservation.models import Reservation
from apps.reservation.serializers.reservation_list_serializer import ReservationListSerializer


class ListReservation(ListAPIView):
    queryset = Reservation.objects.all()
    serializer_class = ReservationListSerializer
