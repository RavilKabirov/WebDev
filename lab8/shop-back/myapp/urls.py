from rest_framework.routers import DefaultRouter
from .views import ProductViewSet
from .views import CategoryViewSet
router = DefaultRouter()
router.register(r'products', ProductViewSet)
router.register(r'categories', CategoryViewSet)
urlpatterns = router.urls