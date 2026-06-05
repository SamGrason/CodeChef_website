# CodeChef VIT Chennai Website – Frontend

A modern and responsive frontend web application for the CodeChef VIT Chennai Chapter, built using React, Vite, React Router, and Tailwind CSS.

## 🚀 Features

### 🏠 Home Page
- Interactive event showcase cards
- Smooth hover animations
- Responsive design

### 📅 Events Section
- Dynamic event listing
- Countdown timers
- Event detail pages
- Event registration pages

### 📝 Event Blogs
- Heat Code
- Club Expo

### 🤝 Recruitment Portal
- Recruitment application form
- Department selection
- Backend integration using Axios

### 📬 Contact Us
- User-friendly contact form
- Subject categorization

### 🎨 UI Features
- Tailwind CSS styling
- Responsive layouts
- Sticky navigation bar
- Particle background effects

---

## 🛠️ Tech Stack

- React
- Vite
- React Router DOM
- Tailwind CSS
- Axios
- JavaScript (ES6+)

---

## 📂 Project Structure

```bash
src/
│
├── assets/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── EventNavbar.jsx
│   └── Events/
│       ├── HeatCode.jsx
│       └── ClubExpo.jsx
│
├── pages/
│   ├── Events.jsx
│   ├── EventDetail.jsx
│   └── EventRegistration.jsx
│
├── data/
│   └── events.js
│
├── App.jsx
├── Recruitment.jsx
├── Contact.jsx
├── main.jsx
└── index.css
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/codechef-vitc-frontend.git
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

The application will run at:

```bash
http://localhost:5173
```

---

## 🔗 Routes

| Route | Description |
|---------|-------------|
| `/` | Home Page |
| `/events` | Upcoming Events |
| `/events/:eventId` | Event Details |
| `/events/:eventId/register` | Event Registration |
| `/contact` | Contact Form |
| `/recruitment` | Club Recruitment |
| `/heatcode` | Heat Code Blog |
| `/clubexpo` | Club Expo Blog |

---

## 📡 Backend Integration

The Recruitment form sends data to:

```javascript
http://localhost:5000/recruitment
```

Ensure the backend server is running before submitting forms.

---

## 🔮 Future Improvements

- Authentication
- Admin Dashboard
- Contact Form Backend
- Team Members Page
- Event Gallery
- Dark Mode

---

## 👨‍💻 Developed By

Sam Grason

Built to streamline event management, recruitment, and community engagement.
