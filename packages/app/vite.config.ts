import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  plugins: [react()],
  server: {
    proxy: {
      "/graphql": {
        target: "http://localhost:4000",
        changeOrigin: true,
      },
    },
  },
});
