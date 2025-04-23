from django.shortcuts import render, redirect
from .models import Tarea
from .forms import TareaForm

def index(request):
    if request.method == 'POST':
        form = TareaForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('inicio')
    else:
        form = TareaForm()

    tareas = Tarea.objects.all().order_by('-fecha')
    return render(request, 'index.html', {'form': form, 'tareas': tareas})