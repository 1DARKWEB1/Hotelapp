from rest_framework.generics import RetrieveAPIView

from apps.gallery.models import Gallery
from apps.gallery.serilaizers.gallery_serializer import GallerySerializer


class RetrieveGallery(RetrieveAPIView):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer
