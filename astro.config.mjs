import { defineConfig } from 'astro/config';

import qwikdev from "@qwikdev/astro";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [qwikdev()]
});