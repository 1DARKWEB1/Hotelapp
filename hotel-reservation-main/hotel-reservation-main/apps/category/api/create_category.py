from rest_framework.generics import CreateAPIView

from apps.category.models import Category
from apps.category.serializers.category_serializer import CategorySerializer


class CreateCategory(CreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
