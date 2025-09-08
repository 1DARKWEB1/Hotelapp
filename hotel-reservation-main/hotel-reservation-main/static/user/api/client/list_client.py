from django.db.models import Q
from rest_framework.generics import ListAPIView

from user.models import User
from user.serializers.client_serializer import ClientSerializer


class ListClient(ListAPIView):
    queryset = User.objects.filter(Q(is_staff=False) & Q(is_superuser=False))
    serializer_class = ClientSerializer
    search_fields = [
        'first_name',
        'last_name',
        'email',
        'phone',
    ]
