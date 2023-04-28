# Generated by Django 4.2 on 2023-04-27 21:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("frontend", "0004_nums_image_alter_pronouns_image"),
    ]

    operations = [
        migrations.CreateModel(
            name="Family",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=120, verbose_name="Pic name")),
                ("description", models.TextField(blank=True)),
                (
                    "image",
                    models.ImageField(
                        blank=True, null=True, upload_to="images/family/"
                    ),
                ),
            ],
        ),
    ]
