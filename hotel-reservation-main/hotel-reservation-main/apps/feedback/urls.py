from django.urls import path

from apps.feedback.api.create_feedback import CreateFeedBack
from apps.feedback.api.list_feedback import ListFeedBack
from apps.feedback.api.retrieve_feedback import RetrieveFeedBack

urlpatterns = [
    path('list/', ListFeedBack.as_view()),
    path('create/', CreateFeedBack.as_view()),

    path('retrieve/<int:pk>/', RetrieveFeedBack.as_view()),
]