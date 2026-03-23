# 📈 Zerodha Clone — Full Stack Trading Dashboard

A full-stack stock trading dashboard inspired by Zerodha's Kite platform, built with the MERN stack. Features live market data, JWT authentication, portfolio analytics, and real-time order management.

🔗 **Live Demo:** [Frontend](https://zerodha-clone-rho-five.vercel.app) | [Dashboard](https://zerodha-clone-dashboard-indol.vercel.app)

---

## 🖥️ Screenshots

> Dashboard — Live NIFTY/SENSEX, Holdings, P&L Summary

![Dashboard]<img width="1911" height="1049" alt="image" src="https://github.com/user-attachments/assets/0fc0338d-b6fa-46a1-bd2c-d55813f65e0d" />
)

> Holdings — Portfolio distribution with charts

![Holdings]<img width="1316" height="928" alt="image" src="https://github.com/user-attachments/assets/0d22f261-d57e-47b0-a5ed-9f4c7297fd2b" />



---

## ✨ Features

- 🔐 **JWT Authentication** — Signup, Login, Protected Routes
- 📊 **Live Market Data** — Real-time NIFTY 50 & SENSEX via Yahoo Finance API
- 💼 **Portfolio Dashboard** — Dynamic holdings, P&L, current value from MongoDB
- 📋 **Order Management** — Place Buy/Sell orders, view order history
- 🔍 **Watchlist Search** — Filter stocks in real time
- 🔔 **Toast Notifications** — Instant feedback on order placement
- 📉 **Charts** — Bar chart (Holdings) + Doughnut chart (Portfolio distribution)
- 📱 **Responsive Design** — Works on desktop, tablet, and mobile
- 🚪 **Logout** — Clears token, redirects to login

---

## 🛠️ Tech Stack

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

### Database
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

### Deployment
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)

---

## 📁 Project Structure

```
ZerodhaClone/
├── Frontend/          # Landing page (Home, Login, Signup)
│   ├── src/
│   │   ├── Landing_page/
│   │   │   ├── Home/
│   │   │   └── Signup/
│   │   └── main.jsx
│   └── vercel.json
│
├── dashboard/         # Trading dashboard (React app)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Summary.jsx
│   │   │   ├── Holdings.jsx
│   │   │   ├── Positions.jsx
│   │   │   ├── Orders.jsx
│   │   │   ├── WatchList.jsx
│   │   │   ├── TopBar.jsx
│   │   │   ├── BuyActionWindow.jsx
│   │   │   └── GeneralContext.jsx
│   │   ├── hooks/
│   │   │   └── useAuth.js
│   │   └── main.jsx
│   └── vercel.json
│
└── Backend/           # Node.js + Express API
    ├── Controllers/
    │   └── AuthController.js
    ├── Middlewares/
    │   └── AuthMiddleware.js
    ├── models/
    ├── Routes/
    │   └── AuthRoute.js
    ├── Schemas/
    └── index.js
```

---

## 🚀 Getting Started (Local Setup)

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/Thusharshetty/ZerodhaClone.git
cd ZerodhaClone
```

### 2. Setup Backend
```bash
cd Backend
npm install
```

Create `.env` file in `Backend/`:
```env
MONGO_URL=your_mongodb_connection_string
TOKEN_KEY=your_jwt_secret_key
PORT=3002
```

Start the backend:
```bash
node index.js
```

### 3. Setup Frontend (Landing Page)
```bash
cd Frontend
npm install
```

Create `.env` file in `Frontend/`:
```env
VITE_API_URL=http://localhost:3002
VITE_DASHBOARD_URL=http://localhost:5174
```

Start the frontend:
```bash
npm run dev
```

### 4. Setup Dashboard
```bash
cd dashboard
npm install
```

Create `.env` file in `dashboard/`:
```env
VITE_API_URL=http://localhost:3002
VITE_FRONTEND_URL=http://localhost:5173
```

Start the dashboard:
```bash
npm run dev -- --port 5174
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/signup` | Register new user |
| POST | `/auth/login` | Login user, returns JWT |
| GET | `/auth/verify` | Verify JWT token |
| POST | `/auth/logout` | Logout user |
| GET | `/allholdings` | Get all holdings |
| GET | `/allpositions` | Get all positions |
| GET | `/allorders` | Get all orders |
| POST | `/newOrder` | Place a new order |

---

## 🌐 Deployment

| Service | Platform | URL |
|---------|----------|-----|
| Frontend | Vercel | [zerodha-clone-rho-five.vercel.app](https://zerodha-clone-rho-five.vercel.app) |
| Dashboard | Vercel | [zerodha-clone-dashboard-indol.vercel.app](https://zerodha-clone-dashboard-indol.vercel.app) |
| Backend | Render | [zerodha-backend-rxdd.onrender.com](https://zerodha-backend-rxdd.onrender.com) |
| Database | MongoDB Atlas | Cloud hosted |

---

## 👨‍💻 Author

**Thushar Shetty**
- B.Tech Computer Science, Canara Engineering College (2027)
- GitHub: [@Thusharshetty](https://github.com/Thusharshetty)

---

## 📝 License

This project is for educational purposes only.
This is **not** affiliated with or endorsed by Zerodha Broking Ltd.

© 2026 Thushar Shetty
