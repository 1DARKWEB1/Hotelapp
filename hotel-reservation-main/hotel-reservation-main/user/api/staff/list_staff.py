from django.db.models import Q
from rest_framework.generics import ListAPIView

from user.models import User
from user.serializers.staff_serializer import StaffSerializer


class ListStaff(ListAPIView):
    queryset = User.objects.filter(Q(is_staff=True) & Q(is_superuser=False))
    serializer_class = StaffSerializer
    search_fields = [
        'first_name',
        'last_name',
        'email',
        'phone',
        'date_joined',
    ]
