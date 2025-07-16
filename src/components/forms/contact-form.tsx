"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "sonner";
import { FaWhatsapp } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import createContact from "@/actions/contact-action";
import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name should be min of 3 chars."),
  email: z.string().email("Invalid email address."),
  phone: z.string().regex(/^\+?\d{10}$/, "Enter a valid phone number"),
  query: z.string().min(10, "Query must be at least 10 characters"),
});

const ContactForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();

  const router = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams.toString());

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      query: "",
    },
  });

  //form submission
  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    setLoading(true);
    const data = {
      Name: values.name,
      Email: values.email,
      PhoneNumber: values.phone,
      Query: values.query,
    };

    console.log("form data in the object form is", data);

    try {
      const res = await createContact(values);
      if (res.success) {
        toast.success(res.success);
        params.delete("open");
        router.push(`${pathname}/?${params.toString()}`, { scroll: false });
        form.reset();
      }
      if (res.error) {
        toast.error(res.error);
      }
    } catch (err) {
      console.log("error is", err);
      toast.error("Error in submitting the form.");
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <div className="relative flex w-full flex-col items-center justify-between gap-[46px] overflow-x-hidden px-[23px] py-[47px] md:flex-row md:px-[40px] xl:py-[60px] xl:pl-[157px] xl:pr-[104px]">
        <div className="z-10 flex w-full flex-col items-start gap-[46px] md:w-[200px] xl:w-[246px]">
          <div className="relative inline-block">
            <h2 className="text-xl font-bold text-[#FEFEFE]">Contact Us</h2>
            <div className="absolute left-[73%] mt-1 h-[3px] w-[150px] -translate-x-1/2 bg-[#6C2D88]"></div>
          </div>
          <div className="flex flex-row items-start gap-[14px]">
            <div className="rounded-full border border-[rgba(255,255,255,0.15)] bg-[linear-gradient(90deg,_rgba(157,46,135,0.40)_0%,_rgba(84,41,153,0.40)_100%)] p-[11.62px] shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.25)] backdrop-blur-[7px]">
              <MdOutlineEmail className="text-[16.76px] text-white" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-[12px] font-medium text-[#9D46C3]">
                Email
              </div>
              <a
                href="mailto:info@avidion.ai"
                className="text-sm font-normal text-white"
              >
                info@avidion.ai
              </a>
            </div>
          </div>

          <div className="flex flex-row items-start gap-[14px]">
            <div className="rounded-full border border-[rgba(255,255,255,0.15)] bg-[linear-gradient(90deg,_rgba(157,46,135,0.40)_0%,_rgba(84,41,153,0.40)_100%)] p-[11.62px] shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.25)] backdrop-blur-[7px]">
              <FaWhatsapp className="text-[16.76px] text-white" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-[12px] font-medium text-[#9D46C3]">
                WhatsApp{" "}
              </div>
              <a
                href="tel:+919896584099"
                className="text-sm font-normal text-white"
              >
                +91 9896584099
              </a>
            </div>
          </div>

          <div className="flex flex-row items-start gap-[14px]">
            <div className="rounded-full border border-[rgba(255,255,255,0.15)] bg-[linear-gradient(90deg,_rgba(157,46,135,0.40)_0%,_rgba(84,41,153,0.40)_100%)] p-[11.62px] shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.25)] backdrop-blur-[7px]">
              <FiMapPin className="text-[16.76px] text-white" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-[12px] font-medium text-[#9D46C3]">
                Address
              </div>
              <a
                href="https://www.google.com/maps/dir/28.5631265,77.1160615/676,+Sector+42+Main+Rd,+Sector+42,+Gurugram,+Haryana+122011/@28.4631195,77.0192445,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x82ee875e4d6f150d:0xcb5e22ed11de5002!2m2!1d77.1016459!2d28.4631443?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
                className="text-sm font-normal text-white"
              >
                676, Sector-42, Gurugram, Haryana, India
              </a>
            </div>
          </div>
        </div>

        <div className="hidden flex-col items-center justify-center md:flex">
          <div className="h-[196px] w-px bg-[#5A555A]" />

          <div className="font-inter text-sm font-medium tracking-[0.5px] text-[#696969]">
            OR
          </div>

          <div className="h-[196px] w-px bg-[#5A555A]" />
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="z-10 flex w-full flex-col gap-[15px] rounded-[4px] border border-[rgba(255,255,255,0.15)] bg-[linear-gradient(90deg,_rgba(157,46,135,0.10)_0%,_rgba(84,41,153,0.10)_100%)] px-[27px] py-[34px] shadow-[inset_0_0_2px_0_rgba(255,255,255,0.25)] md:w-[55%] md:px-[30px] xl:px-[47px]"
          >
            <h2 className="text-center text-lg font-bold text-[#FEFEFE]">
              Get In Touch With Us
            </h2>

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-[#BFBFBF]">
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Full Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email Address"
                      {...field}
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Phone Number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="query"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Let us know your requirements or concerns"
                      {...field}
                      rows={4}
                      className="w-full resize-none rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <button
              type="submit"
              disabled={loading}
              className={`${loading ? "cursor-not-allowed opacity-50" : "opacity-100"} mt-2.5 rounded-[12px] border border-[#EB88D6] bg-[rgba(0,0,0,0.16)] p-1.5 backdrop-blur-[94.64px]`}
            >
              <div
                className={`${loading ? "bg-transparent" : "hover:bg-[linear-gradient(90deg_,rgba(201,104,182,0.40)_0%,_rgba(121,81,186,0.40)_100%)]"} rounded-[8px] border-white/15 bg-[linear-gradient(90deg,_rgba(157,46,135,0.4)_0%,_rgba(84,41,153,0.4)_100%)] px-[15px] py-1 font-inter text-sm text-white shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.25)] backdrop-blur-[7px] transition-all duration-700 ease-in-out`}
              >
                {loading ? "Submitting..." : "Submit"}
              </div>
            </button>
          </form>
        </Form>

        <div className="animation-delay-1 absolute left-[10%] top-[10%] z-0 size-[200px] animate-blob rounded-full bg-[#622A9A] opacity-[0.26] blur-2xl md:-bottom-1/4 md:blur-[65.43px] xl:size-[332px]"></div>
        <div className="animation-delay-2 absolute left-[4%] top-[20%] z-0 size-[280px] rotate-[3.425deg] animate-blob rounded-full bg-[#A5318A] opacity-[0.26] blur-3xl md:blur-[155.996px] xl:size-[482px]"></div>
      </div>
    </>
  );
};

export default ContactForm;
