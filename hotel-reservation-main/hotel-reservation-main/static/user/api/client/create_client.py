from django.db.models import Q
from rest_framework import status
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response

from user.models import User
from user.serializers.client_serializer import ClientSerializer


class CreateClient(CreateAPIView):
    queryset = User.objects.filter(Q(is_staff=False) & Q(is_superuser=False))
    serializer_class = ClientSerializer

