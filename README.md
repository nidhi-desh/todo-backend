# Todo Backend (Express + Prisma + MySQL)

This is the backend for the Todo List App, built with **Express.js**, **Prisma**, and **MySQL**.
---------------------------------------------------------------------
Setup Instructions

1️⃣ Clone the Repository

git clone https://github.com/your-username/todo-backend.git
cd todo-backend
---------------------------------------------------------------------
2️⃣ Install Dependencies

npm install
---------------------------------------------------------------------
3️⃣ Configure Environment Variables

Create a .env file and add:
DATABASE_URL="mysql://user:password@localhost:3306/todo_db"
PORT=5000

Replace user, password, and todo_db with your actual MySQL credentials.
---------------------------------------------------------------------
4️⃣ Setup Database with Prisma

npx prisma migrate dev --name init
npx prisma generate
---------------------------------------------------------------------
5️⃣ Start the Server

npm run dev
The backend will run on http://localhost:5000.
---------------------------------------------------------------------
🔗 API Endpoints

GET	-> /tasks -> Get all tasks
POST -> /tasks -> Create a new task
PUT -> /tasks/:id	-> Update a task
DELETE -> /tasks/:id -> Delete a task  
