<p>
  <h1 align="center">coloradix</h1>
</p>

<p align="center">
  <a title="license" href="https://github.com/coloradix/coloradix/blob/main/LICENSE">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://none.deno.dev/npm/l/@coloradix/tailwindcss?t=dark">
      <img alt="license" src="https://none.deno.dev/npm/l/@coloradix/tailwindcss?t=light" hspace="1">
    </picture>
  </a>
  <a title="version" href="https://www.npmjs.com/package/@coloradix/tailwindcss">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://none.deno.dev/npm/v/@coloradix/tailwindcss?t=dark">
      <img alt="version" src="https://none.deno.dev/npm/v/@coloradix/tailwindcss?t=light" hspace="1">
    </picture>
  </a>
</p>

# coloradix tailwindcss

simple radix colors plugin for tailwind

## Features

- Typescript first
- Custom selected color individually
- Light/Dark mode with data attribute `data-theme="{light|dark}"`
- Color alias with data attribute `data-alias-{name}="{color}"`
- Optional overlay colors (black and white)
- Support tailwind opacity modifier `bg-{alias}-{shade}/{opacity}`

## Installation

```bash
npm install @coloradix/tailwindcss @radix-ui/colors
# or
yarn add @coloradix/tailwindcss @radix-ui/colors
# or
pnpm add @coloradix/tailwindcss @radix-ui/colors
```

## Usage

Typescript Config (Typescript)

```tsx
import type { Config } from "tailwindcss";

import coloradix, { gray, red, green, blue } from "@coloradix/tailwindcss";

const radix = coloradix({
  gray,
  red,
  green,
  blue,
})
  .alias({
    neutral: "gray" /** fixed color */,
    primary: ["red", "green", "blue"] /** dynamic color, first element of array used as main color */,
  })
  .build();

export default {
  theme: {
    colors: radix.colors,
  },
  plugins: [radix.plugin],
} satisfies Config;
```

Alias will be used as tailwind colors

```html
<div class="bg-black text-white">
  <div class="bg-neutral-3 text-neutral-11">coloradix</div>
  <div class="bg-primary-3 text-primary-11">tailwindcss</div>
</div>
```

Expected output, will be added to tailwind base layer

