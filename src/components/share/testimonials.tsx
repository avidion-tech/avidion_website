"use client";
import { reviews } from "@/data";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../ui/carousel";
import { useEffect, useState } from "react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

export default function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const currentReview = reviews.find((review) => review.id == current);
  const currentIndex = reviews.findIndex((review) => review.id == current);

  const leftIndex = (currentIndex - 1 + reviews.length) % reviews.length;
  const rightIndex = (currentIndex + 1) % reviews.length;

  const leftReview = reviews[leftIndex];
  const rightReview = reviews[rightIndex];

  return (
    <>
      <div className="relative overflow-hidden bg-[#090BoD]">
        <div className="mx-auto flex w-full flex-col items-center gap-6 px-[30px] py-[63px] md:gap-10 md:px-[100px] md:py-[80px] lg:px-[200px] xl:px-[420px] xl:py-[123px] 2xl:px-[533px]">
          <div className="rounded-full border border-[rgba(255,255,255,0.15)] bg-[linear-gradient(90deg,_rgba(157,46,135,0.40)_0%,_rgba(84,41,153,0.40)_100%)] p-3 shadow-[inset_0_0_9.3px_4.65px_rgba(255,255,255,0.25)] backdrop-blur-[10.849px]">
            <div className="relative aspect-square size-6">
              <Image
                src={"/testimonial/quotation-icon.svg"}
                fill
                alt="quotation"
                className="object-contain"
              />
            </div>
          </div>
          <div className="z-10 text-center text-xl font-medium -tracking-[0.84px] text-white sm:text-2xl md:text-4xl lg:text-[40px] xl:text-5xl 2xl:text-[56px] 2xl:leading-[65px]">
            What Our Clients Are Saying
          </div>

          <Carousel
            opts={{ align: "start", loop: true }}
            setApi={setApi}
            className="relative z-10 flex flex-row items-start"
          >
            <div className="hidden md:block">
              <button
                onClick={() => api?.scrollPrev()}
                className="absolute top-[12%] text-white md:-left-[10%]"
              >
                <BiSolidLeftArrow className="size-[10px] md:size-[15px]" />
              </button>
            </div>
            <CarouselContent className="font-inter">
              {reviews.map((review, index) => (
                <CarouselItem
                  key={index}
                  className="flex flex-col items-center justify-center"
                >
                  <div className="text-center text-sm font-normal text-[#E2E2E2]">
                    {review.desc}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <button
                onClick={() => api?.scrollNext()}
                className="absolute top-[12%] text-white md:-right-[10%]"
              >
                <BiSolidRightArrow className="size-[10px] md:size-[15px]" />
              </button>
            </div>
          </Carousel>

          <div className="z-10 flex flex-col items-center justify-center gap-[15px] py-2">
            <div className="flex flex-row items-center gap-[28px]">
              <div
                onClick={() => api?.scrollTo(leftIndex)}
                className="relative aspect-square size-10 cursor-pointer opacity-50 md:size-[52px]"
              >
                <Image
                  src={leftReview?.url ?? "/testimonials/dummy-user.svg"}
                  alt="profile"
                  fill
                  className="rounded-full object-cover"
                />
              </div>

              <div className="relative aspect-square size-[58px] md:size-[70px]">
                <Image
                  src={currentReview?.url ?? "/testimonials/dummy-user.svg"}
                  alt="profile"
                  fill
                  className="rounded-full object-cover"
                />
              </div>

              <div
                onClick={() => api?.scrollTo(rightIndex)}
                className="relative aspect-square size-10 cursor-pointer opacity-50 md:size-[52px]"
              >
                <Image
                  src={rightReview?.url ?? "/testimonials/dummy-user.svg"}
                  alt="profile"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 md:gap-2">
              <div className="text-sm font-medium text-white md:text-base">
                {currentReview?.name}
              </div>
              <div className="text-xs font-normal text-[#E2E2E2] md:text-sm">
                {currentReview?.profile}
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute -left-28 -top-12 z-0 h-[250px] w-[250px] animate-circle-move rounded-full bg-[#971b76] opacity-70 blur-[80px]"></div>

        <div className="animation-delay-1 pointer-events-none absolute -right-24 bottom-52 z-0 size-[309px] animate-circle-move rounded-full bg-[#971b76] opacity-70 mix-blend-screen blur-[100px]"></div>
        <div className="animation-delay-2 pointer-events-none absolute -right-12 bottom-8 z-0 size-[213px] animate-circle-move rounded-full bg-[#622A9A] opacity-70 mix-blend-screen blur-[100px]"></div>
      </div>
    </>
  );
}
