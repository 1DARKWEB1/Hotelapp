from django.urls import path

from apps.reservation.api.create_reservation import CreateReservation
from apps.reservation.api.destroy_reservation import DestroyReservation
from apps.reservation.api.list_reservation import ListReservation
from apps.reservation.api.retrieve_reservation import RetrieveReservation
from apps.reservation.api.update_reservation import UpdateReservation

urlpatterns = [
    path('list/', ListReservation.as_view()),
    path('create/', CreateReservation.as_view()),

    path('retrieve/<int:pk>/', RetrieveReservation.as_view()),
    path('update/<int:pk>/', UpdateReservation.as_view()),
    path('destroy/<int:pk>/', DestroyReservation.as_view()),
]
