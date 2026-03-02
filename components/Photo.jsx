"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const Photo = () => {
    const images = [
        "/assets/team/group/photo01.JPG",
        "/assets/team/group/photo02.JPG",
        "/assets/team/group/photo03.JPG",
        "/assets/team/group/photo04.JPG",
        "/assets/team/group/photo05.JPG",
        "/assets/team/group/photo06.JPG",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="w-[280px] sm:w-[320px] md:w-[420px]  xl:w-[580px] h-[210px] sm:h-[280px] md:h-[330px] xl:h-[430px] relative rounded-[20px]">
            {/* Photo Section */}
            <motion.div
                className="absolute inset-0 xl:inset-2 overflow-hidden rounded-[12px] h-full xl:m-0 md:m-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" } }}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full"
                    >
                        <Image
                            src={images[currentIndex]}
                            priority
                            quality={100}
                            fill
                            alt="Atlas Racing Team"
                            className="object-cover"
                        />
                    </motion.div>
                </AnimatePresence>
            </motion.div>

            {/* Yellow Dotted Border */}
            <motion.svg
                className="absolute inset-0 pointer-events-none"
                fill="transparent"
                viewBox="0 0 430 336"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.rect
                    x="2"
                    y="2"
                    width="426"
                    height="326"
                    rx="7"
                    ry="7"
                    stroke="#e09e18"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ strokeDasharray: "24 10 0 0" }}
                    animate={{
                        strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />
            </motion.svg>
        </div>
    )
}

export default Photo;