import Image from "next/image";
import React from "react";
function MainSection() {
  return (
    <>
      <div className="relative overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full opacity-40 scale-[4.2] md:scale-[2.8] lg:scale-[2.1] xl:scale-[1.3]"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/about-us/main-bg.webm" type="video/webm" />
        </video>
        {/* <div className="absolute inset-0 bg-[radial-gradient(53.48%_53.48%_at_50%_96.75%,_rgba(0,0,0,0.00)_0%,_#000_100%)]"></div> */}
        <div className="container relative flex max-w-full flex-col items-center gap-[15px] pb-[50px] pt-[134px] text-xl text-white md:gap-[80px] md:pt-[160px] xl:gap-[76px] xl:pb-[100px] xl:pt-[196px]">
          <div className="flex flex-col items-center gap-0.5 md:gap-[10px] xl:gap-[30px]">
            <div className="text-xl font-medium -tracking-[0.84px] md:text-2xl md:text-[40px] md:leading-[40px] xl:text-[56px] xl:leading-[65px]">
              About Us
            </div>
            <p className="text-center text-xs font-normal sm:text-sm md:text-base xl:text-xl">
              <span className="font-bold">
                Pioneering Smart Software for the AI- Driven Era -{" "}
              </span>
              At Avidion Softwares, we empower businesses with cutting-edge
              digital solutions that blend AI, human insight, and scalable
              engineering.
              {/* Our mission is to set benchmarks in next-gen
              technology by delivering flexible, high-impact software tailored
              to your goals. */}
            </p>
          </div>
          <div className="hidden xl:block">
            <div className="relative xl:h-[428px] xl:w-[1359px]">
              <Image
                src={"/about-us/team-chart.png"}
                alt="team-chart"
                className="scale-[0.85] object-cover"
                fill
                priority
                quality={100}
                loading="eager"
              />
            </div>
          </div>
          <div className="md:block xl:hidden">
            <div className="relative md:h-[701px] md:w-[833px]">
              <Image
                src={"/about-us/team-chart-md.png"}
                alt="team-chart"
                className="object-cover"
                fill
                quality={100}
              />
            </div>
          </div>
          <div className="hidden sm:block md:hidden">
            <div className="relative h-[594px] w-[429px]">
              <Image
                src={"/about-us/team-chart-sm.png"}
                alt="team-chart"
                className="object-cover"
                fill
                quality={100}
              />
            </div>
          </div>
          <div className="block sm:hidden">
            <div className="relative h-[422px] w-[360px]">
              <Image
                src={"/about-us/team-chart-xs.png"}
                alt="team-chart"
                className="object-cover"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(MainSection);
