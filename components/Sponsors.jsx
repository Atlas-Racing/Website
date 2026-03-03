"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Sponsors = () => {
  const LegacySponsors = [
    { image: "/assets/images/sponsors/ansys.png" },
    { image: "/assets/images/sponsors/heriot.png" },
    { image: "/assets/images/sponsors/hwueps.png",  large: true },
    { image: "/assets/images/sponsors/hwumacs.png", large: true },
    { image: "/assets/images/sponsors/ipg.png" },
    { image: "/assets/images/sponsors/liverpool.png" },
    { image: "/assets/images/sponsors/morai.png" },
    { image: "/assets/images/sponsors/siemens.png" },
  ];

  const GTSponsor = { image: "/assets/images/sponsors/bond_interiors.png" };

  const LogoCard = ({ src, alt, large = false }) => (
    <div
      className="flex items-center justify-center bg-gray-800 rounded-lg"
      style={{
        width: large ? "280px" : "220px",
        height: large ? "180px" : "140px",
        padding: "12px",
      }}
    >
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={large ? "280px" : "220px"}
          style={{ objectFit: "contain", objectPosition: "center" }}
        />
      </div>
    </div>
  );

  return (
    <section>
      <div className="container mx-auto py-8">
        {/* Title Section */}
        <div className="mb-6 mt-[100px] xl:mt-0">
          <h1 className="text-4xl font-bold text-accent text-center">Our Sponsors</h1>
          <p className="text-white/80 text-sm text-center max-w-[900px] mx-auto mt-5">
            Our sponsors have been instrumental in our journey. GT Sponsors represent our growth and future, while other Sponsors have supported us
            from the beginning.
          </p>
        </div>

        {/* HEADINGS ROW — sits above the logos */}
        <div className="flex items-center gap-6 mt-4">
          {/* GT Sponsor heading - 20% column */}
          <div className="w-1/5 flex justify-center items-center">
            <h2 className="text-2xl font-semibold text-accent">GT Sponsor</h2>
          </div>
          {/* Sponsors heading - 80% column */}
          <div className="w-4/5 flex justify-center items-center">
            <h2 className="text-2xl font-semibold text-accent">Sponsors</h2>
          </div>
        </div>

              {/* LOGOS ROW */}
        <div className="flex gap-6 items-center">

          {/* GT Sponsor Column - 20% */}
          <div className="w-1/5 flex justify-center">
            <LogoCard src={GTSponsor.image} alt="GT Sponsor" />
          </div>

          {/* Legacy Sponsors Column - 80% */}
          <div className="w-4/5">
            <Swiper
              className="w-full"
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={3}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {LegacySponsors.map((sponsor, index) => (
                <SwiperSlide key={index}>
                  <div className="flex justify-center py-2">
                    <LogoCard
                      src={sponsor.image}
                      alt={`Sponsor ${index + 1}`}
                      large={sponsor.large}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Sponsors;