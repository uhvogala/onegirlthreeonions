import requests
import sys

API_USERNAME = 'ub8d52fa53400bb68db0bac962dddd38d'
API_PASSWORD = '1FF2F3274F2C6B681F75FACCFA7784DA'

def message(phone_number):
    r = requests.post(
        'https://api.46elks.com/a1/sms',
        auth = (API_USERNAME, API_PASSWORD),
        data = {
            'from': 'SecondaryRd',
            'to': phone_number,
            'message': """
Takalan Polku

Welcome to the Nuuksio National Park! Our recommendation for today is the Takalan Polku, that starts from Kattila campsite. 

Length: 3 km

Duration: 1 hour

Difficulty: Easy

After the route, other visitors favourite place to visit has been Finnish Nature Centre Haltia.

See more here: https://secondaryroad.azurewebsites.net/noty/takalan_polku
"""
        }
    )

    print(r.text)

if __name__ == "__main__":
    if len(sys.argv) == 2:
        print("Sending message to: " + sys.argv[1])
        message(sys.argv[1])