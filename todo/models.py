from django.db import models

# Create your models here.

class Todo(models.Model):
    service = models.CharField(max_length=120)
    link = models.TextField()

    def _str_(self):
        return self.title