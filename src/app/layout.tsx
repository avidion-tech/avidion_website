import Footer from "@/components/share/footer";
import Navbar from "@/components/share/navbar";
import { Toaster } from "@/components/ui/sonner";
import WhatsAppIcon from "@/components/whatsapp";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: {
    template:
      "%s | Avidion | Premium AI Software, Web & App Development Company",
    default: "Avidion | Premium AI Software, Web & App Development Company",
  },
  description:
    "Avidion is a cutting-edge software development company in India. We craft AI-powered websites, mobile apps, and custom CRM, ERP & SaaS solutions with 3D, animation, and cloud integration.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  keywords: [],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen bg-[#020103]">
          {/* useSearchParams needs to be wrapped in suspense boundary */}
          <Suspense>
            <Navbar />
            <div className="min-h-screen">
            {children}
            </div>
            <Toaster richColors position="top-center" />
            <WhatsAppIcon />
          </Suspense>
          <Footer />
        </main>
      </body>
    </html>
  );
}
