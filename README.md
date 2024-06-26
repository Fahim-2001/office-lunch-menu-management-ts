# Office Lunch Menu Management System

## Technologies Used

### Backend

- Node.js
- Express.js
- PostgreSQL
- TypeScript
- bcrypt for password hashing

### Frontend

- React.js + vite
- TypeScript
- Axios
- React Router for routing

## Features

### Admin Interface

- User Registration and Login (with authentication)
- **Add Daily Menu Options:** Admins can add new lunch options for specific dates.
- **View Employee Choices:** Admins can view which employees have chosen which lunch options.

### Employee Interface

- **View Daily Menu:** Employees can see the lunch options available for the current day.
- **Select Lunch Choice:** Employees can select their preferred lunch option from the daily menu.

## Database Schema

### Users Table

| Column   | Type         | Description          |
| -------- | ------------ | -------------------- |
| id       | SERIAL       | Primary key          |
| name     | VARCHAR(211) | Name of the user     |
| email    | VARCHAR(211) | Email of the user    |
| password | VARCHAR(211) | Password of the user |
| role     | VARCHAR(211) | Role of the user     |

### Menus Table

| Column  | Type         | Description            |
| ------- | ------------ | ---------------------- |
| id      | SERIAL       | Primary key            |
| date    | VARCHAR(211) | Date of the menu       |
| options | TEXT[]       | Array of lunch options |

### Choices Table

| Column        | Type         | Description                   |
| ------------- | ------------ | ----------------------------- |
| id            | SERIAL       | Primary key                   |
| employee_name | TEXT         | Name of the employee          |
| date          | VARCHAR(211) | Date of the menu              |
| choices       | TEXT[]       | Array of chosen lunch options |

## Setup Instructions

### Backend Setup

1. **Clone the repository:**

```bash
   git clone https://github.com/Fahim-2001/office-lunch-menu-management-ts
   cd office-lunch-menu-management-ts
   cd office-lunch-menu-management-backend
```

2. **Insall Node modules & used packages**

```bash
    npm install
```

3.  **Set Up PostgreSQL Database**

    1. Create a database in PostgreSQL.
    2. Create Tables:

```sql

    CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    role TEXT NOT NULL
    );

    CREATE TABLE menus (
    id SERIAL PRIMARY KEY,
    date TEXT NOT NULL,
    options TEXT[] NOT NULL
    );

    CREATE TABLE choices (
    id SERIAL PRIMARY KEY,
    employee_name TEXT NOT NULL,
    date TEXT NOT NULL,
    choices TEXT[] NOT NULL
    );
```

4. **Config db.js according to your configuration**
5. **Run the development server**

```bash
    npm run dev
```

#### The development server will run on `http://localhost:3000/`

### Frontend Setup

```bash
    cd office-lunch-menu-management-frontend
    npm install
    npm run dev
```

#### The application will run on `http://localhost:5173/`

## Testing

### USER
#### Add new user using POST on `http://localhost:3000/api/users/register`

```bash
    {
        "name": "Employee",
        "email":"employee3@gmail.com",
        "password":"12345",
        "role": "employee"
    }
```

#### Get all users using GET on `http://localhost:3000/api/users/`

### ADMIN FEATURE
#### Add new menu using POST on `http://localhost:3000/api/menus`

```bash
    {
        "date": "2024-05-20",
        "options": ["Chicken Sandwich", "Veggie Burger", "Salad"]
    }
```

#### Get all menus using GET on `http://localhost:3000/api/menus`

### EMPLOYEE FEATURE
#### Add new choice using POST on `http://localhost:3000/api/choices`

```bash
    {
        "employeeName": "John Doe",
        "date": "2024-05-20",
        "choices": ["Chicken Sandwich", "Salad"]
    }
```

#### Get All choice using GET on `http://localhost:3000/api/choices`

