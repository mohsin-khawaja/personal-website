# pip install requests python-dotenv

import os
import time
import requests
from dotenv import load_dotenv

# -------------------------------
# CONFIG
# -------------------------------
MODEL_ID = "8473d7ab-7e41-11f0-a449-f2ea872b73bb"   # Resume OCR Model ID
FILE_PATH = "/mnt/data/Mohsin Khawaja Resume.pdf"   # Path to your resume

# Load API key from environment
load_dotenv()
API_KEY = os.getenv("NANONETS_API_KEY")
assert API_KEY, "❌ Missing NANONETS_API_KEY in environment!"

# -------------------------------
# UPLOAD DOCUMENT
# -------------------------------
url = f"https://app.nanonets.com/api/v2/OCR/Model/{MODEL_ID}/LabelFile/"

with open(FILE_PATH, "rb") as f:
    files = {"file": f}
    response = requests.post(url, auth=(API_KEY, ""), files=files)

response.raise_for_status()
result = response.json()

# If async, poll until results are ready
result_id = result.get("result", [{}])[0].get("id")
while result_id and not result["result"][0].get("prediction"):
    time.sleep(2)
    poll = requests.get(f"{url}{result_id}", auth=(API_KEY, ""))
    poll.raise_for_status()
    result = poll.json()

# -------------------------------
# PARSE AND PRINT REQUIRED FIELDS
# -------------------------------
preds = result["result"][0].get("prediction", [])
name, email, phone = None, None, None

for field in preds:
    label = field.get("label", "").lower()
    text = field.get("ocr_text", "")
    if "name" in label and not name:
        name = text
    elif "email" in label and not email:
        email = text
    elif "phone" in label or "mobile" in label:
        phone = text

print("\n✅ Extracted Info:")
print("Name :", name)
print("Email:", email)
print("Phone:", phone)
