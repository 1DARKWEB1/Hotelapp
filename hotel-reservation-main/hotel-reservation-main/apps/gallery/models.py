from django.db import models

from apps.category.models import Category


class Gallery(models.Model):
    category = models.ForeignKey(Category, null=True, on_delete=models.SET_NULL)
    image = models.ImageField(upload_to='gallery/')

    class Meta:
        db_table = 'gallery'
        ordering = ['category']
