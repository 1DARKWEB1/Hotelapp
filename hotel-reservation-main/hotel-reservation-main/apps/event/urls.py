from django.urls import path

from apps.event.api.create_event import CreateEvent
from apps.event.api.destroy_event import DestroyEvent
from apps.event.api.list_event import ListEvent
from apps.event.api.retrieve_event import RetrieveEvent
from apps.event.api.update_event import UpdateEvent

urlpatterns = [
    path('list/', ListEvent.as_view()),
    path('create/', CreateEvent.as_view()),

    path('retrieve/<str:pk>/', RetrieveEvent.as_view()),
    path('update/<str:pk>/', UpdateEvent.as_view()),
    path('destroy/<str:pk>/', DestroyEvent.as_view()),
]