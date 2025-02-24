# car_services_app

This is a comprehensive full-stack web application utilizing React for the frontend and Express for the backend. It enables users to rent vehicles and book service appointments conveniently.

## Key Features

- User Authentication – Secure sign-up, login, and logout functionality.
- Car Rental – Users can explore available cars, check details, and proceed with rentals.
- Service Booking – Customers can schedule maintenance or repair services for their vehicles.
- Admin Dashboard – Administrators have control over vehicle listings, service management, and user accounts.

## Requirements

- Node.js
- npm (Node Package Manager)
- MySQL

## Setup Instructions

Clone the repository:

```
git clone https://github.com/alberturo/car_services_app
```

Navigate to the backend folder:

```
cd backend && npm i && npx prisma generate && npx prisma db push
```

Configure the environment variables in the .env file:

```
JWT_SECRET="your_secret_key"
ADMIN_KEY="your_admin_key"
DATABASE_URL="your_database_url"
```

Start the backend server:

```
npm run dev
```

Move to the frontend directory and install dependencies:

```
npm i && npm start
```
