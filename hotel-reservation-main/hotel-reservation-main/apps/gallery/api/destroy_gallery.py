from rest_framework.generics import RetrieveDestroyAPIView

from apps.gallery.models import Gallery
from apps.gallery.serilaizers.gallery_serializer import GallerySerializer


class DestroyGallery(RetrieveDestroyAPIView):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer
