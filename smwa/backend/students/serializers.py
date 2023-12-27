from rest_framework import serializers
from .models import Student


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('studentId',
                  'First_Name',
                  'Last_Name',
                  'Registration_No',
                  'Email',
                  'Course')