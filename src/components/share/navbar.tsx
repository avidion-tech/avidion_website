"use client";
import { navItems } from "@/data";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ContactUsWrapper from "./contact-us-wrapper";
import ContactButton from "./contact-button";

export default function Navbar() {
  const navbarRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const manageOutsideClick = (e: MouseEvent) => {
    const target = e.target as Node;
    if (
      navbarRef?.current?.contains(target) ||
      hamburgerRef?.current?.contains(target)
    ) {
      return;
    }

    setIsMobileMenuOpen(false);
  };
  useEffect(() => {
    document.addEventListener("click", manageOutsideClick);

    return () => {
      document.removeEventListener("click", manageOutsideClick);
    };
  }, []);

  return (
    <>
      <div className="fixed top-6 z-30 w-full px-2.5 md:px-[27px] xl:px-[114px] 2xl:px-[249px]">
        <div className="rounded-[30px] border border-white/15 bg-[rgba(45,45,45,0.27)] backdrop-blur-[22.79px]">
          <div className="flex flex-row items-center justify-between rounded-[33px] border border-white/15 px-[19px] py-2 md:px-9 xl:px-[68.5px] 2xl:px-[173px]">
            {/* avidion logo */}
            <Link href="/" className="flex items-center gap-2 md:gap-[10.87px]">
              <div className="relative size-[30px] md:size-9 xl:size-[40px]">
                <Image
                  src={"/avidion-logo.png"}
                  alt="avidion-logo"
                  fill
                  priority
                />
              </div>
              <div className="animate-gradient bg-[linear-gradient(83deg,_#6748CD,_#972BC7,_#B33691,_#8A30AC,_#B33691,_#972BC7,_#6748CD)] bg-[length:200%_auto] bg-clip-text font-inter text-lg font-bold -tracking-[0.6px] text-transparent md:text-xl xl:text-2xl">
                Avidion
              </div>
            </Link>

            <div className="flex flex-row items-center gap-5 xl:gap-[30px]">
              {/* desktop menu */}
              <div className="hidden gap-5 lg:flex xl:gap-[30px]">
                {navItems.map((item, index) => (
                  <>
                    <Link
                      key={index}
                      href={item.url}
                      className="relative transition-all duration-300 ease-in"
                    >
                      <span
                        className={`font-inter text-[13px] font-normal leading-[26px] -tracking-[0.001px] ${pathname === item.url || (item.url != "/" && pathname.startsWith(item.url)) ? `bg-[linear-gradient(57deg,_#C0ADFF_11.25%,_#BF5CEA_34.88%,_#DD68BD_66.68%,_#9E3DC2_95.25%)] bg-clip-text text-transparent underline underline-offset-8` : `text-white/80 hover:font-medium hover:text-white`}`}
                      >
                        {item.name}
                      </span>
                      {(pathname === item.url ||
                        (item.url != "/" &&
                          pathname.startsWith(`${item.url}/`))) && (
                        <span className="absolute -bottom-[1px] left-0 h-[2px] w-full bg-[linear-gradient(57deg,_#C0ADFF_11.25%,_#BF5CEA_34.88%,_#DD68BD_66.68%,_#4D1263_95.25%)]"></span>
                      )}
                    </Link>
                  </>
                ))}
              </div>

              <div className="flex flex-row items-center gap-4 md:gap-8">
                {/* Contact Button */}
               <ContactButton/>

                <div
                  ref={hamburgerRef}
                  className="relative size-7 md:size-9 lg:hidden"
                >
                  <div
                    className={`${isMobileMenuOpen ? `pointer-events-none opacity-0` : `pointer-events-auto opacity-100`} absolute inset-0 transition-opacity duration-300 ease-in-out`}
                    onClick={() => setIsMobileMenuOpen(true)}
                  >
                    <Image
                      src={"/icons/hamburger.svg"}
                      alt="hamburger-icon"
                      fill
                      priority
                    />
                  </div>

                  <div
                    className={`${isMobileMenuOpen ? `pointer-events-auto opacity-100` : `pointer-events-none opacity-0`} absolute inset-0 transition-opacity duration-300 ease-in-out`}
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                  >
                    <Image
                      src={"/icons/cross.svg"}
                      alt="hamburger-icon"
                      fill
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* mobile menu */}
          {isMobileMenuOpen && (
            <div
              ref={navbarRef}
              className="flex flex-col items-center gap-9 px-[27px] pb-[30px] pt-[50px] transition-all duration-300 ease-in-out"
            >
              {navItems.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={item.url}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="relative"
                  >
                    <span
                      className={`font-inter text-[13px] font-normal leading-[26px] -tracking-[0.001px] ${
                        pathname === item.url ||
                        (item.url != "/" && pathname.startsWith(item.url))
                          ? "bg-[linear-gradient(57deg,_#C0ADFF_11.25%,_#BF5CEA_34.88%,_#DD68BD_66.68%,_#9E3DC2_95.25%)] bg-clip-text text-transparent underline underline-offset-8"
                          : "text-white/80"
                      }`}
                    >
                      {item.name}
                    </span>
                    {(pathname === item.url ||
                      (item.url != "/" && pathname.startsWith(item.url))) && (
                      <span className="absolute -bottom-[1px] left-0 h-[2px] w-full bg-[linear-gradient(57deg,_#C0ADFF_11.25%,_#BF5CEA_34.88%,_#DD68BD_66.68%,_#4D1263_95.25%)]"></span>
                    )}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <ContactUsWrapper />
    </>
  );
}
