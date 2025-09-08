from rest_framework.generics import CreateAPIView

from apps.kitchen.models import Food
from apps.kitchen.serializers.food.food_serializer import FoodSerializer


class CreateFood(CreateAPIView):
    queryset = Food.objects.all()
    serializer_class = FoodSerializer
