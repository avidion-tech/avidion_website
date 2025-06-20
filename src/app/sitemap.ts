import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about-us`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services`,
    },
    // sub-services pages
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/3d-websites`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/ai-automation`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/ai-integration`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/crm`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/custom-software-development`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/erp`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/mobile-app-development`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/website-development`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/wms`,
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
