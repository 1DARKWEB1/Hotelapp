from django.db.models import Q
from rest_framework.generics import UpdateAPIView

from user.models import User
from user.serializers.client_serializer import ClientSerializer


class UpdateClient(UpdateAPIView):
    queryset = User.objects.filter(Q(is_staff=False) & Q(is_superuser=False))
    serializer_class = ClientSerializer

