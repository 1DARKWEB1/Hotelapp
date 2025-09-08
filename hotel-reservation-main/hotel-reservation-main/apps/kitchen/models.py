from django.db import models


class TypeFood(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'typefood'
        ordering = ['name']


class Food(models.Model):
    type = models.ForeignKey(TypeFood, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='foods/', null=True, blank=True)
    price = models.FloatField()
    exist = models.BooleanField(default=False)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'food'
        ordering = ['name']
