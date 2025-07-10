"use client";
import Image from "next/image";
import Lottie from "lottie-react";
import gsap from "gsap";

import animationData from "@/animations/home-animation.json";
import { useEffect, useRef, useState } from "react";
import InfiniteScrollTape from "../infinite-scroll-area";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function HeroSection() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const subHeadingRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState<boolean>(false);

  useEffect(() => {
    const section = containerRef.current;

    section?.addEventListener("mousemove", (e) => {
      const rect = section.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      setMousePosition({ x, y });
    });

    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: badgeRef.current,
    //     start: "top 50%",
    //     toggleActions: "play none none reverse",
    //   },
    // });

    // tl.fromTo(
    //   badgeRef.current,
    //   { x: -30, opacity: 0 },
    //   { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
    // )
    //   .fromTo(
    //     headingRef.current,
    //     { x: -30, opacity: 0 },
    //     { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
    //   )
    //   .fromTo(
    //     subHeadingRef.current,
    //     { x: -30, opacity: 0 },
    //     { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
    //   )
    //   .fromTo(
    //     ctaRef.current,
    //     { x: -20, opacity: 0 },
    //     { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
    //     "-=0.3",
    //   );

    // gsap.fromTo(
    //   videoRef.current,
    //   { opacity: 0, y: 50 },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     duration: 1,
    //     ease: "power3.out",
    //     scrollTrigger: {
    //       trigger: videoRef.current,
    //       start: "top 50%",
    //       once: true,
    //     },
    //   },
    // );
  }, []);

  return (
    <>
      <div className="relative overflow-hidden bg-[#090B0D]">
        <div
          ref={containerRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="relative h-[630px] overflow-hidden font-inter md:h-[980px] xl:h-[1234px]"
        >
          <video
            ref={videoRef}
            className="absolute left-[40px] top-[28px] h-full w-full scale-[1.7] sm:top-[45px] sm:scale-[1.7] md:left-[81px] md:top-0 md:scale-[1.7] lg:scale-[1.7] xl:scale-[1.4] 2xl:scale-[1.21]"
            autoPlay
            muted
            loop
            preload="auto"
            playsInline
          >
            <source src="/hero-section/bg-hero-video.webm" type="video/webm" />
          </video>
          {/* overlay over the video */}
          <div className="absolute inset-0 bg-[linear-gradient(0deg,_rgba(0,0,0,0.00)_70%,#000000_80.78%,_#000000_136.18%)] md:bg-[linear-gradient(2deg,_rgba(0,0,0,0.00)_81.43%,#000_90.93%)]"></div>
          {/* Hidden background image - only visible on the hover */}
          {isHovering && (
            <div
              className="transition-all duration-200 ease-out xl:absolute xl:bottom-0 xl:left-[250px] xl:right-0 xl:top-0 2xl:bottom-0 2xl:left-20 2xl:right-0 2xl:top-0"
              style={{
                maskImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0, 0, 0, 1) 8%, rgba(0, 0, 0, 0.4) 12%, transparent 18%)`,
              }}
            >
              <Image
                src={"/hero-section/hero-svg.svg"}
                alt="hero-svg"
                className="absolute inset-0 hidden h-full w-full object-fill opacity-40 2xl:block"
                fill
              />

              <Image
                src={"/hero-section/hero-svgg-small.svg"}
                alt="hero-svg"
                className="absolute inset-0 h-full w-full object-fill opacity-40 xl:block 2xl:hidden"
                fill
              />
            </div>
          )}

          <div className="max-auto container relative w-full py-[100px] sm:py-[112px] md:py-[162px]">
            <div className="flex flex-col items-start justify-center gap-[22px] font-inter md:gap-[34px] xl:gap-[39px]">
              <div className="flex flex-col items-start gap-2">
                <div className="rounded-[50px] border border-white/15 bg-black px-[7.78px] py-1 text-[10px] font-normal leading-[14.45px] -tracking-[0.001px] text-[#9855FF] md:px-2.5 md:py-1.5 md:text-[11px] md:leading-[18px] xl:px-[14px] xl:py-2">
                  We are here to redefine the digital future
                </div>
                <div className="flex flex-col gap-2.5 xl:gap-3">
                  <div className="w-[255px] text-[28px] font-medium leading-[38px] -tracking-[1.417px] text-transparent text-white md:w-[500px] md:text-[59px] md:leading-[60px] md:-tracking-[4.158px] xl:w-[700px] xl:text-[82.178px] xl:leading-[90.182px]">
                    Transforming Ideas into Reality
                  </div>
                  <div className="w-[250px] text-sm font-normal text-white md:w-[392px] xl:w-[550px] xl:text-xl">
                    We create smart, AI-driven products that help businesses
                    innovate, grow, and lead in a digital-first world.
                  </div>
                </div>
              </div>
              <div
                onClick={() => {
                  params.set("open", "true");
                  router.push(`/?${params.toString()}`, { scroll: false });
                }}
                className="animate-gradient cursor-pointer rounded-[12px] bg-[linear-gradient(131deg,_rgba(255,87,219,0.70)_25.56%,_rgba(240,200,231,0.70)_42.13%,_rgba(204,134,242,0.70)_53.02%,_rgba(157,123,242,0.70)_75.71%)] bg-[length:200%_auto] bg-repeat p-[3px] transition-all duration-300 ease-in hover:shadow-[0_0_12px_0_rgba(255,255,255,0.60)]"
              >
                <div className="rounded-[8.6px] bg-black px-[18px] py-2 text-[12px] font-medium leading-[14px] text-white md:text-[10px] md:leading-[22px] xl:rounded-[10px] xl:px-6 xl:py-2.5 xl:text-[15.033px] xl:leading-[31.067px]">
                  Book A Free Consultation
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-[20px] pb-[20px] font-inter sm:mt-10 md:py-[30px] lg:mt-32 xl:mt-20 xl:gap-[25px] xl:py-[50px]">
          <div className="text-center text-base font-medium -tracking-[0.33px] text-white md:text-xl xl:text-[22px] xl:leading-[47px]">
            Integration Services
          </div>

          <div className="w-full bg-[linear-gradient(90deg,_#090B0D_6.13%,_rgba(9,11,13,0.00)_46.81%,_#090B0D_95.76%)] xl:w-[75%]">
            <InfiniteScrollTape />
          </div>
        </div>

        {/* <div className="absolute top-[43%] left-[24.5%] w-[953px] h-[627px] scale-[0.9]">
      <Image src={"/hero-section/Frame-257.png"} alt="cbhdscbdc" fill className="object-cover"/>
     </div> */}
        {/* -left-[73.5%] sm:-left-[54%] md:-left-[8%] */}
        <div className="absolute -left-[73%] top-[21.6%] z-0 flex scale-[0.35] flex-row gap-[7px] font-inter vs:-left-[68.2%] vs:scale-[0.37] xxs:-left-[64%] xxs:scale-[0.38] xs:-left-[60%] sm:-left-[54%] sm:top-[24%] sm:scale-[0.4] md:-left-[8%] md:top-[37%] md:scale-[0.7] md:gap-[18px] lg:left-[4%] lg:top-[40%] lg:scale-[0.88] xl:left-[16.5%] xl:top-[44%] xl:scale-[1.1] 2xl:left-[24.5%] 2xl:top-[42%] 2xl:scale-[1]">
          {/* left-divs */}
          <div className="flex flex-col gap-[16px] md:justify-between">
            {/* future ready digital solutions card*/}
            <div className="flex flex-col gap-[17px] rounded-[6px] bg-[linear-gradient(145deg,_#3F1068_6.07%,_rgba(28,22,34,0.00)_56.61%,_#5D264E_96.94%)] px-[21px] py-9 md:rounded-[8px]">
              <div className="relative aspect-square size-10 xl:size-[55px]">
                <Image
                  src={"/hero-section/logo.svg"}
                  alt="avidion-logo"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-[25px]">
                <div className="w-[209px] animate-gradient bg-[linear-gradient(57deg,_#C7B5FF,_#D984FF,_#E458BE,_#A03EC4,_#E458BE,_#D984FF,_#C7B5FF)] bg-[length:200%_auto] bg-clip-text text-2xl font-medium text-transparent">
                  Future-Ready Digital Solutions
                </div>

                <div className="flex flex-col gap-2 text-sm font-normal leading-[25.83px] -tracking-[0.001px] text-[rgba(255,255,255,0.70)] md:text-xs">
                  <div>Highly Skilled Professionals</div>
                  <div>100% In-House Talent</div>
                  <div>Global-Ready Delivery Model</div>
                </div>
              </div>
            </div>
            {/* ai integration and chatbot card */}
            <div className="bg-ai-integration-chatbot bg-fill flex flex-col items-start gap-[15px] rounded-[6px] bg-center bg-no-repeat px-[24px] py-[35px] md:rounded-[8px]">
              <div className="rounded-full bg-[linear-gradient(14deg,_#593C6A_10.29%,_#AF76D0_88%)] p-2">
                <div className="relative size-[20px] md:size-[17.8px]">
                  <Image
                    src={"/hero-section/ai-integration-icon.svg"}
                    alt="ai-integration-icon"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="w-[150px] text-xl font-medium text-white md:text-lg">
                AI Integration & Chatbots
              </div>
            </div>
            {/* ai automation */}

            <div className="rounded-[8px] bg-[linear-gradient(260deg,_rgba(175,80,155,0.20)_7.64%,_rgba(22,22,22,0.20)_99.47%)] px-[38px] py-[33px] md:py-[40px]">
              <div className="flex items-center justify-center rounded-[7px] bg-[linear-gradient(57deg,_#C0ADFF_11.25%,_#BF5CEA_34.88%,_#DD68BD_66.68%,_#9E3DC2_95.25%)] p-[2.2px] backdrop-blur-[75.13px]">
                <div className="box-border flex flex-row items-center gap-2.5 rounded-[5.2px] bg-black px-4 py-2 md:px-6">
                  <div className="relative aspect-square size-7 md:size-6">
                    <Image
                      src={"/hero-section/ai-automation.svg"}
                      alt="ai-automation-icon"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-base font-medium text-[rgba(255,255,255,0.92)] md:text-sm">
                    AI Automation
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* center divs */}
          <div className="relative flex flex-col items-center justify-between">
            <div className="flex flex-col items-center justify-center">
              <div className="w-[400px] px-[26px] pt-[28px] text-center text-[26px] font-medium text-white md:text-2xl">
                Your Creative & Tech Partner for Future-Ready Experiences
              </div>
            </div>
            <div className="flex flex-row gap-[18px]">
              <div className="flex flex-col items-start gap-[21px] bg-[url('/hero-section/mobile-app-dev-bg.svg')] bg-center bg-no-repeat px-[40px] pb-[34px] pt-[164px]">
                <div className="rounded-full bg-[linear-gradient(14deg,_#502135_10.29%,_#A13A94_88%)] p-2">
                  <div className="relative size-[20px] md:size-[17.8px]">
                    <Image
                      src={"/what-we-offer/icon-3.svg"}
                      alt="ai-integration-icon"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="w-[107px] text-base font-medium text-white md:text-sm">
                  Mobile App Development
                </div>
              </div>

              {/* <div className="absolute inset-0 w-[187px] h-[291px]">
              <Image src={"/hero-section/mobile-app-dev-bg.svg"} alt="cbhdsbc" fill className="object-cover"/>
            </div> */}

              <div className="flex flex-col items-end gap-[21px] bg-[url('/hero-section/staff-augmentation-bg.svg')] bg-center bg-no-repeat px-[40px] pb-[34px] pt-[164px]">
                <div className="rounded-full bg-[linear-gradient(14deg,_#502135_10.29%,_#A13A94_88%)] p-2">
                  <div className="relative size-[20px] md:size-[17.8px]">
                    <Image
                      src={"/what-we-offer/icon-3.svg"}
                      alt="ai-integration-icon"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="w-[107px] text-right text-base font-medium text-white md:text-sm">
                  Staff Augmentation
                </div>
              </div>
            </div>
            {/* <div className="absolute -left-[8%] bottom-0 right-0 top-[9%] aspect-square size-[470px]">
              <Image
                src={"/hero-section/main-circle.svg"}
                fill
                alt="main-circle"
                className="object-cover"
              />
            </div> */}

            <div className="absolute bottom-0 left-[6%] right-0 top-[17.8%]">
              <div className="relative size-[350px]">
                <Lottie
                  animationData={animationData}
                  loop={true}
                  autoplay={true}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>
          {/* right-divs */}
          <div className="flex flex-col justify-between gap-[6.9px]">
            {/* 3d animated website */}
            <div className="relative overflow-hidden rounded-[8px] bg-[linear-gradient(145deg,_#3F1068_6.07%,_rgba(28,22,34,0.00)_56.61%,_#5D264E_96.94%)]">
              <div className="py-[34px] pl-[22px] pr-[94px]">
                <div className="w-[125px] text-lg font-normal text-white md:w-[119px] md:text-base">
                  3D & Animated Website{" "}
                </div>

                <div className="absolute -bottom-[28%] -right-[18%] aspect-[16/9] h-[126px]">
                  <Image
                    src={"/hero-section/3d-animated-website.png"}
                    alt="3d-animated-website"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            {/* 24/7 support */}
            <div className="rounded-[8px] bg-[linear-gradient(260deg,_rgba(175,80,155,0.20)_7.64%,_rgba(22,22,22,0.20)_99.47%)]">
              <div className="flex flex-col items-center justify-center gap-[9px] px-[46px] py-[23px]">
                <div className="bg-[linear-gradient(57deg,_#6748CD_11.25%,_#972BC7_34.88%,_#B33691_66.88%,_#4D1263_95.25%)] bg-clip-text font-jersey text-[28px] leading-[40px] text-transparent md:text-[25px]">
                  24/7
                </div>
                <div className="w-[143px] text-center text-base font-medium text-white md:text-sm">
                  Product Support & Maintinance
                </div>
              </div>
            </div>
            {/* custom software development */}
            <div className="relative overflow-hidden rounded-[8px] bg-[linear-gradient(154deg,_#56228E_2.82%,_#130621_48.6%,_#000_97.78%)] pb-[174px]">
              <div className="flex flex-col gap-[21px] px-[26px] pt-[30px]">
                <div className="z-10 w-[160px] text-xl font-medium text-white md:text-lg">
                  Custom Software Development
                </div>

                <div className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-[linear-gradient(14deg,_#160B24_10.29%,_#5F388E_88%)] p-2">
                      <div className="relative size-[19px] md:size-[17px]">
                        <Image
                          src={"/what-we-offer/icon-6.svg"}
                          alt="crm-icon"
                          fill
                        />
                      </div>
                    </div>
                    <div className="text-sm font-medium text-white">CRM</div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-[linear-gradient(14deg,_#160B24_10.29%,_#5F388E_88%)] p-2">
                      <div className="relative size-[19px] md:size-[17px]">
                        <Image
                          src={"/what-we-offer/icon-4.svg"}
                          alt="crm-icon"
                          fill
                        />
                      </div>
                    </div>
                    <div className="z-10 text-sm font-medium text-white">
                      WMS & ERP Systems
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-[40%] top-[15%] z-0 h-[82px] w-[217px] scale-[3]">
                <Image
                  src={"/hero-section/custom-software-dev-bg.png"}
                  alt="custom-software-dev-bg"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="absolute left-[8%] top-[60%] aspect-square size-[212px]">
                <Image
                  src={"/hero-section/custom-software-development.png"}
                  alt="custom-software-development"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(HeroSection);
