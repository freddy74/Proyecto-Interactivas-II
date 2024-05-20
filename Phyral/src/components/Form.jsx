import "../index.css";

export function Form() {
    return (
        <section className="lg:ml-[23rem] mx-6 xl:gap-6 h-full">
        <form action="" method="post">
          <div>
            <h1 className="text-4xl font-extrabold mt-6 ml-2">
              Información General
            </h1>
            <p className="text-xl font-regular mt-2 text-gray-400 ml-2">
              * Esta información es confidencial y utilizada únicamente para
              control interno de la Universidad y de la aplicación.
            </p>
          </div>

          <div className="w-1/4 ml-10">
            <label
              className="block my-2 text-2xl font-medium"
              for="sleep_hours"
            >
              Horas de sueño al día
            </label>
            <select
              className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-400"
              name="sleep_hours"
              id="sleep_hours"
            >
              <option value="1">De 0 a 2 horas al día</option>
              <option value="2">De 2 a 4 horas al día</option>
              <option value="3">De 4 a 8 horas al día</option>
              <option value="4">8 o más horas al día</option>
            </select>
          </div>
          <div className="w-1/2 ml-10">
            <label
              className="block my-2 text-2xl font-medium"
              for="phisical_activities"
            >
              Actividades físicas que realiza
            </label>
            <input
              className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-400"
              type="text"
              name="phisical_activities"
              id="phisical_activities"
              placeholder="Ingrese las actividades que realiza"
            />
          </div>
          <div className="w-1/2 ml-10">
            <label
              className="block my-2 text-2xl font-medium"
              for="health_problems"
            >
              Enfermedades que padece
            </label>
            <input
              className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-400"
              type="text"
              name="health_problems"
              id="health_problems"
              placeholder="Ingrese las enfermedades que padece"
            />
          </div>
          <div className="w-1/4 ml-10">
            <label
              className="block my-2 text-2xl font-medium"
              for="travel_time"
            >
              Horas de viaje al día
            </label>
            <select
              className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-400"
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
          <div className="w-1/2 ml-10">
            <label
              className="block my-2 text-2xl font-medium"
              for="extra_activities"
            >
              Posee actividad extra de trabajo
            </label>
            <select
              className="w-1/6 border border-gray-400 block py-2 px-4 rounded focus:outline-none focus:border-teal-400"
              name="work"
              id="work"
            >
              <option value="1">Si</option>
              <option value="2">No</option>
            </select>
          </div>

          <div className="w-1/4 ml-10">
            <label
              className="block my-2 text-2xl font-medium"
              for="extra_activities"
            >
              Tiempo de recreación
            </label>
            <select
              className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-400"
              name="sleep_hours"
              id="sleep_hours"
            >
              <option value="1">De 0 a 2 horas al día</option>
              <option value="2">De 2 a 4 horas al día</option>
              <option value="3">De 4 a 8 horas al día</option>
              <option value="4">8 o más horas al día</option>
            </select>
          </div>
        </form>
      </section>
    );
}