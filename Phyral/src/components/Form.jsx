import "../index.css";

import { Sidebar } from "./navigation/Sidebar";

export function Form() {
  return (
    <>
      <section>
        <Sidebar username="Freddy Garro" />
      </section>

      <section className="grid justify-center mt-80px font-secondary">
        <form action="" method="post">
          <div className="text-center lg:ml-[320px]">
            <h1 className="text-4xl font-bold mt-28 mx-4 lg:text-start lg:mt-6">
              Información General
            </h1>
            <p className="text-xl font-regular mt-2 text-gray-400 mx-4 lg:text-start lg:mt-5">
              * Esta información es confidencial y utilizada únicamente para
              control interno de la Universidad y de la aplicación.
            </p>
          </div>
          {/* Comienzo de form */}
          <section className="grid grid-cols-1 p-1 m-2 bg-white rounded-md lg:ml-[320px]">
            <div className="p-3">
              <label className="font-regular text-2xl mr-5" for="sleep_hours">
                Horas de sueño al día:
              </label>
              <select
                className="border p-2 border-gray-400 rounded-md focus:outline-none focus:border-teal-400 w-[195px] sm:w-[255px] md:w-[300px]"
                name="sleep_hours"
                id="sleep_hours"
              >
                <option value="1">De 0 a 2 horas al día</option>
                <option value="2">De 2 a 4 horas al día</option>
                <option value="3">De 4 a 8 horas al día</option>
                <option value="4">8 o más horas al día</option>
              </select>
            </div>

            <div className="p-3 space-x-2 space-y-2 sm:space-x-4 sm:space-y-4 lg:space-y-2">
              <label
                className="font-regular text-2xl mr-5"
                for="phisical_activities"
              >
                Actividades físicas que realiza:
              </label>
              <div></div>
              <select
                className="border border-gray-400 p-2 rounded-md focus:outline-none focus:border-teal-400 w-[195px] sm:w-[255px] md:w-[300px]"
                name="phisical_activities_1"
                id="phisical_activities_1"
              >
                <option value="1">Ninguna</option>
                <option value="2">Fútbol</option>
                <option value="3">Basketbol</option>
                <option value="4">Voleybol</option>
                <option value="5">Otra</option>
              </select>
              <select
                className="border border-gray-400 p-2 rounded-md focus:outline-none focus:border-teal-400 w-[195px] sm:w-[255px] md:w-[300px]"
                name="phisical_activities_2"
                id="phisical_activities_2"
              >
                <option value="1">Ninguna</option>
                <option value="2">Fútbol</option>
                <option value="3">Basketbol</option>
                <option value="4">Voleybol</option>
                <option value="5">Otra</option>
              </select>
              <select
                className="border border-gray-400 p-2 rounded-md focus:outline-none focus:border-teal-400 w-[195px] sm:w-[255px] md:w-[300px]"
                name="phisical_activities_3"
                id="phisical_activities_3"
              >
                <option value="1">Ninguna</option>
                <option value="2">Fútbol</option>
                <option value="3">Basketbol</option>
                <option value="4">Voleybol</option>
                <option value="5">Otra</option>
              </select>
              <select
                className="border border-gray-400 p-2 rounded-md focus:outline-none focus:border-teal-400 w-[195px] sm:w-[255px] md:w-[300px]"
                name="phisical_activities_4"
                id="phisical_activities_4"
              >
                <option value="1">Ninguna</option>
                <option value="2">Fútbol</option>
                <option value="3">Basketbol</option>
                <option value="4">Voleybol</option>
                <option value="5">Otra</option>
              </select>
            </div>
            <div className="p-3 space-x-2 space-y-2 sm:space-x-4 sm:space-y-4 lg:space-y-2">
              <label
                className="font-regular text-2xl mr-5"
                for="health_problems"
              >
                Enfermedades que padece:
              </label>
              <div></div>
              <select
                className="border border-gray-400 p-2 rounded-md focus:outline-none focus:border-teal-400 w-[195px] sm:w-[255px] md:w-[300px]"
                name="health_problems_1"
                id="health_problems_1"
              >
                <option value="1">Ninguna</option>
                <option value="2">Migraña</option>
                <option value="3">Daltonismo</option>
                <option value="4">Ansiedad</option>
                <option value="5">Depresión</option>
                <option value="6">Otra</option>
              </select>
              <select
                className="border border-gray-400 p-2 rounded-md focus:outline-none focus:border-teal-400 w-[195px] sm:w-[255px] md:w-[300px]"
                name="health_problems_2"
                id="health_problems_2"
              >
                <option value="1">Ninguna</option>
                <option value="2">Migraña</option>
                <option value="3">Daltonismo</option>
                <option value="4">Ansiedad</option>
                <option value="5">Depresión</option>
                <option value="6">Otra</option>
              </select>
              <select
                className="border border-gray-400 p-2 rounded-md focus:outline-none focus:border-teal-400 w-[195px] sm:w-[255px] md:w-[300px]"
                name="health_problems_3"
                id="health_problems_3"
              >
                <option value="1">Ninguna</option>
                <option value="2">Migraña</option>
                <option value="3">Daltonismo</option>
                <option value="4">Ansiedad</option>
                <option value="5">Depresión</option>
                <option value="6">Otra</option>
              </select>
              <select
                className="border border-gray-400 p-2 rounded-md focus:outline-none focus:border-teal-400 w-[195px] sm:w-[255px] md:w-[300px]"
                name="health_problems_4"
                id="health_problems_4"
              >
                <option value="1">Ninguna</option>
                <option value="2">Migraña</option>
                <option value="3">Daltonismo</option>
                <option value="4">Ansiedad</option>
                <option value="5">Depresión</option>
                <option value="6">Otra</option>
              </select>
            </div>
            <div className="p-3">
              <label className="font-regular text-2xl mr-5" for="travel_time">
                Horas de viaje al día:
              </label>
              <select
                className="border border-gray-400 p-2 rounded-md focus:outline-none focus:border-teal-400 sm:w-[255px] md:w-[300px]"
                name="sleep_hours"
                id="sleep_hours"
              >
                <option value="1">Menos de media hora al día</option>
                <option value="2">De media hora a 1 hora al día</option>
                <option value="3">De 1 a 2 horas al día</option>
                <option value="4">De 2 a 3 horas al día</option>
                <option value="5">De 3 a 4 horas al día</option>
                <option value="6">De 4 o más horas al día</option>
              </select>
            </div>
            <div className="p-3">
              <label
                className="font-regular text-2xl mr-5"
                for="extra_activities"
              >
                Posee actividad extra de trabajo:
              </label>
              <select
                className="border border-gray-400 p-2 rounded-md focus:outline-none focus:border-teal-400"
                name="work"
                id="work"
              >
                <option value="1">Si</option>
                <option value="2">No</option>
              </select>
            </div>

            <div className="p-3">
              <label
                className="font-regular text-2xl mr-5"
                for="extra_activities"
              >
                Tiempo de recreación:
              </label>
              <select
                className="border border-gray-400 p-2 rounded-md focus:outline-none focus:border-teal-400 w-[195px] sm:w-[255px] md:w-[300px]"
                name="sleep_hours"
                id="sleep_hours"
              >
                <option value="1">De 0 a 2 horas al día</option>
                <option value="2">De 2 a 4 horas al día</option>
                <option value="3">De 4 a 8 horas al día</option>
                <option value="4">8 o más horas al día</option>
              </select>
            </div>
          </section>
        </form>
      </section>
    </>
  );
}
