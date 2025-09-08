from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=70)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'category'
        ordering = ['name']
