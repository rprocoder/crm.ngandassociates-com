
from django.db import models
from backendApp.models import *


class Myuserid(models.Model):
    id = models.AutoField(primary_key=True)
    userid = models.IntegerField(default=None, blank=True, null=True)
    
    def __str__(self):
        return str(self.userid)


class Myemailid(models.Model):
    id = models.AutoField(primary_key=True)
    email = models.CharField(
        max_length=50, default=None, null=True, blank=True)

    def __str__(self):
        return str(self.email)



# class Myemail(models.Model):
#     id = models.AutoField(primary_key=True)
#     email = models.CharField(
#         max_length=50, default=None, null=True, blank=True)

#     def __str__(self):
#         return str(self.email)


class Olduserdata(models.Model):
    oldid = models.AutoField(primary_key=True)
    username = models.CharField(
        max_length=50, default=None, blank=True, null=True)
    phone = models.CharField(
        max_length=50, default=None, blank=True, null=True)
    email = models.CharField(
        max_length=1000, default=None, blank=True, null=True)
    companyname = models.CharField(
        max_length=100, default=None, blank=True, null=True)
    applicationname = models.CharField(
        max_length=50, default=None, blank=True, null=True)

    def __str__(self):
        return str(self.email)

class Olddocs(models.Model):
    docid = models.AutoField(primary_key=True)
    email = models.CharField(
        max_length=1000, default=None, blank=True, null=True)
    docname = models.CharField(
        max_length=500, default=None, blank=True, null=True)
    companyname = models.CharField(
        max_length=100, default=None, blank=True, null=True)
    docs = models.FileField(
        upload_to='uploads/images')
    document = models.FileField(
        upload_to='uploads/documents')
    
    def __str__(self):
        return self.docname


class Mytoken(models.Model):
    tokenid = models.AutoField(primary_key=True)
    userid = models.IntegerField(default=None, blank=True, null=True)
    token = models.CharField(
        max_length=500, default=None, null=False, blank=False)
    username = models.CharField(
        max_length=500, default=None, null=False, blank=False)

    def __str__(self):
        return self.token


class Userprofiles(models.Model):
    userprofilesid = models.AutoField(primary_key=True)
    userid = models.IntegerField(default=None, blank=True, null=True)
    first_name = models.CharField(
        max_length=20, default=None, blank=True, null=True)
    last_name = models.CharField(
        max_length=20, default=None, blank=True, null=True)
    email = models.CharField(max_length=50, null=False, blank=False)
    phone = models.CharField(
        max_length=20, default=None, blank=True, null=True)
    gender = models.CharField(
        max_length=10, default=None, blank=True, null=True)
    street = models.CharField(
        max_length=300, default=None, blank=True, null=True)
    city = models.CharField(max_length=20, default=None, blank=True, null=True)
    state = models.CharField(
        max_length=20, default=None, blank=True, null=True)
    pin = models.CharField(max_length=20, default=None, blank=True, null=True)
    pic = models.FileField(upload_to='uploads/images', null=True, blank=True)

    def __str__(self):
        return str(self.userprofilesid)+" "+self.first_name+" "+self.last_name


class Feedbacks(models.Model):
    userid = models.IntegerField(default=None, blank=True, null=True)
    feedbackid = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200, blank=True, null=True)
    email = models.CharField(max_length=200, blank=True, null=True)
    feedback = models.TextField(blank=True, null=True)

    def __str__(self):
        return str(self.feedbackid)+"  "+self.name+" "+self.email


class ContactUs(models.Model):
    cid = models.AutoField(primary_key=True)
    userid = models.IntegerField(default=None, blank=True, null=True)
    name = models.CharField(max_length=200, blank=True, null=True)
    email = models.CharField(max_length=200, blank=True, null=True)
    message = models.TextField(blank=True, null=True)

    def __str__(self):
        return str(self.cid)+" "+self.name+" "+self.email


class Companyprofiles(models.Model):
    companyid = models.AutoField(primary_key=True)
    userid = models.IntegerField(default=None, blank=True, null=True)
    company_name = models.CharField(max_length=500, blank=True, null=True)
    pan_number = models.CharField(max_length=15, blank=True, null=True)
    gst_number = models.CharField(max_length=25, blank=True, null=True)
    aadhar_number = models.CharField(max_length=15, blank=True, null=True)
    company_phone = models.CharField(max_length=15, blank=True, null=True)
    company_street = models.CharField(max_length=200, blank=True, null=True)
    company_city = models.CharField(max_length=200, blank=True, null=True)
    company_state = models.CharField(max_length=200, blank=True, null=True)
    company_pin = models.CharField(max_length=200, blank=True, null=True)

    def __str__(self):
        return str(self.companyid)+" "+self.company_name


class Companydouments(models.Model):
    documentid = models.AutoField(primary_key=True)
    userid = models.IntegerField(default=None, blank=True, null=True)
    addhar = models.FileField(
        upload_to='uploads/images', default=None, blank=True, null=True)
    pan = models.FileField(upload_to='uploads/images',
                           default=None, blank=True, null=True)
    gst = models.FileField(upload_to='uploads/images',
                           default=None, blank=True, null=True)
    other = models.FileField(upload_to='uploads/images',
                             default=None, blank=True, null=True)

    def __str__(self):
        return str(self.documentid)


