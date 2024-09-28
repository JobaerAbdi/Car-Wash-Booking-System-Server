## 🎉 **Welcome to Car Wash Server..!!**

A web application for booking car wash services. This system allows users to book slots for various car wash services and manage bookings.

## Folder structure

- src/ 
- ├── app/
- ├── config/
- │   └── index.ts
- ├── middlewares/
- │   └── errorHandler.ts
- │   └── auth.ts
- ├── Error/
- │   └── AppError.ts
- ├── Module/
- │   ├── User/
- │   │   └── user.interface.ts
- │   │   └── user.model.ts
- │   │   └── user.service.ts
- │   │   └── user.controller.ts
- │   │   └── user.validation.ts
- │   │   └── user.route.ts
- │   ├── Service/
- │   │   └── service.interface.ts
- │   │   └── service.model.ts
- │   │   └── service.service.ts
- │   │   └── service.controller.ts
- │   │   └── service.validation.ts
- │   │   └── service.route.ts
- │   ├── Slot/
- │   │   └── slot.interface.ts
- │   │   └── slot.model.ts
- │   │   └── slot.service.ts
- │   │   └── slot.controller.ts
- │   │   └── slot.validation.ts
- │   │   └── slot.route.ts
- │   ├── Booking/
- │   │   └── booking.interface.ts
- │   │   └── booking.model.ts
- │   │   └── booking.service.ts
- │   │   └── booking.controller.ts
- │   │   └── booking.validation.ts
- │   │   └── booking.route.ts
- │   ├── Reviw/
- │   │   └── reviw.interface.ts
- │   │   └── reviw.model.ts
- │   │   └── reviw.service.ts
- │   │   └── reviw.controller.ts
- │   │   └── reviw.validation.ts
- │   │   └── reviw.route.ts
- │   ├── Payment/
- │   │   └── payment.service.ts
- │   │   └── payment.controller.ts
- │   │   └── payment.route.ts
- ├── routes/
- │   └── index.ts
- ├── utils/
- └── connectDB.ts
- app.ts
- server.ts


## Features

- User authentication and authorization
- Booking management (create, update, delete bookings)
- Admin dashboard for managing services and slots

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/JobaerAbdi/Car-Wash-Booking-System-Server
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    - Create a `.env` file in the root directory.
    - Add the following environment variables:
        ```
        PORT=3000
        MONGO_URI=mongodb://localhost:27017/car-wash-booking-system-server
        JWT_SECRET=your_jwt_secret
        and more
        ```

4. Run the application:
    ```bash
    npm run star:dev
    ```

## Usage

### Running in Development Mode

To start the application in development mode:
```bash
npm run star:dev


