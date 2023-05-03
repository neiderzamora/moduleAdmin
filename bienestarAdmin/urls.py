from django.contrib import admin
from rest_framework.documentation import include_docs_urls
from django.urls import include, path

from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('Users.urls')),
    path('', TemplateView.as_view(template_name='index.html')),
    path('docs/', include_docs_urls(title='API_UCC'))
]