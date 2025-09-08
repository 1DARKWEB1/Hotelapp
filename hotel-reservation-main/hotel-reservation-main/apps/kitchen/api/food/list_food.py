from rest_framework.generics import ListAPIView

from apps.kitchen.models import Food
from apps.kitchen.serializers.food.food_serializer import FoodSerializer


class ListFood(ListAPIView):
    queryset = Food.objects.all()
    serializer_class = FoodSerializer
