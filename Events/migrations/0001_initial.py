
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100, verbose_name='Titulo')),
                ('description', models.TextField(max_length=255, verbose_name='Descripcion')),
                ('date', models.DateField(verbose_name='Fecha')),
                ('hour', models.TimeField(verbose_name='Hora')),
                ('location', models.CharField(max_length=100, verbose_name='Lugar')),
                ('date_created', models.DateTimeField(auto_now_add=True, verbose_name='Fecha y Hora Creacion')),
            ],
        ),
    ]