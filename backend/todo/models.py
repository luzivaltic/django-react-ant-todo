from django.db import models

# Create your models here.

class Task(models.Model):
    name = models.CharField(max_length=255)
    addition_info = models.CharField(max_length=255, blank=True)
    completed = models.BooleanField()

    def __str__(self):
        return self.name