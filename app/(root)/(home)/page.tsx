import MeetingLists from "@/components/MeetingLists";
import React from "react";

const page = () => {
  const now = new Date()

  const time = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit'} )
  const date = (new Intl.DateTimeFormat('en-IN', {
    dateStyle: 'full'
  })).format(now)

  return (
    <section className="flex flex-col gap-10 size-full text-white">
      <div className="w-full h-[300px] rounded-[20px] bg-cover bg-hero">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">

        <h2 className="text-base font-normal py-2 rounded max-w-[270px] text-center glassmorphism">
          Upcoming Meetings at: 12:30 PM
        </h2>
        <div className=" flex flex-col gap-2">
          <h1 className="text-4xl lg:text-7xl font-extrabold uppercase">{time}</h1>
          <p className="text-lg font-medium text-sky-1">{date}</p>
        </div>
        </div>
      </div>

      <MeetingLists /> 
    </section>
  );
};

export default page;
