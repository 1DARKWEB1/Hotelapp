from django.urls import path

from apps.gallery.api.create_gallery import CreateGallery
from apps.gallery.api.destroy_gallery import DestroyGallery
from apps.gallery.api.list_gallery import ListGallery
from apps.gallery.api.retrieve_gallery import RetrieveGallery

urlpatterns = [
    path('list/', ListGallery.as_view()),
    path('create/', CreateGallery.as_view()),

    path('retrieve/<int:pk>/', RetrieveGallery.as_view()),
    path('destroy/<int:pk>/', DestroyGallery.as_view()),
]
