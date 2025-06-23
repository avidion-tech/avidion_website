const keyFeatures = [
  {
    icon: "/services/icons/lead-management.svg",
    title: "Inventory Management",
    description: "Real-time stock levels, locations, and status updates.",
  },
  {
    icon: "/services/icons/data-prep-automation.svg",
    title: "Order Management",
    description: "Handle retail, wholesale, and D2C orders from pick to ship.",
  },
  {
    icon: "/services/icons/customer-data.svg",
    title: "Receiving and Put-away",
    description: "Fast, optimized storage of incoming goods.",
  },
  {
    icon: "/services/icons/activity-tracking.svg",
    title: "Batch and Cycle Count Management",
    description: "Track batches, expiry, and run regular cycle counts.",
  },
  {
    icon: "/services/icons/workflow-automation.svg",
    title: "Labour Management",
    description: "Assign tasks, track productivity, and labor costs.",
  },
  {
    icon: "/services/icons/analytics-dashboard.svg",
    title: "Warehouse Optimization",
    description: "Smart layout and product placement to save time.",
  },
  {
    icon: "/services/icons/role-based-access.svg",
    title: "Returns and Cross-Docking",
    description: "Quick returns and direct cross-docking support.",
  },
  {
    icon: "/services/icons/mobile-access.svg",
    title: "Automation Integration",
    description: "Connect with robotics, conveyors, and scanners.",
  },
  {
    icon: "/services/icons/third-party-integrations.svg",
    title: "Multi-Warehouse Management",
    description:
      "Centralized control and oversight across multiple warehouse locations.",
  },
];

const valueAdditions = [
  {
    id: "01",
    title: "Improved Efficiency",
    description:
      "Automates and streamlines warehouse processes, reducing manual errors and saving time.",
  },
  {
    id: "02",
    title: "Enhanced Scalability",
    description: "Easily adapts to business growth and multiple locations.",
  },
  {
    id: "03",
    title: "Better Inventory Control",
    description:
      "Ensures accurate, real-time visibility into inventory, reducing stockouts and overstocking.",
  },
  {
    id: "04",
    title: "Stronger Supply Chain Visibility",
    description:
      "Full visibility to spot issues early and boost responsiveness.",
  },
  {
    id: "05",
    title: "Cost Reduction",
    description:
      "Cut labor, storage, and operational costs through smart resource use.",
  },
  {
    id: "06",
    title: "Data-Driven Decision Making",
    description:
      "Make informed decisions with real-time analytics and performance metrics.",
  },
];

import Image from "next/image";
import BackButton from "@/components/share/back-button";
import Process from "./process";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Warehouse Management System (WMS) Solutions",
  description:
    "Avidion’s WMS streamlines warehouse operations with real-time inventory tracking, automation integration, and multi-location management for efficient supply chain control.",
};
export default function WMS() {
  return (
    <div className="relative overflow-hidden font-inter">
      <div className="absolute inset-0 aspect-[278/395] h-[734px] md:aspect-[350/160] md:h-[520px] xl:aspect-[384/161] xl:h-[805px]">
        <Image
          alt="ai-automation"
          src={"/services/sub-services/wms.svg"}
          fill
          priority
          loading="eager"
          className="object-cover opacity-[0.20]"
        />
      </div>
      <div className="container relative mx-auto flex w-full flex-col items-start gap-[50px] pb-[100px] pt-[140px] md:gap-[66px] md:pt-[154px] xl:pb-[200px] xl:pt-[174px] 2xl:pb-[233px]">
        <BackButton label="Services" />

        <div className="flex flex-col gap-[26px] text-white md:gap-[30px] xl:gap-[25px]">
          <h1 className="text-xl font-medium sm:text-2xl md:text-4xl lg:text-[42px] xl:text-5xl 2xl:text-[56px] 2xl:leading-[65px]">
            WMS
          </h1>
          <p className="text-sm font-normal md:text-base xl:text-xl">
            Warehouse Management System (WMS) is specialized software designed
            to manage and control daily warehouse operations, from the moment
            goods and materials enter a distribution or fulfillment center until
            they leave. WMS solutions provide real-time visibility into
            inventory, optimize resource utilization, and streamline supply
            chain fulfillment processes, making them a critical component of
            modern logistics and supply chain management
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
