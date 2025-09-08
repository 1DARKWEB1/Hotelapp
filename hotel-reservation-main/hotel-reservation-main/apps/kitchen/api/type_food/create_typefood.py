from rest_framework.generics import CreateAPIView

from apps.kitchen.models import TypeFood
from apps.kitchen.serializers.type_food.typefood_serializer import TypeFoodSerializer


class CreateTypeFood(CreateAPIView):
    queryset = TypeFood.objects.all()
    serializer_class = TypeFoodSerializer
