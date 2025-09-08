from rest_framework.generics import RetrieveAPIView

from apps.kitchen.models import Food
from apps.kitchen.serializers.food.food_serializer import FoodSerializer


class RetrieveFood(RetrieveAPIView):
    queryset = Food.objects.all()
    serializer_class = FoodSerializer
