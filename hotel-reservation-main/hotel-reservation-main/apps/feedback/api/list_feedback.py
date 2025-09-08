from rest_framework.generics import ListAPIView

from apps.feedback.models import FeedBack
from apps.feedback.serializers.feedback_serializer import FeedBackSerializer


class ListFeedBack(ListAPIView):
    queryset = FeedBack.objects.all()
    serializer_class = FeedBackSerializer
