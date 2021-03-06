import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";
import generateSitemap from "vite-plugin-pages-sitemap";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages({
      onRoutesGenerated: (routes) =>
        generateSitemap({
          hostname: "https://www.suunow-ua.com/",
          routes: routes,
          readable: true,
        }),
    }),
    ,
    Layouts(),
  ],
});
