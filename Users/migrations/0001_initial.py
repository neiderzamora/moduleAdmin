# Generated by Django 4.2 on 2023-04-26 16:21

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CustomUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('email', models.EmailField(max_length=254, unique=True, verbose_name='Correo CampusUcc')),
                ('first_name', models.CharField(max_length=30, verbose_name='Nombre')),
                ('last_name', models.CharField(max_length=30, verbose_name='Apellido')),
                ('faculty', models.CharField(choices=[('Ingenieria_sistemas', 'Ingenieria Sistemas'), ('Ingenieria_civil', 'Ingenieria Civil'), ('Derecho', 'Derecho'), ('Psicologia', 'Psicologia'), ('Veterinaria', 'Medicina Veterinaria y Zootecnia'), ('Contaduria_publica', 'Contaduría Publica'), ('Enfermeria_profesional', 'Enfermeria Profesional'), ('Medicina', 'Medicina'), ('Odontología', 'Odontologia')], max_length=50, verbose_name='Facultad')),
                ('phone_number', models.CharField(max_length=10, verbose_name='Numero de Telefono')),
                ('idU', models.CharField(max_length=6, verbose_name='id_Universidad')),
                ('is_active', models.BooleanField(default=True)),
                ('is_staff', models.BooleanField(default=False)),
                ('is_superuser', models.BooleanField(default=False)),
                ('date_joined', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
