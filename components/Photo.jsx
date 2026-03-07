"use client";

import { motion } from "framer-motion";
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
        <div className="w-[280px] sm:w-[320px] md:w-[420px] xl:w-[540px] h-[210px] sm:h-[240px] md:h-[315px] xl:h-[410px] relative rounded-[24px]">
            {/* Yellow Dotted Border with Image */}
            <motion.svg
                className="absolute inset-0 pointer-events-none"
                fill="transparent"
                viewBox="0 0 430 336" /* Matches the 4:3 aspect ratio */
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <clipPath id="roundedImageClip">
                        <rect
                            x="1%"
                            y="1%"
                            width="98%"
                            height="96%"
                            rx="16"
                            ry="16"
                        />
                    </clipPath>
                </defs>
                {/* Embedded Image */}
                <image
                    href={images[currentIndex]}
                    x="1%"
                    y="1%"
                    width="98%"
                    height="96%"
                    alt="Atlas Racing Team"
                    preserveAspectRatio="xMidYMid slice"
                    clipPath="url(#roundedImageClip)"
                />
    
                {/* Yellow Dotted Border */}
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
    );
}

export default Photo;