const keyFeatures = [
  {
    icon: "/services/icons/lead-management.svg",
    title: "Lead Management",
    description: "Track leads from prospect to conversion with ease.",
  },
  {
    icon: "/services/icons/data-prep-automation.svg",
    title: "Sales Pipeline Automation",
    description: "Visualize deals, set reminders, and streamline your process.",
  },
  {
    icon: "/services/icons/customer-data.svg",
    title: "Centralized Customer",
    description: "Data Access all customer info in one shared, secure space.",
  },
  {
    icon: "/services/icons/activity-tracking.svg",
    title: "Activity Tracking",
    description: "Log calls, emails, meetings, and notes automatically",
  },
  {
    icon: "/services/icons/workflow-automation.svg",
    title: "Workflow Automation",
    description:
      "Trigger follow-ups, approvals, and tasks without manual input.",
  },
  {
    icon: "/services/icons/analytics-dashboard.svg",
    title: "Analytics Dashboards",
    description: "Monitor sales, ROI, and behavior with real-time insights.",
  },
  {
    icon: "/services/icons/role-based-access.svg",
    title: "Role-Based Access",
    description: "Control who sees what with flexible user permissions.",
  },
  {
    icon: "/services/icons/mobile-access.svg",
    title: "Mobile Access",
    description: "Manage sales on the go with mobile-ready tools.",
  },
  {
    icon: "/services/icons/third-party-integrations.svg",
    title: "Third-Party Integrations",
    description:
      "Connect seamlessly with tools like email, calendars, and marketing platforms.",
  },
];

const valueAdditions = [
  {
    id: "01",
    title: "Higher Sales Productivity",
    description: "Automate tasks and close deals faster with smart insights.",
  },
  {
    id: "02",
    title: "Team Alignment",
    description: "Keep sales, marketing, and support on the same page.",
  },
  {
    id: "03",
    title: "Stronger Customer Bonds",
    description: "Send timely, personalized messages that build loyalty.",
  },
  {
    id: "04",
    title: "Better ROI Tracking",
    description: "Measure what matters and maximize every rupee spent.",
  },
  {
    id: "05",
    title: "Smarter Decisions",
    description: "Use real-time data to guide every strategic move.",
  },
  {
    id: "06",
    title: "Scalable Growth",
    description: "Build a system that grows with your business needs.",
  },
];

import Image from "next/image";
import BackButton from "@/components/share/back-button";
import Process from "./process";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "CRM Development Services",
  description:
    "Avidion builds intelligent, scalable CRM systems to manage leads, automate workflows, track sales, and strengthen customer relationships. Tailored for startups to enterprises.",
};
export default function CRM() {
  return (
    <div className="relative overflow-hidden font-inter">
      <div className="absolute inset-0 aspect-[278/395] h-[734px] md:aspect-[350/160] md:h-[520px] xl:aspect-[384/161] xl:h-[805px]">
        <Image
          alt="ai-automation"
          src={"/services/sub-services/crm.png"}
          fill
          className="object-cover opacity-[0.20]"
        />
      </div>
      <div className="container relative mx-auto flex w-full flex-col items-start gap-[50px] pb-[100px] pt-[140px] md:gap-[66px] md:pt-[154px] xl:pb-[200px] xl:pt-[174px] 2xl:pb-[233px]">
        <BackButton label="Services"/>

        <div className="flex flex-col gap-[26px] text-white md:gap-[30px] xl:gap-[25px]">
          <h1 className="text-xl font-medium sm:text-2xl md:text-4xl lg:text-[42px] xl:text-5xl 2xl:text-[56px] 2xl:leading-[65px]">
            CRM
          </h1>
          <p className="text-sm font-normal md:text-base xl:text-xl">
            At Avidion Softwares, we build intelligent, scalable, and
            user-friendly CRM systems that empower businesses to streamline
            customer relationships, automate sales workflows, and drive lasting
            loyalty. Whether you need a lightweight CRM for a startup or a
            robust enterprise-grade solution, our custom CRM development is
            designed to help you manage leads, track interactions, and grow
            smarter.
          </p>
        </div>
      </div>
      <div className="relative bg-[#140A1E]">
        <div className="container mx-auto flex w-full flex-col gap-[60px] py-[80px] md:gap-[73px] xl:py-[147px]">
          <div className="text-xl font-medium text-white sm:text-2xl md:text-4xl lg:text-[42px] xl:text-5xl 2xl:text-[56px] 2xl:leading-[65px]">
            Key Features
          </div>
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-[65px] md:gap-y-[60px] xl:grid-cols-3 xl:gap-y-[72px]">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="flex flex-col items-start gap-4">
                <div className="relative aspect-square w-7 md:w-[35px]">
                  <Image
                    src={feature.icon}
                    alt="feature-icon"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="text-base font-bold text-white">
                    {feature.title}
                  </div>
                  <div className="text-sm font-normal text-white/70 md:text-base">
                    {feature.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative bg-[rgba(20,10,30,0.53)]">
        <div className="container mx-auto flex w-full flex-col gap-[50px] py-[80px] md:gap-[70px] xl:gap-[90px] xl:py-[147px]">
          <div className="md:4xl px-[53px] text-center text-xl font-medium text-white sm:text-2xl md:px-0 md:text-left md:text-4xl lg:text-[42px] lg:leading-[46px] xl:px-0 xl:text-5xl 2xl:text-[56px] 2xl:leading-[65px]">
            Value Additions for Your Business
          </div>

          <div className="grid grid-cols-1 gap-x-[59px] gap-y-10 md:grid-cols-2 md:gap-y-[46px] lg:gap-x-[119px] xl:gap-x-[250px] xl:gap-y-10">
            {valueAdditions.map((value, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-[7px] xl:flex-row xl:gap-[17px]"
              >
                <div className="bg-[linear-gradient(57deg,_#6748CD_11.25%,_#972BC7_34.88%,_#B33691_66.88%,_#4D1263_95.25%)] bg-clip-text text-[28px] font-bold leading-[33px] text-transparent xl:text-[40px] xl:leading-[48px]">
                  {value.id}
                </div>
                <div className="flex flex-col items-start gap-1">
                  <div className="text-base font-medium text-white">
                    {value.title}
                  </div>
                  <div className="text-sm font-normal text-white/70 md:text-base">
                    {value.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Process />
    </div>
  );
}
