import email
import logging
from rest_framework.response import Response
from rest_framework import generics
from .serializers import *
from .models import *
from rest_framework.views import APIView
from paymentApp.serializers import *
from backendApp.models import User
from rest_framework.decorators import api_view
from rest_framework import status
from datetime import date, timedelta, datetime
from django.core import mail
import time
# # Normal Function start

# tokenlist = []
# vid = Mytoken.objects.filter(
# token=token).values('userid').first()['userid']
# rt = Mytoken.objects.filter(userid=vid).values('token').first()['token']
# # tokenlist.append(rt)
# rt1 = rt
# # if len(tokenlist) > 1:
# #     del tokenlist[-1]


def students_list12():
    data = Orderrequirementdocuments.objects.filter(status1='completed')
    data = len(data)
    data1 = Orderrequirementdocuments.objects.filter(status1='cancel')
    data1 = len(data1)
    data3 = Orderrequirementdocuments.objects.all()
    data3 = len(data3)
    data3 = data3
    data4 = Orderrequirementdocuments.objects.values_list(
        'amount', flat=True).filter(paymentstatus='Done')
    s = 0
    for i in data4:
        s = s+i
    avg = s/data
    pending = data3-data-data1
    queryset = Countorders.objects.filter(pk=1)
    if queryset.exists():
        ct = queryset[0]
        ct.total_new_application = data3
        ct.total_old_application = data
        ct.total_cancel_application = data1
        ct.total_application_amount = s
        ct.total_revenue = avg
        ct.pendingvalue = pending
        ct.save(update_fields=['total_new_application', 'total_cancel_application',
                'total_old_application', 'total_application_amount', 'total_revenue', 'pendingvalue'])
    else:
        ct = Countorders(total_new_application=data3, total_cancel_application=data1,
                         total_old_application=data, total_application_amount=s, total_revenue=avg, pendingvalue=pending)
        ct.save()

# For Year Wise Data Store

# def students_list16():
#     year = 2020
#     sday = 1
#     current_year = int(datetime.now().strftime("%Y"))
#     for yr in range(year, current_year+1):
#         for j in range(1, 13):
#             if(j == 2):
#                 if (year % 400 == 0) and (year % 100 == 0):
#                     eday = 29
#                 elif (year % 4 == 0) and (year % 100 != 0):
#                     eday = 29
#                 else:
#                     eday = 28
#             elif(j == 4 or j == 6 or j == 9 or j == 11):
#                 eday = 30
#             else:
#                 eday = 31
#             sdate = date(year, j, sday)   # start date
#             edate = date(year, j, eday)
#             delta = edate - sdate
#             total_order = 0
#             complete_order = 0
#             pending_order = 0
#             cancel_order = 0
#             for i in range(delta.days + 1):
#                 day = sdate + timedelta(days=i)
#                 start_date1 = Orderrequirementdocuments.objects.filter(
#                     date=day)
#                 complete_data = Orderrequirementdocuments.objects.filter(
#                     date=day, status1='completed')
#                 cancel_data = Orderrequirementdocuments.objects.filter(
#                     date=day, status1='cancel')
#                 count1 = len(start_date1)
#                 count2 = len(complete_data)
#                 count3 = len(cancel_data)
#                 total_order = total_order+count1
#                 complete_order = complete_order+count2
#                 cancel_order = cancel_order+count3
#                 pending_order = total_order-complete_order-cancel_order
#                 queryset = Monthdata.objects.filter(monthid=j)
#                 if queryset.exists():
#                     ct = queryset[0]
#                     ct.total_order = str(total_order)
#                     ct.complete_order = str(complete_order)
#                     ct.pending_order = str(pending_order)
#                     ct.cancel_order = str(cancel_order)
#                     ct.save(update_fields=['total_order', 'pending_order',
#                             'complete_order', 'cancel_order'])
#                 else:
#                     ct = Monthdata(total_order=str(total_order), pending_order=str(pending_order),
#                                    complete_order=str(complete_order), cancel_order=str(cancel_order))
#                     ct.save()
#             if (j == 12):
#                 year = year+1

# For Monthly wise data


def students_list16():
    sday = 1
    current_year = int(datetime.now().strftime("%Y"))
    current_month = int(datetime.now().strftime("%m"))
    if(current_month == 2):
        if (current_year % 400 == 0) and (current_year % 100 == 0):
            eday = 29
        elif (current_year % 4 == 0) and (current_year % 100 != 0):
            eday = 29
        else:
            eday = 28
    elif(current_month == 4 or current_month == 6 or current_month == 9 or current_month == 11):
        eday = 30
    else:
        eday = 31
    sdate = date(current_year, current_month, sday)   # start date
    edate = date(current_year, current_month, eday)
    delta = edate - sdate
    total_order = 0
    complete_order = 0
    pending_order = 0
    cancel_order = 0
    for i in range(delta.days + 1):
        day = sdate + timedelta(days=i)
        start_date1 = Orderrequirementdocuments.objects.filter(
            date=day)
        complete_data = Orderrequirementdocuments.objects.filter(
            date=day, status1='completed')
        cancel_data = Orderrequirementdocuments.objects.filter(
            date=day, status1='cancel')
        count1 = len(start_date1)
        count2 = len(complete_data)
        count3 = len(cancel_data)
        total_order = total_order+count1
        complete_order = complete_order+count2
        cancel_order = cancel_order+count3
        pending_order = total_order-complete_order-cancel_order
        queryset = Monthdata.objects.filter(monthid=current_month)
        if queryset.exists():
            ct = queryset[0]
            ct.total_order = str(total_order)
            ct.complete_order = str(complete_order)
            ct.pending_order = str(pending_order)
            ct.cancel_order = str(cancel_order)
            ct.save(update_fields=['total_order', 'pending_order',
                    'complete_order', 'cancel_order'])
        else:
            ct = Monthdata(total_order=str(total_order), pending_order=str(pending_order),
                           complete_order=str(complete_order), cancel_order=str(cancel_order))
            ct.save()

# Normal Function end


# FIrst Get Function Execution is necessary

emails = []


@api_view(['GET'])
def reminder_list(request, servicename, token):
    vid1 = Mytoken.objects.filter(
        token=token).values('userid').first()['userid']
    rt1 = Mytoken.objects.filter(
        userid=vid1).values('token').first()['token']
    if request.method == 'GET' and rt1 == token:
        global emails
        emails.clear()
        if servicename == 'All':
            data = Orderrequirementdocuments.objects.filter(
                status1='completed')
            data1 = data.values_list(
                'email', flat=True).filter(status1='completed').distinct()
            for i in data1:
                emails.append(i)
        else:
            data = Orderrequirementdocuments.objects.filter(
                status1='completed', servicename=servicename)
            data1 = data.values_list(
                'email', flat=True).filter(status1='completed', servicename=servicename).distinct()
            for i in data1:
                emails.append(i)
        serializer = OrderrequirementdocumentsSerializer(
            data, context={'request': request}, many=True)
        return Response(serializer.data)


emails1 = []


