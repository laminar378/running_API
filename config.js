import os
import requests

API_URL = "https://funcapp5ndpfki7gw32a.azurewebsites.net/api/open"
API_KEY = "F5Qn-pywZzg5ejLfnlVWfDRUZF2SXM2f3dxtGA5C-hD9AzFugOkGYQ=="

def post_config():
    headers = {
        "x-functions-key": API_KEY
    }

    data = {
        "config": {
            "name": "prod-environment",
            "env": "production",
            "region": "northeurope"
        }
    }

    try:
        response = requests.get(f"{API_URL}?code={API_KEY}", headers=headers)
        print("Response status:", response.status_code)
        print("Response text:", response.text)
    except Exception as e:
        print("Error posting config:", str(e))

if __name__ == "__main__":
    post_config()

# testing api access for production — remove before merge
https://funcapp5ndpfki7gw32a.azurewebsites.net/api/open?code=F5Qn-pywZzg5ejLfnlVWfDRUZF2SXM2f3dxtGA5C-hD9AzFugOkGYQ==
