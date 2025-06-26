const keyFeatures = [
  {
    icon: "/services/icons/3d-models.svg",
    title: "Interactive 3D Models",
    description:
      "Users can rotate, zoom, and explore objects or environments in real-time.",
  },
  {
    icon: "/services/icons/3d-integrations.svg",
    title: "Gsap, WebGL & Three.js Integration",
    description:
      "Built using cutting-edge 3D web technologies for smooth rendering.",
  },
  {
    icon: "/services/icons/cross-device-compatibility.svg",
    title: "Cross-Device Compatibility",
    description:
      "Fully responsive 3D experiences on desktop, tablet, and mobile.",
  },
  {
    icon: "/services/icons/optimize-load-time.svg",
    title: "Optimized Load Times",
    description:
      "Lightweight assets and efficient code ensure fast page performance.",
  },
  {
    icon: "/services/icons/ar-support.svg",
    title: "Augmented Reality (AR) Support",
    description:
      "Optional AR features to visualize objects in real-world spaces.",
  },
  {
    icon: "/services/icons/multimedia-hotspots.svg",
    title: "Multimedia Hotspots",
    description:
      "Embed text, video, or audio within 3D scenes for enhanced storytelling.",
  },
];

const valueAdditions = [
  {
    id: "01",
    title: "Enhanced Product Engagement",
    description:
      "Let customers interact with your offerings, leading to better understanding and interest.",
  },
  {
    id: "02",
    title: "Reduced Returns & Queries",
    description: "Detailed 3D previews help buyers make informed decisions.",
  },
  {
    id: "03",
    title: "Stronger Brand Differentiation",
    description:
      "Stand out with immersive visuals that elevate brand perception.",
  },
  {
    id: "04",
    title: "Future-Ready Presence",
    description:
      "Show you're ahead of the curve by adopting immersive web tech early.",
  },
  {
    id: "05",
    title: "Increased Conversions",
    description:
      "Guided 3D tours and interactive demos drive higher customer actions.",
  },
  {
    id: "06",
    title: "Integrated Data Insights",
    description:
      "Track how users engage with 3D content to refine your strategy.",
  },
];

import Image from "next/image";
import Process from "./process";
import BackButton from "@/components/share/back-button";
import type { Metadata } from "next";

export default function ThreeDWebsite() {
  return (
    <div className="relative overflow-hidden font-inter">
      <div className="absolute right-0 top-0 h-[771px] w-[584px]">
        <Image
          src={"/services/sub-services/3d-website-bg.svg"}
          alt="3d-website-bg"
          className="object-contain"
          priority
          loading="eager"
          fill
        />
        <div className="absolute inset-0 bg-[linear-gradient(272deg,_rgba(0,0,0,0.53)_7.24%,_#020103_95.6%)]"></div>
      </div>
      <div className="relative mx-auto flex w-full flex-col items-start gap-[34px] px-[23px] pb-[40px] pt-[140px] md:px-[52px] md:pb-[100px] md:pt-[154px] xl:pb-[163px] xl:pl-[182px] xl:pr-[174px] xl:pt-[174px] 2xl:pl-[416px]">
        <BackButton label="Services" />
        <div className="flex flex-col items-center gap-10 md:gap-[60px] lg:flex-row lg:gap-3 xl:gap-10">
          <div className="flex flex-col gap-[26px] text-white md:gap-[30px] lg:w-[75%] xl:w-[50%] xl:gap-[25px] 2xl:w-[48%]">
            <h1 className="text-xl font-medium sm:text-2xl md:text-4xl lg:text-[42px] xl:text-5xl 2xl:text-[56px] 2xl:leading-[65px]">
              3D & Animated Websites
            </h1>
            <p className="text-sm font-normal md:text-base xl:text-xl">
              Step into the future of digital experiences with cutting-edge 3D
              and animated website development by Avidion Software. We go beyond
              static designs to create immersive, visually stunning, and
              interactive websites that capture attention and elevate your brand
              presence.
            </p>
          </div>

          <div className="relative aspect-[277/166] w-[277px] sm:aspect-[377/266] sm:w-[377px] md:aspect-[500/250] md:w-[500px] xl:aspect-[617/355] xl:w-[517px]">
            <Image
              src={"/services/sub-services/3d-website.gif"}
              alt="3d-website-gif"
              fill
              className="object-contain"
              priority
              loading="eager"
            />
          </div>
        </div>
      </div>
      <div className="relative bg-[#140A1E]">
        <div className="container mx-auto flex max-w-full flex-col gap-[60px] py-[80px] md:gap-[73px] xl:py-[147px]">
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
        <div className="container mx-auto flex max-w-full flex-col gap-[50px] py-[80px] md:gap-[70px] xl:gap-[90px] xl:py-[147px]">
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
export const metadata: Metadata = {
  title: "3D Website Development",
  description:
    "Avidion builds immersive 3D and animated websites that elevate your digital presence. Experience modern, interactive, and visually stunning web solutions.",
};
