from django.urls import path

from apps.type_room.api.create_typeroom import CreateTypeRoom
from apps.type_room.api.destroy_typeroom import DestroyTypeRoom
from apps.type_room.api.list_typeroom import ListTypeRoom
from apps.type_room.api.retrieve_typeroom import RetrieveTypeRoom
from apps.type_room.api.update_typeroom import UpdateTypeRoom

urlpatterns = [
    path('list/', ListTypeRoom.as_view()),
    path('create/', CreateTypeRoom.as_view()),

    path('retrieve/<int:pk>/', RetrieveTypeRoom.as_view()),
    path('update/<int:pk>/', UpdateTypeRoom.as_view()),
    path('destroy/<int:pk>/', DestroyTypeRoom.as_view()),
]