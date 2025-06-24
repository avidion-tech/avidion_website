"use client";
import dynamic from "next/dynamic";
const ContactUs = dynamic(() => import("../share/contact-us"), {
  ssr: false,
});
export default function ContactUsWrapper() {
  return (
    <>
      <ContactUs />
    </>
  );
}