from rest_framework.generics import ListAPIView

from apps.service.models import Service
from apps.service.serializers.service_serializer import ServiceSerializer


class ListService(ListAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
    search_fields = (
        'name',
        'info',
    )
