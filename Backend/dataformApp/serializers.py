from rest_framework import serializers
from .models import *


class UserprofilesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Userprofiles
        fields = ('userprofilesid', 'first_name', 'userid', 'last_name',
                  'email', 'phone', 'gender', 'street', 'city', 'state', 'pin', 'pic')


class CreateUserprofilesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Userprofiles
        fields = ('first_name', 'last_name', 'email', 'phone',
                  'gender', 'street', 'city', 'state', 'pin', 'pic')


class FeedbacksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedbacks
        fields = ('userid', 'feedbackid', 'name', 'email', 'feedback')


class CreateFeedbacksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedbacks
        fields = ('name', 'email', 'feedback')


class CompanyprofilesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Companyprofiles
        fields = '__all__'


class CreateCompanyprofilesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Companyprofiles
        fields = '__all__'
        exculde = ('userid', 'companyid')


class CompanydoumentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Companydouments
        fields = '__all__'


class MonthdataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Monthdata
        fields = '__all__'


class CreateCompanydoumentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Companydouments
        fields = '__all__'
        exculde = ('userid', 'documentid')


class ContactUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactUs
        fields = '__all__'


class OlduserdataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Olduserdata
        fields = '__all__'


class OlddocsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Olddocs
        fields = '__all__'


class CreateContactUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactUs
        fields = '__all__'
        exculde = ('userid', 'cid')


# class MyemailidSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Myemail
#         fields = '__all__'


class OrderrequirementsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orderrequirements
        fields = '__all__'


class CreateOrderrequirementsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orderrequirements
        fields = '__all__'
        exculde = ('userid', 'orderrequirementsid')


# For Payment Page Serializer
class InvoicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Invoices
        fields = '__all__'


class OrderoverviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orderoverview
        fields = '__all__'


class CreateOrderoverviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orderoverview
        fields = '__all__'
        exculde = ('orderoverviewid')


class OrderrequirementdocumentsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Orderrequirementdocuments
        fields = ('pk', 'name', 'email', 'reason', 'backenduser', 'roletype', 'servicename', 'certificate', 'date', 'invoicedocument', 'userid',  'directorsphotograph', 'rentagrement',
                  'photoofproduct', 'amount', 'accountuser', 'adminuser', 'paymentstatus', 'photoofpremises', 'status1', 'electricitybill', 'incorporationdoc', 'partnershipdeed', 'otherdoc', 'documentstatus', 'paymentstatus')


class CreateOrderrequirementdocumentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orderrequirementdocuments
        fields = '__all__'
        exculde = ('userid', 'orderrequirementdocumentsid')


class CountordersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Countorders
        fields = '__all__'
