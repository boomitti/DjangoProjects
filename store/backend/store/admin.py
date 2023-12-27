from django.contrib import admin
from .models import UserProfile, Store, Product, MarketPage

# Register your models here.
models_list = [UserProfile, Store, Product, MarketPage]
admin.site.register(models_list)