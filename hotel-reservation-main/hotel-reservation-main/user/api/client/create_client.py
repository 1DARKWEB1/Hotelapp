from django.db.models import Q
from rest_framework import status
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.tokens import AccessToken

from user.models import User
from user.serializers.client_create_serializer import ClientCreateSerializer
from user.serializers.custom_toke_serializer import CustomTokenSerializer


class CreateClient(CreateAPIView):
    queryset = User.objects.filter(Q(is_staff=False) & Q(is_superuser=False))
    serializer_class = ClientCreateSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        data = {
            "access": str(CustomTokenSerializer().get_token(User.objects.get(id=serializer.data["id"]))),
            "refresh": str(AccessToken().for_user(User.objects.get(id=serializer.data["id"]))),
        }

        return Response(data, status=status.HTTP_201_CREATED)

