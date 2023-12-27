from django.http.response import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http.response import JsonResponse
from .models import Movie
from .serializers import MovieSerializer


class MovieView(APIView):

    def post(self, request):
        data = request.data
        serializer = MovieSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Movie added successfully", safe=False)
        return JsonResponse("Failed to add Movie", safe=False)

    def get_movie(self, pk):
        try:
            movie = Movie.objects.get(movieId=pk)
            return movie
        except Movie.DoesNotExist:
            raise Http404

    def get(self, request, pk=None):
        if pk:
            data = self.get_movie(pk)
            serializer = MovieSerializer(data)
        else:
            data = Movie.objects.all()
            serializer = MovieSerializer(data, many=True)
        return Response(serializer.data)

    def put(self, request, pk=None):
        movie_to_update = Movie.objects.get(movieId=pk)
        serializer = MovieSerializer(instance=movie_to_update, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Movie updated successfully", safe=False)
        return JsonResponse("Failed to update Movie")
    
    def delete(self, request, pk):
        movie_to_delete = Movie.objects.get(movieId=pk)
        movie_to_delete.delete()
        return JsonResponse("Movie deleted successfully", safe=False)