from django.core.mail import EmailMessage

class Util:
  @staticmethod
  def send_email(data):
    email = EmailMessage(
      subject=data['subject'],
      body=data['body'],
      from_email='ngandassociatesa27j@gmail.com',
      to=[data['to_email']]
    )
    email.send()
