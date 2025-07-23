import BackButton from "@/components/share/back-button";
import ContactButton from "@/components/share/contact-button";
import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa6";

export default function FormAutomation() {
  return (
    <div className="container flex w-full flex-col items-start gap-[40px] pb-[60px] pt-[142px] font-inter text-[#B3B2B3] md:gap-[50px] xl:gap-[60px] xl:pb-[100px]">
      <BackButton label="Case Studies" />
      <div className="flex flex-col gap-[21px] md:gap-[34px]">
        <div className="text-xl font-medium text-white md:text-[28px] md:leading-[46px]">
          <span className="font-bold">AI Workflow Automation </span>- AI-Powered
          Form Automation Using n8n.
        </div>

        <div className="text-sm font-normal md:text-base">
          Avidion Softwares was approached by a client who needed to streamline
          the way their website handles inquiries. The goal was to automate
          their contact form so that whenever a user submitted their name,
          email, phone number, and query, the data would be captured in a
          central system (Google Sheet) and instantly shared via email to both
          the internal team and the user.
        </div>
      </div>

      <div className="relative mx-auto h-[78px] w-[297px] sm:h-[101px] sm:w-[384px] md:h-[160px] md:w-[595px] xl:h-[277px] xl:w-[1049px]">
        <Image
          src={"/portfolio/form-automation-case-study.svg"}
          alt="form-automation-case-study"
          fill
          className="object-cover"
          loading="eager"
          priority
        />
      </div>

      {/* challenge */}
      <div className="flex flex-col gap-[26px]">
        <div className="text-base font-bold text-white md:text-lg xl:text-xl">
          Challenge
        </div>
        <div className="text-sm font-normal md:text-base">
          As our website traffic and inquiries increased, the previous workflow
          began to show its limitations. Managing each form submission manually
          became a drain on our team’s productivity and introduced delays in
          responding to potential clients.
          <br />
          <br />
          <ul className="list-disc pl-5">
            <li>
              Manual Data Logging: Form submissions were recorded manually into
              spreadsheets, which led to inconsistent formatting and missing
              entries.
            </li>
            <li>
              Slow Response Time: It could take hours before a team member
              replied to a user inquiry, reducing engagement and
              professionalism.
            </li>
            <li>
              No Data Routing: All messages landed in a single inbox, without
              differentiation by topic or urgency.
            </li>
            <li>
              Lack of Scalability: The system couldn’t keep up with growing
              inbound traffic without expanding the team or tools.
            </li>
          </ul>
        </div>
      </div>

      {/* solution */}
      <div className="flex flex-col gap-[26px]">
        <div className="md:text-md text-base font-bold text-white xl:text-xl">
          Solution
        </div>
        <div className="text-sm font-normal md:text-base">
          To eliminate bottlenecks and streamline our lead management, we
          engineered a no-code automation pipeline using n8n. This solution
          allowed us to dynamically route, record, and respond to inquiries
          based on form data — all in real time.
          <br />
          <br />
          <ul className="list-disc pl-5">
            <li>
              <span className="font-bold">Google Sheet Automation:</span> The
              form data (Name, Email, Phone, Message, Timestamp) is
              auto-appended to a structured Google Sheet
            </li>
            <li>
              <span className="font-bold">Conditional Logic:</span> A switch
              node in the workflow identifies the type of inquiry and routes it
              accordingly (service, support, general).
            </li>
            <li>
              <span className="font-bold">Smart Email Responses:</span>{" "}
              Automated and personalized email responses are sent to users based
              on their message category.
            </li>
            <li>
              <span className="font-bold">Internal Notifications:</span> The
              sales or support team receives a detailed email for each inquiry,
              enabling faster follow-up.
            </li>
            <li>
              <span className="font-bold">Reliability & Uptime:</span> The flow
              includes error-handling and fallback alerts to ensure zero missed
              leads.
            </li>
          </ul>
        </div>
      </div>

      {/* impact */}
      <div className="flex flex-col gap-[26px]">
        <div className="text-base font-bold text-white md:text-lg xl:text-xl">
          Impact
        </div>
        <div className="text-sm font-normal md:text-base">
          The transformation was immediate and measurable. By automating the
          entire process, we removed human error and created a responsive lead
          funnel that scales as our website grows.
          <br />
          <br />
          <ul className="list-disc pl-5">
            <li>
              95% Reduction in Manual Workload: Our team no longer needs to
              monitor the inbox constantly or copy data into spreadsheets.
            </li>
            <li>
              Every form entry is recorded and structured in real time,
              improving reporting and analytics.
            </li>
            <li>
              {" "}
              Team members saved 5–7 hours per week previously spent on manual
              triaging.
            </li>
            <li>
              The system handles 100+ submissions/month without any additional
              overhead or resource allocation.
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto flex flex-col items-center gap-[20px] rounded-[14px] bg-[linear-gradient(90deg,_rgba(161,120,189,0.20)_0%,_rgba(255,250,250,0.00)_43.86%,_rgba(211,153,197,0.20)_100%)] px-[56px] py-10 md:gap-[33px] lg:px-[266px] xl:gap-[40px]">
        <div className="flex flex-col items-center gap-2">
          <div className="text-base font-medium text-white md:text-xl xl:text-2xl">
            {" "}
            Need Something Similar?
          </div>
          <div className="text-center text-sm font-normal text-white/70 md:text-xl">
            Build a Smarter Workflow with AI Automation.
          </div>
        </div>
        <ContactButton buttonClassName="px-[25px]" />
      </div>
    </div>
  );
}
