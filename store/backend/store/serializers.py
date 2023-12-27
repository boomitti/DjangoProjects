from rest_framework import serializers
from .models import Product


class ProductSerializer(serializers.ModelSerializer, context={"request": request}):
    class Meta:
        model = Product
        fields = ('store',
                  'name',
                  'price',
                  'image')