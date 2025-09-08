from rest_framework import status
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from apps.reservation.models import Reservation
from apps.reservation.serializers.reservation_serializer import ReservationSerializer
from apps.room.models import Room


class CreateReservation(CreateAPIView):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer
    # permission_classes = [IsAuthenticated, ]

    def create(self, request, *args, **kwargs):
        temp_data = request.data
        temp_data['user'] = request.user.id

        serializer = self.get_serializer(data=temp_data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)

        room = Room.objects.get(id=temp_data['room'][0])
        room.busy = True
        room.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
