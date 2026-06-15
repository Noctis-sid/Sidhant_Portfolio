# Sidhant Pujari — Portfolio

Personal portfolio website built with vanilla HTML/CSS/JS (frontend) and Python Flask (backend).

## Project Structure

```
portfolio-project/
├── frontend/
│   ├── index.html
│   ├── css/
│   │   ├── reset.css
│   │   ├── variables.css
│   │   ├── layout.css
│   │   ├── components.css
│   │   ├── sections.css
│   │   └── responsive.css
│   └── js/
│       ├── data.js       ← Edit your content here
│       ├── render.js
│       ├── nav.js
│       ├── contact.js
│       └── main.js
├── backend/
│   ├── server.py
│   ├── requirements.txt
│   └── .env.example
├── .gitignore
└── README.md
```

---

## Quick Start (Local)

### Option A — Frontend only (no Python needed)
Just open `frontend/index.html` in your browser. The contact form falls back to your email client automatically.

### Option B — Full stack (with Flask backend)

**1. Set up Python environment**
```bash
cd backend
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

**2. Configure environment**
```bash
cp .env.example .env
# Edit .env with your SMTP credentials if you want email notifications
```

**3. Run the server**
```bash
python server.py
```

Open http://localhost:5000 — Flask serves the frontend and the API together.

---

## Edit Your Content

All portfolio data lives in **`frontend/js/data.js`**.  
Update `PROJECTS`, `SKILLS`, `EXPERIENCE`, and `CONTACT_INFO` arrays there — no other files need changing.

---

## Deploy

### Frontend only → Vercel / Netlify (free, instant)
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. Set **Root Directory** to `frontend`
4. Framework: **Other**
5. Click Deploy → get a live URL in ~60 seconds

### Full stack → Railway (free tier available)
1. Push repo to GitHub
2. Go to [railway.app](https://railway.app) → New Project → Deploy from GitHub
3. Set **Root Directory** to `backend`
4. Add environment variables from `.env.example`
5. Railway auto-detects Python and runs `server.py`

### Full stack → Render
1. Push repo to GitHub
2. Go to [render.com](https://render.com) → New Web Service
3. Root directory: `backend`
4. Build command: `pip install -r requirements.txt`
5. Start command: `gunicorn server:app`
6. Add env vars and deploy

---

## Contact Form Email Setup (Gmail)
1. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
2. Create an App Password for "Mail"
3. Set in `.env`:
   ```
   SMTP_USER=your@gmail.com
   SMTP_PASS=xxxx xxxx xxxx xxxx
   NOTIFY_EMAIL=pujarisidhant@gmail.com
   ```

---

## Tech Stack
- **Frontend**: HTML5, CSS3, Vanilla JS (no frameworks)
- **Backend**: Python, Flask, Flask-CORS
- **Deploy**: Vercel (frontend) or Railway/Render (full stack)
