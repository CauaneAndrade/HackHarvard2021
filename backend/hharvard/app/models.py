from django.contrib.auth.models import User
from django.db import models
from django.utils.translation import gettext_lazy as _


class Skill(models.Model):
    class Level(models.TextChoices):
        A = 'Beginner', _('Beginner')
        B = 'Intermediate', _('Intermediate')
        C = 'Expert', _('Expert')

    description = models.CharField(max_length=30)
    
    def __str__(self, ):
        return self.description
    
class SkillLevel(models.Model):
    class Level(models.TextChoices):
        A = 'Beginner', _('Beginner')
        B = 'Intermediate', _('Intermediate')
        C = 'Expert', _('Expert')

    skill = models.ForeignKey(
        Skill, on_delete=models.CASCADE
    )
    level = models.CharField(
        max_length=15,
        choices=Level.choices
    )
    
    def __str__(self, ):
        return f'{self.skill}{self.level}'


class UserPlataform(User):
    class UserType(models.TextChoices):
        TUTOR = 'Tutor', _('Tutor')
        STUDENT = 'Student', _('Student')

    school = models.CharField(max_length=30)
    user_type = models.CharField(
        max_length=10,
        choices=UserType.choices
    )
    skill_level = models.ManyToManyField(SkillLevel)
    
    def __str__(self, ):
        return self.username

