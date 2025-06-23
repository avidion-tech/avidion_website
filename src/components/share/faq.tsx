import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data";
import { FiPlus } from "react-icons/fi";
import { LuMinus } from "react-icons/lu";
import Image from "next/image";

export default function FAQ() {
  return (
    <>
      <div className="relative overflow-hidden bg-[#090B0D]">
        <div className="absolute -left-[24%] md:-left-[13%] top-0 h-[850px] w-[380px] rotate-180 xl:-left-[6.5%] opacity-[35%]">
          <Image
            src={"/hero-section/custom-software-dev-bg.png"}
            alt="faq-bg"
            fill
            className="object-contain"
          />
        </div>
        <div className="container relative mx-auto flex w-full flex-col gap-10 py-[63px] md:py-[80px] xl:gap-[70px] xl:py-[123px]">
          <div className="text-xl font-medium -tracking-[0.84px] text-white sm:text-2xl md:text-4xl lg:text-[40px] xl:text-5xl 2xl:text-[56px] 2xl:leading-[65px]">
            Frequently Asked Questions
          </div>

          <Accordion className="font-inter" type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={faq.question}
                className="border-b border-b-[#323232] px-4 py-3 md:px-[20px] md:py-[22px] 2xl:px-[25px]"
              >
                <AccordionTrigger className="text-sm md:text-base font-medium text-white lg:text-lg xl:font-semibold 2xl:text-xl 2xl:font-bold">
                  {faq.question}
                  <FiPlus className="pointer-events-none size-4 translate-y-0.5 text-white transition-transform duration-200 group-data-[state=open]:hidden" />
                  <LuMinus className="pointer-events-none size-4 translate-y-0.5 text-white transition-transform duration-200 group-data-[state=closed]:hidden" />
                </AccordionTrigger>
                {/* px-[18px] md:px-[20px] lg:px-[26px] */}
                <AccordionContent className="mt-[10px] md:mt-[16px] text-xs md:text-sm font-normal text-[#E2E2E2] xl:mt-[22px]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
}
