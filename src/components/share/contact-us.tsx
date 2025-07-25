"use client";
import { RxCross2 } from "react-icons/rx";
import { Dialog, DialogClose, DialogContent } from "../ui/dialog";
import ContactForm from "../forms/contact-form";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMediaQuery } from "@uidotdev/usehooks";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import { XIcon } from "lucide-react";
export default function ContactUs() {
  const [mounted, setMounted] = useState(false);

  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  useEffect(() => {
    setMounted(true);
  }, []);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const isOpen = searchParams.get("open") === "true";

  const router = useRouter();
  const params = new URLSearchParams(searchParams.toString());

  const handleClose = () => {
    params.delete("open");
    router.push(`${pathname}/?${params.toString()}`, { scroll: false });
  };

  if (!mounted) return null; // Prevents hydration mismatch
  return (
    <>
      {isSmallDevice ? (
        <>
          <Sheet
            open={isOpen}
            onOpenChange={(open) => {
              if (!open) {
                handleClose();
              }
            }}
          >
            <SheetContent
              side="bottom"
              className="max-h-[88vh] overflow-y-auto border border-none bg-[#141315] transition-transform duration-500"
            >
              <ContactForm />
              <SheetClose
                asChild
                onClick={() => handleClose()}
                className="bg-transparent text-white hover:bg-white/70"
              >
                {/* <RxCross2 className="absolute right-4 top-4 size-4 text-white" /> */}
                <XIcon
                  className="absolute right-4 top-3 z-10 size-4"
                  color="white"
                  strokeWidth={2}
                />
              </SheetClose>
            </SheetContent>
          </Sheet>
        </>
      ) : (
        <Dialog
          open={isOpen}
          onOpenChange={(open) => {
            if (!open) {
              handleClose();
            }
          }}
        >
          <DialogContent className="max-h-screen w-screen overflow-y-auto rounded-[4px] border border-none bg-[#141315] md:w-[95%] xl:w-[80%] 2xl:w-[60%]">
            <ContactForm />
            <DialogClose></DialogClose>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
