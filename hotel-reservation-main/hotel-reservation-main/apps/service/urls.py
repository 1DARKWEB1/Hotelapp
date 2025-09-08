from django.urls import path

from apps.service.api.create_service import CreateService
from apps.service.api.destroy_service import DestroyService
from apps.service.api.list_service import ListService
from apps.service.api.retrieve_service import RetrieveService
from apps.service.api.update_service import UpdateService

urlpatterns = [
    path('list/', ListService.as_view()),
    path('create/', CreateService.as_view()),

    path('retrieve/<int:pk>/', RetrieveService.as_view()),
    path('update/<int:pk>/', UpdateService.as_view()),
    path('destroy/<int:pk>/', DestroyService.as_view()),
]
