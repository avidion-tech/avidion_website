"use server";
import { db } from "../server/db";
import { revalidatePath } from "next/cache";
import type { z } from "zod";
import type { careerFormSchema } from "@/components/forms/career-form";
const googleScriptUrl =
  "https://script.google.com/macros/s/AKfycbxItb38kRZsAIMg3U9LSTK7CbubjEcnoaWzHui1WA-lMKprPqktS-awe9j499DzNjf7/exec";
export default async function createCareer(
  data: z.infer<typeof careerFormSchema>,
) {
  const {
    name,
    email,
    phone,
    address,
    position,
    resumeLink,
    currentSalary,
    expectedSalary,
    experience,
    months,
    year,
    comments,
  } = data;
  try {
    const res = await fetch(googleScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event: "Career Form Submission",
        name,
        email,
        phone,
        address,
        experience,
        year,
        months,
        position,
        currentSalary,
        expectedSalary,
        resumeLink,
        comments,
      }),
    });

    if (!res.ok) {
      throw new Error("Failed to submit career form");
    }

    await db.careers.create({
      data: {
        name: data.name,
        email: data.email,
        phoneNumber: data.phone,
        address: data.address,
        position: data.position,
        resumeLink: data.resumeLink,
        currentSalary: data.currentSalary,
        expectedSalary: data.expectedSalary,
        experience: data.experience,
        months: data.months,
        year: data.year,
        comments: data.comments,
        createdAt: new Date(),
      },
    });

    return {
      success:
        "Application submitted successfully. We’ll review your profile and contact you if there’s a good fit.",
    };
  } catch (err) {
    return {
      error:
        "Sorry, we couldn't submit your application. Please try again shortly.",
    };
  }
}
