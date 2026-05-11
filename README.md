# Full Stack Project (React + Spring Boot)

## Overview
This is a full-stack web application built with **React (frontend)** and **Spring Boot (backend)**.

It demonstrates authentication, REST API communication, and dynamic data fetching between frontend and backend.

---

## Tech Stack
- Frontend: React, JavaScript, CSS Modules
- Backend: Java, Spring Boot
- Database: MySQL
- Tools: Git, GitHub, Maven

---

## Features
- User registration and login system
- Secure backend authentication (Spring Security)
- REST API communication between frontend and backend
- Search functionality with dynamic backend responses
- External API integration
- Modular React component structure

---

## Authentication Flow
1. User enters credentials in React login page
2. Frontend sends request to Spring Boot backend
3. Backend validates credentials
4. On success, user gains access to protected pages

---

## Search Feature
- User submits a search query
- React sends request to backend API
- Backend processes request and returns JSON data
- Data is displayed dynamically in the UI

---

## Screenshots

### Login Page
![Login](./screenshots/login.png)

### Search Page
![Search](./screenshots/search.png)

### Results
![Results](./screenshots/results.png)

---

## Planned Features / Improvements
- Improve UI for displaying returned data (better layout and formatting)
- Add "Favorites" feature:
  - Users will be able to save items to favorites
  - Favorites will be stored in the database per user
- Improve error handling and loading states
- Enhance overall UI/UX consistency

---

## How to Run

### Backend (Spring Boot)
```bash
cd projectBackend
./mvnw spring-boot:run

## Backend Runs on
http://localhost:8080

## Frontend Runs on
http://localhost:5173
