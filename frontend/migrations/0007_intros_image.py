# Generated by Django 4.2 on 2023-04-27 23:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("frontend", "0006_rename_family_familys"),
    ]

    operations = [
        migrations.AddField(
            model_name="intros",
            name="image",
            field=models.ImageField(blank=True, null=True, upload_to="images/intro/"),
        ),
    ]
