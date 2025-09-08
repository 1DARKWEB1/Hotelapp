from django.urls import path

from user.api.client.create_client import CreateClient
from user.api.client.destroy_client import DestroyClient
from user.api.client.list_client import ListClient
from user.api.client.retrieve_client import RetrieveClient
from user.api.client.update_client import UpdateClient
from user.api.staff.create_staff import CreateStaff
from user.api.staff.destroy import DestroyStaff
from user.api.staff.list_staff import ListStaff
from user.api.staff.retirieve_staff import RetrieveStaff
from user.api.staff.update_staff import UpdateStaff

urlpatterns = [
    # -------------CLIENT paths------------------------------
    path('client/list/', ListClient.as_view()),
    path('client/create/', CreateClient.as_view()),

    path('client/retrieve/<str:pk>/', RetrieveClient.as_view()),
    path('client/update/<str:pk>/', UpdateClient.as_view()),
    path('client/destroy/<str:pk>/', DestroyClient.as_view()),
    # -------------------------------------------------------


    # -------------STAFF paths-------------------------------
    path('staff/list/', ListStaff.as_view()),
    path('staff/create/', CreateStaff.as_view()),

    path('staff/retrieve/<str:pk>/', RetrieveStaff.as_view()),
    path('staff/update/<str:pk>/', UpdateStaff.as_view()),
    path('staff/destroy/<str:pk>/', DestroyStaff.as_view()),
    # -------------------------------------------------------
]
