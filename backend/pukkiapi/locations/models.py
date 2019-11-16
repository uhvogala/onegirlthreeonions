from django.db import models

# Create your models here.

class Route(models.Model):
    name = models.CharField(max_length=100)
    clong = models.DecimalField(max_digits=9, decimal_places=6)
    clat = models.DecimalField(max_digits=9, decimal_places=6)
    locations = models.ManyToManyField('Location', blank=True)


class Location(models.Model):
    name = models.CharField(max_length=100)
    business = models.CharField(max_length=100)
    clong = models.DecimalField(max_digits=9, decimal_places=6)
    clat = models.DecimalField(max_digits=9, decimal_places=6)
    routes = models.ManyToManyField('Route', through=Route.locations.through, blank=True)

class Story(models.Model):
    insta_link = models.URLField()
    description = models.CharField(max_length=500)
    route = models.ForeignKey(Route, related_name='stories', on_delete=models.CASCADE)
