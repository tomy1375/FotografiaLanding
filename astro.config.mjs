import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from "astro-icon";

export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  integrations: [
    tailwind(), // Integración de Tailwind v3
    icon({
      include: {
        lucide: [
          "search", 
          "menu", 
          "chevron-down", 
          "mail", 
          "phone", 
          "map-pin", 
          "instagram", 
          "facebook", 
          "image",
          "x"
        ]
      }
    })
  ]
});
