const keyFeatures = [
  {
    icon: "/services/icons/lead-management.svg",
    title: "Integration and Third-Party Add-Ons",
    description:
      "Connects business apps to ensure consistent, duplicate-free data.",
  },
  {
    icon: "/services/icons/data-prep-automation.svg",
    title: "Workflow Automation",
    description:
      "Automates repetitive tasks and business processes, increasing productivity.",
  },
  {
    icon: "/services/icons/customer-data.svg",
    title: "Data Analysis and Reporting",
    description:
      "Provides built-in and customizable reports for real-time insights and decision making.",
  },
  {
    icon: "/services/icons/activity-tracking.svg",
    title: "Inventory & Supply Chain Management",
    description:
      "Tracks inventory levels, manages procurement, and optimizes logistics.",
  },
  {
    icon: "/services/icons/workflow-automation.svg",
    title: "Order Fulfillment",
    description: "Automates order processing from entry to delivery.",
  },
  {
    icon: "/services/icons/analytics-dashboard.svg",
    title: "Financial Management",
    description: "Handles accounting, invoicing, forecasting, and compliance.",
  },
  {
    icon: "/services/icons/role-based-access.svg",
    title: "CRM",
    description: "Manages customer data, sales, and marketing activities.",
  },
  {
    icon: "/services/icons/mobile-access.svg",
    title: "HRMS",
    description:
      "Manages employee records, payroll, benefits, and performance.",
  },
  {
    icon: "/services/icons/third-party-integrations.svg",
    title: "Manufacturing and Production",
    description:
      "Supports production planning, scheduling, and quality control.",
  },
];

const valueAdditions = [
  {
    id: "01",
    title: "Enhanced Efficiency",
    description:
      "Streamlines operations by integrating all departments, reducing manual work and errors.",
  },
  {
    id: "02",
    title: "Cost Reduction",
    description:
      "Identifies and eliminates inefficiencies, reducing waste and operational costs.",
  },
  {
    id: "03",
    title: "Improved Data Accuracy",
    description:
      "Centralizes data, ensuring consistency and reliability across the organization.",
  },
  {
    id: "04",
    title: "Stronger Customer Relationships",
    description:
      "Enables targeted marketing and responsive customer service through integrated CRM.",
  },
  {
    id: "05",
    title: "Better Decision-Making",
    description:
      "Provides real-time analytics and reporting for informed strategic decisions.",
  },
  {
    id: "06",
    title: "Employee Empowerment",
    description:
      "Clarifies roles and responsibilities, improving productivity and motivation.",
  },
];

import Image from "next/image";
import BackButton from "@/components/share/back-button";
import Process from "./process";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ERP Development Services",
  description:
    "Streamline and unify your business operations with Avidion's custom ERP solutions. From finance to HR, manage every department through one integrated platform.",
};
export default function ERP() {
  return (
    <div className="relative overflow-hidden font-inter">
      <div className="absolute inset-0 aspect-[278/395] h-[734px] md:aspect-[350/160] md:h-[520px] xl:aspect-[384/161] xl:h-[805px]">
        <Image
          alt="ai-automation"
          src={"/services/sub-services/erp.svg"}
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
            ERP
          </h1>
          <p className="text-sm font-normal md:text-base xl:text-xl">
            Enterprise Resource Planning (ERP) is a suite of integrated software
            applications that organizations use to manage and automate core
            business processes in real time, including finance, human resources,
            supply chain, manufacturing, sales, and more. ERP systems unify data
            and processes across departments, providing a single source of truth
            and enabling seamless information flow throughout the organization
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
