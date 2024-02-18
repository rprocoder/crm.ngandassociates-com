# from xml.dom.minidom import Feedback
from django.contrib import admin
from . models import *

# Register your models here.

admin.site.register({Companydouments, Userprofiles})
admin.site.register({Feedbacks, Companyprofiles})
admin.site.register({Invoices, Orderrequirements})
admin.site.register({Orderoverview, Orderrequirementdocuments})
admin.site.register({ContactUs, Countorders})
admin.site.register({Monthdata,Mytoken})
admin.site.register({Olduserdata,Olddocs})
admin.site.register({Myemailid,})
# admin.site.register({Myemail,})

