from rest_framework import serializers
from .models import Movie


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ('movieId',
                  'movieName',
                  'movieGenre',
                  'movieDescription',
                  'moviePoster')