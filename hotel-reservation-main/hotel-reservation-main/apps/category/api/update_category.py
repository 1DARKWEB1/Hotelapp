from rest_framework.generics import RetrieveUpdateAPIView

from apps.category.models import Category
from apps.category.serializers.category_serializer import CategorySerializer


class UpdateCategory(RetrieveUpdateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
