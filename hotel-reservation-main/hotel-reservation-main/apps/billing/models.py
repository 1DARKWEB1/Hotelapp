# from django.db import models
#
# from apps.reservation.models import Reservation
# from user.models import User
#
#
# class HotelAccount(models.Model):
#     STATUS = [
#         ["BLOCKED", "BLOCKED"],
#         ["ACTIVE", "ACTIVE"],
#         ["BLOCKED_BY_BANK", "BLOCKED_BY_BANK"],
#     ]
#     name = models.CharField(max_length=255)
#     acc_number = models.CharField(max_length=20, null=False, unique=True)
#     MFO = models.CharField(max_length=6)
#     balance = models.PositiveBigIntegerField(default=0)
#     status = models.CharField(max_length=20, choices=STATUS)
#     currency = models.IntegerField(null=False, default=860)
#     is_active = models.BooleanField(default=False)
#
#     def __str__(self):
#         return self.name
#
#     class Meta:
#         db_table = 'hotel_account'
#
#
# class Monitoring(models.Model):
#     ACCOUNT_TYPE = [
#         ['PAN', 'PAN'],
#         ['ACCOUNT', 'ACCOUNT']
#     ]
#     receiver_account = models.CharField(max_length=20, null=False)
#     sender_account = models.CharField(max_length=20, null=False)
#     receiver_type = models.CharField(max_length=20, choices=ACCOUNT_TYPE)
#     sender_type = models.CharField(max_length=20, choices=ACCOUNT_TYPE)
#     amount = models.BigIntegerField(null=False)
#     currency = models.IntegerField(default=860)
#     commission = models.BigIntegerField(default=0)
#     reservation = models.OneToOneField(Reservation, null=False, on_delete=models.CASCADE)
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#
#     def __str__(self):
#         return self.receiver_account
#
#     class Meta:
#         db_table = 'monitoring'
#
#
# class FakeCard(models.Model):
#     STATUS = [
#         ["BLOCKED", "BLOCKED"],
#         ["ACTIVE", "ACTIVE"],
#         ["BLOCKED_BY_BANK", "BLOCKED_BY_BANK"],
#     ]
#     currency = models.IntegerField(default=860)
#     pan = models.CharField(max_length=16, null=False)
#     expiration = models.CharField(max_length=4, null=False)
#     CVC = models.CharField(max_length=3, null=True, blank=True)
#     balance = models.BigIntegerField(default=1000)
#     card_status = models.CharField(max_length=20, choices=STATUS)
#     is_active = models.BooleanField(default=False)
#
#     def __str__(self):
#         return self.pan
#
#     class Meta:
#         db_table = 'fake_card'
#
