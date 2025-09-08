from rest_framework import serializers

from apps.kitchen.models import TypeFood


class TypeFoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = TypeFood
        fields = [
            'id',
            'name'
        ]
