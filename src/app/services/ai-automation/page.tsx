const keyFeatures = [
  {
    icon: "/services/icons/intelligent-workflow.svg",
    title: "Intelligent Workflow Orchestration",
    description:
      "Automate entire business processes—from lead generation to invoice approvals.",
  },
  {
    icon: "/services/icons/document-processing.svg",
    title: "Document Processing",
    description:
      "Extract and process structured data from PDFs, invoices, and emails using AI.",
  },
  {
    icon: "/services/icons/rpa.svg",
    title: "AI-Powered RPA",
    description:
      "Combine robotic process automation with machine learning for smarter task handling.",
  },
  {
    icon: "/services/icons/smart-ticketing-and-automation.svg",
    title: "Smart Ticketing & Support Automation",
    description:
      "Automatically categorize, assign, and resolve service tickets using AI.",
  },
  {
    icon: "/services/icons/predictive-task-scheduling.svg",
    title: "Predictive Task Scheduling",
    description:
      "Automate task prioritization and resource allocation using predictive models.",
  },
  {
    icon: "/services/icons/email-and-chat-automation.svg",
    title: "AI Email & Chat Automation",
    description:
      "Automate replies, sort messages, and take actions directly from email/chat inputs.",
  },
  {
    icon: "/services/icons/sales-lead-automation.svg",
    title: "Sales & Lead Automation",
    description:
      "Qualify leads, score them using AI models, and trigger personalized actions.",
  },
  {
    icon: "/services/icons/human-loop-automation.svg",
    title: "Human-in-the-Loop Automation",
    description:
      "Ensure critical decisions include human oversight where needed.",
  },
  {
    icon: "/services/icons/end-to-end-monitoring.svg",
    title: "End-to-End Monitoring",
    description:
      "Real-time tracking of task success, error logs, and workflow health.",
  },
];

const valueAdditions = [
  {
    id: "01",
    title: "Increased Productivity & Speed",
    description:
      "Free your team from manual work and complete tasks faster with fewer errors.",
  },
  {
    id: "02",
    title: "Decision Accuracy at Scale",
    description: "AI models reduce bias and ensure consistent decision-making.",
  },
  {
    id: "03",
    title: "Reduced Operational Costs",
    description:
      "Cut overheads by automating routine processes across departments.",
  },
  {
    id: "04",
    title: "Easy Scalability",
    description:
      "Add new workflows and automations without starting from scratch.",
  },
  {
    id: "05",
    title: "Always-On Operations",
    description: "Enable 24/7 execution of tasks without breaks or downtime.",
  },
  {
    id: "06",
    title: "Better Compliance & Auditability",
    description:
      "Track every action, decision, and change with clear audit logs.",
  },
];

import Image from "next/image";
import Process from "./process";
import BackButton from "@/components/share/back-button";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation Services",
  description:
    "Unlock operational efficiency with Avidion's AI Automation services. From intelligent workflows to RPA, automate repetitive tasks with smart AI-driven systems.",
};
export default function AiAutomation() {
  return (
    <div className="relative overflow-hidden font-inter">
      <div className="absolute inset-0 aspect-[160/165] h-[500px] opacity-20 md:aspect-[403/228] md:h-[574px] lg:aspect-[503/228] xl:aspect-[643/258] xl:h-[774px]">
        <Image
          alt="ai-automation"
          src={"/services/sub-services/ai-automation.svg"}
          fill
          priority
          loading="eager"
          className="object-cover"
        />
      </div>
      <div className="container relative mx-auto flex w-full flex-col items-start gap-[50px] pb-[100px] pt-[140px] sm:pb-[150px] md:gap-[66px] md:pt-[154px] xl:pb-[273px] xl:pt-[174px]">
        <BackButton label="Services" />

        <div className="flex flex-col gap-[26px] text-white md:gap-[30px] xl:gap-[25px]">
          <h1 className="text-xl font-medium sm:text-2xl md:text-4xl lg:text-[42px] xl:text-5xl 2xl:text-[56px] 2xl:leading-[65px]">
            AI Automation
          </h1>
          <p className="text-sm font-normal md:text-base xl:text-xl">
            At Avidion Softwares, we specialize in AI Automation to transform
            manual, repetitive tasks into intelligent, self-operating processes.
            From smart workflows to decision engines, our solutions free up your
            team, reduce operational friction, and boost productivity—so you can
            focus on what really matters.
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
