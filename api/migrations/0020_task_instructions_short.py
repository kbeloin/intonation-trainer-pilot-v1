# Generated by Django 3.1.3 on 2021-09-22 06:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0019_auto_20210922_0553'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='instructions_short',
            field=models.TextField(blank=True, null=True),
        ),
    ]
