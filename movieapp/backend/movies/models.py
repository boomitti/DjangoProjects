from django.db import models

# Create your models here.
class Movie(models.Model) :
    movieId = models.AutoField(primary_key=True)
    movieName = models.CharField(max_length=100)
    movieGenre = models.CharField(max_length=100)
    movieDescription = models.CharField(max_length=100)
    moviePoster = models.URLField()