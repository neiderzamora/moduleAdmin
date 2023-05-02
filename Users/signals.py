from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import Group
from .models import CustomUser

def assign_user_to_group(sender, instance, created, **kwargs):
    if created:
        estudiantes_group= Group.objects.get_or_create(name='Estudiantes')
        if instance.groups.exists():
            instance.groups.add(estudiantes_group)
        else:
            instance.groups.set([estudiantes_group])