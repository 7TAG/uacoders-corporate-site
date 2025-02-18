import type { Testimonial } from "@/components/Testimonial.astro";
import type { Section } from "@/components/core/Section.astro";
import type { LinkButton, PageType } from "@/content/page.types";
import { defineCollection, z } from "astro:content";

const zodPageConfig = z.custom<PageType>();

// Pages collection schema
const pagesCollection = defineCollection({
  type: "content",
  schema: zodPageConfig,
});

const indexSchema = z.intersection(
  z.object({
    banner: z.custom<Section>(),
    featuresx: z.object({
      title: z.string(),
      description: z.string(),
      featurex_list: z.array(
        z.object({
          title: z.string(),
          content: z.string(),
          icon: z.string(),
        }),
      ),
    }),
    featuresy: z.object({
      title: z.string(),
      description: z.string(),
      featurey_list: z.array(
        z.object({
          title: z.string(),
          content: z.string(),
          icon: z.string(),
        }),
      ),
    }),
    features: z.object({
      title: z.string(),
      description: z.string(),
      feature_list: z.array(
        z.object({
          title: z.string(),
          content: z.string(),
          icon: z.string(),
        }),
      ),
    }),
    testimonial: z.custom<Testimonial>(),
  }),
  zodPageConfig,
);

const indexPage = defineCollection({
  type: "content",
  schema: indexSchema,
});

// Export collections
export const collections = {
  //about: aboutCollection,
  //contact: contactCollection,
  //FAQ: faqCollection,
  homepage: indexPage,
  //services: servicesCollection,
};
