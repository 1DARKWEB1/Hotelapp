from rest_framework_simplejwt.views import TokenObtainPairView

from user.serializers.custom_toke_serializer import CustomTokenSerializer


class CustomToken(TokenObtainPairView):
    serializer_class = CustomTokenSerializer
