"""NG URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import serve
from rest_framework import routers
from dataformApp.views import *
from backendApp.views import *
from paymentApp.views import *

route = routers.DefaultRouter()

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/user/', include('backendApp.urls')),
    path('razorpay/', include("paymentApp.urls")),
    path(r'api/', include(route.urls)),
    re_path(r'^media/(?P<path>.*)$', serve,
            {'document_root': settings.MEDIA_ROOT}),

    # Get Functions Urls
    path('charts/<str:token>', students_list13),
    path('backenduserdata/<str:token>', backend_userdata_list),
    path('docs/<str:token>', docs_list),
    path('sendmail/<str:servicename>/<str:token>', reminder_list),
    path('oldsendmail/<str:applicationname>/<str:token>', reminder_list1),
    path('document/<str:docname>/<str:companyname>/<str:token>', reminder_list2),
    
    path('companyemail/<str:email>/<str:token>', reminder_list55),
    #    path('olddocs/<str:token>', docs_list99),

    path('api/completeorderrequirementdocumen/<str:token>', students_list5),
    path('userrequirement/<str:token>', post1),
    path('api/feedbacks/<str:token>', students_list19),
    path('api/contactus/<str:token>', students_list20),
    path('api/completeorderrequirementdocument/<str:token>', students_list5),
    path('api/cancelorderrequirementdocument/<str:token>', students_list6),
    path('api/showorderrequirementdocument/<str:token>', students_list),
    path('showorderrequirementdocuments/<str:servicename>/<str:token>', OrderdocumentuserView.as_view(),
         name='showorderrequirementdocuments'),
    path('fetchbackenduser/<str:token>', BackendUserView.as_view(),
         name='fetchbackenduser'),
    path('formslist/<str:token>', NormaluserView.as_view(),
         name='fetchbackenduser'),
    path('olddocs/<str:token>', post99.as_view(),
         name='olddocs'),
    path('olduserlist/<str:token>', OlduserView.as_view(),
         name='fetcholduser'),
    path('useremaillist/<str:token>', UseremailView.as_view()),
    path('mondata/<str:token>', Mondata.as_view(),
         name='mondata'),
    path('showorderoverview/<str:token>', OrderoverviewView.as_view(),
         name='showorderoverview'),
    path('showcompanydocument/<str:token>', CompanydoumentsView.as_view(),
         name='showcompanydocument'),
    path('showprofile/<str:token>', UserprofilesView.as_view(), name='showprofile'),
    path('showuserdocument/<str:token>',
         UserdocumentsView.as_view(), name='showuserdocument'),
path('updatedet/<str:token>', updatedet),
    path('showuserdocs/<str:token>', docs_list98),
    path('showcompanyprofile/<str:token>', CompanyprofilesView.as_view(),
         name='showcompanyprofile'),
    path('showservices/<str:token>', PaymentView.as_view(), name='showservices'),
    path('oldata/<str:token>', getolddata),

    # Post Functions Urls
    path('sendmes/<str:token>', postsendmail),
    path('api/showorderrequirementdocument/<str:token>/<int:pk>', students_detail),
    path('userrequirement/<int:userid>/<str:servicename>/<str:token>', post),
    path('userdocument/<int:userid>/<str:token>', post2),
       path('userdocument/<str:token>', PostView.as_view(),
         name='userdocuments'),
    #     path('userdocument/<str:token>', post99),

    path('addpayment/<str:token>/<int:pk>', students_detail7),
    path('adddocument/<str:token>/<int:pk>', students_detail8),
    path('Orderrequirementdocuments/<str:token>', CreateOrderrequirementdocumentsView.as_view(),
         name='Orderrequirementdocuments'),
    path('showorderrequirementdocument/<str:token>/<int:pk>', students_detail1),
    path('showworkstatus/<str:token>/<int:pk>', students_detail2),
    path('api/reason/<str:token>/<int:pk>', students_detail3),
    path('backenduserregister/<str:token>', UserRegistrationView1.as_view(),
         name='backenduserregister'),
    path('accountoverview/<int:userid>/<str:token>', students_detai99),
    path('orderrequirements/<str:token>', CreateOrderrequirementsView.as_view(),
         name='orderrequirements'),
    path('feedbacks/<str:token>', CreateFeedbacksView.as_view(), name='feedbacks'),
    path('saveoldinfo/<str:token>',   OlddataView.as_view(), name='saveoldinfo'),
    path('updatedoc/<str:token>', updatedata),
    path('contactus/<str:token>', CreateContactUsView.as_view(), name='contactus'),
    path('profiles/<str:token>', CreateUserprofilesView.as_view(), name='profiles'),
    path('companyprofiles/<str:token>', CreateCompanyprofilesView.as_view(),
         name='companyprofiles'),
    path('companydocuments/<str:token>', CreateCompanydocumentsView.as_view(),
         name='companydocuments'),
]
# +static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