class Invoices(models.Model):  # For Payment Page Model
    invoiceid = models.AutoField(primary_key=True)
    userid = models.IntegerField(default=None, blank=True, null=True)
    invoiceditems = models.TextField(blank=True, null=True)
    invoicedamount = models.DecimalField(
        max_digits=18, decimal_places=0, blank=True, null=True)
    invoicedamountwithtax = models.DecimalField(
        max_digits=18, decimal_places=0, blank=True, null=True)
    taxpercentage = models.DecimalField(
        max_digits=10, decimal_places=0, blank=True, null=True)

    def __str__(self):
        return str(self.invoiceid)+" "+self.invoicedamount


class Orderrequirements(models.Model):
    orderrequirementsid = models.AutoField(primary_key=True)
    userid = models.IntegerField(default=None, blank=True, null=True)
    servicename = models.CharField(max_length=100)
    bussinessoperationalstatus = models.CharField(
        max_length=500, blank=True, null=True)
    ageofbussiness = models.CharField(max_length=500, blank=True, null=True)
    numberofemployees = models.CharField(max_length=500, blank=True, null=True)
    bussinessarea_category = models.TextField(blank=True, null=True)

    def __str__(self):
        return str(self.orderrequirementsid)+" "+self.servicename


class Orderoverview(models.Model):
    orderoverviewid = models.AutoField(primary_key=True)
    userid = models.IntegerField(default=None, blank=True, null=True)
    open_order = models.CharField(
        max_length=1000, default=None, blank=True, null=True)
    queries_in_uploading_document = models.CharField(
        max_length=1000, blank=True, default=None, null=True)
    pending_documents = models.CharField(
        max_length=1000, blank=True, default=None, null=True)
    plan_expire = models.CharField(
        max_length=1000, default=None, blank=True, null=True)
    documents = models.CharField(
        max_length=1000, default=None, blank=True, null=True)

    def __str__(self):
        return str(self.orderoverviewid)+" "+self.open_order


class Orderrequirementdocuments(models.Model):
    userid = models.IntegerField(default=None, blank=True, null=True)
    name = models.CharField(max_length=500, blank=True, null=True)
    email = models.CharField(max_length=100, blank=True, null=True)
    backenduser = models.CharField(
        max_length=100, default=None, blank=True, null=True)
    accountuser = models.CharField(
        max_length=100, default=None, blank=True, null=True)
    adminuser = models.CharField(
        max_length=100, default=None, blank=True, null=True)
    paymentstatus = models.CharField(
        max_length=100, default=None, blank=True, null=True)
    amount = models.IntegerField(default=0, blank=True, null=True)

    status1 = models.CharField(
        max_length=100, default=None, blank=True, null=True)
    roletype = models.CharField(
        max_length=100, default=None, blank=True, null=True)

    servicename = models.CharField(max_length=100)
    directorsphotograph = models.FileField(
        upload_to='uploads/images', default=None, null=True, blank=True)
    electricitybill = models.FileField(
        upload_to='uploads/documents', default=None, null=True, blank=True)

    rentagrement = models.FileField(
        upload_to='uploads/images', default=None, null=True, blank=True)
    photoofproduct = models.FileField(
        upload_to='uploads/images', default=None, null=True, blank=True)
    photoofpremises = models.FileField(
        upload_to='uploads/documents', default=None, null=True, blank=True)

    incorporationdoc = models.FileField(
        upload_to='uploads/documents', default=None, null=True, blank=True)
    date = models.DateField(auto_now=True)
    partnershipdeed = models.FileField(upload_to='uploads/documents',
                                       default=None, null=True, blank=True)
    otherdoc = models.FileField(upload_to='uploads/documents',
                                default=None, null=True, blank=True)
    invoicedocument = models.FileField(
        upload_to='uploads/documents', default=None, null=True, blank=True)
    certificate = models.FileField(
        upload_to='uploads/documents', null=True, default=None, blank=True)
    documentstatus = models.CharField(
        max_length=100, default=None, blank=True, null=True)
    reason = models.CharField(
        max_length=1000, default=None, blank=True, null=True)

    def __str__(self):
        return str(self.amount)


class Countorders(models.Model):
    total_new_application = models.CharField(
        max_length=100, default=None, blank=True, null=True)
    total_old_application = models.CharField(
        max_length=100, default=None, blank=True, null=True)
    total_cancel_application = models.CharField(
        max_length=100, default=None, blank=True, null=True)
    total_application_amount = models.CharField(
        max_length=100, default=None, blank=True, null=True)
    total_revenue = models.CharField(
        max_length=100, default=None, blank=True, null=True)
    pendingvalue = models.CharField(
        max_length=100, default=None, blank=True, null=True)
    adminuser = models.CharField(
        max_length=100, default=None, blank=True, null=True)
    roletype = models.CharField(
        max_length=100, default=None, blank=True, null=True)

    def __str__(self):
        return self.total_new_application+" "+self.total_old_application+" "+self.total_cancel_application+" "+self.total_application_amount


class Monthdata(models.Model):
    monthid = models.AutoField(primary_key=True)
    total_order = models.CharField(
        max_length=100, default=None, blank=True, null=True)
    complete_order = models.CharField(
        max_length=100, default=None, blank=True, null=True)
    pending_order = models.CharField(
        max_length=100, default=None, blank=True, null=True)
    cancel_order = models.CharField(
        max_length=100, default=None, blank=True, null=True)

    def __str__(self):
        return self.total_order+""+self.complete_order+""+self.pending_order+""+self.cancel_order
