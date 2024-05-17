import React from "react";
import { Sidebar } from "../navigation/Sidebar";
import { EventCard } from "../events/EventCard";
import { Search } from "../navigation/Search";
import { Filter } from "../navigation/Filter";
import "../../index.css";

export function Events() {
  return (
    <div className="flex justify-end">
      <Sidebar username="Freddy Garro" />
      <section className="flex w-[80vw] max-sm:w-[100vw] max-md:w-[100vw] max-lg:w-[100vw] md:p-[40px] p-[20px] gap-[20px]">
        <div className="flex flex-col gap-[20px]">
          <h1 className="text-custom-dark font-secondary font-black text-[40px]">
            My events
          </h1>
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
  );
}
