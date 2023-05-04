from django.db import models

# Create your models here.
class Event(models.Model):
    title = models.CharField(max_length=100, null=False, blank=False, verbose_name='Titulo')
    description = models.TextField(max_length=255, null=False, blank=False, verbose_name='Descripcion')
    date = models.DateField(null=False, blank=False, verbose_name='Fecha')
    hour = models.TimeField(null=False, blank=False, verbose_name='Hora')
    location = models.CharField(max_length=100, null=False, blank=False, verbose_name='Lugar')
    date_created = models.DateTimeField(auto_now_add=True, verbose_name='Fecha y Hora Creacion')

def is_upcoming(self):
        """
        Returns True if the event is coming up in the future, False otherwise.
        """
        now = datetime.now()
        event_datetime = datetime.combine(self.date, self.time)
        return event_datetime > now