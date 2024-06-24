import React from "react";
import { Sidebar } from "../navigation/Sidebar";
import { EventCard } from "../events/EventCard";
import { Search } from "../navigation/Search";
import { Filter } from "../navigation/Filter";

import { useFetchData } from "../hooks/useFetchData";

import "../../index.css";

export function Events() {

  const { data } = useFetchData();

  const createEvents = (items) => {
    return items.map( item => <EventCard 
        key={item.id}
        taskImg={item.image}
        eventName={item.title}
        description={item.description}
        category={item.category_name}
        />)
  }

  //const events = data.events || [];


  return (
    <>
      <Sidebar username="Freddy Garro" />
      <section className="text-custom-dark grid mx-4 lg:ml-[20rem]">
        <div className="flex flex-col gap-[20px]">
          <h1 className="text-custom-dark font-secondary font-black text-[40px] max-lg:mt-28">
            My events
          </h1>
          <div className="flex justify-between items-center">
            <Filter />
            <Search />
          </div>
          <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-[20px] w-full">
            
            { createEvents(data) }

          </div>
        </div>
      </section>
    </>
  );
}
