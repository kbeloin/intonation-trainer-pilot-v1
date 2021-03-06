# Generated by Django 3.1.3 on 2021-09-20 11:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_auto_20210919_0902'),
    ]

    operations = [
        migrations.AlterField(
            model_name='activities',
            name='type',
            field=models.JSONField(null=True),
        ),
        migrations.AlterField(
            model_name='experiment',
            name='code',
            field=models.CharField(default='ABCDEF', max_length=255, unique=True),
        ),
        migrations.AlterField(
            model_name='responses',
            name='data',
            field=models.JSONField(null=True),
        ),
    ]
