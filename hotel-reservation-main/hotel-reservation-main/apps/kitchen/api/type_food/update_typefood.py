from rest_framework.generics import RetrieveUpdateAPIView

from apps.kitchen.models import TypeFood
from apps.kitchen.serializers.type_food.typefood_serializer import TypeFoodSerializer


class UpdateTypeFood(RetrieveUpdateAPIView):
    queryset = TypeFood.objects.all()
    serializer_class = TypeFoodSerializer
