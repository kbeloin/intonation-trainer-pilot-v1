# Generated by Django 3.1.3 on 2021-09-22 02:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_remove_responses_data'),
    ]

    operations = [
        migrations.AddField(
            model_name='responses',
            name='notes',
            field=models.TextField(blank=True, null=True),
        ),
    ]
