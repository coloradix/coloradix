import type { Config } from "tailwindcss";

import coloradix, { gray, red, green, blue } from "@coloradix/tailwindcss";

const radix = coloradix({ gray, red, green, blue })
  .alias({ neutral: "gray", primary: ["red", "green", "blue"] })
  .overlay(true)
  .enable(true);

export default {
  content: ["src/**/*.{ts,tsx}"],
  theme: {
    colors: radix.colors,
  },
  plugins: [radix.plugin],
} satisfies Config;
