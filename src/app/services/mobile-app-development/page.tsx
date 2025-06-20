const keyFeatures = [
  {
    icon: "/services/icons/custom-ux.svg",
    title: "Custom UI/UX",
    description:
      "Clean, intuitive designs for smooth navigation and engagement.",
  },
  {
    icon: "/services/icons/cross-platform.svg",
    title: "Cross-Platform & Native",
    description: "Build for both platforms or go native for peak performance.",
  },
  {
    icon: "/services/icons/aoi.svg",
    title: "API Integrations",
    description: "Connect with payments, CRMs, ERPs, or custom backends.",
  },
  {
    icon: "/services/icons/push-notifications.svg",
    title: "Push Notifications",
    description: "Keep users engaged with real-time alerts and updates.",
  },
  {
    icon: "/services/icons/offline-access.svg",
    title: "Offline Access",
    description: "Enable key features even without internet.",
  },
  {
    icon: "/services/icons/app-store-deploy.svg",
    title: "App Store Deployment",
    description: "End-to-end support for Play Store and App Store publishing.",
  },
  {
    icon: "/services/icons/in-app-analytics.svg",
    title: "In-App Analytics",
    description: "Track behavior and performance with built-in insights.",
  },
  {
    icon: "/services/icons/data-security.svg",
    title: "Data Security",
    description: "Secure logins, encryption, and GDPR-ready compliance.",
  },
  {
    icon: "/services/icons/scalable-architecture.svg",
    title: "Scalable Architecture",
    description: "Build apps ready to grow with your user base and data needs",
  },
];

const valueAdditions = [
  {
    id: "01",
    title: "Stronger Engagement",
    description: "Stay connected with users anytime, anywhere.",
  },
  {
    id: "02",
    title: "Stand Out",
    description: "Differentiate your brand with sleek, functional design.",
  },
  {
    id: "03",
    title: "Boosted Loyalty",
    description: "Personalized experiences foster lasting relationships.",
  },
  {
    id: "04",
    title: "Smarter Decisions",
    description: "Use real data to improve features and strategy.",
  },
  {
    id: "05",
    title: "New Revenue Streams",
    description: "Monetize with subscriptions, ads, or in-app purchases.",
  },
  {
    id: "06",
    title: "Faster Customer Support",
    description: "Offer instant help and self-service right in the app.",
  },
];

import Image from "next/image";
import Process from "./process";
import BackButton from "@/components/share/back-button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development Services",
  description:
    "Avidion builds high-performance mobile apps with sleek UI, real-time features, and cross-platform capabilities. From concept to deployment, we deliver scalable, user-centric solutions.",
};
export default function AppDevelopment() {
  return (
    <div className="relative overflow-hidden font-inter">
      <div className="absolute right-0 top-20 aspect-[588/700] h-[420px] xl:h-[550px] 2xl:h-[600px]">
        <Image
          alt="mobile-app-development"
          src={"/services/sub-services/mobile-app-development.png"}
          fill
          className="object-cover opacity-[0.20]"
        />
      </div>
      <div className="container relative mx-auto flex w-full flex-col items-start gap-[50px] pb-[100px] pt-[140px] md:gap-[66px] md:pt-[154px] xl:pb-[200px] xl:pt-[174px] 2xl:pb-[273px]">
        <BackButton label="Services" />

        <div className="flex flex-col gap-[26px] text-white md:gap-[30px] xl:gap-[25px]">
          <h1 className="text-xl font-medium sm:text-2xl md:text-4xl lg:text-[42px] xl:text-5xl 2xl:text-[56px] 2xl:leading-[65px]">
            Mobile App Development
          </h1>
          <p className="text-sm font-normal md:text-base xl:text-xl">
            At Avidion Softwares, we craft high-performance mobile applications
            that help businesses thrive in a mobile-first world. From concept to
            deployment, we specialize in building intuitive, scalable, and
            feature- rich apps for Android, and cross-platform environments.
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
