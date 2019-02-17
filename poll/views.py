from django.shortcuts import render, redirect
from .models import Human
from .forms import HumanForm
from django.views.generic import View 


class Poll(View):
   def get(self, request):
      people = Human.objects.all()
      group_a = people[:2]
      group_b = people[2:]
      return render(request, 'poll/home.html', context={
         'group_a':group_a,
         'group_b':group_b,
      })
   
   def post(self, request):
      bound_form = request.POST['login']

      try:
         person = Human.objects.get(login=bound_form)
         person.score += 1
         person.save()
         return redirect('home_url')
      except:
         return render(request, 'poll/home.html', context={'people':people})