@api_view(['GET'])
def reminder_list1(request, applicationname, token):
    vid1 = Mytoken.objects.filter(
        token=token).values('userid').first()['userid']
    rt1 = Mytoken.objects.filter(
        userid=vid1).values('token').first()['token']
    if request.method == 'GET' and rt1 == token:
        global emails1
        emails1.clear()
        if applicationname == 'All':
            data = Olduserdata.objects.all()
            data1 = data.values_list(
                'email', flat=True).distinct()
            for i in data1:
                if ',' in i.strip():
                    templist=[]
                    templist = i.split(',')
                    for k in templist:
                        emails1.append(k)
                else:
                    emails1.append(i)
        else:
            data = Olduserdata.objects.filter(applicationname=applicationname)
            data1 = data.values_list(
                'email', flat=True).filter(applicationname=applicationname).distinct()
            for i in data1:
                if ',' in i:
                    i.strip()
                    templist=[]
                    templist = i.split(',')
                    for k in templist:
                        emails1.append(k)
                else:
                    emails1.append(i)
        serializer = OlduserdataSerializer(
            data, context={'request': request}, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def reminder_list2(request, docname, companyname, token):
    vid1 = Mytoken.objects.filter(
        token=token).values('userid').first()['userid']
    rt1 = Mytoken.objects.filter(
        userid=vid1).values('token').first()['token']
    if request.method == 'GET' and rt1 == token:
        if docname == 'All':
            data = Olddocs.objects.filter(companyname=companyname)
        else:
            data = Olddocs.objects.filter(docname=docname, companyname=companyname)
        serializer = OlddocsSerializer(
            data, context={'request': request}, many=True)
        return Response(serializer.data)



@api_view(['GET'])
def reminder_list55(request, email, token):
    vid1 = Mytoken.objects.filter(
        token=token).values('userid').first()['userid']
    rt1 = Mytoken.objects.filter(
        userid=vid1).values('token').first()['token']
    if request.method == 'GET' and rt1 == token:
        data = Olduserdata.objects.filter(companyname=email)
        serializer = OlduserdataSerializer(
            data, context={'request': request}, many=True)
        return Response(serializer.data)



# Post Function Start


# @api_view(['POST'])
# def postsendmail(request, token):
#     if request.method == 'POST' and rt1 == token:
#         message = request.data['message']
#         sub = request.data['sub']
#         for i in emails:
#             data = {
#                 'subject': sub,
#                 'body': message,
#                 'to_email': i
#             }
#             Util.send_email(data)
#         return Response({'msg': 'Send mails sucessfully'}, status=status.HTTP_200_OK)


@api_view(['POST'])
def postsendmail(request, token):
    vid1 = Mytoken.objects.filter(
        token=token).values('userid').first()['userid']
    rt1 = Mytoken.objects.filter(
        userid=vid1).values('token').first()['token']
    if request.method == 'POST' and rt1 == token:
        global emails, emails1
        message = request.data['message']
        sub = request.data['sub']
        connection = mail.get_connection()
        connection.open()
        mall = emails+emails1
        emial = mail.EmailMessage(
            sub, message, 'ngandassociatesa27j@gmail.com', mall, connection=connection)
        emial.send()
        connection.close()
        mall.clear()
        return Response({'msg': 'Send mails sucessfully'}, status=status.HTTP_200_OK)


userid1 = None
servicename1 = None
flag3 = False


@api_view(['POST'])
def post(request, userid, servicename, token):
    vid1 = Mytoken.objects.filter(
        token=token).values('userid').first()['userid']
    rt1 = Mytoken.objects.filter(
        userid=vid1).values('token').first()['token']
    if request.method == 'POST' and rt1 == token:
        data = Orderrequirements.objects.filter(
            userid=userid, servicename=servicename)
        serializer = OrderrequirementsSerializer(
            data, context={'request': request}, many=True)
        global userid1
        userid1 = userid
        global servicename1
        servicename1 = servicename
        global flag3
        flag3 = True
        return Response(serializer.data)


flag2 = False


@api_view(['POST'])
def post2(request, userid, token):
    vid1 = Mytoken.objects.filter(
        token=token).values('userid').first()['userid']
    rt1 = Mytoken.objects.filter(
        userid=vid1).values('token').first()['token']
    if request.method == 'POST' and rt1 == token:
        data = Orderrequirements.objects.filter(
            userid=userid)
        serializer = OrderrequirementsSerializer(
            data, context={'request': request}, many=True)
        row = Myuserid(userid=userid)
        row.save()
        global flag2
        flag2 = True
        return Response(serializer.data)


# @api_view(['POST'])
# def post99(request, email, token):
#     vid1 = Mytoken.objects.filter(
#         token=token).values('userid').first()['userid']
#     rt1 = Mytoken.objects.filter(
#         userid=vid1).values('token').first()['token']
#     if request.method == 'POST' and rt1 == token:
#         data = Olddocs.objects.filter(
#             email=email)
#         serializer = OlddocsSerializer(
#             data, context={'request': request}, many=True)
#         # allrows = Myemailid.objects.all()
#         # allrows.delete()
#         row = Myemailid(email=email)
#         row.save()
#         return Response(serializer.data)

# Other Post and get Function for old docs

# email=None
# flag1 = False


class post99(APIView):
    def get(self, request, token):
        vid1 = Mytoken.objects.filter(
            token=token).values('userid').first()['userid']
        rt1 = Mytoken.objects.filter(
            userid=vid1).values('token').first()['token']
        if request.method == 'GET' and rt1 == token:
            email = Myemailid.objects.last().email
            data = Olddocs.objects.filter(companyname=email)
            serializer = OlddocsSerializer(
                data, context={'request': request}, many=True)
            allrows = Myemailid.objects.all()
            allrows.delete()
            return Response(serializer.data)
        else:
            return Response({'Bad Request': 'No Found data...'}, status=status.HTTP_204_NO_CONTENT)


# @api_view(['GET'])
# def post99(request, token):
#     vid1 = Mytoken.objects.filter(
#         token=token).values('userid').first()['userid']
#     rt1 = Mytoken.objects.filter(
#         userid=vid1).values('token').first()['token']
#     if request.method == 'GET' and rt1 == token:
#         data = Olddocs.objects.values('docname').distinct()

#         serializer = OlddocsSerializer(
#             data, context={'request': request}, many=True)
#         return Response(serializer.data)
#     else:
#         return Response({'Bad Request': 'No Found data...'}, status=status.HTTP_204_NO_CONTENT)


@api_view(['POST', 'GET'])
def students_detail(request, pk, token):
    vid1 = Mytoken.objects.filter(
        token=token).values('userid').first()['userid']
    rt1 = Mytoken.objects.filter(
        userid=vid1).values('token').first()['token']
    if request.method == 'POST' and rt1 == token:
        invoicedocument = request.data['invoicedocument']
        queryset = Orderrequirementdocuments.objects.filter(pk=pk)
        if queryset.exists():
            order = queryset[0]
            order.invoicedocument = invoicedocument
            order.save(update_fields=['invoicedocument'])
            return Response(OrderrequirementdocumentsSerializer(order).data, status=status.HTTP_200_OK)
        else:
            order = Orderrequirementdocuments(invoicedocument=invoicedocument)
            order.save()
            return Response(OrderrequirementdocumentsSerializer(order).data, status=status.HTTP_201_CREATED)

    if request.method == 'GET' and rt1 == token:
        data = Orderrequirementdocuments.objects.filter(pk=pk)
        serializer = OrderrequirementdocumentsSerializer(
            data, context={'request': request}, many=True)
        return Response(serializer.data)


@api_view(['POST'])
def students_detail2(request, pk, token):
    vid1 = Mytoken.objects.filter(
        token=token).values('userid').first()['userid']
    rt1 = Mytoken.objects.filter(
        userid=vid1).values('token').first()['token']
    if request.method == 'POST' and rt1 == token:
        backenduser = request.data['backenduser']
        roletype = "backendteam"
        queryset = Orderrequirementdocuments.objects.filter(pk=pk)
        if queryset.exists():
            order = queryset[0]
            order.backenduser = backenduser
            order.roletype = roletype
            order.save(update_fields=['roletype', 'backenduser'])
            return Response(OrderrequirementdocumentsSerializer(order).data, status=status.HTTP_200_OK)


@api_view(['POST'])
def students_detai99(request, userid, token):
    vid1 = Mytoken.objects.filter(
        token=token).values('userid').first()['userid']
    rt1 = Mytoken.objects.filter(
        userid=vid1).values('token').first()['token']
    if request.method == 'POST' and rt1 == token:
        open_order = request.data['open_order']
        queries_in_uploading_document = request.data['queries_in_uploading_document']
        pending_documents = request.data['pending_documents']
        plan_expire = request.data['plan_expire']
        documents = request.data['documents']

        queryset = Orderoverview.objects.filter(userid=userid)
        if queryset.exists():
            order = queryset[0]
            order.open_order = open_order
            order.queries_in_uploading_document = queries_in_uploading_document
            order.pending_documents = pending_documents
            order.plan_expire = plan_expire
            order.documents = documents
            order.save(update_fields=[
                       'open_order', 'queries_in_uploading_document', 'pending_documents', 'plan_expire', 'documents'])
            return Response(CreateOrderoverviewSerializer(order).data, status=status.HTTP_200_OK)
        else:
            order = Orderoverview(userid=userid, open_order=open_order, queries_in_uploading_document=queries_in_uploading_document,
                                  pending_documents=pending_documents, plan_expire=plan_expire, documents=documents)
            order.save()
            return Response(CreateOrderoverviewSerializer(order).data, status=status.HTTP_201_CREATED)


# class CreateOrderoverviewView(APIView):
#     def put(self, request, userid, token):
#         try:
#             orderoverview = Orderoverview.objects.get(userid=userid)
#         except Orderoverview.DoesNotExist:
#             serializer = CreateOrderoverviewSerializer(data=request.data)
#             if serializer.is_valid():
#                 serializer.save()
#                 return Response(status=status.HTTP_201_CREATED)

#         vid1 = Mytoken.objects.filter(
#                 token=token).values('userid').first()['userid']
#         rt1 = Mytoken.objects.filter(
#                 userid=vid1).values('token').first()['token']
#         if request.method == 'PUT' and rt1 == token:
#             serializer = CreateOrderoverviewSerializer(
#                 orderoverview, data=request.data, context={'request': request})
#             if serializer.is_valid():
#                 serializer.save()
#                 return Response(status=status.HTTP_204_NO_CONTENT)
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CreateUserprofilesView(APIView):
    serializer_class = CreateUserprofilesSerializer

    def post(self, request, token):
        vid1 = Mytoken.objects.filter(
            token=token).values('userid').first()['userid']
        rt1 = Mytoken.objects.filter(
            userid=vid1).values('token').first()['token']
        if request.method == 'POST' and rt1 == token:
            serializer = self.serializer_class(data=request.data)

            if serializer.is_valid():
                first_name = serializer.data.get('first_name')
                last_name = serializer.data.get('last_name')
                email = serializer.data.get('email')
                phone = serializer.data.get('phone')
                gender = serializer.data.get('gender')
                street = serializer.data.get('street')
                city = serializer.data.get('city')
                state = serializer.data.get('state')
                pin = serializer.data.get('pin')
                pic = request.data['pic']
                vid = Mytoken.objects.filter(
                    token=token).values('userid').first()['userid']
                queryset = Userprofiles.objects.filter(userid=vid)
                if queryset.exists():
                    profile = queryset[0]
                    profile.first_name = first_name
                    profile.last_name = last_name
                    profile.email = email
                    profile.phone = phone
                    profile.gender = gender
                    profile.street = street
                    profile.city = city
                    profile.state = state
                    profile.pin = pin
                    profile.pic = pic
                    profile.save(update_fields=['first_name', 'last_name', 'email',
                                                'phone', 'gender', 'street', 'city', 'state', 'pin', 'pic'])
                    return Response(UserprofilesSerializer(profile).data, status=status.HTTP_200_OK)
                else:
                    profile = Userprofiles(userid=vid, first_name=first_name,
                                           last_name=last_name, email=email, phone=phone,
                                           gender=gender, street=street, city=city,
                                           state=state, pin=pin, pic=pic)
                    profile.save()
                    return Response(UserprofilesSerializer(profile).data, status=status.HTTP_201_CREATED)
            else:
                return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)


