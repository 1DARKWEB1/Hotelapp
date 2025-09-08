from rest_framework.generics import ListAPIView

from apps.kitchen.models import TypeFood
from apps.kitchen.serializers.type_food.typefood_serializer import TypeFoodSerializer


class ListTypeFood(ListAPIView):
    queryset = TypeFood.objects.all()
    serializer_class = TypeFoodSerializer
