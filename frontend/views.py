from django.shortcuts import render
from .models import Pronouns
from .models import Familys
from .models import Intros
from .models import Nums
from .models import Wh
from .models import Days







# Create your views here.
def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')

def pronoun(request):
    pros = Pronouns.objects.all()
    return render(request, 'frontend/pronoun.html', {'pros':pros})

def pbuttons(request, name):
    pros = Pronouns.objects.get(name=name)
    return render (request, 'frontend/pronoun.html', {'pros':pros})

def familys(request):
    fam = Familys.objects.all()
    return render(request, 'frontend/family.html', {'fam':fam})

def fbuttons(request, name):
    fam = Familys.objects.get(name=name)
    return render (request, 'frontend/family.html', {'fam':fam})

def intro(request):
    intro = Intros.objects.all()
    return render(request, 'frontend/intro.html', {'intro':intro})

def ibuttons(request, name):
    intro = Intros.objects.get(name=name)
    return render (request, 'frontend/intro.html', {'intro':intro})

def num(request):
    num = Nums.objects.all()
    return render(request, 'frontend/num.html', {'num':num})

def nbuttons(request, name):
    num = Nums.objects.get(name=name)
    return render (request, 'frontend/num.html', {'num':num})

def wh(request):
    wh = Wh.objects.all()
    return render(request, 'frontend/wh.html', {'wh':wh})

def whbuttons(request, name):
    wh = Wh.objects.get(name=name)
    return render (request, 'frontend/wh.html', {'wh':wh})

def day(request):
    day = Days.objects.all()
    return render(request, 'frontend/day.html', {'day':day})

def dbuttons(request, name):
    day = Days.objects.get(name=name)
    return render (request, 'frontend/day.html', {'day':day})

