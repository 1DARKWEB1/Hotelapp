from django.urls import path

from apps.kitchen.api.food.create_food import CreateFood
from apps.kitchen.api.food.destroy_food import DestroyFood
from apps.kitchen.api.food.list_food import ListFood
from apps.kitchen.api.food.retrieve_food import RetrieveFood
from apps.kitchen.api.food.update_food import UpdateFood

urlpatterns = [
    path('list/', ListFood.as_view()),
    path('create/', CreateFood.as_view()),

    path('retrieve/<int:pk>/', RetrieveFood.as_view()),
    path('update/<int:pk>/', UpdateFood.as_view()),
    path('destroy/<int:pk>/', DestroyFood.as_view()),
]