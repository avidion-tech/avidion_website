"use client";
import { useEffect, useState } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function WhatsAppIcon() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  if (!show) return null;
  return (
    <>
      <FloatingWhatsApp
        notification
        notificationSound
        phoneNumber="9896584099"
        accountName="Enquiry"
        avatar="./avidion-logo.png"
        className="relative"
      />
    </>
  );
}
