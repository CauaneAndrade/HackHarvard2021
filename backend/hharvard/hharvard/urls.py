from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from rest_framework_jwt.views import obtain_jwt_token
from app import viewsets


router = routers.DefaultRouter()
router.register(r'users', viewsets.UserViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls')),
    path('api-token-auth/', obtain_jwt_token, name="api-token-auth"),
]
