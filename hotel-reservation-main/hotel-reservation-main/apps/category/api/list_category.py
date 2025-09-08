from rest_framework.generics import ListAPIView

from apps.category.models import Category
from apps.category.serializers.category_serializer import CategorySerializer


class ListCategory(ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
