from django.db import models


class Post(models.Model):
    role_choices = (('IGL', 'IGL'), ('Lurk', 'Lurk'), ('Support', 'Support'), ('Entry', 'Entry'),
                    ('AWP', 'AWP'), ('Secondary AWP', 'Secondary AWP'))

    name = models.CharField(max_length=12)
    age = models.IntegerField()
    role = models.CharField(max_length=20, choices=role_choices)
    country = models.CharField(max_length=60)
    languages = models.CharField(max_length=200)
    team_experience = models.TextField(max_length=600)
    tournament_experience = models.TextField(max_length=600)
    faceit_esportal_esea = models.TextField(max_length=600)
    discord = models.CharField(max_length=60)
    steam = models.CharField(max_length=60)
