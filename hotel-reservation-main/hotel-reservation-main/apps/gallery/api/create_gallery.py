from rest_framework.generics import CreateAPIView

from apps.gallery.models import Gallery
from apps.gallery.serilaizers.gallery_serializer import GallerySerializer


class CreateGallery(CreateAPIView):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer
