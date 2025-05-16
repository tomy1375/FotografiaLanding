import { defineConfig } from 'astro/config';
import icon from "astro-icon";

export default defineConfig({
   devToolbar: {
    enabled: false, // Desactiva la toolbar correctamente
  },
  integrations: [
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
          "x" // Añadido el icono "x"
        ]
      }
    })
  ]
});