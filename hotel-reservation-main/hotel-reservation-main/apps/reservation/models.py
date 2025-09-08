from django.db import models

from apps.room.models import Room
from apps.service.models import Service
from user.models import User


class Reservation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    room = models.ManyToManyField(Room)
    service = models.ManyToManyField(Service)
    from_time = models.DateTimeField()
    to_time = models.DateTimeField()
    detail = models.CharField(max_length=600)
    price = models.FloatField()
    paid = models.BooleanField(default=False, blank=True, null=True)

    def __str__(self):
        return '{}'.format(self.id)

    class Meta:
        db_table = 'reservation'
        ordering = ['id']
