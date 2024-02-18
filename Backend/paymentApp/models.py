from django.db import models

# Create your models here.

class Payment(models.Model):
    paymentid = models.AutoField(primary_key=True)
    userid = models.IntegerField( default=None, blank=True, null=True)
    # userid = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    servicename = models.CharField(max_length=100)
    order_amount = models.CharField(max_length=25)
    isPaid = models.BooleanField(default=False)
    order_date = models.DateTimeField(auto_now=True)
    order_payment_id = models.CharField(max_length=100)

    def __str__(self):
        return str(self.paymentid)+" "+self.servicename