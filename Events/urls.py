from django.urls import path
from .views import *

urlpatterns = [
    path('events/', EventList.as_view(), name='event-list'),
    path('event/', EventPost.as_view(), name='event-create'),
    path('event/<int:pk>/', EventDetail.as_view(), name='event-detail'),
]