class CreateFeedbacksView(APIView):
    serializer_class = CreateFeedbacksSerializer

    def post(self, request, token):
        vid1 = Mytoken.objects.filter(
            token=token).values('userid').first()['userid']
        rt1 = Mytoken.objects.filter(
            userid=vid1).values('token').first()['token']
        if request.method == 'POST' and rt1 == token:
            serializer = self.serializer_class(data=request.data)
            if serializer.is_valid():
                name = serializer.data.get('name')
                email = serializer.data.get('email')
                feedback = serializer.data.get('feedback')
                vid = Mytoken.objects.filter(
                    token=token).values('userid').first()['userid']
                feed = Feedbacks(
                    userid=vid, name=name, email=email, feedback=feedback)
                feed.save()
                return Response(FeedbacksSerializer(feed).data, status=status.HTTP_201_CREATED)
            else:
                return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)


class CreateContactUsView(APIView):
    serializer_class = CreateContactUsSerializer

    def post(self, request, token):
        vid1 = Mytoken.objects.filter(
            token=token).values('userid').first()['userid']
        rt1 = Mytoken.objects.filter(
            userid=vid1).values('token').first()['token']
        if request.method == 'POST' and rt1 == token:
            serializer = self.serializer_class(data=request.data)
            if serializer.is_valid():
                name = serializer.data.get('name')
                email = serializer.data.get('email')
                message = serializer.data.get('message')
                vid = Mytoken.objects.filter(
                    token=token).values('userid').first()['userid']
                contact = ContactUs(
                    userid=vid, name=name, email=email, message=message)
                contact.save()
                return Response(ContactUsSerializer(contact).data, status=status.HTTP_201_CREATED)
            else:
                return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)


class PostView(APIView):
    def post(self, request, token):
        vid1 = Mytoken.objects.filter(
            token=token).values('userid').first()['userid']
        rt1 = Mytoken.objects.filter(
            userid=vid1).values('token').first()['token']
        if request.method == 'POST' and rt1 == token:
            email = request.data['email']

            # ml = Myemailid.objects.all().delete()
            # ml.save()
            m2 = Myemailid(email=email)
            m2.save()
        return Response(status=status.HTTP_201_CREATED)


