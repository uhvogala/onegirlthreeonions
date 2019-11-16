from rest_framework import serializers
from locations.models import Location, Route, Story


class RouteSerializer(serializers.ModelSerializer):
    # locations = serializers.PrimaryKeyRelatedField(queryset=Location.objects.all(), many=True)
    
    class Meta:
        model = Route
        fields = ['name', 'clong', 'clat', 'locations']

class LocationSerializer(serializers.ModelSerializer):
    routes = RouteSerializer(many=True, read_only=True)

    class Meta:
        model = Location
        fields = ['name', 'clong', 'clat', 'business', 'routes']
