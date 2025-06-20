"use client";
import Image from "next/image";
import Link from "next/link";

export const services = [
  {
    id: 1,
    imageUrl: "/services/service-1.svg",
    title: "AI Integration ",
    content:
      "At Avidion Softwares, we integrate Artificial Intelligence (AI) into your digital ecosystem to help you make smarter decisions, automate processes, and deliver personalized experiences at scale. Whether it’s an intelligent chatbot, predictive analytics engine, or AI-driven automation, we help you harness the power of AI to gain a competitive edge and drive operational efficiency.",
    link: "/services/ai-integration",
  },
  {
    id: 2,
    imageUrl: "/services/service-2.svg",
    title: "AI Automation ",
    content:
      "Avidion Softwares, we specialize in AI Automation to transform manual, repetitive tasks into intelligent, self-operating processes. From smart workflows to decision engines, our solutions free up your team, reduce operational friction, and boost productivity—so you can focus on what really matters.",
    link: "/services/ai-automation",
  },
  {
    id: 3,
    imageUrl: "/services/service-3.svg",
    title: "3D & Animated Websites",
    content:
      "Step into the future of digital experiences with cutting-edge 3D and animated website development by Avidion Softwares. We go beyond static designs to create immersive, visually stunning, and interactive websites that capture attention and elevate your brand presence.",
    link: "/services/3d-websites",
  },
  {
    id: 4,
    imageUrl: "/services/service-4.svg",
    title: "Mobile App Development",
    content:
      "At Avidion Softwares, we craft high-performance mobile applications that help businesses thrive in a mobile-first world. From concept to deployment, we specialize in building intuitive, scalable, and feature- rich apps for Android, and cross-platform environments.",
    link: "/services/mobile-app-development",
  },
  {
    id: 5,
    imageUrl: "/services/service-5.svg",
    title: "Custom Software Development",
    content:
      "At Avidion Softwares, we deliver custom software solutions tailored to your business goals. Whether you need a web app, mobile platform, or enterprise system, our scalable and secure solutions are built to enhance efficiency, solve complex challenges, and drive growth. From idea to execution, we ensure your software evolves with your business.",
    link: "/services/custom-software-development",
  },
  {
    id: 6,
    imageUrl: "/services/service-6.svg",
    title: "WMS",
    content:
      "We build custom WMS solutions that streamline inventory, automate warehouse operations, and boost efficiency. Designed to scale with your business, our systems help reduce errors and improve logistics from the ground up.",
    link: "/services/wms",
  },
  {
    id: 7,
    imageUrl: "/services/service-7.svg",
    title: "ERP",
    content:
      "We design tailored ERP solutions that unify your business processes—finance, HR, inventory, and more—into one powerful system. Our scalable platforms improve visibility, boost productivity, and support smarter decision-making across your organization.",
    link: "/services/erp",
  },

  {
    id: 8,
    imageUrl: "/services/service-8.svg",
    title: "CRM ",
    content:
      "At Avidion Softwares, we build intelligent, scalable, and user-friendly CRM systems that empower businesses to streamline customer relationships, automate sales workflows, and drive lasting loyalty. Whether you need a lightweight CRM for a startup or a robust enterprise-grade solution, our custom CRM development is designed to help you manage leads, track interactions, and grow smarter.",
    link: "/services/crm",
  },
  {
    id: 9,
    imageUrl: "/services/service-9.svg",
    title: "Website Development",
    content:
      "We create fast, responsive, and user-friendly websites that reflect your brand and drive results. From corporate sites to e-commerce platforms, our custom-built websites are designed to engage users, enhance visibility, and support business growth.",
    link: "/services/website-development",
  },
];
export default function AllServices() {
  return (
    <>
      <div className="relative">
        {/* Sticky Video */}
        <video
          src="/how-we-work-bg-video.mp4"
          muted
          autoPlay
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />

        {/* Cards scrolling over the video */}
        <div className="relative flex flex-col justify-center gap-10 py-[67px] font-inter md:px-[29px] xl:px-[114px] 2xl:px-[249px]">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`${index % 2 == 0 ? `bg-[#17061B]` : `bg-[#000000]`} relative flex flex-col items-center gap-9 overflow-hidden rounded-[24px] px-6 py-[50px] md:px-[85px] xl:flex-row xl:justify-between xl:px-[140px]`}
            >
              <div
                className={`${
                  index % 2 === 0 ? "order-1" : "xl:order-2"
                } relative h-[250px] w-[248px] xl:h-[356px] xl:w-[400px]`}
              >
                <Image
                  src={service.imageUrl}
                  alt="service-images"
                  fill
                  className="animate-service-bounce object-contain"
                  quality={100}
                  priority
                />
              </div>
              <div
                className={`${
                  index % 2 === 0 ? "order-2" : "order-1"
                } flex flex-col items-center justify-center gap-[13px] md:items-start xl:basis-[50%]`}
              >
                <div className="text-xl font-medium text-[#E0E0E0] md:text-2xl xl:text-[40px] xl:leading-[48px]">
                  {service.title}
                </div>
                <div className="text-center text-sm font-normal text-[rgba(255,255,255,0.70)] md:text-left md:text-base">
                  {service.content}
                </div>
                <Link
                  href={service.link}
                  className="py-2 text-sm font-normal text-white underline underline-offset-1"
                >
                  Know More
                </Link>
              </div>
              {index % 2 == 0 ? (
                <>
                  <div className="absolute -left-[15%] top-[15%] size-[311px] animate-blob rounded-full bg-[linear-gradient(120deg,_rgba(255,115,217,0.80)_0%,_rgba(234,62,187,0.80)_86.07%)] opacity-[0.27] blur-[111px]"></div>
                  <div className="absolute -right-[15%] top-[15%] size-[311px] animate-blob rounded-full bg-[linear-gradient(90deg,_#3D065F_0%,_#5727BD_100%)] opacity-[0.27] blur-[111px]"></div>
                </>
              ) : (
                <>
                  <div className="absolute -left-[10%] top-[15%] size-[311px] animate-blob rounded-full bg-[linear-gradient(90deg,_#3D065F_0%,_#5727BD_100%)] opacity-[0.33] blur-[111px]"></div>
                  <div className="absolute -bottom-[50%] left-[30%] size-[311px] animate-blob rounded-full bg-[linear-gradient(120deg,_rgba(255,115,217,0.80)_0%,_rgba(234,62,187,0.80)_86.07%)] opacity-[0.33] blur-[111px]"></div>
                </>
              )}

              {/* <div
                className={`${index % 2 == 0 ? `left-[90px] bg-[#82107C]` : `right-[90px] bg-[#622A9A]`} absolute top-1/2 size-[569px] rounded-full opacity-[0.25] blur-[113px]`}
              ></div> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
