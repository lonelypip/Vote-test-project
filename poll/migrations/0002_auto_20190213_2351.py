# Generated by Django 2.1.2 on 2019-02-13 17:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('poll', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='human',
            name='login',
            field=models.CharField(max_length=30, unique=True),
        ),
    ]
