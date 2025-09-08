from rest_framework.generics import CreateAPIView

from apps.feedback.models import FeedBack
from apps.feedback.serializers.feedback_serializer import FeedBackSerializer


class CreateFeedBack(CreateAPIView):
    queryset = FeedBack.objects.all()
    serializer_class = FeedBackSerializer
