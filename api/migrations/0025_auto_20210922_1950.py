# Generated by Django 3.1.3 on 2021-09-22 19:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0024_auto_20210922_0933'),
    ]

    operations = [
        migrations.RenameField(
            model_name='trial',
            old_name='targetfield',
            new_name='target_field',
        ),
        migrations.RenameField(
            model_name='trial',
            old_name='targetsentence',
            new_name='target_sentence',
        ),
    ]
