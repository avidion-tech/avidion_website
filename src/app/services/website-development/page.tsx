const keyFeatures = [
  {
    icon: "/services/icons/custom-build-architecture.svg",
    title: "Custom-Built Architecture",
    description:
      "Custom web apps built from scratch to fit your exact business logic and goals.",
  },
  {
    icon: "/services/icons/responsive-design.svg",
    title: "Responsive Design",
    description:
      "Optimized for a smooth experience on mobile, tablet, and desktop.",
  },
  {
    icon: "/services/icons/scalable-backend-system.svg",
    title: "Scalable Backend Systems",
    description:
      "Built to scale using frameworks like Node.js, Express, or Django.",
  },
  {
    icon: "/services/icons/fast-load-speed.svg",
    title: "Fast Load Speeds",
    description:
      "Blazing-fast performance with optimized code and media for better retention.",
  },
  {
    icon: "/services/icons/seo.svg",
    title: "SEO-Friendly Development",
    description:
      "SEO-friendly with semantic HTML, clean URLs, and smart metadata.",
  },
  {
    icon: "/services/icons/secure-authentication.svg",
    title: "Secure Authentication & Authorization",
    description:
      "Secure access with roles, OAuth, JWT, and two-factor authentication.",
  },
  {
    icon: "/services/icons/real-time-functionality.svg",
    title: "Real-Time Functionality",
    description:
      "Real-time features like chat, notifications, and dashboards via WebSockets or Firebase",
  },
  {
    icon: "/services/icons/third-party-integrations.svg",
    title: "Third-Party Integrations",
    description:
      "Integrates with CRMs, payments, marketing, analytics, and cloud tools.",
  },
  {
    icon: "/services/icons/pwa.svg",
    title: "Progressive Web App (PWA) Capability",
    description: "Offline access, installable, and native-like on mobile.",
  },
];

const valueAdditions = [
  {
    id: "01",
    title: "Tailored to Your Business Needs ",
    description:
      "Custom-built apps aligned with your workflows, goals, and industry requirements.",
  },
  {
    id: "02",
    title: "Faster Time-to-Market ",
    description:
      "Agile development ensures quicker launch and faster opportunity capture.",
  },
  {
    id: "03",
    title: "Scalable Architecture ",
    description: "Built to grow with your business, from 10 to 10,000+ users.",
  },
  {
    id: "04",
    title: "Superior User Experience (UX)",
    description:
      "Intuitive interfaces that boost engagement and reduce bounce rates.",
  },
  {
    id: "05",
    title: "Mobile & Cross-Device Responsiveness",
    description:
      "Flawless performance across desktops, tablets, and smartphones.",
  },
  {
    id: "06",
    title: "Enterprise-Grade Security",
    description:
      "Top-tier protection with SSL, encryption, and secure access controls.",
  },
  {
    id: "07",
    title: "Seamless Integration with Third-Party Tools –",
    description: "Smooth integration with CRMs, ERPs, payments, and more.",
  },
  {
    id: "08",
    title: "Optimized for SEO & Speed",
    description:
      "Fast-loading, search-friendly apps for better visibility and retention.",
  },
  {
    id: "09",
    title: "Ongoing Support & Maintenance ",
    description:
      "Continuous updates, monitoring, and performance enhancements.",
  },
  {
    id: "10",
    title: "Mobile & Cross-Device Responsiveness",
    description:
      "Dashboards and data tools to track performance and guide decisions.",
  },
];

const mainHighlights = [
  "SEO-optimized, mobile-responsive designs",
  "Lightning-fast performance and load times",
  "Scalable architecture for future growth",
  "Seamless integrations with third-party tools",
];
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import Process from "./process";

export default function WebsiteDevelopment() {
  return (
    <div className="relative overflow-hidden font-inter">
      <video
        className="absolute inset-0 h-[100vh] w-full scale-[3.5] sm:scale-[3] opacity-30 md:scale-[1.8] lg:scale-[1.44] xl:scale-[1] xl:object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source
          src="/services/sub-services/website-dev.webm"
          type="video/webm"
        />
      </video>
      <div className="container relative mx-auto flex max-w-full flex-col items-start gap-[50px] pb-[40px] pt-[140px] md:pt-[154px] md:gap-[66px] md:pb-[100px] xl:pb-[163px] xl:pt-[174px]">
        <Link
          href="/services"
          className="flex flex-row items-center gap-2 rounded-[4px] border border-[#535353] px-[11px] py-2 text-xs text-[#EDEDED] md:px-[25px] md:py-[9px] md:text-sm"
        >
          <FaArrowLeft size={18} color="#C0C0C0" strokeWidth={0.1} />
          Back To Services
        </Link>
        <div className="flex flex-col gap-[36px] md:gap-[56px] xl:gap-[66px]">
          <div className="flex flex-col gap-[26px] text-white md:gap-[30px] xl:gap-[25px]">
            <div className="text-xl font-medium sm:text-2xl md:text-4xl lg:text-[42px] xl:text-5xl 2xl:text-[56px] 2xl:leading-[65px]">
              Website Development
            </div>
            <p className="text-sm font-normal md:text-base xl:text-xl">
              We design and develop custom, high-performance websites tailored
              to your business objectives. Our websites are  visually stunning,
              fast-loading, responsive across all devices, and optimized for
              search engines and conversions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:gap-x-[109px] lg:content-between gap-y-10 md:grid-cols-2 md:gap-y-[54px] xl:gap-y-[34px]">
            {mainHighlights.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-2.5 xl:items-center"
              >
                <div className="relative mt-[5px] size-4">
                  <Image
                    src={"/icons/check.svg"}
                    alt="check-icon"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-sm font-normal text-white/70 md:text-base">
                  {item}
                </div>
              </div>
            ))}
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
