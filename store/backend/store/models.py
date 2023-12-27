from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    # Add any additional user-related fields if needed

    def __str__(self):
        return self.user

class Store(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    store_name = models.CharField(max_length=255)
    # Add other store-related fields

    def __str__(self):
        return self.store_name

class Product(models.Model):
    store = models.ForeignKey(Store, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='images/', default='images/placeholder.jpg')
    # Add other product-related fields

    def __str__(self):
        return self.name

class MarketPage(models.Model):
    products = models.ManyToManyField(Product)
    # Add any other fields you may need for the market page

    def __str__(self):
        return self.products

