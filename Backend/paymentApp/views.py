import json
import razorpay
from rest_framework import  generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from .serializers import *
# from backendApp.views import useridxlist
from dataformApp.models import Mytoken




@api_view(['POST'])
def start_payment(request,token):
    amount = request.data['amount']
    name = request.data['name']
    vid = Mytoken.objects.filter(
                token=token).values('userid').first()['userid']
    # setup razorpay client this is the client to whome user is paying money that's you
    client = razorpay.Client(auth=(('rzp_test_YZanJGdFBjZpu8'), ('gTjQxW7dpxd49OdJSwsZXf4y')))
    payment = client.order.create({"amount": int(amount) * 100, 
                                   "currency": "INR", 
                                   "payment_capture": "1"})
    order = Payment.objects.create(servicename=name, 
                                 order_amount=amount, 
                                 order_payment_id=payment['id'],
                                 userid=vid)

    serializer = PaymentSerializer(order)
    data = {
        "payment": payment,
        "order": serializer.data
    }
    return Response(data)


@api_view(['POST'])
def handle_payment_success(request):
    res = json.loads(request.data["response"])
    ord_id = ""
    raz_pay_id = ""
    raz_signature = ""

    for key in res.keys():
        if key == 'razorpay_order_id':
            ord_id = res[key]
        elif key == 'razorpay_payment_id':
            raz_pay_id = res[key]
        elif key == 'razorpay_signature':
            raz_signature = res[key]

   
    order = Payment.objects.get(order_payment_id=ord_id)
    data = {
        'razorpay_order_id': ord_id,
        'razorpay_payment_id': raz_pay_id,
        'razorpay_signature': raz_signature
    }

    client = razorpay.Client(auth=(('rzp_test_YZanJGdFBjZpu8'), ('gTjQxW7dpxd49OdJSwsZXf4y')))
    check = client.utility.verify_payment_signature(data)

    if check is not None:
        print("Redirect to error url or error page")
        return Response({'error': 'Something went wrong'})

   
    order.isPaid = True
    order.save()

    res_data = {
        'message': 'payment successfully received!'
    }

    return Response(res_data)



class PaymentView(generics.ListAPIView):
    # queryset = Payment.objects.all()
    serializer_class = PaymentSerializer
    
    def get_queryset(self):
        token = self.kwargs['token']
        vid1 = Mytoken.objects.filter(
                token=token).values('userid').first()['userid']
        global used
        used=vid1
        rt1 = Mytoken.objects.filter(
                userid=vid1).values('token').first()['token']
        if rt1==token:
            vid = Mytoken.objects.filter(
                token=token).values('userid').first()['userid']
            if vid:
                return Payment.objects.filter(userid=vid)
            return Payment.objects.all()
