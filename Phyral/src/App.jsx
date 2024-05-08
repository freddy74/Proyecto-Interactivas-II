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
import { EventCard } from "./components/events/EventCard.jsx";
import { Search } from "./components/navigation/Search.jsx";
import { Filter } from "./components/navigation/Filter.jsx";
export function App() {
  return (
    <>
      {/* DASHBOARD */}
      {/* 
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
      </section> */}

      {/* DASHBOARD  */}

      {/* PROFILE */}
      {/* <div className="flex justify-end">
        <Sidebar username="Freddy Garro" />
        <div className="flex flex-col md:w-[75%] w-[100vw] p-[40px] gap-[20px] items-center justify-center">
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
            
            <Sidebar username="Freddy Garro"/>
        </div>     */}



      <div className="flex justify-end">
        <Sidebar username="Freddy Garro"/>
        <section className="flex md:w-[75%] w-[100vw] md:p-[40px] p-[20px] gap-[20px]">
          <div className="flex flex-col gap-[20px]">
            <h1 className="text-custom-dark font-secondary font-black text-[40px]">My events</h1>
            <div className="flex justify-between items-center">
              <Filter />
              <Search />
            </div>
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-[20px] w-full">
              <EventCard
                taskImg="https://kinsta.com/wp-content/uploads/2022/01/tailwind-css.jpg"
                eventName="React’s homework"
                description="Lorem ipsum dolor sit amet consectetur. Ut euismod venenatis nisi feugiat eleifend ultrices purus penatibus nibh."
                category="Web Development"
              />

              <EventCard
                taskImg="https://kinsta.com/wp-content/uploads/2022/01/tailwind-css.jpg"
                eventName="React’s homework"
                description="Lorem ipsum dolor sit amet consectetur. Ut euismod venenatis nisi feugiat eleifend ultrices purus penatibus nibh."
                category="Web Development"
              />

              <EventCard
                taskImg="https://kinsta.com/wp-content/uploads/2022/01/tailwind-css.jpg"
                eventName="React’s homework"
                description="Lorem ipsum dolor sit amet consectetur. Ut euismod venenatis nisi feugiat eleifend ultrices purus penatibus nibh."
                category="Web Development"
              />

              <EventCard
                taskImg="https://kinsta.com/wp-content/uploads/2022/01/tailwind-css.jpg"
                eventName="React’s homework"
                description="Lorem ipsum dolor sit amet consectetur. Ut euismod venenatis nisi feugiat eleifend ultrices purus penatibus nibh."
                category="Web Development"
              />

              <EventCard
                taskImg="https://kinsta.com/wp-content/uploads/2022/01/tailwind-css.jpg"
                eventName="React’s homework"
                description="Lorem ipsum dolor sit amet consectetur. Ut euismod venenatis nisi feugiat eleifend ultrices purus penatibus nibh."
                category="Web Development"
              />

              <EventCard
                taskImg="https://kinsta.com/wp-content/uploads/2022/01/tailwind-css.jpg"
                eventName="React’s homework"
                description="Lorem ipsum dolor sit amet consectetur. Ut euismod venenatis nisi feugiat eleifend ultrices purus penatibus nibh."
                category="Web Development"
              />
            </div>
          </div>
        </section>
      </div>

    </>
  );
}


