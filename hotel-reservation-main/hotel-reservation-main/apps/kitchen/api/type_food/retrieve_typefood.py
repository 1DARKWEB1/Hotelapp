from rest_framework.generics import RetrieveAPIView

from apps.kitchen.models import TypeFood
from apps.kitchen.serializers.type_food.typefood_serializer import TypeFoodSerializer


class RetrieveTypeFood(RetrieveAPIView):
    queryset = TypeFood.objects.all()
    serializer_class = TypeFoodSerializer