class OlddataView(APIView):
    serializer_class = OlduserdataSerializer

    def post(self, request, token):
        vid1 = Mytoken.objects.filter(
            token=token).values('userid').first()['userid']
        rt1 = Mytoken.objects.filter(
            userid=vid1).values('token').first()['token']
        if request.method == 'POST' and rt1 == token:
            serializer = self.serializer_class(data=request.data)
            if serializer.is_valid():
                name = serializer.data.get('username')
                email = serializer.data.get('email')
                phone = serializer.data.get('phone')
                company = serializer.data.get('companyname')
                applicationname = serializer.data.get('applicationname')
                print("sdvsdv", applicationname)
                print("phoen", phone)
                ml = Myemailid(email=email)
                ml.save()
                # old = Olduserdata.objects.filter(email=email)
                # if old.exists():
                #     ol = old[0]
                #     ol.username = name
                #     ol.phone = phone
                #     ol.companyname = company
                #     ol.applicationname = applicationname
                #     ol.save(update_fields=[
                #             'username', 'phone', 'companyname', 'applicationname'])
                #     return Response(OlduserdataSerializer(ol).data, status=status.HTTP_201_CREATED)
                # else:
                contact = Olduserdata(username=name, email=email, phone=phone,
                                        companyname=company, applicationname=applicationname)
                contact.save()
                return Response(OlduserdataSerializer(contact).data, status=status.HTTP_201_CREATED)
            else:
                return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def updatedata(request, token):
    vid1 = Mytoken.objects.filter(
        token=token).values('userid').first()['userid']
    rt1 = Mytoken.objects.filter(
        userid=vid1).values('token').first()['token']
    if request.method == 'POST' and rt1 == token:
        docname = request.data['docname']
        email = request.data['email']
        print("fsdvsf", email)
        print("dfvvd", docname)
        docs = request.data['docs']
        print("gdfsg", docs)
        old = Olddocs.objects.filter(companyname=email, docname=docname)
        if old.exists():
            ol = old[0]
            if ".pdf" in str(docs) or ".PDF" in str(docs) :
                ol.document = docs
                print("old pdf")
                ol.save(update_fields=['docs'])
            else:
                ol.docs = docs
                print("old docs")
                ol.save(update_fields=['document'])
            return Response(OlddocsSerializer(ol).data, status=status.HTTP_200_OK)
        else:
            contact = Olddocs()
            if ".pdf" in str(docs)or ".PDF" in str(docs):
                contact.companyname = email
                contact.docname = docname
                contact.document = docs
                print("new pdf")
                contact.save()
            else:
                contact.companyname = email
                contact.docname = docname
                contact.docs = docs
                print("new docs")
                contact.save()
            return Response(OlddocsSerializer(contact).data, status=status.HTTP_201_CREATED)
    else:
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)


class CreateCompanyprofilesView(APIView):
    serializer_class = CreateCompanyprofilesSerializer

    def post(self, request, token):
        vid1 = Mytoken.objects.filter(
            token=token).values('userid').first()['userid']
        rt1 = Mytoken.objects.filter(
            userid=vid1).values('token').first()['token']
        if request.method == 'POST' and rt1 == token:
            serializer = self.serializer_class(data=request.data)
            if serializer.is_valid():
                company_name = serializer.data.get('company_name')
                pan_number = serializer.data.get('pan_number')
                gst_number = serializer.data.get('gst_number')
                aadhar_number = serializer.data.get('aadhar_number')
                company_phone = serializer.data.get('company_phone')
                company_street = serializer.data.get('company_street')
                company_city = serializer.data.get('company_city')
                company_state = serializer.data.get('company_state')
                company_pin = serializer.data.get('company_pin')
                vid = Mytoken.objects.filter(
                    token=token).values('userid').first()['userid']
                queryset = Companyprofiles.objects.filter(
                    userid=vid)
                if queryset.exists():
                    p = queryset[0]
                    p.company_name = company_name
                    p.pan_number = pan_number
                    p.gst_number = gst_number
                    p.aadhar_number = aadhar_number
                    p.company_phone = company_phone
                    p.company_street = company_street
                    p.company_city = company_city
                    p.company_state = company_state
                    p.company_pin = company_pin
                    p.save(update_fields=['company_name',
                                          'pan_number', 'gst_number',
                                          'aadhar_number', 'company_phone',
                                          'company_street', 'company_city', 'company_state', 'company_pin'])
                    return Response(CompanyprofilesSerializer(p).data, status=status.HTTP_201_CREATED)
                else:
                    contact = Companyprofiles(userid=vid, company_name=company_name,
                                              pan_number=pan_number, gst_number=gst_number,
                                              aadhar_number=aadhar_number, company_phone=company_phone,
                                              company_street=company_street, company_city=company_city, company_state=company_state, company_pin=company_pin)
                    contact.save()
                    return Response(CompanyprofilesSerializer(contact).data, status=status.HTTP_201_CREATED)
            else:
                return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)


class CreateCompanydocumentsView(APIView):
    serializer_class = CreateCompanydoumentsSerializer

    def post(self, request, token, *args, **kwargs):
        vid1 = Mytoken.objects.filter(
            token=token).values('userid').first()['userid']
        rt1 = Mytoken.objects.filter(
            userid=vid1).values('token').first()['token']
        if request.method == 'POST' and rt1 == token:
            serializer = self.serializer_class(data=request.data)
            if serializer.is_valid():
                # serializer.save()
                # return Response(serializer.data)
                vid = Mytoken.objects.filter(
                    token=token).values('userid').first()['userid']
                addhar = request.data['addhar']
                pan = request.data['pan']
                gst = request.data['gst']
                other = request.data['other']
                queryset = Companydouments.objects.filter(userid=vid)
                if queryset.exists():
                    contact = queryset[0]
                    contact.addhar = addhar
                    contact.pan = pan
                    contact.gst = gst
                    contact.other = other
                    contact.save(update_fields=[
                                 'addhar', 'pan', 'gst', 'other'])
                    return Response(CompanydoumentsSerializer(contact).data, status=status.HTTP_201_CREATED)
                else:
                    contact = Companydouments(
                        userid=vid, addhar=addhar, pan=pan, gst=gst, other=other)
                    contact.save()
                    return Response(CompanydoumentsSerializer(contact).data, status=status.HTTP_201_CREATED)
            else:
                vid = Mytoken.objects.filter(
                    token=token).values('userid').first()['userid']
                queryset = Companydouments.objects.filter(userid=vid)
                if request.data["addhar"] != 'null':
                    addhar = request.data['addhar']
                    if queryset.exists():
                        contact = queryset[0]
                        contact.addhar = addhar
                        contact.save(update_fields=['addhar'])
                    else:
                        contact = Companydouments(
                            userid=vid, addhar=addhar)
                        contact.save()
                if request.data["pan"] != 'null':
                    pan = request.data['pan']
                    if queryset.exists():
                        contact = queryset[0]
                        contact.pan = pan
                        contact.save(update_fields=['pan'])
                    else:
                        contact = Companydouments(
                            userid=vid,  pan=pan)
                        contact.save()
                if request.data['gst'] != 'null':
                    gst = request.data['gst']
                    if queryset.exists():
                        contact = queryset[0]
                        contact.gst = gst
                        contact.save(update_fields=['gst'])
                    else:
                        contact = Companydouments(
                            userid=vid, gst=gst)
                        contact.save()
                if request.data["other"] != 'null':
                    other = request.data['other']
                    if queryset.exists():
                        contact = queryset[0]
                        contact.other = other
                        contact.save(update_fields=['other'])
                    else:
                        contact = Companydouments(
                            userid=vid, other=other)
                        contact.save()
                return Response(CompanydoumentsSerializer(contact).data, status=status.HTTP_201_CREATED)


