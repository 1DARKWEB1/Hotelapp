from rest_framework.generics import RetrieveDestroyAPIView

from apps.category.models import Category
from apps.category.serializers.category_serializer import CategorySerializer


class DestroyCategory(RetrieveDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
