from django.urls import path, include
from .views import fbv, cbv, generics, mixins

fbv_patterns = [
    path('fbv/products/', fbv.productsList, name='fbv-list'),
    path('fbv/products/<int:pk>/', fbv.product_detail, name='fbv-detail'),
]


apiview_patterns = [
    path('apiview/products/', cbv.ProductListAPIView.as_view(), name='apiview-list'),
    path('apiview/products/<int:pk>/', cbv.ProductDetailAPIView.as_view(), name='apiview-detail'),
]

generic_patterns = [
    path('generic/products/', generics.ProductListAPIView.as_view(), name='generic-list'),
    path('generic/products/<int:product_id>/', generics.ProductDetailAPIView.as_view(), name='generic-detail'),
    path('generic/categories/<int:category_id>/products/', generics.CategoryProductsAPIView.as_view(), name='category-products'),
]
mixins_patterns = [
    path('mixins/products/', mixins.ProductListAPIView.as_view(), name='mixins-list'),
    path('mixins/products/<int:product_id>/', mixins.productDetailAPIView.as_view(), name='mixins-detail'),
]

urlpatterns = [
    path('', include(fbv_patterns)),
    path('', include(apiview_patterns)),
    path('', include(generic_patterns)),
    path('', include(mixins_patterns)),
]
