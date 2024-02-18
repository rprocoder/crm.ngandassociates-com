from django.db import models
from django.contrib.auth.models import PermissionsMixin
# Create your models here.
from django.db import models
from django.contrib.auth.models import BaseUserManager,AbstractBaseUser

#  Custom User Manager
class UserManager(BaseUserManager):
  def create_user(self, email, name, tc, password=None, password2=None):
      if not email:
          raise ValueError('User must have an email address')

      user = self.model(
          email=self.normalize_email(email),
          name=name,
          tc=tc,
      )

      user.set_password(password)
      user.save(using=self._db)
      return user

  def create_superuser(self, email, name, tc, password=None):
      user = self.create_user(
          email,
          password=password,
          name=name,
          tc=tc,
      )
      user.is_admin = True
      user.is_superuser=True
      user.save(using=self._db)
      return user

#  Custom User Model
class User(AbstractBaseUser, PermissionsMixin):
  email = models.EmailField(verbose_name='Email',max_length=255,unique=True,)
  name = models.CharField(max_length=20)
  phone=models.CharField(max_length=12, unique=True, default=None, blank=True, null=True)
  roletype=models.CharField(max_length=100,default=None, blank=True, null=True)
  tc = models.BooleanField()
  is_active = models.BooleanField(default=True)
  is_admin = models.BooleanField(default=False)
  is_superuser=models.BooleanField(default=False)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True) 

  objects = UserManager()

  USERNAME_FIELD = 'email'
  REQUIRED_FIELDS = ['name', 'tc']

  def __str__(self):
      return str(self.id)+" "+self.email+" "+self.name+" "+str(self.roletype)

  def has_perm(self, perm, obj=None):
      "Does the user have a specific permission?"
      return self.is_admin

  def has_module_perms(self, app_label):
      "Does the user have permissions to view the app `app_label`?"
      return True

  @property
  def is_staff(self):
      "Is the user a member of staff?"
      return self.is_admin



