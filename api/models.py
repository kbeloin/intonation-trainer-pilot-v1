from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()



class Todo(models.Model):
    user = models.ForeignKey(User, unique=True, on_delete=models.CASCADE, null=True, blank=True)
    title = models.CharField(max_length=120)
    description = models.TextField()
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.title