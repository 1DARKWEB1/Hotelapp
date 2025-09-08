from django.contrib.auth.models import PermissionsMixin, AbstractUser
from django.db import models

from user.manager import NewUserManager


class User(AbstractUser):
    phone = models.CharField(max_length=15)

    objects = NewUserManager()
