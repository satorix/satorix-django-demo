import os
from django.db import migrations


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    def generate_superuser(apps, schema_editor):
        from django.contrib.auth.models import User

        django_su_name = os.environ.get('DJANGO_SU_NAME')
        django_su_email = os.environ.get('DJANGO_SU_EMAIL')
        django_su_password = os.environ.get('DJANGO_SU_PASSWORD')

        superuser = User.objects.create_superuser(
            username=django_su_name,
            email=django_su_email,
            password=django_su_password)

        superuser.save()

    operations = [
        migrations.RunPython(generate_superuser),
    ]