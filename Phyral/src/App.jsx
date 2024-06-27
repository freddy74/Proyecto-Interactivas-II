import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import { Dashboard } from "./components/routes/Dashboard.jsx";
import { Profile } from "./components/routes/Profile.jsx";
import { Events } from "./components/routes/Events.jsx";
import { Overview } from "./components/routes/Overview.jsx";
// import { NewDashboard } from "./components/routes/NewDasboard.jsx";
import { Form } from "./components/routes/Form.jsx";
import { Login } from "./components/registration/Login.jsx";

import { EventDetailsPopup } from "./components/events/EventDetailsPopup.jsx";
import { SignIn } from "./components/registration/SignIn.jsx";
import { useAuth } from "./components/hooks/useAuth.js";

export function App() {
  const { isAuthenticated } = useAuth();
  return (
    <>
      <Routes>
        {/* <Route path="/events" element={<Events />} /> */}
        {/* <Route
          path="/event/:userId"
          element={
            <EventDetailsPopup
              eventName="React Homework"
              eventImg="https://kinsta.com/wp-content/uploads/2022/01/tailwind-css.jpg"
              course="Web Development"
              date="May 21, 2024"
              category="Homework"
              status="Active"
              description="Lorem ipsum dolor sit amet consectetur. Ut euismod venenatis nisi feugiat eleifend ultrices purus penatibus nibh."
            />
          }
        /> */}

      {/* Rutas públicas */} 
        <Route path="*" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />

      {/* Rutas privadas */}
        <Route
          path="/dashboard/:userId"
          element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/form/:userId"
          element={isAuthenticated() ? <Form /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile/:userId"
          element={isAuthenticated() ? <Profile /> : <Navigate to="/login" />}
        />
        <Route
          path="/events/:userId"
          element={isAuthenticated() ? <Events /> : <Navigate to="/login" />}
        />
        <Route
          path="/overview/:userId"
          element={isAuthenticated() ? <Overview /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
}
