import type { Config } from "tailwindcss";

import coloradix, { gray, red, green, blue, rename } from "@coloradix/tailwindcss";

const radix = coloradix(
  rename({
    gray,
    red,
    green,
    blue,
  }).to({
    gray: "ng",
    red: "pr",
    green: "pg",
    blue: "pb",
  })
)
  .alias({
    neutral: "ng",
    primary: ["pr", "pg", "pb"],
  })
  .build({
    selector: "class",
  });

export default {
  content: ["src/**/*.{ts,tsx}"],
  theme: {
    colors: radix.colors,
  },
  plugins: [radix.plugin],
} satisfies Config;
