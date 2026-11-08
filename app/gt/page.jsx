"use client";

import { motion } from "framer-motion";
import { FaCar, FaCogs, FaTachometerAlt, FaLaptopCode, FaFlagCheckered } from "react-icons/fa";
import { GiSteeringWheel } from "react-icons/gi";
import Sponsors from "@/components/Sponsors";

const drivers = [
  {
    name: "Dmitriy Labukov",
    role: "Main Driver",
    achievement: "2x World Champion Miata Cup",
    image: null,
  },
  {
    name: "Aaron Melkias",
    role: "2nd Driver",
    achievement: "Track Day and GT4 Test Driver",
    image: "/assets/team/Aaron.png",
  },
  {
    name: "Azim Shukurov",
    role: "Development Driver",
    achievement: "Development & Simulation Testing",
    image: null,
  },
];

const pillars = [
  "Vehicle Development",
  "Race Engineering",
  "Driver Performance",
];

const subsections = [
  {
    icon: <FaCogs className="text-3xl text-primary" />,
    title: "Vehicle Dynamics & Performance Engineering",
    tagline: "Understanding the car is the first step towards making it faster.",
    paragraphs: [
      "Our vehicle dynamics programme investigates how suspension, tyres, aerodynamics and mass distribution influence the behaviour of a racing car.",
      "We focus on suspension kinematics, wheel alignment, damping characteristics, roll stiffness, mechanical grip and overall vehicle balance.",
      "By combining engineering calculations, computational models, driver feedback and practical testing, we aim to understand not merely whether a modification improves performance, but why.",
      "The goal is to develop a structured, evidence-led approach to race-car setup rather than relying on trial and error.",
    ],
  },
  {
    icon: <FaLaptopCode className="text-3xl text-primary" />,
    title: "Driver Development & Simulation",
    tagline: "A competitive car requires a driver capable of exploiting it.",
    paragraphs: [
      "Driver development is an integral part of the GT Division, supported by a high-fidelity racing simulator incorporating Simucube direct-drive steering technology and Heusinkveld professional-grade pedals.",
      "Our simulator provides a controlled environment for developing braking consistency, throttle modulation, racing lines, vehicle control and circuit familiarity.",
      "Beyond individual driving skills, simulation is used to develop the relationship between driver and engineer, encouraging accurate technical feedback and a systematic approach to identifying performance limitations.",
      "Our objective is to create drivers who understand the engineering behind the car, and engineers who understand the demands placed upon the driver.",
    ],
  },
  {
    icon: <FaFlagCheckered className="text-3xl text-primary" />,
    title: "Track Performance & Testing",
    tagline: "Every modification is a hypothesis. The circuit is where we test it.",
    paragraphs: [
      "Track testing forms the practical foundation of our performance development programme.",
      "Through structured testing, we seek to evaluate vehicle behaviour, validate engineering decisions and measure the effects of setup changes under real operating conditions.",
      "Our testing methodology encompasses tyre behaviour, braking performance, thermal management, suspension response, aerodynamic performance and driver consistency.",
      "By combining recorded performance data with driver feedback, we aim to establish clear relationships between modifications and their effects on lap time, handling and reliability.",
      "As the programme develops, competition in UAE time attack and autocross events will provide a demanding environment in which to evaluate our engineering work.",
      "The objective is not simply to build faster cars. It is to develop the engineering knowledge, technical discipline and driving capability required to make them faster.",
    ],
  },
];

