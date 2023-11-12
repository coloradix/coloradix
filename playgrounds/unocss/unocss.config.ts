import { defineConfig } from "unocss";

import transformerDirectives from "@unocss/transformer-directives";

import coloradix, { gray, red, green, blue, rename } from "@coloradix/unocss";

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

export default defineConfig({
  theme: {
    colors: radix.colors,
  },
  preflights: [radix.preflight],
  transformers: [transformerDirectives()],
});
