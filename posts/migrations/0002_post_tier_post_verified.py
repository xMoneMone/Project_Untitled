# Generated by Django 4.2.1 on 2023-05-07 21:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='tier',
            field=models.CharField(choices=[('1', '1'), ('2', '2'), ('3', '3'), ('4', '4'), ('5', '5'), ('6', '6'), ('7', '7'), ('8', '8'), ('9', '9'), ('10', '10')], default=1, max_length=20),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='post',
            name='verified',
            field=models.BooleanField(default=False),
        ),
    ]
