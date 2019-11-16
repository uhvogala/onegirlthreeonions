from django.contrib import admin
from locations.models import Location, Route, Story



class StoryAdmin(admin.TabularInline):
    model = Story

class RouteAdmin(admin.ModelAdmin):
    inlines = [
        StoryAdmin
    ]

class LocationAdmin(admin.ModelAdmin):
    model = Location

admin.site.register(Route, RouteAdmin)
admin.site.register(Location, LocationAdmin)