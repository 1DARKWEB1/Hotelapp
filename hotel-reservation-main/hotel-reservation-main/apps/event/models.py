from django.db import models


class Event(models.Model):
    name = models.CharField(max_length=100)
    info = models.CharField(max_length=500)
    where = models.CharField(max_length=50)
    when = models.DateTimeField()
    image = models.ImageField(upload_to='events/')

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'event'
        ordering = ['-when']
