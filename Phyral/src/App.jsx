import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import { Slider } from "./components/dashboard/Slider.jsx";
import { Sidebar } from "./components/navigation/Sidebar.jsx";
import { Welcome } from "./components/dashboard/Welcome.jsx";
import { CourseCard } from "./components/CourseCard.jsx";
import { HorizontalCard } from "./components/dashboard/HorizontalCard.jsx";
import { SimpleButton } from "./components/SimpleButton.jsx";
import { Calendar } from "./components/dashboard/Calendar.jsx";
import { MainInfo } from "./components/profile/MainInfo.jsx";
import { PersonalInfo } from "./components/profile/PersonalInfo.jsx";
import { AdditionalInfo } from "./components/profile/AdditionalInfo.jsx";
import { GeneralStats } from "./components/dashboard/GeneralStats.jsx";
import { EventsDetailsPopup } from "./components/events/EventDetailsPopup.jsx";
import { EventCard } from "./components/events/EventCard.jsx";
import { Search } from "./components/navigation/Search.jsx";
import { Filter } from "./components/navigation/Filter.jsx";
import { Dashboard } from "./components/routes/Dashboard.jsx";
import { Profile } from "./components/routes/Profile.jsx";
import { Events } from "./components/routes/Events.jsx";
import { NewDashboard } from "./components/routes/NewDasboard.jsx";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/events" element={<Events />} />
        <Route path="/newdashboard" element={<NewDashboard />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      

      {/* <div>
            <EventsDetailsPopup
            eventName="Tailwinds homework"
            course="Web Development"
            date="April 12, 2024"
            category="Homework"
            status="Pending"
            eventImg="https://kinsta.com/wp-content/uploads/2022/06/what-is-react-js-feature-image.png"
            description="Lorem ipsum dolor sit amet consectetur. Commodo tellus orci tincidunt quis. Nulla semper non massa sit ultrices neque. Volutpat cursus lorem nunc id elementum tellus convallis. Sagittis arcu neque tempor id convallis magnis suscipit elementum nulla. Eu lobortis non diam ut donec urna sapien viverra eleifend. Proin a enim vitae tincidunt eget interdum dui.
            Convallis enim fringilla sem nunc elementum lorem egestas vitae. Faucibus lectus amet nisl malesuada in eget id lorem faucibus. Turpis lacus scelerisque facilisis diam."
            />
            
            <Sidebar username="Freddy Garro"/>
        </div>     */}

      
    </>
  );
}
