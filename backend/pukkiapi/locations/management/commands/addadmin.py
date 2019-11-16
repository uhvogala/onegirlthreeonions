from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from django.conf import settings

class Command(BaseCommand):

    def handle(self, *args, **options):
        if User.objects.count() == 0:
            for user in settings.ADMIN_USERS:
                username = user[0]
                email = user[1]
                password = user[2]
                print('Creating account for %s (%s)' % (username, email))
                User.objects.create_superuser(email=email, username=username, password=password)
        else:
            print('Admin accounts can only be initialized if no Accounts exist')