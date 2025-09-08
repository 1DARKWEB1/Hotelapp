from rest_framework.generics import RetrieveAPIView

from apps.service.models import Service
from apps.service.serializers.service_serializer import ServiceSerializer


class RetrieveService(RetrieveAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
