import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about-us`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/careers`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/portfolio`,
    },
  ];
}
