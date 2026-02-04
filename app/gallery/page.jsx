"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// about data
const about = {
  title: "About Us",
  description:
    "Atlas Racing is the student-led Racing Club at Heriot-Watt University, Dubai. We also have sub-teams focused on taking part in the Driverless, EV, and Concept Class at Formula Student UK.",
};

const driverless = {
  title: "Driverless Team",
  description:
    "Meet our talented Driverless Core Team, who are building systems to compete in the Driverless Class at FS-UK.",
  items: [
    {
      name: "Aditya Shibu",
      position: "Head of Driverless",
      image: "Aditya.png"
    },
    {
      name: "Moiz Saeed",
      position: "Localization & Mapping Engineer",
      image: "Moiz.png"
    },
    {
      name: "Abdul Majid",
      position: "Hybrid Engineer",
      image: "Abdul.png"
    },
    {
      name: "Apsara S",
      position: "Systems Engineer",
      image: "Apsara.png"
    },
    {
      name: "Anosha Khan",
      position: "Driverless Member",
      image: "Anosha.png"
    },
    {
      name: "Anoushka W",
      position: "Driverless Member",
      image: "Anoushka.png"
    },
    {
      name: "Suha Ahmed",
      position: "Driverless Member",
      image: "Suha.png"
    },
    {
      name: "Saifullah S",
      position: "Driverless Member",
      image: "Saifullah.png"
    },
    {
      name: "Amr M",
      position: "Driverless Member",
      image: "Amr.png"
    },
  ],
};

const concept = {
  title: "Concept Class Team",
  description:
    "Meet our talented Concept Class Team, who are building systems to compete in the Concept Class at FS-UK.",
  items: [
    {
      name: "Moiz Saeed",
      position: "Head of Concept Class",
      image: "Moiz.png"
    },
    {
      name: "Maryam M",
      position: "Concept Class Member",
      image: "Maryam.png"
    },
    {
      name: "Sameeha M",
      position: "Concept Class Member",
      image: "Sameeha.png"
    },
    {
      name: "Ana Laura",
      position: "Concept Class Member",
      image: "Ana.png"
    },
    {
      name: "Ethan Keague",
      position: "Concept Class Member",
      image: "Ethan.png"
    },
    {
      name: "Taha Kashif",
      position: "Concept Class Member",
      image: "Taha.png"
    },
    {
      name: "Laith Mohamed",
      position: "Concept Class Member",
      image: "Laith.png"
    },
    {
      name: "Pranav M",
      position: "Concept Class Member",
      image: "Pranav.png"
    },
    {
      name: "Jeremy G",
      position: "Concept Class Member",
      image: "Jeremy.png"
    },
    {
      name: "Davlet S",
      position: "Concept Class Member",
      image: "Davlet.png"
    },
    {
      name: "Younus Sheikh",
      position: "Concept Class Member",
      image: "Younus.png"
    },
  ],
};

const outreach = {
  title: "Outreach Team",
  description:
    "Meet our talented Outreach Team, who help spread the word about Atlas Racing and find us supporters and sponsors.",
  items: [
    {
      name: "Aishani Kundu",
      position: "Outreach Executive",
      image: "Aishani.png"
    },
    {
      name: "Anosha Khan",
      position: "Outreach Executive",
      image: "Anosha.png"
    },
    {
      name: "Ria K",
      position: "Outreach Executive",
      image: "Ria.png"
    },
    {
      name: "Dipika S",
      position: "Outreach Executive",
      image: "Dipika.png"
    },
    {
      name: "Shahani Ghani",
      position: "Outreach Executive",
      image: "Shahani.png"
    },
    {
      name: "Sriharsh K",
      position: "Outreach Executive",
      image: "Sriharsh.png"
    },
    {
      name: "Amin Bhola",
      position: "Outreach Executive",
      image: "Amin.png"
    },
    {
      name: "Davlet S",
      position: "Outreach Executive",
      image: "Davlet.png"
    },
  ],
};

