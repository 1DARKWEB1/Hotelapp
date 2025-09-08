from django.db.models import Q
from rest_framework.generics import CreateAPIView

from user.models import User
from user.serializers.staff_serializer import StaffSerializer


class CreateStaff(CreateAPIView):
    queryset = User.objects.filter(Q(is_staff=True) & Q(is_superuser=False))
    serializer_class = StaffSerializer
