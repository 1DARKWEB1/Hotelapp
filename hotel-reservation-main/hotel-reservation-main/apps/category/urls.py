from django.urls import path

from apps.category.api.create_category import CreateCategory
from apps.category.api.destroy_category import DestroyCategory
from apps.category.api.list_category import ListCategory
from apps.category.api.retrieve_category import RetrieveCategory
from apps.category.api.update_category import UpdateCategory

urlpatterns = [
    path('list/', ListCategory.as_view()),
    path('create/', CreateCategory.as_view()),

    path('retrieve/<int:pk>/', RetrieveCategory.as_view()),
    path('update/<int:pk>/', UpdateCategory.as_view()),
    path('destroy/<int:pk>/', DestroyCategory.as_view()),
]
