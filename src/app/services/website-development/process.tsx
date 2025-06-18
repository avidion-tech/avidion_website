import { websiteDevProcess } from "@/data";

export default function Process() {
  return (
    <>
      <div className="relative">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          preload="auto"
          playsInline
        >
          <source src="/how-we-work-bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* overlay over the video */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.60)]"></div>
        <div className="container mx-auto w-full">
          <div className="relative flex flex-col gap-10 py-[63px] font-inter md:py-[80px] xl:gap-[55px] xl:px-[156.5px] xl:py-[80px] 2xl:px-[144px]">
            <div className="text-center text-xl font-medium -tracking-[0.84px] text-white sm:text-2xl md:text-4xl lg:text-[40px] xl:text-5xl 2xl:text-[56px] 2xl:leading-[65px]">
              Process
            </div>

            <div className="relative flex flex-col items-center">
              {/* Vertical line */}
              <div
                className="w-0.5 bg-[#514C57] md:absolute md:h-full"
                style={{ height: "calc(100% - 130px)" }}
              ></div>

              {/* Timeline items */}
              {websiteDevProcess.map((item, index) => (
                <div key={index} className="relative mb-14 flex w-full">
                  <>
                    <div className="flex flex-col items-center gap-[14px] md:hidden">
                      <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full border border-[#656565] bg-transparent bg-[linear-gradient(90deg,_rgba(64,15,54,0.40)_0%,_rgba(37,25,71,0.40)_100%)] shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.40)] backdrop-blur-[7px]">
                        <span className="rounded-full border border-[rgba(255,255,255,0.15)] bg-[linear-gradient(90deg,_rgba(157,46,135,0.40)_0%,_rgba(84,41,153,0.41)_100%)] p-2 shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.25)] backdrop-blur-[7px]">
                          <item.icon className="size-6" color="white" />
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="text-base font-medium leading-[31px] text-white">
                          {item.title}
                        </div>
                        <div className="text-center text-sm font-normal text-[rgba(255,255,255,0.60)] md:text-base">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  </>

                  <>
                    <div className="relative mb-14 hidden w-full md:flex">
                      {index % 2 === 0 ? (
                        <>
                          {/* Left side content */}
                          <div className="mr-20 w-1/2 text-right lg:mr-24">
                            <div className="text-base font-medium leading-[31px] text-white">
                              {item.title}
                            </div>
                            <div className="text-sm font-normal text-[rgba(255,255,255,0.60)] md:text-base">
                              {item.description}
                            </div>
                          </div>

                          {/* Center circle */}
                          <div className="absolute left-1/2 flex h-[64px] w-[64px] -translate-x-1/2 items-center justify-center rounded-full border border-[#656565] bg-transparent bg-[linear-gradient(90deg,_rgba(64,15,54,0.40)_0%,_rgba(37,25,71,0.40)_100%)] shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.40)] backdrop-blur-[7px]">
                            <span className="rounded-full border border-[rgba(255,255,255,0.15)] bg-[linear-gradient(90deg,_rgba(157,46,135,0.40)_0%,_rgba(84,41,153,0.41)_100%)] p-2 shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.25)] backdrop-blur-[7px]">
                              <item.icon className="size-6" color="white" />
                            </span>
                          </div>

                          {/* Empty right side */}
                          <div className="w-1/2"></div>
                        </>
                      ) : (
                        <>
                          {/* Empty left side */}
                          <div className="w-1/2"></div>

                          {/* Center circle */}
                          <div className="absolute left-1/2 flex h-[64px] w-[64px] -translate-x-1/2 items-center justify-center rounded-full border border-[#656565] bg-[linear-gradient(90deg,_rgba(64,15,54,0.40)_0%,_rgba(37,25,71,0.40)_100%)] shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.40)] backdrop-blur-[7px]">
                            <span className="rounded-full border border-[rgba(255,255,255,0.15)] bg-[linear-gradient(90deg,_rgba(157,46,135,0.40)_0%,_rgba(84,41,153,0.41)_100%)] p-2 shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.25)] backdrop-blur-[7px]">
                              <item.icon className="size-6" color="white" />
                            </span>
                          </div>

                          {/* Right side content */}
                          <div className="ml-20 w-1/2 lg:ml-24">
                            <div className="text-base font-medium leading-[31px] text-white">
                              {item.title}
                            </div>
                            <div className="text-sm font-normal text-[rgba(255,255,255,0.60)] md:text-base">
                              {item.description}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
