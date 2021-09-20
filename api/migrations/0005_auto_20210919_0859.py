# Generated by Django 3.1.3 on 2021-09-19 08:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20210919_0805'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='experiment',
            name='code',
        ),
        migrations.AddField(
            model_name='activities',
            name='response',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='api.responses'),
        ),
    ]
