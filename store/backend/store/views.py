from django.http.response import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http.response import JsonResponse
from .models import Product
from .serializers import ProductSerializer


class ProductView(APIView):

    def post(self, request):
        data = request.data
        serializer = ProductSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Product Added Successfully", safe=False)
        return JsonResponse("Failed to Add Product", safe=False)
    
    def get_product(self, pk):
        try:
            product = Product.objects.get(name='testproduct')
            print(product)
            return product
        except Product.DoesNotExist:
            raise Http404

    def get(self, request, pk=None):
        print('test')
        if pk:
            print('ifpk:')
            data = self.get_product(pk)
            serializer = ProductSerializer(data)
        else:
            print('else:')
            data = Product.objects.all()
            serializer = ProductSerializer(data, many=True)
        return Response(serializer.data)