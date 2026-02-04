"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import { FaPython } from "react-icons/fa";
import { SiOpencv, SiPytorch, SiTensorflow } from "react-icons/si";
import { RiRobot2Fill } from "react-icons/ri";

const Perception = () => {
    const languagesAndTools = [
    { name: "Python", logo: <FaPython /> },
    { name: "OpenCV", logo: <SiOpencv /> },
    { name: "TensorFlow", logo: <SiTensorflow /> },
    { name: "PyTorch", logo: <SiPytorch /> },
    { name: "ROS2", logo: <RiRobot2Fill /> },
  ];


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 mt-[-50px]"
    >
        <section className="h-full">
            <div className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">


                {/* Text */}
                <div className="text-center xl:text-left order-2 xl:order-none">
                    <h1 className="h1 mb-6">
                    <span className="h2">Driverless</span> <br />
                    <span className="text-accent">Perception</span>
                    </h1>
                    <p className="max-w-[500px] mb-9 text-white/80 text-sm md:text:mg lg:text-lg">
                        Know more about our perception sub-division, where we focus on building perception systems that enable our autonomous system to understand its environment. If any part of that interested you, this might be the right place for you
                    </p>

                    {/* Button and Socials */}
                    <div className="flex flex-col xl:flex-row items-center gap-5">
                        {/* <Button variant="outline" size="lg" className="uppercase flex items-center gap-1">
                            <span>Join Us</span>
                        </Button> */}
                        <Button variant="outline" size="lg" className="uppercase flex items-center gap-1">
                            <span>Join Us</span>
                        </Button>
                    </div>
                </div>

                {/* Photo */}
                <div className="order-1 xl:order-none mb-12 xl:mb-0 mt-12 xl:mt-0">
                    <div className="relative">
                        <div className="w-[350px] h-[300px] xl:w-[550px] xl:h-[400px] bg-accent p-1 rounded-xl">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover rounded-xl"
                        >
                            <source src="/assets/videos/ads-dv-feed.mp4" type="video/mp4" />
                        </video>
                        </div>
                    </div>
                </div>
                </div>

                <div className="mt-12 xl:mt-[-50px]">
                        <div className="rounded-xl p-8 xl:p-12 w-full">
                            <h2 className="text-3xl xl:text-4xl font-bold text-center mb-8">
                            Languages and Tools We Use
                            </h2>
                            {/* Tools Grid */}
                            <div className="flex flex-wrap justify-evenly gap-6 xl:gap-8">
                                {languagesAndTools.map((tool, index) => (
                                    <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ 
                                        duration: 0.5, 
                                        delay: 2.5 + (index * 0.1),
                                        ease: "easeOut"
                                    }}
                                    className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-[#e09e18] transition-all duration-300 hover:scale-105 min-w-[120px] xl:min-w-[150px] group"
                                    >
                                        <div className="w-12 h-12 xl:w-16 xl:h-16 flex items-center justify-center text-white group-hover:text-[#1b2a39] text-3xl xl:text-4xl transition-all duration-300">
                                            {tool.logo}
                                        </div>
                                        <span className="text-white/80 group-hover:text-[#1b2a39] text-sm font-medium text-center transition-all duration-300">
                                            {tool.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    </motion.div>
  );
};

export default Perception;
