const keyFeatures = [
  {
    icon: "/services/icons/lead-management.svg",
    title: "Tailored Functionality",
    description:
      "Customized to meet specific business needs with relevant features.",
  },
  {
    icon: "/services/icons/data-prep-automation.svg",
    title: "Integration Capabilities",
    description:
      "Seamlessly connects with systems, databases, and third-party tools.",
  },
  {
    icon: "/services/icons/customer-data.svg",
    title: "Scalability",
    description: "Easily adapts to growth and changing business needs.",
  },
  {
    icon: "/services/icons/activity-tracking.svg",
    title: "Enhanced Security",
    description: "Custom protocols ensure compliance and data protection.",
  },
  {
    icon: "/services/icons/workflow-automation.svg",
    title: "User Experience (UX)",
    description: "User-friendly design improves adoption and efficiency.",
  },
  {
    icon: "/services/icons/analytics-dashboard.svg",
    title: "Collaboration Tools",
    description: "Built-in tools for communication and task management.",
  },
  {
    icon: "/services/icons/role-based-access.svg",
    title: "Role-Based Access",
    description: "Control who sees what with flexible user permissions.",
  },
  {
    icon: "/services/icons/mobile-access.svg",
    title: "Prototyping and Design Tools",
    description: "Wireframes and prototypes align with client vision.",
  },
  {
    icon: "/services/icons/third-party-integrations.svg",
    title: "Ongoing Support and Maintenance",
    description: "Includes updates, bug fixes, and feature improvements.",
  },
];

const valueAdditions = [
  {
    id: "01",
    title: "Competitive Advantage",
    description:
      "Solutions are built to address unique challenges, giving businesses an edge over competitors.",
  },
  {
    id: "02",
    title: "Better Data Management",
    description:
      "Centralizes and structures data according to business needs, improving decision making.",
  },
  {
    id: "03",
    title: "Operational Efficiency",
    description:
      "Automates and streamlines processes, reducing manual work and errors.",
  },
  {
    id: "04",
    title: "Improved Customer Experience",
    description:
      "Enables the creation of customer-facing features and services that are unique and responsive.",
  },
  {
    id: "05",
    title: "Cost Efficiency",
    description:
      "Eliminates recurring licensing fees and reduces the need for multiple software products.",
  },
  {
    id: "06",
    title: "Scalability and Flexibility",
    description:
      "Grows with the business, allowing for new features and integrations as needed.",
  },
];

import Image from "next/image";
import BackButton from "@/components/share/back-button";
import Process from "./process";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Software Development Services",
  description:
    "Avidion offers tailored software development solutions built to match your exact business workflows. Scalable, secure, and fully integrated with your operations.",
};
export default function CRM() {
  return (
    <div className="relative overflow-hidden font-inter">
      <div className="absolute inset-0 aspect-[278/395] h-[734px] md:aspect-[350/160] md:h-[520px] xl:aspect-[384/161] xl:h-[805px]">
        <Image
          alt="ai-automation"
          src={"/services/sub-services/custom-software-dev.svg"}
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
            Custom Software Development
          </h1>
          <p className="text-sm font-normal md:text-base xl:text-xl">
            Custom Software Development is the process of designing, building,
            deploying, and maintaining software solutions tailored specifically
            to the unique needs and workflows of a particular organization or
            business, as opposed to using generic, off-the-shelf software. This
            approach ensures that the software aligns perfectly with business
            objectives, integrates seamlessly with existing systems, and evolves
            as the organization grows or changes.
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
