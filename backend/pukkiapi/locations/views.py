import requests
from django.http import JsonResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from rest_framework.viewsets import ModelViewSet

from locations.serializers import LocationSerializer, RouteSerializer
from locations.models import Location, Route, Story

API_USERNAME = 'ub8d52fa53400bb68db0bac962dddd38d'
API_PASSWORD = '1FF2F3274F2C6B681F75FACCFA7784DA'

def eka(request):
    data = {
        'kakka': 'jee'
    }
    return JsonResponse(data)   

class SMSView(View):

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super(SMSView, self).dispatch(request, *args, **kwargs)
    
    @csrf_exempt
    def post(self, request):
        print(request.POST)
        if request.POST['to']:
            response = requests.post(
                'https://api.46elks.com/a1/sms',
                auth = (API_USERNAME, API_PASSWORD),
                data = {
                    'from': 'Posti',
                    'to': request.POST['to'],
                    'message': "Sinulle on yksi uusi ilmoitus. Voit lukea sen osoitteessa: https://bit.ly/37bc9tE"
                }
            )

    
        return JsonResponse({'status': 'success'})


class LocationView(ModelViewSet):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer
    
class RouteView(ModelViewSet):
    queryset = Route.objects.all()
    serializer_class = RouteSerializer