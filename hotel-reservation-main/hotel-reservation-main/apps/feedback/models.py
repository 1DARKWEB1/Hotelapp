from django.db import models


class FeedBack(models.Model):
    message = models.CharField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.message

    class Meta:
        db_table = 'feedback'
        ordering = ['created_at']
