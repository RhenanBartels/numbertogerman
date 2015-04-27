import json

from django.shortcuts import render
from django.http import HttpResponse

from .forms import NumberForm

from num2words import num2words
def home(request):
    template = 'home.html'

    form = NumberForm(request.GET or None)
    context = {'form': form}

    if form.is_valid():
        number = form.cleaned_data.get('german_number', '')
        german_number = num2words(number, lang='de')
        data = {'number': german_number}
        return HttpResponse(json.dumps(data),
                content_type='application/json')
    else:
        return render(request, template, context)


