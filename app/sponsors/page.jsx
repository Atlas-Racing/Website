"use client";

import Sponsors from "@/components/Sponsors";
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
                    <span className="h2">Our</span> <br />
                    <span className="text-accent">Sponsors</span>
                    </h1>
                    <p className="max-w-[500px] mb-9 text-white/80 text-sm md:text:mg lg:text-lg">
                        Know more about our sponsors. Their contributions are crucial to our success, providing the resources and technology we need to push the boundaries of autonomous racing.
                    </p>

                    {/* Button and Socials */}
                    <div className="flex flex-col xl:flex-row items-center gap-5">
                        {/* <Button variant="outline" size="lg" className="uppercase flex items-center gap-1">
                            <span>Join Us</span>
                        </Button> */}
                        <Link href="/driverless/perception">
                            <Button variant="outline" size="lg" className="uppercase flex items-center gap-1">
                                <span>Interested in sponsoring us?</span>
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="order-1 xl:order-none mb-12 xl:mb-0 mt-12 xl:mt-0 flex justify-end">
                    <div className="relative">
                        <div className="w-[350px] h-[300px] xl:w-[550px] xl:h-[400px] bg-accent p-1 rounded-xl">
                            <img src="/assets/images/hydrakonteam.jpg" alt="Hydrakon Team" className="w-full h-full object-cover rounded-xl" />
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <Sponsors />
        </section>
    </motion.div>
  );
};

export default Driverless;
