from django.shortcuts import redirect, render
from django.http import HttpResponse
from myapp.models import Person
from django.contrib import messages

# Create your views here.
def index(request):
    all_person = Person.objects.all()
    return render(request, "index.html", {
        "all_person": all_person
    })

def about(request):
    return render(request, "about.html")

def form(request):
    if request.method == "POST":
        # receive data
        form_name = request.POST["name"]
        form_age = request.POST["age"]

        # save data
        person = Person.objects.create(
            name = form_name,
            age = form_age
        )
        person.save()
        messages.success(request, "Data registered")

        # redirect
        return redirect("/")
    else : 
        return render(request, "form.html")

def edit(request, person_id):
    person = Person.objects.get(id=person_id)

    if request.method == "POST":
        person.name = request.POST["name"]
        person.age = request.POST["age"]
        person.save()
        messages.success(request, "person updated")
        return redirect("/")
    else:
        # get person info from DB
        return render(request, "edit.html", {
            "person": person
        })

def delete(request, person_id):
    person = Person.objects.get(id=person_id)
    
    person.delete()
    messages.success(request, "person deleted")
    return redirect("/")
