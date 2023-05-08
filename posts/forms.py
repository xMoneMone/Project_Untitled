from django import forms
from posts.models import Post


class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['name', 'age', 'role', 'role2', 'role3', 'country', 'languages', 'discord', 'steam', 'team_experience',
                  'tournament_experience', 'faceit', 'esportal', 'esea']
        labels = {'name': 'What is your In Game Name:*',
                  'age': 'What is your age:*',
                  'role': 'What is your primary role:*',
                  'role2': 'What is your secondary role:',
                  'role3': 'What is your tertiary role:',
                  'country': 'What country do you live in:*',
                  'languages': 'What languages do you speak comfortably:*',
                  'discord': 'What is your Discord:*',
                  'steam': 'What is your Steam:*',
                  'team_experience': 'How much team experience do you have (please provide team names,'
                                     ' what roles you played and duration):',
                  'tournament_experience': 'How much tournament experience do you have'
                                           ' (please provide links as evidence):',
                  'faceit': 'What is your faceit:',
                  'esportal': 'What is your esportal:',
                  'esea': 'What is your esea:'}


class AdminPostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['name', 'age', 'role', 'role2', 'role3', 'country', 'languages', 'discord', 'steam',
                  'team_experience',
                  'tournament_experience', 'faceit', 'esportal', 'esea', 'tier']
        labels = {'name': 'What is your In Game Name:*',
                  'age': 'What is your age:*',
                  'role': 'What is your primary role:*',
                  'role2': 'What is your secondary role:',
                  'role3': 'What is your tertiary role:',
                  'country': 'What country do you live in:*',
                  'languages': 'What languages do you speak comfortably:*',
                  'discord': 'What is your Discord:*',
                  'steam': 'What is your Steam:*',
                  'team_experience': 'How much team experience do you have (please provide team names,'
                                     ' what roles you played and duration):',
                  'tournament_experience': 'How much tournament experience do you have'
                                           ' (please provide links as evidence):',
                  'faceit': 'What is your faceit:',
                  'esportal': 'What is your esportal:',
                  'esea': 'What is your esea:'}
