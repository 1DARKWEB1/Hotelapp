from django.db import models


class Service(models.Model):
    name = models.CharField(max_length=50)
    info = models.CharField(max_length=500)
    image = models.ImageField(upload_to='services/')
    price = models.FloatField(default=0)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'service'
        ordering = ['name']
