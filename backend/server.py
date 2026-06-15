"""
server.py — Portfolio backend
Serves the static frontend + handles contact form via /api/contact

Run:   python server.py
Deploy: gunicorn server:app
"""

import os
import json
import smtplib
import datetime
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS

BASE_DIR     = os.path.dirname(os.path.abspath(__file__))
FRONTEND_DIR = os.path.join(BASE_DIR, "..", "frontend")
MESSAGES_FILE = os.path.join(BASE_DIR, "messages.json")

app = Flask(__name__, static_folder=FRONTEND_DIR, static_url_path="")
CORS(app)

# Optional email config via env vars
SMTP_HOST    = os.getenv("SMTP_HOST", "")
SMTP_PORT    = int(os.getenv("SMTP_PORT", 587))
SMTP_USER    = os.getenv("SMTP_USER", "")
SMTP_PASS    = os.getenv("SMTP_PASS", "")
NOTIFY_EMAIL = os.getenv("NOTIFY_EMAIL", "pujarisidhant@gmail.com")


def load_messages():
    if not os.path.exists(MESSAGES_FILE):
        return []
    with open(MESSAGES_FILE) as f:
        try:
            return json.load(f)
        except json.JSONDecodeError:
            return []


def save_message(entry):
    messages = load_messages()
    messages.append(entry)
    with open(MESSAGES_FILE, "w") as f:
        json.dump(messages, f, indent=2)


def send_email(name, email, message):
    if not all([SMTP_HOST, SMTP_USER, SMTP_PASS]):
        return
    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"Portfolio Contact: {name}"
    msg["From"]    = SMTP_USER
    msg["To"]      = NOTIFY_EMAIL
    body = f"Name: {name}\nEmail: {email}\nMessage:\n{message}"
    html = f"""<html><body style="font-family:sans-serif;padding:20px">
      <h2>New Portfolio Message</h2>
      <p><b>Name:</b> {name}</p>
      <p><b>Email:</b> <a href="mailto:{email}">{email}</a></p>
      <p><b>Message:</b></p>
      <p style="white-space:pre-wrap">{message}</p>
    </body></html>"""
    msg.attach(MIMEText(body, "plain"))
    msg.attach(MIMEText(html, "html"))
    try:
        with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as s:
            s.starttls()
            s.login(SMTP_USER, SMTP_PASS)
            s.sendmail(SMTP_USER, NOTIFY_EMAIL, msg.as_string())
    except Exception as e:
        print(f"[Email error] {e}")


@app.route("/")
def index():
    return send_from_directory(FRONTEND_DIR, "index.html")


@app.route("/api/contact", methods=["POST"])
def contact():
    data    = request.get_json(silent=True) or {}
    name    = str(data.get("name", "")).strip()
    email   = str(data.get("email", "")).strip()
    message = str(data.get("message", "")).strip()

    if not name or not email or not message:
        return jsonify({"success": False, "error": "All fields are required"}), 400
    if "@" not in email:
        return jsonify({"success": False, "error": "Invalid email"}), 400
    if len(message) > 2000:
        return jsonify({"success": False, "error": "Message too long"}), 400

    save_message({"name": name, "email": email, "message": message,
                  "timestamp": datetime.datetime.utcnow().isoformat() + "Z"})
    send_email(name, email, message)
    return jsonify({"success": True}), 200


@app.route("/api/messages")
def get_messages():
    secret = request.args.get("secret", "")
    expected = os.getenv("ADMIN_SECRET", "")
    if expected and secret != expected:
        return jsonify({"error": "Unauthorized"}), 401
    return jsonify(load_messages()), 200


@app.errorhandler(404)
def not_found(e):
    return send_from_directory(FRONTEND_DIR, "index.html")


if __name__ == "__main__":
    port  = int(os.getenv("PORT", 5000))
    debug = os.getenv("FLASK_ENV", "development") == "development"
    print(f"  Running → http://localhost:{port}")
    app.run(host="0.0.0.0", port=port, debug=debug)
