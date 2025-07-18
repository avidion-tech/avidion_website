"use client";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function ContactButton({
  buttonClassName,
}: {
  buttonClassName?: string;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  return (
    <div
      onClick={() => {
        params.append("open", "true");
        router.push(`${pathname}/?${params.toString()}`, {
          scroll: false,
        });
      }}
      className="cursor-pointer rounded-[8px] border border-[#EB88D6] bg-[rgba(0,0,0,0.16)] p-1 backdrop-blur-[94.64px] md:rounded-[12px] md:p-1.5"
    >
      <div
        className={cn(
          "rounded-[5.51px] border-white/15 bg-[linear-gradient(90deg,_rgba(157,46,135,0.4)_0%,_rgba(84,41,153,0.4)_100%)] px-[15px] py-0.5 font-inter text-[10px] text-white shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.25)] backdrop-blur-[7px] transition-all duration-700 ease-in hover:bg-[linear-gradient(90deg_,rgba(201,104,182,0.40)_0%,_rgba(121,81,186,0.40)_100%)] md:rounded-[8px] md:py-1 md:text-sm",
          buttonClassName,
        )}
      >
        Contact Us
      </div>
    </div>
  );
}
