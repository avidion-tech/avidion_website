const keyFeatures = [
  {
    icon: "/services/icons/smart-chatbots.svg",
    title: "Smart Chatbots",
    description: "Automate customer support with smart conversational agents.",
  },
  {
    icon: "/services/icons/predictive-insights.svg",
    title: "Predictive Insights",
    description:
      "Forecast trends, sales, or behavior with data-powered analytics.",
  },
  {
    icon: "/services/icons/ai-automation.svg",
    title: "AI Automation",
    description:
      "Handle tasks like lead scoring, invoicing, and ticketing—automatically.",
  },
  {
    icon: "/services/icons/personalized-recom.svg",
    title: "Personalized Recommendations",
    description: "Suggest the right content, product, or service—every time",
  },
  {
    icon: "/services/icons/image-and-text-recog.svg",
    title: "Image & Text Recognition ",
    description:
      "Enable tagging, scanning, or verification with AI vision tools.",
  },
  {
    icon: "/services/icons/voice-integration.svg",
    title: "Voice Integration",
    description:
      "Control apps or devices with voice for hands-free interaction",
  },
  {
    icon: "/services/icons/real-time-decisions.svg",
    title: "Real-Time Decisions",
    description: "Make fast, data-driven choices via smart dashboards.",
  },
  {
    icon: "/services/icons/data-prep-automation.svg",
    title: "Data Prep Automation",
    description: "Clean, organize, and optimize data—before analysis begins.",
  },
  {
    icon: "/services/icons/sentiment-analysis.svg",
    title: "Sentiment Analysis",
    description: "Detect emotions and opinions from text and conversations.",
  },
];

const valueAdditions = [
  {
    id: "01",
    title: "Increased Efficiency & Lower Costs",
    description:
      "Automate routine tasks, cut errors, and free up time for high-value work.",
  },
  {
    id: "02",
    title: "Scalable Intelligence",
    description:
      "AI improves as it learns from more data—no extra development needed.",
  },
  {
    id: "03",
    title: "Enhanced Customer Experience",
    description:
      "Deliver 24/7 support, personalization, and instant responses with AI.",
  },
  {
    id: "04",
    title: "Competitive Advantage",
    description:
      "Stand out with systems that adapt, evolve, and keep you ahead.",
  },
  {
    id: "05",
    title: "Smarter Business Decisions",
    description:
      "Use real-time insights and predictive models to stay ahead of trends.",
  },
  {
    id: "06",
    title: "Faster Time to Market",
    description:
      "Accelerate development cycles and bring innovations to life sooner.",
  },
];

import Image from "next/image";
import Process from "./process";
import BackButton from "@/components/share/back-button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Integration Services",
  description:
    "Avidion offers enterprise-grade AI integration services—chatbots, predictive insights, recommendation systems, voice assistants, and automation—customized to your business goals.",
};
export default function AIntegration() {
  return (
    <div className="relative overflow-hidden font-inter">
      <div className="absolute inset-0 aspect-[278/395] h-[734px] md:aspect-[350/160] md:h-[520px] xl:aspect-[384/161] xl:h-[805px]">
        <Image
          alt="ai-automation"
          src={"/services/sub-services/ai-integration.svg"}
          fill
          className="object-cover opacity-[0.5]"
        />
      </div>
      <div className="container relative mx-auto flex w-full flex-col items-start gap-[50px] pb-[100px] pt-[140px] md:gap-[66px] md:pt-[154px] xl:pb-[200px] xl:pt-[174px] 2xl:pb-[273px]">
        <BackButton label="Services" />

        <div className="flex flex-col gap-[26px] text-white md:gap-[30px] xl:gap-[25px]">
          <h1 className="text-xl font-medium sm:text-2xl md:text-4xl lg:text-[42px] xl:text-5xl 2xl:text-[56px] 2xl:leading-[65px]">
            AI Integration
          </h1>
          <p className="text-sm font-normal md:text-base xl:text-xl">
            At Avidion Softwares, we integrate Artificial Intelligence (AI) into
            your digital ecosystem to help you make smarter decisions, automate
            processes, and deliver personalized experiences at scale. Whether
            it&apos;s an intelligent chatbot, predictive analytics engine, or
            AI-driven automation, we help you harness the power of AI to gain a
            competitive edge and drive operational efficiency.{" "}
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
