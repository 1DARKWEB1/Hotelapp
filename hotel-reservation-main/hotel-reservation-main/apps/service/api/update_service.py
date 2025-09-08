from rest_framework.generics import RetrieveUpdateAPIView

from apps.service.models import Service
from apps.service.serializers.service_serializer import ServiceSerializer


class UpdateService(RetrieveUpdateAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
