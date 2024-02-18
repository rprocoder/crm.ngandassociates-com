
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from dataformApp.models import Mytoken

from backendApp.serializers import SendPasswordResetEmailSerializer, UserChangePasswordSerializer, UserLoginSerializer, UserPasswordResetSerializer, UserProfileSerializer, UserRegistrationSerializer
from django.contrib.auth import authenticate
from backendApp.renderers import UserRenderer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from dataformApp.serializers import *


# Generate Token Manually
def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }


class UserRegistrationView(APIView):
    renderer_classes = [UserRenderer]

    def post(self, request, format=None):
        serializer = UserRegistrationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token = get_tokens_for_user(user)
        return Response({'token': token, 'msg': 'Registration Successful'}, status=status.HTTP_201_CREATED)






class UserLoginView(APIView):
    renderer_classes = [UserRenderer]

    def post(self, request, format=None):
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        email = serializer.data.get('email')
        password = serializer.data.get('password')
        user = authenticate(email=email, password=password)
        if user is not None:
            token = get_tokens_for_user(user)
            rt = Mytoken.objects.filter(userid=user.id)
            if rt.exists():
                rt = rt[0]
                rt.token = token['access']
                rt.save(update_fields=['token'])
            else:
                rt = Mytoken(userid=user.id, token=token['access'],username=user.name)
                rt.save()            
            if not self.request.session.exists(self.request.session.session_key):
                self.request.session.create()
                request.session['vid'] = user.id
                # print(request.session['vid'])
            return Response({'token': token, 'is_admin': user.is_admin, 'roletype': user.roletype, 'msg': 'Login Success'}, status=status.HTTP_200_OK)
        else:
            return Response({'errors': {'non_field_errors': ['Email or Password is not Valid']}}, status=status.HTTP_404_NOT_FOUND)


class UserRegistrationView1(APIView):
    def post(self, request, token):
        vid1 = Mytoken.objects.filter(
                token=token).values('userid').first()['userid']
        rt1 = Mytoken.objects.filter(
                userid=vid1).values('token').first()['token']
        if request.method == 'POST' and rt1 == token:
            email = request.data['email']
            password = request.data['password']
            name = request.data['name']
            print(request.data['roletype'])
            queryset = User.objects.filter(email=email, name=name)
            if queryset.exists():
                order = queryset[0]
                order.name = name
                order.set_password(password)
                order.roletype = request.data['roletype']
                order.save(update_fields=['name', 'roletype', 'password'])
                return Response(UserRegistrationSerializer(order).data, status=status.HTTP_200_OK)
            else:

                order = User(
                    email=email, name=request.data['name'], roletype=request.data['roletype'], tc=True)
                order.set_password(password)
                order.save()
                return Response(UserRegistrationSerializer(order).data, status=status.HTTP_201_CREATED)


class BackendUserView(APIView):
    def get(self, request, token):
        vid1 = Mytoken.objects.filter(
                token=token).values('userid').first()['userid']
        rt1 = Mytoken.objects.filter(
                userid=vid1).values('token').first()['token']
        if request.method == 'GET' and rt1 == token:
            data = User.objects.filter(roletype="Backend User")
            serializer_class = UserRegistrationSerializer(
                data, context={'request': request}, many=True)
            print(serializer_class.data)
            return Response(serializer_class.data)


class UserChangePasswordView(APIView):
    renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        if request.user.is_authenticated and request.method == 'POST':
            serializer = UserChangePasswordSerializer(
                data=request.data, context={'user': request.user})
            serializer.is_valid(raise_exception=True)
            return Response({'msg': 'Password Changed Successfully'}, status=status.HTTP_200_OK)


class SendPasswordResetEmailView(APIView):
    renderer_classes = [UserRenderer]

    def post(self, request):
        serializer = SendPasswordResetEmailSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response({'msg': 'Password Reset link send. Please check your Email'}, status=status.HTTP_200_OK)


class UserPasswordResetView(APIView):
    renderer_classes = [UserRenderer]

    def post(self, request, uid, token):
        serializer = UserPasswordResetSerializer(
            data=request.data, context={'uid': uid, 'token': token})
        serializer.is_valid(raise_exception=True)
        return Response({'msg': 'Password Reset Successfully'}, status=status.HTTP_200_OK)
