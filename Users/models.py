from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin, Group

# Create Custom User

class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        """
        Creates and saves a User with the given email and password.
        """
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        """
        Creates and saves a superuser with the given email and password.
        """
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, password, **extra_fields)


class CustomUser(AbstractBaseUser):

    FACULTY_CHOICES = (
        ('Ingenieria_sistemas', 'Ingenieria Sistemas'),
        ('Ingenieria_civil', 'Ingenieria Civil'),
        ('Derecho', 'Derecho'),
        ('Psicologia', 'Psicologia'),
        ('Veterinaria', 'Medicina Veterinaria y Zootecnia'),
        ('Contaduria_publica', 'Contaduría Publica'),
        ('Enfermeria_profesional', 'Enfermeria Profesional'),
        ('Medicina', 'Medicina'),
        ('Odontología', 'Odontologia'),
    )

    email = models.EmailField(unique=True, verbose_name='Correo CampusUcc')
    first_name = models.CharField(max_length=30, verbose_name='Nombre')
    last_name = models.CharField(max_length=30, verbose_name='Apellido')
    faculty = models.CharField(max_length=50, verbose_name='Facultad', choices=FACULTY_CHOICES)
    phone_number = models.CharField(max_length=10, verbose_name='Numero de Telefono')
    idU = models.CharField(max_length=6, verbose_name='id_Universidad')
    
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    date_joined = models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    list_display = ('email', 'first_name', 'last_name', 'is_staff')
    search_fields = ('email', 'first_name', 'last_name')
    ordering = ('email',)

    groups = None
    user_permissions = None

    def __str__(self):
        return self.email

    def __str__(self):
        return self.first_name

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    objects = CustomUserManager()