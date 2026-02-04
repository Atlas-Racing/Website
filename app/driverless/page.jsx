"use client";

import StatsDriverless from "@/components/StatsDriverless";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";


const Driverless = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
        <section className="h-full">
            <div className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">


                {/* Text */}
                <div className="text-center xl:text-left order-2 xl:order-none">
                    <h1 className="h1 mb-6">
                    <span className="h2">The Future is</span> <br />
                    <span className="text-accent">Driverless</span>
                    </h1>
                    <p className="max-w-[500px] mb-9 text-white/80 text-sm md:text:mg lg:text-lg">
                        Meet our driverless division, where our engineers and programmers collaborate to create cutting-edge autonomous systems for Formula Student Driverless (FS-AI)
                    </p>

                    {/* Button and Socials */}
                    <div className="flex flex-col xl:flex-row items-center gap-5">
                        {/* <Button variant="outline" size="lg" className="uppercase flex items-center gap-1">
                            <span>Join Us</span>
                        </Button> */}
                        <Link href="/driverless/perception">
                            <Button variant="outline" size="lg" className="uppercase flex items-center gap-1">
                                <span>Perception</span>
                            </Button>
                        </Link>
                        {/* <div className="mb-8 xl:mb-0">
                            <Button variant="outline" size="lg" className="uppercase flex items-center gap-1">
                                <span>Perception</span>
                            </Button>
                        </div> */}
                        <div className="mb-8 xl:mb-0">
                            <Link href="/driverless/planning">
                                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                                    <span>Planning</span>
                                </Button>
                            </Link>
                        </div>
                        <div className="mb-8 xl:mb-0">
                            <Link href="/driverless/control">
                                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                                    <span>Control</span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="order-1 xl:order-none mb-12 xl:mb-0 mt-12 xl:mt-0 flex justify-end">
                    <div className="relative">
                        <div className="w-[350px] h-[300px] xl:w-[550px] xl:h-[400px] bg-accent p-1 rounded-xl">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover rounded-xl"
                        >
                            <source src="/assets/videos/driverless.mp4" type="video/mp4" />
                        </video>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <StatsDriverless />
        </section>
    </motion.div>
  );
};

export default Driverless;
