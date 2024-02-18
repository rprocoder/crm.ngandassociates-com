
from rest_framework import serializers

from .models import *

class PaymentSerializer(serializers.ModelSerializer):
    order_date = serializers.DateTimeField(format="%d %B %Y %I:%M %p")

    class Meta:
        model = Payment
        fields = '__all__'
        depth = 2
