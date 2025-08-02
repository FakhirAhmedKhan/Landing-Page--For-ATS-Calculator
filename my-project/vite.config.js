// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/Landing-Page--For-ATS-Calculator/",
  plugins: [react(), tailwindcss()],
});
