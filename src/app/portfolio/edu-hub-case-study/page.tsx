import BackButton from "@/components/share/back-button";
import ContactButton from "@/components/share/contact-button";
import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa6";

export default function EduHubCaseStudy() {
  return (
    <div className="container flex w-full flex-col items-start gap-[40px] pb-[60px] pt-[142px] font-inter text-[#B3B2B3] md:gap-[50px] xl:gap-[60px] xl:pb-[100px]">
      <BackButton label="Case Studies" />
      <div className="flex flex-col gap-[21px] md:gap-[34px]">
        <div className="text-xl font-medium text-white md:text-[28px] md:leading-[46px]">
          <span className="font-bold">EduHub LMS </span>- Design & Development
          of a Scalable Learning Management System for Higher Education.
        </div>

        <div className="text-sm font-normal md:text-base">
          We built a full-featured Learning Management System (LMS) for colleges
          and universities, aimed at solving challenges around digital learning,
          academic content management, and role-based access. This project
          served as a self-initiated demo to showcase our design and technical
          capabilities in the education space.
        </div>
      </div>

      {/* <div className="mx-auto flex flex-col items-center gap-4 md:gap-5 lg:gap-[28px]"> */}
      <div className="relative mx-auto h-[161px] w-[309px] sm:h-[184px] sm:w-[352px] md:h-[298px] md:w-[553px] xl:h-[420px] xl:w-[803px]">
        <Image
          src={"/portfolio/edu-hub-case-study.svg"}
          alt="edu-hub-case-study"
          fill
          className="object-cover"
          loading="eager"
          priority
        />
      </div>

      <Link
        href="https://edu-hub-kohl.vercel.app/"
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
          Most existing LMS platforms used in colleges are either too outdated
          or overly complex, leading to poor engagement from students and
          inefficiencies for faculty. Managing assignments, grading, attendance,
          and communication across roles was fragmented and difficult to scale.
          <br />
          <br />
          <ul className="list-disc pl-5">
            <li>
              Fragmented user experiences across student, professor, and admin
              roles
            </li>
            <li>Outdated UI and difficult navigation</li>
            <li>
              Inefficient assignment tracking, communication, and analytics
            </li>
          </ul>
        </div>
      </div>

      {/* solution */}
      <div className="flex flex-col gap-[26px]">
        <div className="md:text-md text-base font-bold text-white xl:text-xl">
          Solution
        </div>
        <div className="text-sm font-normal md:text-base">
          We designed and developed a role-based LMS web application that
          simplifies the entire academic workflow. With custom dashboards for
          students, professors, and admins, the platform enabled seamless course
          management, assignment tracking, attendance monitoring, and real-time
          communication — all in one place. The UI was kept clean, modern, and
          responsive to ensure accessibility across devices.
        </div>
      </div>

      {/* impact */}
      <div className="flex flex-col gap-[26px]">
        <div className="text-base font-bold text-white md:text-lg xl:text-xl">
          Impact
        </div>
        <div className="text-sm font-normal md:text-base">
          This project allowed us to demonstrate our full-stack capabilities,
          combining strategic UX thinking with modular backend development. It
          now serves as a reusable LMS framework and a live demo for pitching
          EdTech and SaaS opportunities, proving how we solve real problems with
          scalable, user-first solutions.
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
    // </div>
  );
}
