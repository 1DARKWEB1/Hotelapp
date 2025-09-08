from django.urls import path

from apps.room.api.create_room import CreateRoom
from apps.room.api.destroy_room import DestroyRoom
from apps.room.api.list_room import ListRoom
from apps.room.api.retrieve_room import RetrieveRoom
from apps.room.api.update_room import UpdateRoom

urlpatterns = [
    path('list/', ListRoom.as_view()),
    path('create/', CreateRoom.as_view()),

    path('retrieve/<int:pk>/', RetrieveRoom.as_view()),
    path('update/<int:pk>/', UpdateRoom.as_view()),
    path('destroy/<int:pk>/', DestroyRoom.as_view()),
]