const design = {
  title: "Design Team",
  description:
    "Meet our talented Design Team, who help design our interior spaces and develop our brand identity.",
  items: [
    {
      name: "Jana Ayman",
      position: "Design Team Member",
      image: "Jana.png"
    },
    {
      name: "Ishita A",
      position: "Office Design & Development",
      image: "Ishita.png"
    },
    {
      name: "Hiya Tunak",
      position: "Social Media Design",
      image: "Hiya.png"
    },
    {
      name: "Sana Aly",
      position: "Office Design & Development",
      image: "Sana.png"
    },
    {
      name: "Kenouz Y",
      position: "Design Team Member",
      image: "Kenouz.png"
    },
    {
      name: "Mischa Lobo",
      position: "Design Team Member",
      image: "Mischa.png"
    },
    {
      name: "Viktoria K",
      position: "Outreach & Branding",
      image: "Viktoria.png"
    },
    {
      name: "Gulnaz M",
      position: "Design Team Member",
      image: "Gulnaz.png"
    },
  ],
};

// team data
const team = {
  title: "Core Team",
  description:
    "Get to know the core team members of Atlas Racing, who are dedicated to making our racing club a success",
  items: [
    {
      name: "Aaron Albert",
      position: "President & Head of GT",
      image: "Aaron.png"
    },
    {
      name: "Dhruv Laha",
      position: "Vice President",
      image: "Dhruv.png"
    },
    {
      name: "Moiz Saeed",
      position: "FS Team Principal & Head of Concept Class",
      image: "Moiz.png"
    },
    {
      name: "Aditya Shibu",
      position: "Head of Driverless",
      image: "Aditya.png"
    },
  ],
};

