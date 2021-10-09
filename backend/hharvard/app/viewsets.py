from app.models import UserPlataform
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = UserPlataform.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]
    http_method_names = ['post', 'put']
