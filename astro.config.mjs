import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://tonie.me/",
  integrations: [icon(), mdx(), sitemap()],
	redirects: {
		"/live": "https://twitch.tv/tonievictor",
	},
});
