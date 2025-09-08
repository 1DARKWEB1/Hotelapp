from rest_framework.generics import RetrieveUpdateAPIView

from apps.kitchen.models import Food
from apps.kitchen.serializers.food.food_serializer import FoodSerializer


class UpdateFood(RetrieveUpdateAPIView):
    queryset = Food.objects.all()
    serializer_class = FoodSerializer
