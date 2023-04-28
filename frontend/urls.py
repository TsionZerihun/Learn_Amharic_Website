from django.urls import path
from .views import index
from . import views

urlpatterns = [
    path('', index, name="index"),
    path('pronoun', views.pronoun, name="pronoun"),
    path('pronoun/<str:name>', views.pbuttons, name="pbuttons"),
    path('family', views.familys, name="family"),
    path('family/<str:name>', views.fbuttons, name="fbuttons"),
    path('intro', views.intro, name="intro"),
    path('intro/<str:name>', views.ibuttons, name="ibuttons"),
    path('num', views.num, name="num"),
    path('num/<str:name>', views.nbuttons, name="nbuttons"),
    path('wh', views.wh, name="wh"),
    path('wh/<str:name>', views.whbuttons, name="whbuttons"),
    path('day', views.day, name="day"),
    path('day/<str:name>', views.dbuttons, name="dbuttons"),
]