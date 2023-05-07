from django import forms
from posts.models import Post


class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['name', 'age', 'role', 'country', 'languages', 'team_experience', 'tournament_experience',
                  'faceit_esportal_esea', 'discord', 'steam']
