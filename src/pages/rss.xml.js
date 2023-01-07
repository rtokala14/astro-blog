import rss from "@astrojs/rss";

export const get = () =>
  rss({
    title: "Rohit Reddy Tokala | Blog",
    description: "My journey learning Astro",
    site: "https://astro-blog-neon.vercel.app/",
    items: import.meta.glob("./**/*.md"),
    customData: `<language>en-us</language>`,
  });
