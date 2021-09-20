# Generated by Django 3.1.3 on 2021-09-19 08:05

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0003_activity_audiofile_experiment_response_task'),
    ]

    operations = [
        migrations.CreateModel(
            name='Activities',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.JSONField()),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Responses',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('complete', models.BooleanField(default=False)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('started', models.DateTimeField(blank=True, null=True)),
                ('completed', models.DateTimeField(blank=True, null=True)),
                ('data', models.JSONField()),
            ],
        ),
        migrations.CreateModel(
            name='Tasks',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(max_length=255)),
                ('attempts', models.IntegerField(default=3)),
                ('config', models.JSONField()),
            ],
        ),
        migrations.RemoveField(
            model_name='activity',
            name='user',
        ),
        migrations.DeleteModel(
            name='AudioFile',
        ),
        migrations.RemoveField(
            model_name='response',
            name='experiment',
        ),
        migrations.RemoveField(
            model_name='response',
            name='user',
        ),
        migrations.RemoveField(
            model_name='task',
            name='experiment',
        ),
        migrations.RemoveField(
            model_name='todo',
            name='user',
        ),
        migrations.AlterField(
            model_name='experiment',
            name='code',
            field=models.UUIDField(default=uuid.uuid4, editable=False, unique=True),
        ),
        migrations.DeleteModel(
            name='Activity',
        ),
        migrations.DeleteModel(
            name='Response',
        ),
        migrations.DeleteModel(
            name='Task',
        ),
        migrations.DeleteModel(
            name='Todo',
        ),
        migrations.AddField(
            model_name='tasks',
            name='experiment',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='api.experiment'),
        ),
        migrations.AddField(
            model_name='responses',
            name='experiment',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='api.experiment'),
        ),
        migrations.AddField(
            model_name='responses',
            name='task',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='api.tasks'),
        ),
        migrations.AddField(
            model_name='responses',
            name='user',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]