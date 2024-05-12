import React from "react";
import { Sidebar } from "../navigation/Sidebar";
import { Welcome } from "../dashboard/Welcome";
import { Slider } from "../dashboard/Slider";
import { HorizontalCard } from "../dashboard/HorizontalCard";
import { Calendar } from "../dashboard/Calendar";
import { GeneralStats } from "../dashboard/GeneralStats";

import "../../index.css";

export function Dashboard() {
  return (
    <div className="flex justify-end">
      <Sidebar username="Freddy Garro" />
      <section className="grid grid-cols-1 xl:grid-cols-4 lg:ml-[20rem] mx-4 xl:gap-6">
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
    </div>
  );
}