// Helper component to load team images with a fallback
const TeamImage = ({ image, name, srcPath }) => {
  const fallbackSrc = "/assets/team/Atlas.png";
  
  const primarySrc = image ? `${srcPath}${image}` : fallbackSrc;

  const [imgSrc, setImgSrc] = useState(primarySrc);

  useEffect(() => {
    setImgSrc(image ? `${srcPath}${image}` : fallbackSrc);
  }, [image, srcPath, fallbackSrc]);

  const handleError = () => {
    if (imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <div className="w-[125px] h-[125px] rounded-full bg-gray-400 flex-shrink-0 relative overflow-hidden">
      <Image
        src={imgSrc}
        alt={name}
        fill
        style={{ objectFit: "cover" }}
        onError={handleError}
      />
    </div>
  );
};

const About = () => {
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);
  const scrollAreaViewport = useRef(null);

  const handleScroll = () => {
    if (scrollAreaViewport.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollAreaViewport.current;
      
      const atBottom = scrollHeight - scrollTop - clientHeight < 1;
      setIsScrolledToBottom(atBottom);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6 font-mono">
            <TabsTrigger value="about" className="bg-[#283e54]">About</TabsTrigger>
            <TabsTrigger value="core" className="bg-[#283e54]">Core Team</TabsTrigger>
            <TabsTrigger value="driverless" className="bg-[#283e54]">Driverless Team</TabsTrigger>
            <TabsTrigger value="concept" className="bg-[#283e54]">Concept Class Team</TabsTrigger>
            <TabsTrigger value="gt" className="bg-[#283e54]">GT Team</TabsTrigger>
            <TabsTrigger value="outreach" className="bg-[#283e54]">Outreach Team</TabsTrigger>
            <TabsTrigger value="design" className="bg-[#283e54]">Design Team</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* About */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>

                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  Atlas Racing first gained international recognition in 2025 when our driverless team made its first debut in the Driverless Class at Formula Student UK, earning two awards: First in Overall Statics and First in Real-world AI.
                </p>

                <h3 className="text-2xl font-bold">Atlas Racing in the News</h3>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    <li className="bg-[#283e54] h-[100px] py-6 px-7 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-[#e09e18] transition-all duration-300 cursor-pointer">
                      <a href="https://gulfnews.com/technology/uae-engineering-breakthrough-heriot-watt-dubai-claims-top-ai-honors-at-formula-student-uk-1.500207916" target="_blank">
                        <img
                          src="/assets/icons/gulf-news.svg"
                          alt="Gulf News"
                          className="brightness-0 invert transition-all duration-300 w-60 h-60"
                        />
                      </a>
                    </li>
                    <li className="bg-[#283e54] h-[100px] py-6 px-7 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-[#e09e18] transition-all duration-300 cursor-pointer">
                      <a href="https://www.al-fanarmedia.org/ar/2025/07/%D8%B7%D9%84%D8%A7%D8%A8-%D8%A8%D8%AC%D8%A7%D9%85%D8%B9%D8%A9-%D9%87%D9%8A%D8%B1%D9%8A%D9%88%D8%AA-%D9%88%D8%A7%D8%AA-%D8%AF%D8%A8%D9%8A-%D9%8A%D8%AD%D8%B5%D8%AF%D9%88%D9%86-%D8%AC%D8%A7%D8%A6%D8%B2/" target="_blank">
                        <img
                          src="/assets/icons/al-fanar.png"
                          alt="Al Fanar"
                          className="w-60 h-60 object-contain"
                        />
                      </a>
                    </li>
                    <li className="bg-[#283e54] h-[100px] py-6 px-7 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-[#e09e18] transition-all duration-300 cursor-pointer">
                      <a href="https://www.alkhaleej.ae/2025-07-25/%D9%87%D9%8A%D8%B1%D9%8A%D9%88%D8%AA-%D9%88%D8%A7%D8%AA-%D8%AF%D8%A8%D9%89-%D8%AA%D8%AD%D9%82%D9%82-%D8%AC%D8%A7%D8%A6%D8%B2%D8%AA%D9%8A%D9%86-%D9%81%D9%8A-%D9%81%D9%88%D8%B1%D9%85%D9%88%D9%84%D8%A7-6015136/%D8%A3%D8%AE%D8%A8%D8%A7%D8%B1-%D9%85%D9%86-%D8%A7%D9%84%D8%A5%D9%85%D8%A7%D8%B1%D8%A7%D8%AA/%D8%A3%D8%AE%D8%A8%D8%A7%D8%B1-%D8%A7%D9%84%D8%AF%D8%A7%D8%B1" target="_blank">
                        <img
                          src="/assets/icons/al-khaleej.png"
                          alt="Al Khaleej"
                          className="w-40 h-40 object-contain"
                        />
                      </a>
                    </li>
                    <li className="bg-[#283e54] h-[100px] py-6 px-7 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-[#e09e18] transition-all duration-300 cursor-pointer">
                      <a href="https://gate.ahram.org.eg/News/5253153.aspx" target="_blank">
                        <img
                          src="/assets/icons/al-ahram.png"
                          alt="Al Ahram"
                          className="w-40 h-40 object-contain"
                        />
                      </a>
                    </li>
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Team */}
            <TabsContent value="core" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{team.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {team.description}
                    </p>
                    <div className="relative">
                      <ScrollArea className="h-[400px]">
                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                            {team.items.map((team, index) => {
                            return (
                                <li
                                key={index}
                                className="bg-[#283e54] h-[184px] py-6 px-7 rounded-xl flex items-center gap-6"
                                >
                                <TeamImage
                                  image={team.image}
                                  name={team.name}
                                  srcPath="/assets/team/"
                                />
                                
                                {/* Text Content */}
                                <div className="flex flex-col justify-center text-left">
                                    <h3 className="text-2xl max-w-[260px] min-h-[60px]">
                                    {team.name}
                                    </h3>
                                    <div className="flex items-center gap-3 mt-[-25px]">
                                    <p className="text-accent text-sm">{team.position}</p>
                                    </div>
                                </div>
                                </li>
                            );
                            })}
                        </ul>
                      </ScrollArea>

                      {/* {!isScrolledToBottom && (
                        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-primary to-transparent pointer-events-none">
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="w-6 h-6 text-white/70 animate-bounce"
                            >
                              <path d="m6 9 6 6 6-6" />
                            </svg>
                          </div>
                        </div>
                      )} */}
                    </div>
                </div>
            </TabsContent>

            {/* Driverless */}
            <TabsContent value="driverless" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold font-mono">{driverless.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {driverless.description}
                </p>

                <div className="relative">

                  <ScrollArea
                    className="h-[650px] [&>[data-orientation='vertical']]:hidden"
                    viewportRef={scrollAreaViewport}
                    onScroll={handleScroll}
                  >
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {driverless.items.map((driverless, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#283e54] h-[184px] py-6 px-7 rounded-xl flex items-center gap-6"
                          >
                            <TeamImage
                              image={driverless.image}
                              name={driverless.name}
                              srcPath="/assets/team/driverless/"
                            />
                            
                            {/* Text Content */}
                            <div className="flex flex-col justify-center gap-1 text-left">
                              <h3 className="text-2xl max-w-[260px] min-h-[50px]">
                                {driverless.name}
                              </h3>
                              <div className="flex items-center gap-3 mt-[-20px]">
                                <p className="text-accent text-sm">
                                  {driverless.position}
                                </p>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>

                  {!isScrolledToBottom && (
                    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-primary to-transparent pointer-events-none">
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-6 h-6 text-white/70 animate-bounce"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>

            {/* Concept */}
            <TabsContent value="concept" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold font-mono">{concept.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {concept.description}
                </p>

                <div className="relative">

                  <ScrollArea
                    className="h-[650px] [&>[data-orientation='vertical']]:hidden"
                    viewportRef={scrollAreaViewport}
                    onScroll={handleScroll}
                  >
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {concept.items.map((conceptItem, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#283e54] h-[184px] py-6 px-7 rounded-xl flex items-center gap-6"
                          >
                            <TeamImage
                              image={conceptItem.image}
                              name={conceptItem.name}
                              srcPath="/assets/team/concept/"
                            />
                            
                            {/* Text Content */}
                            <div className="flex flex-col justify-center gap-1 text-left">
                              <h3 className="text-2xl max-w-[260px] min-h-[50px]">
                                {conceptItem.name}
                              </h3>
                              <div className="flex items-center gap-3 mt-[-20px]">
                                <p className="text-accent text-sm">
                                  {conceptItem.position}
                                </p>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>

                  {!isScrolledToBottom && (
                    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-primary to-transparent pointer-events-none">
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-6 h-6 text-white/70 animate-bounce"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>

            {/* Outreach */}
            <TabsContent value="outreach" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold font-mono">{outreach.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {outreach.description}
                </p>

                <div className="relative">

                  <ScrollArea
                    className="h-[650px] [&>[data-orientation='vertical']]:hidden"
                    viewportRef={scrollAreaViewport}
                    onScroll={handleScroll}
                  >
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {outreach.items.map((outreachItem, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#283e54] h-[184px] py-6 px-7 rounded-xl flex items-center gap-6"
                          >
                            <TeamImage
                              image={outreachItem.image}
                              name={outreachItem.name}
                              srcPath="/assets/team/outreach/"
                            />
                            
                            {/* Text Content */}
                            <div className="flex flex-col justify-center gap-1 text-left">
                              <h3 className="text-2xl max-w-[260px] min-h-[50px]">
                                {outreachItem.name}
                              </h3>
                              <div className="flex items-center gap-3 mt-[-20px]">
                                <p className="text-accent text-sm">
                                  {outreachItem.position}
                                </p>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>

                  {!isScrolledToBottom && (
                    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-primary to-transparent pointer-events-none">
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-6 h-6 text-white/70 animate-bounce"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>

            {/* Design */}
            <TabsContent value="design" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold font-mono">{design.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {design.description}
                </p>

                <div className="relative">

                  <ScrollArea
                    className="h-[650px] [&>[data-orientation='vertical']]:hidden"
                    viewportRef={scrollAreaViewport}
                    onScroll={handleScroll}
                  >
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {design.items.map((designItem, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#283e54] h-[184px] py-6 px-7 rounded-xl flex items-center gap-6"
                          >
                            <TeamImage
                              image={designItem.image}
                              name={designItem.name}
                              srcPath="/assets/team/design/"
                            />
                            
                            {/* Text Content */}
                            <div className="flex flex-col justify-center gap-1 text-left">
                              <h3 className="text-2xl max-w-[260px] min-h-[50px]">
                                {designItem.name}
                              </h3>
                              <div className="flex items-center gap-3 mt-[-20px]">
                                <p className="text-accent text-sm">
                                  {designItem.position}
                                </p>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>

                  {!isScrolledToBottom && (
                    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-primary to-transparent pointer-events-none">
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-6 h-6 text-white/70 animate-bounce"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default About;
