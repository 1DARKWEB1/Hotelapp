from django.urls import path, include

urlpatterns = [
    path('category/', include('apps.category.urls')),
    path('feedback/', include('apps.feedback.urls')),
    path('gallery/', include('apps.gallery.urls')),
    path('type-food/', include('apps.kitchen.urls.typefood_urls')),
    path('food/', include('apps.kitchen.urls.food_urls')),
    path('service/', include('apps.service.urls')),
    path('type-room/', include('apps.type_room.urls')),
    path('room/', include('apps.room.urls')),
    path('reservation/', include('apps.reservation.urls')),
    path('event/', include('apps.event.urls')),
    path('user/', include('user.urls')),
]
