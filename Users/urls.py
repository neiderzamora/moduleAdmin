"""
from django.urls import path
from .views import CustomUserList, CustomUserDetail, CustomUserLogin, CustomUserLogout

urlpatterns = [
    path('users/', CustomUserList.as_view(), name='user_list'),
    path('users/<int:pk>/', CustomUserDetail.as_view(), name='user_detail'),
    path('login/', CustomUserLogin.as_view(), name='user_login'),
    path('logout/', CustomUserLogout.as_view(), name='user_logout'),
]
"""

from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import CustomUserList, CustomUserDetail, CustomUserLogin, CustomUserLogout

urlpatterns = [
    path('users/', CustomUserList.as_view(), name='user-list'),
    path('users/<int:pk>/', CustomUserDetail.as_view(), name='user-detail'),
    path('login/', CustomUserLogin.as_view(), name='user-login'),
    path('logout/', CustomUserLogout.as_view(), name='user-logout'),
    path('token/', TokenObtainPairView.as_view(), name='token-obtain-pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token-refresh'),
]
