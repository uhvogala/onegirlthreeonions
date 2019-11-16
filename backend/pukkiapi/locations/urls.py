from django.urls import path
from rest_framework import routers

from . import views

router = routers.SimpleRouter()
router.register(r'locations', views.LocationView)
router.register(r'routes', views.RouteView)

urlpatterns = [
    path('', views.eka, name='eka'),
    path('send_sms', views.SMSView.as_view(), name='send_sms'),
]

urlpatterns += router.urls