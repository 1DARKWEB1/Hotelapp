from rest_framework.generics import CreateAPIView

from apps.service.models import Service
from apps.service.serializers.service_serializer import ServiceSerializer


class CreateService(CreateAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
