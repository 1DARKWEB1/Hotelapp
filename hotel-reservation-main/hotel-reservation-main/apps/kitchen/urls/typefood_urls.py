from django.urls import path

from apps.kitchen.api.type_food.create_typefood import CreateTypeFood
from apps.kitchen.api.type_food.destroy_typefood import DestroyTypeFood
from apps.kitchen.api.type_food.list_typefood import ListTypeFood
from apps.kitchen.api.type_food.retrieve_typefood import RetrieveTypeFood
from apps.kitchen.api.type_food.update_typefood import UpdateTypeFood

urlpatterns = [
    path('list/', ListTypeFood.as_view()),
    path('create/', CreateTypeFood.as_view()),

    path('retrieve/<int:pk>/', RetrieveTypeFood.as_view()),
    path('update/<int:pk>/', UpdateTypeFood.as_view()),
    path('destroy/<int:pk>/', DestroyTypeFood.as_view()),
]