from rest_framework.generics import RetrieveDestroyAPIView

from apps.kitchen.models import TypeFood
from apps.kitchen.serializers.type_food.typefood_serializer import TypeFoodSerializer


class DestroyTypeFood(RetrieveDestroyAPIView):
    queryset = TypeFood.objects.all()
    serializer_class = TypeFoodSerializer
