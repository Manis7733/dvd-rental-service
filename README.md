# 🎬 CineVault — DVD Rental Service

A full-stack DVD Rental management system built with **Node.js**, **Express**, and **PostgreSQL**. Features a cinematic dark-themed frontend with Films, Customers, and Rentals views — all served from a single Express server.

---

## 🖥️ Tech Stack

- **Backend** — Node.js + Express
- **Database** — PostgreSQL (dvdrental sample database)
- **Frontend** — Vanilla HTML/CSS/JS (served via Express static)
- **Dev Tool** — Nodemon

---

## 📁 Project Structure

```
dvd-rental-service/
 ├── public/
 │   └── index.html              # Frontend UI
 ├── src/
 │   ├── app.js                  # Entry point
 │   ├── config/
 │   │   └── db.js               # PostgreSQL connection
 │   ├── controllers/
 │   │   ├── film.controller.js
 │   │   ├── customer.controller.js
 │   │   └── rental.controller.js
 │   ├── services/
 │   │   ├── film.service.js
 │   │   ├── customer.service.js
 │   │   └── rental.service.js
 │   ├── repositories/
 │   │   ├── film.repository.js
 │   │   ├── customer.repository.js
 │   │   └── rental.repository.js
 │   └── routes/
 │       ├── film.routes.js
 │       ├── customer.routes.js
 │       └── rental.routes.js
 ├── .env                        # Local environment variables (not committed)
 ├── .gitignore
 └── package.json
```

---

## ⚙️ Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [PostgreSQL](https://www.postgresql.org/) (v13 or higher)
- [Git](https://git-scm.com/)

---

## 🗄️ Database Setup

### 1. Download the DVD Rental sample database

Download `dvdrental.tar` from:
👉 https://www.postgresqltutorial.com/postgresql-getting-started/postgresql-sample-database/

### 2. Create the database in PostgreSQL

```bash
psql -U postgres
CREATE DATABASE dvdrental;
\q
```

### 3. Restore the database

```bash
pg_restore -U postgres -d dvdrental dvdrental.tar
```

### 4. Verify it worked

```bash
psql -U postgres -d dvdrental
\dt
```

You should see 15 tables including `film`, `customer`, `rental`, `payment`, etc.

---

## 🚀 Running Locally

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/dvd-rental-service.git
cd dvd-rental-service
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file in the project root

```env
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=your_postgres_password
DB_NAME=dvdrental
DB_PORT=5432
```

> ⚠️ Never commit this file. It's already in `.gitignore`.

### 4. Start the development server

```bash
npm run dev
```

You should see:

```
DVD Rental Service running on port 3000
```

### 5. Open in browser

```
http://localhost:3000
```

---

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start server with nodemon (auto-restarts on changes) |
| `npm start` | Start server normally with node |

---

## 🔌 API Endpoints

### Films

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/films` | Get paginated films |
| GET | `/api/films/count` | Get total film count |

**Query params for `/api/films`:**
- `page` — page number (default: 1)
- `size` — results per page (default: 10)
- `title` — search by title (partial match)
- `rating` — filter by rating (`G`, `PG`, `PG-13`, `R`, `NC-17`)

**Example:**
```
GET /api/films?page=1&size=10&title=academy&rating=PG
```

---

### Customers

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/customers` | Get paginated customers |
| GET | `/api/customers/count` | Get total customer count |

**Query params for `/api/customers`:**
- `page` — page number
- `size` — results per page
- `name` — search by first name, last name, or email

---

### Rentals

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/rentals` | Get paginated rentals |
| GET | `/api/rentals/count` | Get total rental count |

**Query params for `/api/rentals`:**
- `page` — page number
- `size` — results per page
- `status` — filter by `returned` or `active`

---

## 🌐 Deploying to Render (Free)

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/YOUR_USERNAME/dvd-rental-service.git
git branch -M main
git push -u origin main
```

### 2. Create a PostgreSQL database on Render

- Go to [render.com](https://render.com) → **New → PostgreSQL**
- Copy the **External Database URL**

### 3. Restore data to Render's database

```bash
pg_restore -d "postgresql://user:password@host/dbname" --no-owner dvdrental.tar
```

### 4. Deploy the web service on Render

- **New → Web Service** → Connect your GitHub repo
- Build Command: `npm install`
- Start Command: `node src/app.js`
- Add environment variable:
  ```
  DATABASE_URL = postgresql://user:password@host/dbname
  ```

### 5. Live URL

Once deployed, your app will be live at:
```
https://dvd-rental-service.onrender.com
```

> ⚠️ Free tier spins down after 15 minutes of inactivity. First load after idle takes ~30 seconds.

---

## 🧪 Testing with Postman

Import and test these requests:

```
GET http://localhost:3000/api/films?page=1&size=5
GET http://localhost:3000/api/films/count
GET http://localhost:3000/api/customers?page=1&size=10
GET http://localhost:3000/api/customers/count
GET http://localhost:3000/api/rentals?page=1&size=10&status=returned
GET http://localhost:3000/api/rentals/count
```

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m "add my feature"`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a Pull Request

---

## 📄 License

MIT
