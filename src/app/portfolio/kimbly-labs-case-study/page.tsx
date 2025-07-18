import BackButton from "@/components/share/back-button";
import ContactButton from "@/components/share/contact-button";
import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa6";

export default function KimblyLabsCaseStudy() {
  return (
    <div className="container flex w-full flex-col items-start gap-[40px] pb-[60px] pt-[142px] font-inter text-[#B3B2B3] md:gap-[50px] xl:gap-[60px] xl:pb-[100px]">
      <BackButton label="Case Studies" />
      <div className="flex flex-col gap-[21px] md:gap-[34px]">
        <div className="text-xl font-medium text-white md:text-[28px] md:leading-[46px]">
          <span className="font-bold">Kimbly Labs </span>- Redesigning a
          research lab’s website for clarity, credibility, and performance.
        </div>

        <div className="text-sm font-normal md:text-base">
          We redesigned Kimbly Labs website to reflect their scientific
          credibility with a modern, responsive interface. The new design
          simplifies complex content through clear messaging, structured
          layouts, and improved user experience. It’s now faster, cleaner, and
          better aligned with their innovative research-driven identity.
        </div>
      </div>

      <div className="relative mx-auto h-[120px] w-[250px] sm:h-[178px] sm:w-[361px] md:h-[301px] md:w-[613px] xl:h-[423px] xl:w-[860px]">
        <Image
          src={"/portfolio/kimbly-labs-case-study.svg"}
          alt="kimbly-labs-case-study"
          fill
          className="object-cover"
          loading="eager"
          priority
        />
      </div>

      <Link
        href="https://wonderful-sunflower-d6bdca.netlify.app"
        target="_blank"
        className="mx-auto animate-gradient cursor-pointer rounded-[12px] bg-[linear-gradient(131deg,_rgba(255,87,219,0.70)_25.56%,_rgba(240,200,231,0.70)_42.13%,_rgba(204,134,242,0.70)_53.02%,_rgba(157,123,242,0.70)_75.71%)] bg-[length:200%_auto] bg-repeat p-[3px] transition-all duration-300 ease-in hover:shadow-[0_0_12px_0_rgba(255,255,255,0.60)]"
      >
        <div className="flex items-center gap-1 rounded-[8.6px] bg-black px-[18px] py-1.5 text-[12px] font-medium leading-[14px] text-white md:gap-2 md:text-[10px] md:leading-[22px] xl:rounded-[10px] xl:px-6 xl:text-[15.033px] xl:leading-[31.067px]">
          <FaLink className="size-[19px]" /> <span>Click Here For Demo</span>
        </div>
      </Link>

      {/* challenge */}
      <div className="flex flex-col gap-[26px]">
        <div className="text-base font-bold text-white md:text-lg xl:text-xl">
          Challenge
        </div>
        <div className="text-sm font-normal md:text-base">
          The existing website for Kimbly Labs lacked a clear structure, modern
          visuals, and user-friendly navigation. It struggled to effectively
          communicate the brand&apos;s expertise in scientific research and
          innovation. Additionally, the mobile experience was inconsistent and
          failed to meet current UX expectations.
          <br />
          <br />
          <ul className="list-disc pl-5">
            <li>
              Outdated and cluttered UI that lacked a professional identity
            </li>
            <li>Unclear service messaging and content hierarchy</li>
            <li>Poor responsiveness across devices</li>
            <li>Low engagement due to ineffective UX flow</li>
            <li>Inconsistent branding and user trust issues</li>
          </ul>
        </div>
      </div>

      {/* solution */}
      <div className="flex flex-col gap-[26px]">
        <div className="md:text-md text-base font-bold text-white xl:text-xl">
          Solution
        </div>
        <div className="text-sm font-normal md:text-base">
          We executed a full redesign focused on clarity, professionalism, and
          trust-building :
          <br />
          <br />
          <ul className="list-disc pl-5">
            <li>
              <span className="font-bold">Refined Visual Design:</span> A clean,
              minimal aesthetic with strong typography and a consistent color
              palette to reflect credibility.
            </li>
            <li>
              <span className="font-bold">Improved UX/UI:</span> Reorganized
              content flow, simplified navigation, and ensured seamless
              responsiveness across devices.
            </li>
            <li>
              <span className="font-bold">Clear Messaging:</span> Content was
              rewritten and structured to better highlight their services,
              research capabilities, and mission.
            </li>
            <li>
              <span className="font-bold">Performance Optimization:</span>{" "}
              Lightweight architecture and optimized assets for faster loading.
            </li>
          </ul>
        </div>
      </div>

      {/* impact */}
      <div className="flex flex-col gap-[26px]">
        <div className="text-base font-bold text-white md:text-lg xl:text-xl">
          Impact
        </div>
        <div className="text-sm font-normal md:text-base">
          The new site isn’t just faster and cleaner — it tells the Cimbnly Lab
          story with clarity and confidence. Visitors are now more engaged,
          exploring more content and staying longer, with a seamless experience
          across every device.
          <br />
          <br />
          <ul className="list-disc pl-5">
            <li>Users now spend more time exploring the site’s content</li>
            <li>A smoother, more intuitive flow keeps visitors engaged</li>
            <li>The brand now feels as innovative as the work they do</li>
            <li>Mobile users finally get the full Cimbnly experience</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto flex flex-col items-center gap-[20px] rounded-[14px] bg-[linear-gradient(90deg,_rgba(161,120,189,0.20)_0%,_rgba(255,250,250,0.00)_43.86%,_rgba(211,153,197,0.20)_100%)] px-[56px] py-10 md:gap-[33px] lg:px-[266px] xl:gap-[40px]">
        <div className="flex flex-col items-center gap-2">
          <div className="text-base font-medium text-white md:text-xl xl:text-2xl">
            {" "}
            Need Something Similar?
          </div>
          <div className="text-center text-sm font-normal text-white/70 md:text-xl">
            Looking to build an LMS or a custom web platform? Let’s talk.
          </div>
        </div>
        <ContactButton buttonClassName="px-[25px]" />
      </div>
    </div>
  );
}
