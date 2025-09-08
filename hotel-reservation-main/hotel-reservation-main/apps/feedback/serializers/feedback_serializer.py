from rest_framework.serializers import ModelSerializer

from apps.feedback.models import FeedBack


class FeedBackSerializer(ModelSerializer):
    class Meta:
        model = FeedBack
        fields = [
            'id',
            'message',
            'created_at'
        ]
