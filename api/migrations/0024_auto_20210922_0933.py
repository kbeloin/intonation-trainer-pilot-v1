# Generated by Django 3.1.3 on 2021-09-22 09:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0023_auto_20210922_0856'),
    ]

    operations = [
        migrations.RenameField(
            model_name='trial',
            old_name='target_field',
            new_name='targetfield',
        ),
        migrations.RenameField(
            model_name='trial',
            old_name='target_sentence',
            new_name='targetsentence',
        ),
    ]
