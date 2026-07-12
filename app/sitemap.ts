import type { MetadataRoute } from "next";
import { projects } from "@/lib/data";
import { site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap { return [{ url: site.url, lastModified: new Date(), priority: 1 }, ...projects.map(p => ({ url: `${site.url}/work/${p.slug}`, lastModified: new Date(), priority: .8 }))]; }
