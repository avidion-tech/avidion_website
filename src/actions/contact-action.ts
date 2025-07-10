"use server";
import type { contactFormSchema } from "@/components/forms/contact-form";
import { db } from "@/server/db";
import type { z } from "zod";

const googleScriptUrl =
  "https://script.google.com/macros/s/AKfycbw4PJ7RuCkOQa3mB3oZRbbg-JkziYyVrBlZxnfPxzxMAVgSq1MfgLavhvGycx2hlR-B/exec";

export default async function createContact(
  data: z.infer<typeof contactFormSchema>,
) {
  const { name, email, phone, query } = data;
  try {
    const res = await fetch(googleScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event: "Contact Form Submission",
        name,
        email,
        phone,
        query,
      }),
    });

    if (!res.ok) {
      throw new Error("Failed to submit contact form");
    }

    await db.contactUs.create({
      data: {
        name: data.name,
        email: data.email,
        phoneNumber: data.phone,
        query: data.query,
        createdAt: new Date(),
      },
    });
    return {
      success: "Contact us form submitted successfully.",
    };
  } catch (err) {
    return {
      error: "There was an error in submitting the contact us form.",
    };
  }
}
