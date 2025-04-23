from django import forms
from .models import Tarea

class TareaForm(forms.ModelForm):
    class Meta:
        model = Tarea
        fields = ['texto']
        widgets = {
            'texto': forms.TextInput(attrs={
                'placeholder': 'Escribe una tarea',
                'class': 'form-control'
            })
        }
