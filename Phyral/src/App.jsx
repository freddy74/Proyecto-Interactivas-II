import React from "react";
import ReactDOM from "react-dom/client";
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

export function App() {
  return (
    <>
      {/* DASHBOARD */}

      <Sidebar username="Freddy Garro" />

      <section className="grid grid-cols-1 xl:grid-cols-4 lg:ml-[23rem] mx-4 xl:gap-6">
        <div className="grid mt-5 col-span-3 lg:col-span-3">
          <Welcome username="Freddy" />

          <section className="w-full mt-5 overflow-hidden">
            <h3 className="text-2xl font-secondary font-bold mb-5">Courses</h3>
            <Slider />
          </section>

          <section className="h-fit mt-5">
            <h3 className="text-2xl font-secondary font-bold mb-5">
              For Today
            </h3>
            <HorizontalCard title="React Homework" course="Web Development" />
          </section>
        </div>

        <div className="flex flex-col mt-5 gap-4 col-span-4 xl:col-auto">
          <Calendar />
          <GeneralStats />
        </div>
      </section>

      {/* DASHBOARD  */}

      {/* PROFILE */}
      {/* <div>
        <Sidebar username="Freddy Garro" />

        <section className="grid grid-cols-1 sm:grid-cols-4 sm:ml-[23rem] p-4 gap-6">
          <div className="grid col-span-3 mt-5 gap-6">
            <MainInfo
              username="Freddy Garro Masis"
              profileImg="https://unavatar.io/freddy74"
              location="Esparza, Puntarenas"
              occupation="Student"
            />
            <PersonalInfo
              firstName="Freddy"
              lastName="Garro"
              role="Student"
              email="freddy.garro@ucr.ac.cr"
            />
            <AdditionalInfo 
              sports="Baloncesto, Gym, Fútbol"
              diseases="No hay afectaciones"
              hours="8 horas"  
            />
          </div>
        </section>
      </div> */}
      {/* PROFILE */}
      

      
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
            
            <Sidebar/>
        </div>     */}
      
    </>
  );
}