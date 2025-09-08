import django_filters
from rest_framework.generics import ListAPIView

from apps.gallery.models import Gallery
from apps.gallery.serilaizers.gallery_serializer import GallerySerializer


class ListGallery(ListAPIView):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ('category',)
