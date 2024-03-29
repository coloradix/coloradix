import { resolve } from "path";

import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [dts()],
  build: {
    target: "esnext",
    lib: {
      entry: [resolve(__dirname, "src/index.ts")],
      fileName: "index",
      formats: ["cjs", "es"],
    },
    rollupOptions: {
      external: ["@radix-ui/colors"],
      output: {
        exports: "named",
      },
    },
  },
});
