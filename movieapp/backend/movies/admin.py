from django.contrib import admin
from .models import Movie

# Register your models here.
models_list = [Movie]
admin.site.register(models_list)