```css
:root,
[data-theme="light"] {
  --gray-1: 0 0% 99%;
  --gray-2: 0 0% 97.5%;
  --gray-3: 0 0% 94.6%;
  --gray-4: 0 0% 92%;
  --gray-5: 0 0% 89.5%;
  --gray-6: 0 0% 86.8%;
  --gray-7: 0 0% 83%;
  --gray-8: 0 0% 73.2%;
  --gray-9: 0 0% 55.2%;
  --gray-10: 0 0% 50.3%;
  --gray-11: 0 0% 39.3%;
  --gray-12: 0 0% 12.5%;
  --red-1: 359 100% 99.4%;
  --red-2: 0 100% 98.4%;
  --red-3: 360 100% 96.8%;
  --red-4: 360 97.9% 94.8%;
  --red-5: 360 90.2% 91.9%;
  --red-6: 360 81.7% 87.8%;
  --red-7: 359 74.2% 81.7%;
  --red-8: 359 69.5% 74.3%;
  --red-9: 358 75% 59%;
  --red-10: 358 67.4% 54.6%;
  --red-11: 358 65% 47%;
  --red-12: 350 63% 24%;
  --green-1: 136 50% 98.9%;
  --green-2: 138 62.5% 96.9%;
  --green-3: 139 55.2% 94.5%;
  --green-4: 140 48.7% 91%;
  --green-5: 141 43.7% 86%;
  --green-6: 143 40.3% 79%;
  --green-7: 146 38.5% 69%;
  --green-8: 151 40.2% 54.1%;
  --green-9: 151 55% 41.5%;
  --green-10: 152 57.5% 37.6%;
  --green-11: 153 67% 28.5%;
  --green-12: 155 40% 16.5%;
  --blue-1: 206 100% 99.2%;
  --blue-2: 210 100% 98%;
  --blue-3: 209 100% 96.5%;
  --blue-4: 210 98.8% 94%;
  --blue-5: 209 95% 90.1%;
  --blue-6: 209 81.2% 84.5%;
  --blue-7: 208 77.5% 76.9%;
  --blue-8: 206 81.9% 65.3%;
  --blue-9: 206 100% 50%;
  --blue-10: 208 93.5% 47.4%;
  --blue-11: 211 90% 42%;
  --blue-12: 216 71% 23%;
}

[data-theme="dark"] {
  --gray-1: 0 0% 9.5%;
  --gray-2: 0 0% 10.5%;
  --gray-3: 0 0% 15.8%;
  --gray-4: 0 0% 18.9%;
  --gray-5: 0 0% 21.7%;
  --gray-6: 0 0% 24.7%;
  --gray-7: 0 0% 29.1%;
  --gray-8: 0 0% 37.5%;
  --gray-9: 0 0% 43%;
  --gray-10: 0 0% 50.7%;
  --gray-11: 0 0% 69.5%;
  --gray-12: 0 0% 93.5%;
  --red-1: 353 23% 9.8%;
  --red-2: 354 30.2% 12.4%;
  --red-3: 353 40.8% 16.4%;
  --red-4: 353 46.3% 19.2%;
  --red-5: 353 51.2% 22.1%;
  --red-6: 353 57.3% 26.2%;
  --red-7: 354 65.7% 33.2%;
  --red-8: 358 75% 47.1%;
  --red-9: 358 75% 59%;
  --red-10: 359 84.8% 67.6%;
  --red-11: 358 100% 76%;
  --red-12: 350 100% 91%;
  --green-1: 146 30% 7.4%;
  --green-2: 154 31.8% 8.6%;
  --green-3: 154 37.6% 11.5%;
  --green-4: 154 41% 13.6%;
  --green-5: 154 43.7% 15.7%;
  --green-6: 154 46.7% 18.7%;
  --green-7: 153 50.3% 24.4%;
  --green-8: 151 52.2% 36.1%;
  --green-9: 151 55% 41.5%;
  --green-10: 151 55.2% 46.7%;
  --green-11: 151 65% 54%;
  --green-12: 144 70% 82%;
  --blue-1: 212 35% 9.2%;
  --blue-2: 216 50% 11.8%;
  --blue-3: 214 57.6% 15.6%;
  --blue-4: 214 62.3% 18.4%;
  --blue-5: 213 66.6% 21.1%;
  --blue-6: 212 72.6% 25.2%;
  --blue-7: 211 81.3% 32.4%;
  --blue-8: 211 85.2% 47.8%;
  --blue-9: 206 100% 50%;
  --blue-10: 206 100% 61.8%;
  --blue-11: 205 100% 71%;
  --blue-12: 205 100% 88%;
}

:root {
  --neutral-1: var(--gray-1);
  --neutral-2: var(--gray-2);
  --neutral-3: var(--gray-3);
  --neutral-4: var(--gray-4);
  --neutral-5: var(--gray-5);
  --neutral-6: var(--gray-6);
  --neutral-7: var(--gray-7);
  --neutral-8: var(--gray-8);
  --neutral-9: var(--gray-9);
  --neutral-10: var(--gray-10);
  --neutral-11: var(--gray-11);
  --neutral-12: var(--gray-12);
}

:root,
[data-alias-primary="red"] {
  --primary-1: var(--red-1);
  --primary-2: var(--red-2);
  --primary-3: var(--red-3);
  --primary-4: var(--red-4);
  --primary-5: var(--red-5);
  --primary-6: var(--red-6);
  --primary-7: var(--red-7);
  --primary-8: var(--red-8);
  --primary-9: var(--red-9);
  --primary-10: var(--red-10);
  --primary-11: var(--red-11);
  --primary-12: var(--red-12);
}

[data-alias-primary="green"] {
  --primary-1: var(--green-1);
  --primary-2: var(--green-2);
  --primary-3: var(--green-3);
  --primary-4: var(--green-4);
  --primary-5: var(--green-5);
  --primary-6: var(--green-6);
  --primary-7: var(--green-7);
  --primary-8: var(--green-8);
  --primary-9: var(--green-9);
  --primary-10: var(--green-10);
  --primary-11: var(--green-11);
  --primary-12: var(--green-12);
}

[data-alias-primary="blue"] {
  --primary-1: var(--blue-1);
  --primary-2: var(--blue-2);
  --primary-3: var(--blue-3);
  --primary-4: var(--blue-4);
  --primary-5: var(--blue-5);
  --primary-6: var(--blue-6);
  --primary-7: var(--blue-7);
  --primary-8: var(--blue-8);
  --primary-9: var(--blue-9);
  --primary-10: var(--blue-10);
  --primary-11: var(--blue-11);
  --primary-12: var(--blue-12);
}

:root {
  --black-1: hsla(0, 0%, 0%, 0.012);
  --black-2: hsla(0, 0%, 0%, 0.024);
  --black-3: hsla(0, 0%, 0%, 0.055);
  --black-4: hsla(0, 0%, 0%, 0.078);
  --black-5: hsla(0, 0%, 0%, 0.106);
  --black-6: hsla(0, 0%, 0%, 0.133);
  --black-7: hsla(0, 0%, 0%, 0.169);
  --black-8: hsla(0, 0%, 0%, 0.267);
  --black-9: hsla(0, 0%, 0%, 0.447);
  --black-10: hsla(0, 0%, 0%, 0.498);
  --black-11: hsla(0, 0%, 0%, 0.608);
  --black-12: hsla(0, 0%, 0%, 0.875);
  --white-1: hsla(0, 0%, 0%, 0);
  --white-2: hsla(0, 0%, 100%, 0.013);
  --white-3: hsla(0, 0%, 100%, 0.069);
  --white-4: hsla(0, 0%, 100%, 0.104);
  --white-5: hsla(0, 0%, 100%, 0.134);
  --white-6: hsla(0, 0%, 100%, 0.169);
  --white-7: hsla(0, 0%, 100%, 0.216);
  --white-8: hsla(0, 0%, 100%, 0.312);
  --white-9: hsla(0, 0%, 100%, 0.372);
  --white-10: hsla(0, 0%, 100%, 0.455);
  --white-11: hsla(0, 0%, 100%, 0.662);
  --white-12: hsla(0, 0%, 100%, 0.926);
}
```

## Authors

<p>
  <a title="github" href="https://github.com/flamrdevs">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://flamrdevs.pages.dev/badge/dark.svg">
      <img alt="github" src="https://flamrdevs.pages.dev/badge/light.svg" hspace="1">
    </picture>
  </a>
</p>

## License

[MIT License](https://github.com/coloradix/coloradix/blob/main/LICENSE)