const GT = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.5, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12"
    >
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-12 xl:pt-4 xl:pb-20">
          <div className="text-center xl:text-left order-2 xl:order-none max-w-[650px]">
            <div className="inline-block mb-3 px-4 py-1 rounded-full border border-accent/40 bg-accent/10 text-accent text-xs font-mono tracking-widest uppercase">
              GT Division
            </div>
            <h1 className="h1 mb-4">
              <span className="font-light">Engineering Beyond</span> <br />
              <span className="text-accent">The Workshop</span>
            </h1>

            {/* Pillars */}
            <div className="flex flex-wrap items-center justify-center xl:justify-start gap-2 mb-6">
              {pillars.map((pillar, idx) => (
                <span
                  key={idx}
                  className="text-xs md:text-sm font-mono text-white/90 bg-white/5 border border-white/10 px-3 py-1 rounded-md"
                >
                  {pillar}
                </span>
              ))}
            </div>

            <div className="space-y-4 text-white/80 text-sm md:text-base leading-relaxed">
              <p>
                The GT Division of Atlas Racing is dedicated to the development, optimisation and competitive operation of high-performance vehicles.
              </p>
              <p>
                Our programme centres on two distinct platforms: the <strong className="text-accent font-semibold">Shaali N360</strong>, a purpose-built lightweight racing chassis, and the <strong className="text-accent font-semibold">BMW E82 135i</strong>, a production-based platform being developed for track competition.
              </p>
              <p>
                Although fundamentally different in design and engineering philosophy, both vehicles serve a common purpose: to understand, develop and extract performance through applied engineering.
              </p>
              <p className="text-white/60 text-xs md:text-sm">
                From suspension geometry and aerodynamic development to driver training and trackside testing, the division brings together mechanical design, vehicle dynamics, simulation and motorsport operations.
              </p>
            </div>
          </div>

          <div className="order-1 xl:order-none flex justify-center">
            <div className="relative group">
              <div className="w-[320px] h-[260px] md:w-[480px] md:h-[350px] xl:w-[540px] xl:h-[380px] bg-accent/20 p-2 rounded-2xl border border-accent/40 shadow-2xl backdrop-blur-sm">
                <img
                  src="/assets/images/hydrakonteam.jpg"
                  alt="Atlas Racing GT Division"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Our Cars Section */}
        <section className="py-16 border-t border-white/10">
          <div className="text-center mb-12">
            <span className="text-accent font-mono text-sm tracking-widest uppercase">The Machines</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">Our Cars</h2>
            <p className="text-white/60 max-w-[650px] mx-auto mt-3 text-sm md:text-base">
              Two distinct engineering philosophies, one unified focus on vehicle dynamics and track performance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Shaali N360 */}
            <div className="p-8 rounded-2xl bg-white/[0.03] border border-accent/30 hover:border-accent transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-primary text-2xl font-bold">
                    <FaCar />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Shaali N360</h3>
                    <span className="text-accent text-xs font-mono uppercase tracking-wider">
                      Purpose-Built Motorsport
                    </span>
                  </div>
                </div>

                <div className="space-y-4 text-white/80 text-sm md:text-base leading-relaxed">
                  <p>
                    The Shaali N360, UAE&apos;s first purpose-built race car built by race car driver Rashid Al Shaali, has been graciously handed over for us to restore. It represents our dedicated race-car development programme, providing an opportunity to work with a lightweight tubular chassis unconstrained by conventional production-car architecture.
                  </p>
                  <p>
                    Powered by a second-generation Suzuki Hayabusa engine, the development package incorporates a Quaife chain-driven limited-slip differential and a sophisticated suspension system centred on Öhlins TTX dampers.
                  </p>
                  <p>
                    Our engineering programme focuses on drivetrain integration, suspension development, mechanical reliability, vehicle balance and performance optimisation.
                  </p>
                  <p className="text-white/60 text-xs md:text-sm">
                    The long-term objective is to establish the N360 as a competitive, extensively developed track platform capable of supporting advanced vehicle dynamics research and motorsport competition.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-2 text-xs font-mono text-accent">
                <span className="bg-accent/10 px-3 py-1 rounded-md border border-accent/20">Suzuki Hayabusa Gen-2</span>
                <span className="bg-accent/10 px-3 py-1 rounded-md border border-accent/20">Öhlins TTX Dampers</span>
                <span className="bg-accent/10 px-3 py-1 rounded-md border border-accent/20">Quaife Chain-Driven LSD</span>
                <span className="bg-accent/10 px-3 py-1 rounded-md border border-accent/20">Tubular Chassis</span>
              </div>
            </div>

            {/* BMW E82 135i */}
            <div className="p-8 rounded-2xl bg-white/[0.03] border border-accent/30 hover:border-accent transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-primary text-2xl font-bold">
                    <FaTachometerAlt />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">BMW E82 135i</h3>
                    <span className="text-accent text-xs font-mono uppercase tracking-wider">
                      Production-Based Race Development
                    </span>
                  </div>
                </div>

                <div className="space-y-4 text-white/80 text-sm md:text-base leading-relaxed">
                  <p>
                    Our BMW E82 135i presents a different engineering challenge: transforming a turbocharged, rear-wheel-drive road car into a capable and competitive track machine.
                  </p>
                  <p>
                    Built around BMW&apos;s N54 twin-turbocharged inline-six, the project follows a progressive development philosophy, beginning with mechanical reliability and establishing a repeatable performance baseline.
                  </p>
                  <p>
                    The programme encompasses braking performance, suspension and steering geometry, thermal management, chassis development and a comprehensive aerodynamic package.
                  </p>
                  <p className="text-white/60 text-xs md:text-sm">
                    With future participation in UAE time attack and autocross competition as a central objective, the E82 provides a platform for investigating the relationship between engineering modifications, driver behaviour and measurable on-track performance.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-2 text-xs font-mono text-accent">
                <span className="bg-accent/10 px-3 py-1 rounded-md border border-accent/20">BMW N54 Twin-Turbo</span>
                <span className="bg-accent/10 px-3 py-1 rounded-md border border-accent/20">RWD Platform</span>
                <span className="bg-accent/10 px-3 py-1 rounded-md border border-accent/20">Aero Development</span>
                <span className="bg-accent/10 px-3 py-1 rounded-md border border-accent/20">UAE Time Attack Ready</span>
              </div>
            </div>
          </div>
        </section>

        {/* Engineering Subsections */}
        <section className="py-16 border-t border-white/10">
          <div className="text-center mb-12">
            <span className="text-accent font-mono text-sm tracking-widest uppercase">Methodology</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">Applied Engineering Disciplines</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subsections.map((sub, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-accent/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-6">
                    {sub.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{sub.title}</h3>
                  <p className="text-accent text-xs font-mono mb-4 italic">&ldquo;{sub.tagline}&rdquo;</p>
                  <div className="space-y-3 text-white/70 text-sm leading-relaxed">
                    {sub.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Meet Our Drivers */}
        <section className="py-16 border-t border-white/10">
          <div className="text-center mb-12">
            <span className="text-accent font-mono text-sm tracking-widest uppercase">The Cockpit</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">Meet Our Drivers</h2>
            <p className="text-white/60 max-w-[650px] mx-auto mt-3 text-sm md:text-base">
              The talent pushing our engineering to the limit on the track and in high-fidelity simulation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {drivers.map((driver, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-accent transition-all duration-300 text-center flex flex-col items-center"
              >
                <div className="relative w-36 h-36 rounded-full overflow-hidden bg-accent/10 border-2 border-accent mb-5 flex items-center justify-center">
                  {driver.image ? (
                    <img
                      src={driver.image}
                      alt={driver.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-accent">
                      <GiSteeringWheel className="text-5xl" />
                    </div>
                  )}
                </div>

                <span className="text-accent text-xs font-mono uppercase tracking-widest mb-1">
                  {driver.role}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{driver.name}</h3>
                <p className="text-white/70 text-xs md:text-sm bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                  {driver.achievement}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Sponsors Section */}
      <Sponsors />
    </motion.div>
  );
};

export default GT;
