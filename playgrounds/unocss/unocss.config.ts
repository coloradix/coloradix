import { defineConfig } from "unocss";

import transformerDirectives from "@unocss/transformer-directives";

import coloradix, { gray, red, green, blue } from "@coloradix/unocss";

const radix = coloradix({
  gray,
  red,
  green,
  blue,
})
  .alias({
    neutral: "gray",
    primary: ["red", "green", "blue"],
  })
  .build({
    selector: "attribute",
  });

export default defineConfig({
  theme: {
    colors: radix.colors,
  },
  preflights: [radix.preflight],
  transformers: [transformerDirectives()],
});
