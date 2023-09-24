import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";
import solid from "vite-plugin-solid";

export default defineConfig({
  plugins: [UnoCSS(), solid()],
});
