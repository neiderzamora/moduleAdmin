from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import CustomUsersList, CustomUserDetail, CustomUserLogin, CustomUserPost, CustomUserLogout

urlpatterns = [
    path('register_user/', CustomUserPost.as_view(), name='user-list'),
    path('users/', CustomUsersList.as_view(), name='user-list'),
    path('users/<int:pk>/', CustomUserDetail.as_view(), name='user-detail'),
    path('login/', CustomUserLogin.as_view(), name='user-login'),
    path('logout/', CustomUserLogout.as_view(), name='user-logout'),
    path('token/', TokenObtainPairView.as_view(), name='token-obtain-pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token-refresh'),
]
