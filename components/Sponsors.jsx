"use client";

import Image from "next/image";

const Sponsors = () => {
  const LegacySponsors = [
    {
      image: "/assets/images/logos/heriot.png"
    },
    {
      image: "/assets/images/logos/liverpool.png"
    },
    // {
    //   image: "/assets/images/logos/oceanworks.png"
    // },
    {
      image: "/assets/images/logos/siemens.png"
    },
  ];

  return (
    <section>
      <div className="container mx-auto py-8">
        {/* Title Section */}
        <div className="mb-6 justify-center mt-[100px] xl:mt-0">
          <h1 className="text-4xl font-bold text-accent text-center">Legacy Sponsors</h1>
            <p className="text-white/80 text-sm text-center max-w-[900px] mx-auto mt-5">
                Our Legacy Sponsors are those who've stood by us since the beginning. Their early belief laid the foundation for everything we've built, and they'll forever be a part of our journey
            </p>
        </div>
        
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8 items-center justify-items-center w-full max-w-4xl mx-auto">
          {LegacySponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex justify-center items-center p-4 rounded-lg"
            >
              <Image
                src={sponsor.image}
                alt={`Legacy Sponsor ${index + 1}`}
                width={200}
                height={100}
                className="object-contain max-w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>

      {/* <div className="container mx-auto py-8">
        <div className="mb-6 justify-center">
          <h1 className="text-4xl font-bold text-accent text-center">Fusion Sponsors</h1>
            <p className="text-white/80 text-sm text-center max-w-[900px] mx-auto mt-5">
                Fusion partners are embedded in our journey. They contribute to key systems and share our vision for innovation and collaboration
            </p>
        </div>

        <div className="flex flex-col xl:flex-row flex-wrap gap-6 max-w-[80vw] mx-auto md:max-w-none">
          {Sponsors.map((stat, index) => (
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

      <div className="container mx-auto py-8">
        <div className="mb-6 justify-center">
          <h1 className="text-4xl font-bold text-accent text-center">Momentum Sponsors</h1>
            <p className="text-white/80 text-sm text-center max-w-[900px] mx-auto mt-5">
                Sponsors at this level help us gain speed, whether through hardware, logistics, or domain expertise, they drive meaningful progress
            </p>
        </div>

        <div className="flex flex-col xl:flex-row flex-wrap gap-6 max-w-[80vw] mx-auto md:max-w-none">
          {Sponsors.map((stat, index) => (
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

      <div className="container mx-auto py-8">
        <div className="mb-6 justify-center">
          <h1 className="text-4xl font-bold text-accent text-center">Ignition Sponsors</h1>
            <p className="text-white/80 text-sm text-center max-w-[900px] mx-auto mt-5">
                Every great journey starts with a spark. Ignition sponsors fuel the foundation of our mission by supporting core resources
            </p>
        </div>

        <div className="flex flex-col xl:flex-row flex-wrap gap-6 max-w-[80vw] mx-auto md:max-w-none">
          {Sponsors.map((stat, index) => (
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
      </div> */}
    </section>
  );
};

export default Sponsors;
