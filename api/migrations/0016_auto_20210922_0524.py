# Generated by Django 3.1.3 on 2021-09-22 05:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0015_remove_tasks_task'),
    ]

    operations = [
        migrations.AddField(
            model_name='tasks',
            name='example_sentence',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='api.sentence'),
        ),
        migrations.AddField(
            model_name='tasks',
            name='example_text',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='tasks',
            name='instructions_text',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='tasks',
            name='show_example',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='tasks',
            name='show_instructions',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='trial',
            name='task',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='api.tasks'),
        ),
    ]
