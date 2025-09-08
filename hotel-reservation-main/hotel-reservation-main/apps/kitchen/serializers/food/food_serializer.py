from rest_framework import serializers

from apps.kitchen.models import Food


class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food
        fields = [
            'id',
            'type',
            'name',
            'image',
            'price',
            'exist'
        ]
