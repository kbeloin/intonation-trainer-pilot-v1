# Generated by Django 3.1.3 on 2021-09-22 05:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0016_auto_20210922_0524'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tasks',
            name='show_example',
        ),
        migrations.RemoveField(
            model_name='tasks',
            name='show_instructions',
        ),
    ]
