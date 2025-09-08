from rest_framework.generics import RetrieveAPIView

from apps.category.models import Category
from apps.category.serializers.category_serializer import CategorySerializer


class RetrieveCategory(RetrieveAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
