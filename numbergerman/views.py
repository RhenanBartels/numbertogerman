from django.shortcuts import render
from .forms import NumberForm

from num2words import num2words
def home(request):
    template = 'home.html'

    form = NumberForm(request.GET or None)
    context = {'form': form}

    if form.is_valid():
        number = form.cleaned_data.get('german_number', '')
        german_number = num2words(number, lang='de')
        context['number'] = german_number


    return render(request, template, context)
