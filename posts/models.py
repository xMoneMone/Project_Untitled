from django.db import models


class Post(models.Model):
    role_choices = (('IGL', 'IGL'), ('Lurk', 'Lurk'), ('Support', 'Support'), ('Entry', 'Entry'),
                    ('AWP', 'AWP'), ('Secondary AWP', 'Secondary AWP'))
    tier_choices = (('1', '1'), ('2', '2'), ('3', '3'), ('4', '4'), ('5', '5'), ('6', '6'),
                    ('7', '7'), ('8', '8'), ('9', '9'), ('10', '10'))
    country_choices = (
    ('Albania', 'Albania'),
    ('Andorra', 'Andorra'),
    ('Austria', 'Austria'),
    ('Belarus', 'Belarus'),
    ('Belgium', 'Belgium'),
    ('Bosnia and Herzegovina', 'Bosnia and Herzegovina'),
    ('Bulgaria', 'Bulgaria'),
    ('Croatia', 'Croatia'),
    ('Cyprus', 'Cyprus'),
    ('Czech Republic', 'Czech Republic'),
    ('Denmark', 'Denmark'),
    ('Estonia', 'Estonia'),
    ('Finland', 'Finland'),
    ('France', 'France'),
    ('Germany', 'Germany'),
    ('Greece', 'Greece'),
    ('Hungary', 'Hungary'),
    ('Iceland', 'Iceland'),
    ('Ireland', 'Ireland'),
    ('Italy', 'Italy'),
    ('Kosovo', 'Kosovo'),
    ('Latvia', 'Latvia'),
    ('Liechtenstein', 'Liechtenstein'),
    ('Lithuania', 'Lithuania'),
    ('Luxembourg', 'Luxembourg'),
    ('Malta', 'Malta'),
    ('Moldova', 'Moldova'),
    ('Monaco', 'Monaco'),
    ('Montenegro', 'Montenegro'),
    ('Netherlands', 'Netherlands'),
    ('North Macedonia', 'North Macedonia'),
    ('Norway', 'Norway'),
    ('Poland', 'Poland'),
    ('Portugal', 'Portugal'),
    ('Romania', 'Romania'),
    ('Russia', 'Russia'),
    ('San Marino', 'San Marino'),
    ('Serbia', 'Serbia'),
    ('Slovakia', 'Slovakia'),
    ('Slovenia', 'Slovenia'),
    ('Spain', 'Spain'),
    ('Sweden', 'Sweden'),
    ('Switzerland', 'Switzerland'),
    ('Ukraine', 'Ukraine'),
    ('United Kingdom', 'United Kingdom'),
    ('Vatican City', 'Vatican City')
)

    name = models.CharField(max_length=20)
    age = models.IntegerField()
    role = models.CharField(max_length=20, choices=role_choices)
    role2 = models.CharField(max_length=20, choices=role_choices, blank=True, null=True)
    role3 = models.CharField(max_length=20, choices=role_choices, blank=True, null=True)
    country = models.CharField(max_length=22, choices=country_choices)
    languages = models.CharField(max_length=200)
    team_experience = models.TextField(max_length=600, blank=True, null=True)
    tournament_experience = models.TextField(max_length=600, blank=True, null=True)
    faceit = models.URLField(max_length=100, blank=True, null=True)
    esportal = models.URLField(max_length=100, blank=True, null=True)
    esea = models.URLField(max_length=100, blank=True, null=True)
    discord = models.CharField(max_length=60)
    steam = models.URLField(max_length=100)
    verified = models.BooleanField(default=False)
    tier = models.CharField(max_length=20, choices=tier_choices, null=True, blank=True)
