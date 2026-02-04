"use client";

import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

const Stats = () => {
  const stats = [
    {
      num: 7,
      text: "Sub Teams",
    },
    {
      num: 60,
      text: "Club Members",
    },
    {
      num: 6,
      text: "Years since establishment",
    },
  ];

  return (
    <section>
      <div className="container mx-auto py-8">
        {/* Title Section */}
        <div className="mb-6 justify-center">
          <h1 className="text-4xl font-bold text-accent text-center font-mono">Atlas at a Glance</h1>
        </div>
        {/* Stats Section */}
        <div className="flex flex-col xl:flex-row flex-wrap gap-6 max-w-[80vw] mx-auto md:max-w-none">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex-1 grid grid-cols-2 gap-4 items-center w-full justify-center p-4 rounded-lg xl:bg-transparent"
            >
              <div className="flex justify-center items-center">
                <CountUp
                  end={stat.num}
                  duration={5}
                  delay={1}
                  className="text-5xl xl:text-7xl font-extrabold text-accent/80 font-mono"
                />
              </div>
              <div className="flex justify-start items-center">
                <p className="leading-snug text-white/80 text-left font-bold">
                  {stat.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