class CreateOrderrequirementsView(APIView):
    serializer_class = CreateOrderrequirementsSerializer

    def post(self, request, token):
        vid1 = Mytoken.objects.filter(
            token=token).values('userid').first()['userid']
        rt1 = Mytoken.objects.filter(
            userid=vid1).values('token').first()['token']
        if request.method == 'POST' and rt1 == token:
            serializer = self.serializer_class(data=request.data)
            if serializer.is_valid():
                bussinessoperationalstatus = serializer.data.get(
                    'bussinessoperationalstatus')
                ageofbussiness = serializer.data.get('ageofbussiness')
                numberofemployees = serializer.data.get('numberofemployees')
                bussinessarea_category = serializer.data.get(
                    'bussinessarea_category')
                servicename = serializer.data.get('servicename')
                vid = Mytoken.objects.filter(
                    token=token).values('userid').first()['userid']
                queryset = Orderrequirements.objects.filter(
                    userid=vid, servicename=servicename)
                if queryset.exists():
                    p = queryset[0]
                    p.bussinessoperationalstatus = bussinessoperationalstatus
                    p.ageofbussiness = ageofbussiness
                    p.numberofemployees = numberofemployees
                    p.bussinessarea_category = bussinessarea_category
                    p.save(update_fields=[
                           'bussinessoperationalstatus', 'ageofbussiness', 'numberofemployees', 'bussinessarea_category'])
                    return Response(OrderrequirementsSerializer(p).data, status=status.HTTP_201_CREATED)
                else:
                    contact = Orderrequirements(
                        userid=vid, bussinessoperationalstatus=bussinessoperationalstatus, ageofbussiness=ageofbussiness, numberofemployees=numberofemployees, bussinessarea_category=bussinessarea_category, servicename=servicename)
                    contact.save()
                    return Response(OrderrequirementsSerializer(contact).data, status=status.HTTP_201_CREATED)
            else:
                return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)


class CreateOrderrequirementdocumentsView(APIView):
    serializer_class = CreateOrderrequirementdocumentsSerializer

    def post(self, request, token, *args, **kwargs):
        vid1 = Mytoken.objects.filter(
            token=token).values('userid').first()['userid']
        rt1 = Mytoken.objects.filter(
            userid=vid1).values('token').first()['token']
        if request.method == 'POST' and rt1 == token:
            serializer = self.serializer_class(data=request.data)

            if serializer.is_valid():
                vid = Mytoken.objects.filter(
                    token=token).values('userid').first()['userid']
                name = User.objects.values_list('name', flat=True).get(id=vid)
                email = User.objects.values_list(
                    'email', flat=True).get(id=vid)
                directorsphotograph = request.data['directorsphotograph']
                rentagrement = request.data['rentagrement']
                photoofproduct = request.data['photoofproduct']
                photoofpremises = request.data['photoofpremises']
                electricitybill = request.data['electricitybill']
                incorporationdoc = request.data['incorporationdoc']
                servicename = request.data['servicename']
                partnershipdeed = request.data['partnershipdeed']
                otherdoc = request.data['otherdoc']
                documentstatus = "Pending"
                queryset = Orderrequirementdocuments.objects.filter(
                    userid=vid, servicename=servicename)
                if queryset.exists():
                    p = queryset[0]
                    p.backenduser = "Not Assign"
                    p.status1 = "Pending"
                    p.documentstatus = documentstatus
                    p.name = name
                    p.email = email
                    p.paymentstatus = "Pending"
                    p.otherdoc = otherdoc
                    p.partnershipdeed = partnershipdeed
                    p.incorporationdoc = incorporationdoc
                    p.electricitybill = electricitybill
                    p.photoofpremises = photoofpremises
                    p.photoofproduct = photoofproduct
                    p.rentagrement = rentagrement
                    p.directorsphotograph = directorsphotograph
                    p.save(update_fields=['backenduser', 'status1', 'documentstatus', 'name', 'email', 'paymentstatus', 'incorporationdoc',
                           'electricitybill', 'photoofpremises', 'photoofproduct', 'rentagrement', 'directorsphotograph', 'otherdoc', 'partnershipdeed'])
                    return Response(OrderrequirementdocumentsSerializer(p).data, status=status.HTTP_201_CREATED)
                else:
                    contact = Orderrequirementdocuments(
                        userid=vid, backenduser="Not Assign", status1="Pending", documentstatus=documentstatus, name=name, email=email, paymentstatus="Pending", directorsphotograph=directorsphotograph, rentagrement=rentagrement, photoofproduct=photoofproduct, photoofpremises=photoofpremises, electricitybill=electricitybill, incorporationdoc=incorporationdoc, partnershipdeed=partnershipdeed, otherdoc=otherdoc, servicename=servicename)
                    contact.save()
                    return Response(OrderrequirementdocumentsSerializer(contact).data, status=status.HTTP_201_CREATED)
            else:
                vid = Mytoken.objects.filter(
                    token=token).values('userid').first()['userid']
                name = User.objects.values_list(
                    'name', flat=True).get(id=vid)
                email = User.objects.values_list(
                    'email', flat=True).get(id=vid)
                documentstatus = "Pending"
                servicename = request.data['servicename']
                queryset = Orderrequirementdocuments.objects.filter(
                    userid=vid, servicename=servicename)
                if request.data["directorsphotograph"] != 'null':
                    directorsphotograph = request.data['directorsphotograph']
                    if queryset.exists():
                        p = queryset[0]
                        p.backenduser = "Not Assign"
                        p.status1 = "Pending"
                        p.documentstatus = documentstatus
                        p.name = name
                        p.email = email
                        p.paymentstatus = "Pending"
                        p.directorsphotograph = directorsphotograph
                        p.save(update_fields=['backenduser', 'status1', 'documentstatus',
                               'name', 'email', 'paymentstatus', 'directorsphotograph'])
                    else:
                        contact = Orderrequirementdocuments(
                            userid=vid, backenduser="Not Assign", status1="Pending", documentstatus=documentstatus, name=name, email=email, paymentstatus="Pending", directorsphotograph=directorsphotograph, servicename=servicename)
                        contact.save()
                if request.data["rentagrement"] != 'null':
                    rentagrement = request.data['rentagrement']
                    if queryset.exists():
                        p = queryset[0]
                        p.backenduser = "Not Assign"
                        p.status1 = "Pending"
                        p.documentstatus = documentstatus
                        p.name = name
                        p.email = email
                        p.paymentstatus = "Pending"
                        p.rentagrement = rentagrement
                        p.save(update_fields=[
                               'backenduser', 'status1', 'documentstatus', 'name', 'email', 'paymentstatus', 'rentagrement'])
                    else:
                        contact = Orderrequirementdocuments(
                            userid=vid, backenduser="Not Assign", status1="Pending", documentstatus=documentstatus, name=name, email=email, paymentstatus="Pending", rentagrement=rentagrement, servicename=servicename)
                        contact.save()
                if request.data["photoofproduct"] != 'null':
                    photoofproduct = request.data['photoofproduct']
                    if queryset.exists():
                        p = queryset[0]
                        p.backenduser = "Not Assign"
                        p.status1 = "Pending"
                        p.documentstatus = documentstatus
                        p.name = name
                        p.email = email
                        p.paymentstatus = "Pending"
                        p.photoofproduct = photoofproduct
                        p.save(update_fields=[
                               'backenduser', 'status1', 'documentstatus', 'name', 'email', 'paymentstatus', 'photoofproduct'])
                    else:
                        contact = Orderrequirementdocuments(
                            userid=vid, backenduser="Not Assign", status1="Pending", documentstatus=documentstatus, name=name, email=email, paymentstatus="Pending", photoofproduct=photoofproduct, servicename=servicename)
                        contact.save()
                if request.data["photoofpremises"] != 'null':
                    photoofpremises = request.data['photoofpremises']
                    if queryset.exists():
                        p = queryset[0]
                        p.backenduser = "Not Assign"
                        p.status1 = "Pending"
                        p.documentstatus = documentstatus
                        p.name = name
                        p.email = email
                        p.paymentstatus = "Pending"
                        p.photoofpremises = photoofpremises
                        p.save(update_fields=['backenduser', 'status1', 'documentstatus',
                               'name', 'email', 'paymentstatus', 'photoofpremises'])
                    else:
                        contact = Orderrequirementdocuments(
                            userid=vid, backenduser="Not Assign", status1="Pending", documentstatus=documentstatus, name=name, email=email, paymentstatus="Pending", photoofpremises=photoofpremises, servicename=servicename)
                        contact.save()
                if request.data["electricitybill"] != 'null':
                    electricitybill = request.data['electricitybill']

                    if queryset.exists():
                        p = queryset[0]
                        p.backenduser = "Not Assign"
                        p.status1 = "Pending"
                        p.documentstatus = documentstatus
                        p.name = name
                        p.email = email
                        p.paymentstatus = "Pending"
                        p.electricitybill = electricitybill
                        p.save(update_fields=['backenduser', 'status1', 'documentstatus',
                               'name', 'email', 'paymentstatus', 'electricitybill'])
                    else:
                        contact = Orderrequirementdocuments(
                            userid=vid, backenduser="Not Assign", status1="Pending", documentstatus=documentstatus, name=name, email=email, paymentstatus="Pending", electricitybill=electricitybill, servicename=servicename)
                        contact.save()
                if request.data["incorporationdoc"] != 'null':
                    incorporationdoc = request.data['incorporationdoc']
                    if queryset.exists():
                        p = queryset[0]
                        p.backenduser = "Not Assign"
                        p.status1 = "Pending"
                        p.documentstatus = documentstatus
                        p.name = name
                        p.email = email
                        p.paymentstatus = "Pending"
                        p.incorporationdoc = incorporationdoc
                        p.save(update_fields=['backenduser', 'status1', 'documentstatus',
                               'name', 'email', 'paymentstatus', 'incorporationdoc'])
                    else:
                        contact = Orderrequirementdocuments(
                            userid=vid, backenduser="Not Assign", status1="Pending", documentstatus=documentstatus, name=name, email=email, paymentstatus="Pending", incorporationdoc=incorporationdoc, servicename=servicename)
                        contact.save()
                if request.data["partnershipdeed"] != 'null':
                    partnershipdeed = request.data['partnershipdeed']
                    if queryset.exists():
                        p = queryset[0]
                        p.backenduser = "Not Assign"
                        p.status1 = "Pending"
                        p.documentstatus = documentstatus
                        p.name = name
                        p.email = email
                        p.paymentstatus = "Pending"
                        p.partnershipdeed = partnershipdeed
                        p.save(update_fields=['backenduser', 'status1', 'documentstatus',
                               'name', 'email', 'paymentstatus', 'partnershipdeed'])
                    else:
                        contact = Orderrequirementdocuments(
                            userid=vid, backenduser="Not Assign", status1="Pending", documentstatus=documentstatus, name=name, email=email, paymentstatus="Pending", partnershipdeed=partnershipdeed, servicename=servicename)
                        contact.save()
                if request.data["otherdoc"] != 'null':
                    otherdoc = request.data['otherdoc']
                    if queryset.exists():
                        p = queryset[0]
                        p.backenduser = "Not Assign"
                        p.status1 = "Pending"
                        p.documentstatus = documentstatus
                        p.name = name
                        p.email = email
                        p.paymentstatus = "Pending"
                        p.otherdoc = otherdoc
                        p.save(update_fields=[
                               'backenduser', 'status1', 'documentstatus', 'name', 'email', 'paymentstatus', 'otherdoc'])
                    else:
                        contact = Orderrequirementdocuments(
                            userid=vid, backenduser="Not Assign", status1="Pending", documentstatus=documentstatus, name=name, email=email, paymentstatus="Pending", otherdoc=otherdoc, servicename=servicename)
                        contact.save()
                return Response(OrderrequirementdocumentsSerializer(contact).data, status=status.HTTP_201_CREATED)


