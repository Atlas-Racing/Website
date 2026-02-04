"use client";

import CountUp from "react-countup";

const StatsDriverless = () => {
  const StatsDriverless = [
    {
      num: 1,
      text: "Competition Attended",
    },
    {
      num: 2,
      text: "Awards Won",
    },
    {
      num: 1,
      text: "Years since establishment",
    },
  ];

  return (
    <section>
      <div className="container mx-auto py-8">
        {/* Title Section */}
        <div className="mb-6 justify-center">
          <h1 className="text-4xl font-bold text-accent text-center">Stats</h1>
        </div>
        {/* StatsDriverless Section */}
        <div className="flex flex-col xl:flex-row flex-wrap gap-6 max-w-[80vw] mx-auto md:max-w-none">
          {StatsDriverless.map((stat, index) => (
            <div
              key={index}
              className="flex-1 grid grid-cols-2 gap-4 items-center w-full justify-center p-4 rounded-lg xl:bg-transparent"
            >
              <div className="flex justify-center items-center">
                <CountUp
                  end={stat.num}
                  duration={5}
                  delay={1}
                  className="text-5xl xl:text-7xl font-extrabold text-accent/80"
                />
              </div>
              <div className="flex justify-start items-center">
                <p className="leading-snug text-white/80 text-left">
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

export default StatsDriverless;
