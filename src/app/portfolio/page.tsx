import { HeadingSection } from "@/components/share/heading-section";
import { caseStudies, portfolio } from "@/data";
import React from "react";
import PortfolioCard from "./components/portfolio-card";
import { Tabs, TabsTrigger, TabsList, TabsContent } from "@/components/ui/tabs";

export default function Portfolio() {
  return (
    <div className="container mx-auto w-full pb-[40px] pt-[134px] md:pt-[160px] xl:pb-[100px] xl:pt-[196px]">
      <HeadingSection
        mainHeading="Our Work"
        subContent="Crafted with care. Built for impact."
        mainClassName="text-center"
        subClassName="text-center"
      />

      <Tabs
        defaultValue="app-showcase"
        className="flex items-center justify-center"
      >
        <div className="rounded-[12px] bg-[linear-gradient(131deg,_rgba(157,46,135,1)_25.56%,_rgba(240,200,231,0.70)_42.13%,_rgba(84,41,153,1)_53.02%,_rgba(157,123,242,0.70)_75.71%)] p-[3px]">
          <TabsList className="rounded-[8.5px] bg-black text-white">
            <TabsTrigger
              value="app-showcase"
              className="rounded-bl-[8.6px] rounded-tl-[8.6px] px-[30px] py-3 data-[state=active]:bg-[linear-gradient(90deg,_rgba(157,46,135,0.60)_0%,_rgba(84,41,153,0.60)_100%)] md:px-[40px] md:py-[14px] lg:px-[62px]"
            >
              Projects Showcase
            </TabsTrigger>
            <TabsTrigger
              value="case-studies"
              className="rounded-br-[8.6px] rounded-tr-[8.6px] px-[30px] py-3 data-[state=active]:bg-[linear-gradient(90deg,_rgba(157,46,135,0.60)_0%,_rgba(84,41,153,0.60)_100%)] md:px-[40px] md:py-[14px] lg:px-[62px]"
            >
              Case Studies
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="app-showcase" className="pt-20 lg:pt-28">
          <div className="grid grid-cols-1 gap-9 md:grid-cols-2 md:gap-x-[18px] md:gap-y-[38.94px] xl:gap-[70px]">
            {portfolio.map((item, index) => (
              <PortfolioCard key={index} details={item} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="case-studies" className="pt-20 lg:pt-28">
          <div className="grid grid-cols-1 gap-9 md:grid-cols-2 md:gap-x-[18px] md:gap-y-[38.94px] xl:gap-[70px]">
            {caseStudies.map((item, index) => (
              <PortfolioCard key={index} details={item} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