@api_view(['POST'])
def students_detail7(request, pk, token):
    vid1 = Mytoken.objects.filter(
        token=token).values('userid').first()['userid']
    rt1 = Mytoken.objects.filter(
        userid=vid1).values('token').first()['token']
    if request.method == 'POST' and rt1 == token:
        amount = request.data['amount']
        paymentstatus = request.data['paymentstatus']
        # print(paymentstatus)
        queryset = Orderrequirementdocuments.objects.filter(pk=pk)
        if queryset.exists():
            order = queryset[0]
            order.amount = amount
            order.paymentstatus = paymentstatus
            order.save(update_fields=['amount', 'paymentstatus'])
            return Response(OrderrequirementdocumentsSerializer(order).data, status=status.HTTP_200_OK)
        else:
            order = Orderrequirementdocuments(
                amount=amount, paymentstatus=paymentstatus)
            order.save()
            return Response(OrderrequirementdocumentsSerializer(order).data, status=status.HTTP_201_CREATED)


@api_view(['POST'])
def students_detail8(request, pk, token):
    vid1 = Mytoken.objects.filter(
        token=token).values('userid').first()['userid']
    rt1 = Mytoken.objects.filter(
        userid=vid1).values('token').first()['token']
    if request.method == 'POST' and rt1 == token:
        documentstatus = request.data['documentstatus']
        queryset = Orderrequirementdocuments.objects.filter(pk=pk)
        if queryset.exists():
            order = queryset[0]
            order.documentstatus = documentstatus
            order.save(update_fields=['documentstatus'])
            return Response(OrderrequirementdocumentsSerializer(order).data, status=status.HTTP_200_OK)
        else:
            order = Orderrequirementdocuments(
                documentstatus=documentstatus)
            order.save()
            return Response(OrderrequirementdocumentsSerializer(order).data, status=status.HTTP_201_CREATED)


@api_view(['POST'])
def students_detail1(request, pk, token):
    vid1 = Mytoken.objects.filter(
        token=token).values('userid').first()['userid']
    rt1 = Mytoken.objects.filter(
        userid=vid1).values('token').first()['token']
    if request.method == 'POST' and rt1 == token:
        certificate = request.data['certificate']
        status1 = request.data['status1']
        queryset = Orderrequirementdocuments.objects.filter(pk=pk)
        if queryset.exists():
            order = queryset[0]
            order.certificate = certificate
            order.status1 = status1
            order.save(update_fields=['certificate', 'status1'])
            return Response(OrderrequirementdocumentsSerializer(order).data, status=status.HTTP_200_OK)
        else:
            order = Orderrequirementdocuments(
                certificate=certificate, status1=status1)
            order.save()
            return Response(OrderrequirementdocumentsSerializer(order).data, status=status.HTTP_201_CREATED)


