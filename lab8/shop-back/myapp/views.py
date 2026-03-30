from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action
# I didn't created postman file, because my work works in browsable API, so it's easy to check without postman
class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    
class CategoryViewSet(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    
    @action(detail=True, methods=['get'])
    def products(self, request, pk=None):
        category = self.get_object()
        products = category.products.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)