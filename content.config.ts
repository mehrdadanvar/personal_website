import { defineCollection, defineContentConfig } from "@nuxt/content";
export default defineContentConfig({
  collections: {
    ideas: defineCollection({
      // Load every file inside the `content` directory
      source: "ideas/*.md",
      // Specify the type of content in this collection
      type: "page",
    }),
  },
});
