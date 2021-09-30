from django.contrib import admin
from django.http import HttpResponse
import json
import csv
from .models import Action, Experiment,UserResponse,Task,Sentence,Trial

# Register your models here.
admin.site.register(Experiment)
admin.site.register(Task)
admin.site.register(Action)
admin.site.register(Sentence)
admin.site.register(Trial)

class ExportCSVMixin:
    '''Django admin cookbook
    https://books.agiliq.com/projects/django-admin-cookbook/en/latest/export.html
    '''
    def export_as_csv(self, request, queryset):
        meta = self.model._meta
        field_names = [field.name for field in meta.fields]

        response = HttpResponse(content_type = 'text/csv')
        response['Content-Disposition'] = 'attachment; filename={}.csv'.format(meta)
        writer = csv.writer(response)

        writer.writerow(field_names)
        for obj in queryset:
            row = writer.writerow([getattr(obj, field) for field in field_names])

        return response

    export_as_csv.short_description = "Export Selected"

class UserResponseFilter(admin.SimpleListFilter):
    '''
    TimonWeb: https://timonweb.com/django/adding-custom-filters-to-django-admin-is-easy/
    '''
    title = "Completed Responses"
    parameter_name = 'response'

    def lookups(seld, request, model_admin):

        return [
            ("nulled_responses", "Empty Responses"),
            ("non_nulled_responses","Filled Responses")
        ]

    def queryset(self, request, queryset):

        if self.value() == "non_nulled_responses":
            return queryset.filter(response__isnull=False)
        if self.value():
            return queryset.filter(response__isnull=True)

@admin.register(UserResponse)
class UserResponseAdmin(admin.ModelAdmin):
    list_display = ("user", "user_id", "response_short", "trial")
    actions = ["export_as_csv"]
    list_filter = (UserResponseFilter,)

    def response_short(self, obj):
        return str(obj.response)[:25]

    def export_as_csv(self, request, queryset):
        '''Cookbook Django example'''
        meta = self.model._meta
        field_names = [field.name for field in meta.fields]

        response = HttpResponse(content_type = 'text/csv')
        response['Content-Disposition'] = 'attachment; filename={}.csv'.format(meta)

        writer = csv.writer(response)

        writer.writerow(field_names)
        for obj in queryset:
            row = writer.writerow([getattr(obj, field) for field in field_names])

        return response

    # def export_pitch_data(self, request, queryset):
    #     '''Cookbook Django example'''

    #     def process_pitch_data(obj):
    #         '''Expects pitch json of {x_y: [{x, y}, {x, y}] }
    #         Returns: [ (x ...) (y ...) ]
    #         '''
    #         pass

    #     meta = self.model._meta
    #     field_names = [field.name for field in meta.fields]

    #     response = HttpResponse(content_type = 'text/csv')
    #     response['Content-Disposition'] = 'attachment; filename={}.csv'.format(meta)

    #     writer = csv.writer(response)

    #     writer.writerow(field_names)
    #     for obj in queryset:
    #         row = writer.writerow([getattr(obj, field) for field in field_names])

    #     return response
        
    export_as_csv.short_description = "Export Selected"