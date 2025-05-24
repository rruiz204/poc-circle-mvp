import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: [
      { find: "@Layouts", replacement: "/src/Components/Layouts" },
      { find: "@Common", replacement: "/src/Components/Common" },

      { find: "@Services", replacement: "/src/Services" },
      { find: "@Helpers", replacement: "/src/Helpers" },
      { find: "@Stores", replacement: "/src/Stores" },
      { find: "@Routes", replacement: "/src/Routes" },
      { find: "@Models", replacement: "/src/Models" },
      
      { find: "@Modules", replacement: "/src/Modules" },
      { find: "@Assets", replacement: "/src/Assets" },
    ],
  },
})
