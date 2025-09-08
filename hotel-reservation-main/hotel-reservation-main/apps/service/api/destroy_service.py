from rest_framework.generics import RetrieveDestroyAPIView

from apps.service.models import Service
from apps.service.serializers.service_serializer import ServiceSerializer


class DestroyService(RetrieveDestroyAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
