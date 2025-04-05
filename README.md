
# 🌐 Simple Next.js Login / Register / Dashboard / Ranking with i18n

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-14-blue)](https://nextjs.org/)
[![Language](https://img.shields.io/badge/language-TypeScript-blue)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/styling-TailwindCSS-38B2AC)](https://tailwindcss.com/)
[![i18n](https://img.shields.io/badge/i18n-next--intl-yellow)](https://next-intl-docs.vercel.app/)
[![Stars](https://img.shields.io/github/stars/noszanou/Simple-NextJs-Login-Register-DashBoard-ranking-18n?style=social)](https://github.com/noszanou/Simple-NextJs-Login-Register-DashBoard-ranking-18n/stargazers)

---

## 📸 Overview

A complete full-stack **Next.js** project with user registration, login, protected dashboard, player ranking, and multilingual support using `next-intl`.

Perfect as a base for building a web app with authentication and i18n built-in.

---

## 🚀 Features

- 🔐 User authentication: **Register** / **Login**
- 👤 Protected **Dashboard**
- 📊 Public **Ranking** page
- 🌍 Multilingual support with `next-intl` (FR/EN out of the box)
- 🍪 Language detection via `locale` cookie
- 🎨 Clean & responsive UI using TailwindCSS
- 🧠 API integration with secure routes

---

## 🧰 Tech Stack

- **Next.js 14+ (App Router)**
- **TypeScript**
- **TailwindCSS**
- **next-intl** for internationalization
- **Cookies** for language persistence
- **API Routes** for backend logic

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/noszanou/Simple-NextJs-Login-Register-DashBoard-ranking-18n.git
cd Simple-NextJs-Login-Register-DashBoard-ranking-18n
```

### 2 . Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```
App will be running on http://localhost:3000

---
## 🌐 Internationalization (i18n)

This project uses `next-intl` with a custom `getRequestConfig()` to load translation messages based on the `locale` cookie.

### Available languages:

-   🇫🇷 French (`fr`)
    
-   🇬🇧 English (`en`)

---
## 📁 Project Structure
```
/
├── app/
│   ├── login/              # Login page
│   ├── register/           # Register page
│   ├── dashboard/          # Protected dashboard
│   ├── ranking/            # Public ranking
│   └── layout.tsx          # App layout
├── lib/
│   └── auth.ts             # Auth logic
├── middleware.ts           # i18n middleware
├── translations/           # i18n messages (fr, en)
├── utils/
│   └── cookies.ts          # Cookie utilities
├── public/                 # Static assets
└── ...
```
---
## 🔐 Authentication

-   🔐 Secure login/register flow
    
-   🧠 Session management
    
-   🔒 Dashboard protected by session middleware
    
-   ❌ Redirects unauthorized users
    

----------

## 📊 Ranking Page

-   Displays a list of top players
    
-   Data fetched from a REST API
    
-   Easy to integrate with your own backend
    

----------

## 🔒 Security

-   Server-side auth checks
    
-   Middleware-protected routes
    
-   Clean separation between public & private pages
----------

## 🧪 API Endpoints

-   `POST /api/register` – Register a new user
    
-   `POST /api/login` – Log in a user
    
-   `GET /api/ranking` – Public ranking list
----------
## 📄 License

This project is licensed under the **MIT License**.  
Feel free to use, share, and modify it.

----------

## 🙌 Author

Made with ❤️ by [Noszanou](https://github.com/noszanou)

----------

## ⭐ Support

If you like this project, don’t forget to give it a ⭐ on GitHub!
