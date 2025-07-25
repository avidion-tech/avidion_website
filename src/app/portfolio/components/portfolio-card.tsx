import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type IPortfolioCardProps = {
  id: number;
  videoUrl?: string;
  title: string;
  description: string;
  badge: string;
  color: string;
  redirectUrl: string;
  imageUrl?: string;
  category: string;
};
export default function PortfolioCard({
  details,
}: {
  details: IPortfolioCardProps;
}) {
  return (
    <>
      <div className="flex flex-col overflow-hidden rounded-[14.75px] border border-[rgba(255,255,255,0.15)] bg-[rgba(21,21,21,0.29)] font-inter backdrop-blur-[34.146px]">
        {details.videoUrl ? (
          <>
            <video
              src={details.videoUrl}
              className="h-full w-full scale-[1.15] object-contain"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
          </>
        ) : (
          <div className="relative h-[200px] w-full sm:h-[240px] md:h-[200px] lg:h-[300px] xl:h-[344px]">
            <Image
              src={details.imageUrl ?? ""}
              alt="image"
              className="mx-auto object-cover"
              fill
            />
          </div>
        )}

        <div className="flex flex-col gap-1.5 px-[17px] py-[20px] md:py-[25px] xl:gap-4 xl:px-[25px] xl:py-10">
          {/* Badge */}
          <div
            className={`${details.color} self-start rounded-[59px] border border-[#2C2C2D] bg-[rgba(255,255,255,0.04)] px-[26px] py-1.5 text-xs font-bold -tracking-[0.001px] backdrop-blur-[0.94px]`}
          >
            {details.badge}
          </div>
          <div className="h-[48px] text-base font-bold text-[#E0E0E0] xl:text-xl">
            {details.title}
          </div>
          <div className="text-sm font-normal text-[#B3B3B3] xl:text-base">
            {details.description}
          </div>
          {details.category === "project-showcase" ? (
            <Link
              target="_blank"
              href={details.redirectUrl}
              className="duration-600 group flex flex-row items-end justify-end gap-3 text-sm font-normal transition-colors"
            >
              <div className="text-white/70 group-hover:text-white">
                View Demo
              </div>
              <ArrowRight
                strokeWidth={2}
                className="size-[20px] text-white/70 group-hover:text-white"
              />
            </Link>
          ) : (
            <Link
              href={details.redirectUrl}
              className="duration-600 group flex flex-row items-end justify-end gap-3 text-sm font-normal transition-colors"
            >
              <div className="text-white/70 group-hover:text-white">
                View Case Study
              </div>
              <ArrowRight
                strokeWidth={2}
                className="size-[20px] text-white/70 group-hover:text-white"
              />
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
