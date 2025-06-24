"use client";
import { RxCross2 } from "react-icons/rx";
import { Dialog, DialogClose, DialogContent } from "../ui/dialog";
import ContactForm from "../forms/contact-form";
import { useRouter, useSearchParams } from "next/navigation";
import { useMediaQuery } from "@uidotdev/usehooks";

import { Sheet, SheetClose, SheetContent } from "@/components/ui/sheet";
export default function ContactUs() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  const searchParams = useSearchParams();
  const isOpen = searchParams.get("open") === "true";

  const router = useRouter();
  const params = new URLSearchParams(searchParams.toString());

  const handleClose = () => {
    params.delete("open");
    router.push(`/?${params.toString()}`, { scroll: false });
  };
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
              className="h-[80vh] overflow-y-auto border border-none bg-[#141315] pb-[80px] transition-transform duration-500"
            >
              <ContactForm />

              <SheetClose asChild onClick={() => handleClose()}>
                <RxCross2 className="absolute right-4 top-4 size-4 text-white" />
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
