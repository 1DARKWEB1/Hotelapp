from rest_framework.generics import RetrieveDestroyAPIView

from apps.kitchen.models import Food
from apps.kitchen.serializers.food.food_serializer import FoodSerializer


class DestroyFood(RetrieveDestroyAPIView):
    queryset = Food.objects.all()
    serializer_class = FoodSerializer