@api_view(['POST'])
def students_detail3(request, pk, token):
    vid1 = Mytoken.objects.filter(
        token=token).values('userid').first()['userid']
    rt1 = Mytoken.objects.filter(
        userid=vid1).values('token').first()['token']
    if request.method == 'POST' and rt1 == token:
        reason = request.data['reason']
        status1 = request.data['status1']
        queryset = Orderrequirementdocuments.objects.filter(pk=pk)
        if queryset.exists():
            order = queryset[0]
            order.reason = reason
            order.status1 = status1
            order.save(update_fields=['reason', 'status1'])
            return Response(OrderrequirementdocumentsSerializer(order).data, status=status.HTTP_200_OK)
        else:
            order = Orderrequirementdocuments(reason=reason, status1=status1)
            order.save()
            return Response(OrderrequirementdocumentsSerializer(order).data, status=status.HTTP_201_CREATED)

# Post Function end

# Get Function Start


@api_view(['GET'])
def students_list(request, token):
    vid1 = Mytoken.objects.filter(
        token=token).values('userid').first()['userid']
    rt1 = Mytoken.objects.filter(
        userid=vid1).values('token').first()['token']
    if request.method == 'GET' and rt1 == token:
        data = Orderrequirementdocuments.objects.all()
        serializer = OrderrequirementdocumentsSerializer(
            data, context={'request': request}, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def students_list20(request, token):
    vid1 = Mytoken.objects.filter(
        token=token).values('userid').first()['userid']
    rt1 = Mytoken.objects.filter(
        userid=vid1).values('token').first()['token']
    if request.method == 'GET' and rt1 == token:
        data = ContactUs.objects.all()
        serializer = ContactUsSerializer(
            data, context={'request': request}, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def getolddata(request, token):
    vid1 = Mytoken.objects.filter(
        token=token).values('userid').first()['userid']
    rt1 = Mytoken.objects.filter(
        userid=vid1).values('token').first()['token']
    if request.method == 'GET' and rt1 == token:
        data = Olduserdata.objects.all()
        serializer = OlduserdataSerializer(
            data, context={'request': request}, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def students_list19(request, token):
    vid1 = Mytoken.objects.filter(
        token=token).values('userid').first()['userid']
    rt1 = Mytoken.objects.filter(
        userid=vid1).values('token').first()['token']
    if request.method == 'GET' and rt1 == token:
        data = Feedbacks.objects.all()
        serializer = FeedbacksSerializer(
            data, context={'request': request}, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def students_list5(request, token):
    vid1 = Mytoken.objects.filter(
        token=token).values('userid').first()['userid']
    rt1 = Mytoken.objects.filter(
        userid=vid1).values('token').first()['token']
    if request.method == 'GET' and rt1 == token:
        data = Orderrequirementdocuments.objects.filter(status1='completed')
        serializer = OrderrequirementdocumentsSerializer(
            data, context={'request': request}, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def post1(request, token):
    vid1 = Mytoken.objects.filter(
        token=token).values('userid').first()['userid']
    rt1 = Mytoken.objects.filter(
        userid=vid1).values('token').first()['token']
    global flag3
    if request.method == 'GET' and rt1 == token and flag3 == True:
        global userid1, servicename1
        if userid1 is not None and servicename1 is not None:
            data = Orderrequirements.objects.filter(
                userid=userid1, servicename=servicename1)
            serializer = OrderrequirementsSerializer(
                data, context={'request': request}, many=True)
            userid1 = None
            servicename1 = None
            return Response(serializer.data)


@api_view(['GET'])
def students_list13(request, token):
    vid1 = Mytoken.objects.filter(
        token=token).values('userid').first()['userid']
    rt1 = Mytoken.objects.filter(
        userid=vid1).values('token').first()['token']
    if request.method == 'GET' and rt1 == token:
        students_list12()
        data = Countorders.objects.all()
        serializer = CountordersSerializer(
            data, context={'request': request}, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def students_list6(request, token):
    vid1 = Mytoken.objects.filter(
        token=token).values('userid').first()['userid']
    rt1 = Mytoken.objects.filter(
        userid=vid1).values('token').first()['token']
    if request.method == 'GET' and rt1 == token:
        data = Orderrequirementdocuments.objects.filter(status1='cancel')
        serializer = OrderrequirementdocumentsSerializer(
            data, context={'request': request}, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def backend_userdata_list(request, token):
    vid1 = Mytoken.objects.filter(
        token=token).values('userid').first()['userid']
    rt1 = Mytoken.objects.filter(
        userid=vid1).values('token').first()['token']
    if request.method == 'GET' and rt1 == token:
        name = Mytoken.objects.filter(
            userid=vid1).values('username').first()['username']
        data = Orderrequirementdocuments.objects.filter(
            backenduser=name, roletype='backendteam')
        serializer = OrderrequirementdocumentsSerializer(
            data, context={'request': request}, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def docs_list(request, token):
    vid1 = Mytoken.objects.filter(
        token=token).values('userid').first()['userid']
    rt1 = Mytoken.objects.filter(
        userid=vid1).values('token').first()['token']
    global flag2
    if request.method == 'GET' and rt1 == token and flag2 == True:
        userid = Myuserid.objects.last().userid
        if userid is not None:
            data = Companydouments.objects.filter(
                userid=userid)
            serializer = CompanydoumentsSerializer(
                data, context={'request': request}, many=True)
            # allrows = Myuserid.objects.all()
            # allrows.delete()
            # userid=None
            return Response(serializer.data)
        else:
            return Response({'Bad Request': 'No Found data...'}, status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
def docs_list98(request, token):
    vid1 = Mytoken.objects.filter(
        token=token).values('userid').first()['userid']
    rt1 = Mytoken.objects.filter(
        userid=vid1).values('token').first()['token']
    global flag2
    if request.method == 'GET' and rt1 == token and flag2 == True:
        userid = Myuserid.objects.last().userid
        if userid is not None:
            data = Orderrequirementdocuments.objects.filter(
                userid=userid)
            serializer = OrderrequirementdocumentsSerializer(
                data, context={'request': request}, many=True)
            allrows = Myuserid.objects.all()
            allrows.delete()
            # userid=None
            return Response(serializer.data)
        else:
            return Response({'Bad Request': 'No Found data...'}, status=status.HTTP_204_NO_CONTENT)

# class UserdocsView(generics.ListAPIView):
#     serializer_class = OrderrequirementdocumentsSerializer

#     def get_queryset(self):
#         userid = Myuserid.objects.last().userid
#         token = self.kwargs['token']
#         vid1 = Mytoken.objects.filter(
#             token=token).values('userid').first()['userid']
#         rt1 = Mytoken.objects.filter(
#             userid=vid1).values('token').first()['token']
#         if rt1 == token:
#             if userid:
#                 return Orderrequirementdocuments.objects.filter(userid=userid)
#             return Orderrequirementdocuments.objects.all()


# @api_view(['GET'])
# def docs_list99(request, token):
#     vid1 = Mytoken.objects.filter(
#         token=token).values('userid').first()['userid']
#     rt1 = Mytoken.objects.filter(
#         userid=vid1).values('token').first()['token']
#     if request.method == 'GET' and rt1 == token:
#         email = Myemailid.objects.last().email
#         if email is not None:
#             data = Olddocs.objects.filter(
#                 email=email)
#             serializer = OlddocsSerializer(
#                 data, context={'request': request}, many=True)
#             allrows = Myemailid.objects.all()
#             allrows.delete()
#             return Response(serializer.data)
#         else:
#             return Response({'Bad Request': 'No Found data...'}, status=status.HTTP_204_NO_CONTENT)


class Mondata(generics.ListAPIView):
    serializer_class = MonthdataSerializer

    def get_queryset(self):
        students_list16()
        token = self.kwargs['token']
        vid1 = Mytoken.objects.filter(
            token=token).values('userid').first()['userid']
        rt1 = Mytoken.objects.filter(
            userid=vid1).values('token').first()['token']
        if rt1 == token:
            current_month = int(datetime.now().strftime("%m"))
            return Monthdata.objects.filter(monthid=current_month)


class OrderdocumentuserView(APIView):
    def get(self, request, servicename, token):
        vid1 = Mytoken.objects.filter(
            token=token).values('userid').first()['userid']
        rt1 = Mytoken.objects.filter(
            userid=vid1).values('token').first()['token']
        if request.method == 'GET' and rt1 == token:
            vid = Mytoken.objects.filter(
                token=token).values('userid').first()['userid']
            data = Orderrequirementdocuments.objects.filter(
                userid=vid, servicename=servicename)
            serializer = OrderrequirementdocumentsSerializer(
                data, context={'request': request}, many=True)
            return Response(serializer.data)


class UserprofilesView(generics.ListAPIView):
    serializer_class = UserprofilesSerializer

    def get_queryset(self):
        token = self.kwargs['token']
        vid1 = Mytoken.objects.filter(
            token=token).values('userid').first()['userid']
        rt1 = Mytoken.objects.filter(
            userid=vid1).values('token').first()['token']
        if rt1 == token:
            vid = Mytoken.objects.filter(
                token=token).values('userid').first()['userid']
            if vid:
                return Userprofiles.objects.filter(userid=vid)
            return Userprofiles.objects.all()


class UserdocumentsView(generics.ListAPIView):
    serializer_class = OrderrequirementdocumentsSerializer

    def get_queryset(self):
        token = self.kwargs['token']
        vid1 = Mytoken.objects.filter(
            token=token).values('userid').first()['userid']
        rt1 = Mytoken.objects.filter(
            userid=vid1).values('token').first()['token']
        if rt1 == token:
            vid = Mytoken.objects.filter(
                token=token).values('userid').first()['userid']
            if vid:
                return Orderrequirementdocuments.objects.filter(userid=vid)
            return Orderrequirementdocuments.objects.all()


class CompanydoumentsView(generics.ListAPIView):
    serializer_class = CompanydoumentsSerializer

    def get_queryset(self):
        token = self.kwargs['token']
        vid1 = Mytoken.objects.filter(
            token=token).values('userid').first()['userid']
        rt1 = Mytoken.objects.filter(
            userid=vid1).values('token').first()['token']
        if rt1 == token:
            vid = Mytoken.objects.filter(
                token=token).values('userid').first()['userid']
            if vid:
                return Companydouments.objects.filter(userid=vid)
            return Companydouments.objects.all()


class CompanyprofilesView(generics.ListAPIView):
    serializer_class = CompanyprofilesSerializer

    def get_queryset(self):
        token = self.kwargs['token']
        vid1 = Mytoken.objects.filter(
            token=token).values('userid').first()['userid']
        rt1 = Mytoken.objects.filter(
            userid=vid1).values('token').first()['token']
        if rt1 == token:
            vid = Mytoken.objects.filter(
                token=token).values('userid').first()['userid']
            if vid:
                return Companyprofiles.objects.filter(userid=vid)
            return Companyprofiles.objects.all()


class OrderoverviewView(generics.ListAPIView):
    serializer_class = OrderoverviewSerializer

    def get_queryset(self):
        token = self.kwargs['token']
        vid1 = Mytoken.objects.filter(
            token=token).values('userid').first()['userid']
        rt1 = Mytoken.objects.filter(
            userid=vid1).values('token').first()['token']
        if rt1 == token:
            vid = Mytoken.objects.filter(
                token=token).values('userid').first()['userid']
            if vid:
                return Orderoverview.objects.filter(userid=vid)
            return Orderoverview.objects.all()


# class InvoicesView(generics.ListAPIView):
#     serializer_class = InvoicesSerializer

#     def get_queryset(self):
#         vid = Mytoken.objects.filter(
#                 token=token).values('userid').first()['userid']
#         if vid:
#             return Invoices.objects.filter(userid=vid)
#         return Invoices.objects.all()


# class OrderrequirementsView(generics.ListAPIView):
#     serializer_class = OrderrequirementsSerializer

#     def get_queryset(self):
#         vid = Mytoken.objects.filter(
#                 token=token).values('userid').first()['userid']
#         if vid:
#             return Orderrequirements.objects.filter(userid=vid)
#         return Orderrequirements.objects.all()


class NormaluserView(APIView):
    def get(self, request, token):
        vid1 = Mytoken.objects.filter(
            token=token).values('userid').first()['userid']
        rt1 = Mytoken.objects.filter(
            userid=vid1).values('token').first()['token']
        if request.method == 'GET' and rt1 == token:
            data = Orderrequirementdocuments.objects.values(
                'servicename').distinct()
            serializer_class = OrderrequirementdocumentsSerializer(
                data, context={'request': request}, many=True)
            return Response(serializer_class.data)


class OlduserView(APIView):
    def get(self, request, token):
        vid1 = Mytoken.objects.filter(
            token=token).values('userid').first()['userid']
        rt1 = Mytoken.objects.filter(
            userid=vid1).values('token').first()['token']
        if request.method == 'GET' and rt1 == token:
            data = Olduserdata.objects.values(
                'applicationname').distinct()
            serializer_class = OlduserdataSerializer(
                data, context={'request': request}, many=True)
            return Response(serializer_class.data)


@api_view(['POST'])
def updatedet(request, token):
    vid1 = Mytoken.objects.filter(
        token=token).values('userid').first()['userid']
    rt1 = Mytoken.objects.filter(
        userid=vid1).values('token').first()['token']
    if request.method == 'POST' and rt1 == token:
        updatevalue = request.data['updatevalue']
        fieldname = request.data['fieldname']
        email = request.data['email']
        useremail=request.data['useremail']
        old = Olduserdata.objects.filter(companyname=email,oldid=useremail)
        if fieldname == 'User Name':
            if old.exists():
                ol = old[0]
                ol.username = updatevalue
                ol.save(update_fields=['username'])
            return Response(OlduserdataSerializer(ol).data, status=status.HTTP_200_OK)
        if fieldname == 'Phone':
            if old.exists():
                ol = old[0]
                ol.phone = updatevalue
                ol.save(update_fields=['phone'])
            return Response(OlduserdataSerializer(ol).data, status=status.HTTP_200_OK)
        if fieldname == 'Email':
            if old.exists():
                ol = old[0]
                ol.email = updatevalue
                ol.save(update_fields=['email'])
            return Response(OlduserdataSerializer(ol).data, status=status.HTTP_200_OK)
        if fieldname == 'Application Name':
            if old.exists():
                ol = old[0]
                ol.applicationname = updatevalue
                ol.save(update_fields=['applicationname'])
            return Response(OlduserdataSerializer(ol).data, status=status.HTTP_200_OK)
    else:
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)


class UseremailView(APIView):
    def get(self, request, token):
        vid1 = Mytoken.objects.filter(
            token=token).values('userid').first()['userid']
        rt1 = Mytoken.objects.filter(
            userid=vid1).values('token').first()['token']
        if request.method == 'GET' and rt1 == token:
            data = Olduserdata.objects.values(
                'companyname').distinct()
            serializer_class = OlduserdataSerializer(
                data, context={'request': request}, many=True)
            return Response(serializer_class.data)


# GET Function end
logger = logging.getLogger()
fh = logging.FileHandler('log.txt')
logger.addHandler(fh)
