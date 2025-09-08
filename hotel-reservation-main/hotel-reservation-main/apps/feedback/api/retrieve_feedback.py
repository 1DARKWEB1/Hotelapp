from rest_framework.generics import RetrieveAPIView

from apps.feedback.models import FeedBack
from apps.feedback.serializers.feedback_serializer import FeedBackSerializer


class RetrieveFeedBack(RetrieveAPIView):
    queryset = FeedBack.objects.all()
    serializer_class = FeedBackSerializer
