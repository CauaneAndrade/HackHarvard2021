from app.models import UserPlataform, SkillLevel
from rest_framework import serializers
from rest_framework.validators import UniqueValidator


class SkillLevelSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SkillLevel
        fields = ('skill', 'level')


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    skill_level = SkillLevelSerializer(many=True)
    email = serializers.CharField(validators=[UniqueValidator(queryset=UserPlataform.objects.all())])

    def create(self, validated_data):
        user = UserPlataform.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
            email=validated_data['email'],
            school=validated_data['school'],
            user_type=validated_data['user_type'],
        )
        skill_level = validated_data['skill_level']
        slo = SkillLevel.objects
        user.skill_level.set([SkillLevel.objects.create(level=skill['level'], skill=skill['skill']) for skill in skill_level])
        return user

    class Meta:
        model = UserPlataform
        fields = ['username', 'password', 'email', 'school', 'user_type', 'skill_level']