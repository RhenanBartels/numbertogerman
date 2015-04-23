from django import forms

class NumberForm(forms.Form):
    german_number = forms.FloatField(label='Enter a number')
