# @coloradix/tailwindcss

simple radix colors plugin for tailwind

## Features

- Typescript first
- Custom selected color individually
- Light/Dark mode with data attribute `data-theme="{light|dark}"`
- Color alias with data attribute `data-theme-{alias}="{color}"`
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

import coloradix, { gray, green, violet } from "@coloradix/tailwindcss";

const radix = coloradix({
  gray,
  green,
  violet,
})
  .alias({
    neutral: "gray" /** fixed color */,
    primary: ["green", "violet"] /** dynamic color, first element of array used as main color */,
  })
  .overlay(true)
  .enable(true);

export default {
  content: [],
  theme: {
    colors: radix.colors,
    extend: {},
  },
  corePlugins: {
    preflight: false,
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

Expected output will be added to tailwind base layer

```css
:root,
[data-theme="light"] {
  --gray-1: 0 0% 99%;
  --gray-2: 0 0% 97.3%;
  --gray-3: 0 0% 95.1%;
  --gray-4: 0 0% 93%;
  --gray-5: 0 0% 90.9%;
  --gray-6: 0 0% 88.7%;
  --gray-7: 0 0% 85.8%;
  --gray-8: 0 0% 78%;
  --gray-9: 0 0% 56.1%;
  --gray-10: 0 0% 52.3%;
  --gray-11: 0 0% 43.5%;
  --gray-12: 0 0% 9%;
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
  --green-12: 155 40% 14%;
  --violet-1: 255 65% 99.4%;
  --violet-2: 252 100% 99%;
  --violet-3: 252 96.9% 97.4%;
  --violet-4: 252 91.5% 95.5%;
  --violet-5: 252 85.1% 93%;
  --violet-6: 252 77.8% 89.4%;
  --violet-7: 252 71% 83.7%;
  --violet-8: 252 68.6% 76.3%;
  --violet-9: 252 56% 57.5%;
  --violet-10: 251 48.1% 53.5%;
  --violet-11: 250 43% 48%;
  --violet-12: 254 60% 18.5%;
}

[data-theme="dark"] {
  --gray-1: 0 0% 8.5%;
  --gray-2: 0 0% 11%;
  --gray-3: 0 0% 13.6%;
  --gray-4: 0 0% 15.8%;
  --gray-5: 0 0% 17.9%;
  --gray-6: 0 0% 20.5%;
  --gray-7: 0 0% 24.3%;
  --gray-8: 0 0% 31.2%;
  --gray-9: 0 0% 43.9%;
  --gray-10: 0 0% 49.4%;
  --gray-11: 0 0% 62.8%;
  --gray-12: 0 0% 93%;
  --green-1: 146 30% 7.4%;
  --green-2: 155 44.2% 8.4%;
  --green-3: 155 46.7% 10.9%;
  --green-4: 154 48.4% 12.9%;
  --green-5: 154 49.7% 14.9%;
  --green-6: 154 50.9% 17.6%;
  --green-7: 153 51.8% 21.8%;
  --green-8: 151 51.7% 28.4%;
  --green-9: 151 55% 41.5%;
  --green-10: 151 49.3% 46.5%;
  --green-11: 151 50% 53.2%;
  --green-12: 137 72% 94%;
  --violet-1: 250 20% 10.2%;
  --violet-2: 255 30.3% 12.9%;
  --violet-3: 253 37% 18.4%;
  --violet-4: 252 40.1% 22.5%;
  --violet-5: 252 42.2% 26.2%;
  --violet-6: 251 44.3% 31.1%;
  --violet-7: 250 46.8% 38.9%;
  --violet-8: 250 51.8% 51.2%;
  --violet-9: 252 56% 57.5%;
  --violet-10: 251 63.2% 63.2%;
  --violet-11: 250 95% 76.8%;
  --violet-12: 252 87% 96.4%;
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
[data-theme-primary="green"] {
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

[data-theme-primary="violet"] {
  --primary-1: var(--violet-1);
  --primary-2: var(--violet-2);
  --primary-3: var(--violet-3);
  --primary-4: var(--violet-4);
  --primary-5: var(--violet-5);
  --primary-6: var(--violet-6);
  --primary-7: var(--violet-7);
  --primary-8: var(--violet-8);
  --primary-9: var(--violet-9);
  --primary-10: var(--violet-10);
  --primary-11: var(--violet-11);
  --primary-12: var(--violet-12);
}

:root {
  --black-1: hsla(0, 0%, 0%, 0.012);
  --black-2: hsla(0, 0%, 0%, 0.027);
  --black-3: hsla(0, 0%, 0%, 0.047);
  --black-4: hsla(0, 0%, 0%, 0.071);
  --black-5: hsla(0, 0%, 0%, 0.09);
  --black-6: hsla(0, 0%, 0%, 0.114);
  --black-7: hsla(0, 0%, 0%, 0.141);
  --black-8: hsla(0, 0%, 0%, 0.22);
  --black-9: hsla(0, 0%, 0%, 0.439);
  --black-10: hsla(0, 0%, 0%, 0.478);
  --black-11: hsla(0, 0%, 0%, 0.565);
  --black-12: hsla(0, 0%, 0%, 0.91);
  --white-1: hsla(0, 0%, 100%, 0);
  --white-2: hsla(0, 0%, 100%, 0.013);
  --white-3: hsla(0, 0%, 100%, 0.034);
  --white-4: hsla(0, 0%, 100%, 0.056);
  --white-5: hsla(0, 0%, 100%, 0.086);
  --white-6: hsla(0, 0%, 100%, 0.124);
  --white-7: hsla(0, 0%, 100%, 0.176);
  --white-8: hsla(0, 0%, 100%, 0.249);
  --white-9: hsla(0, 0%, 100%, 0.386);
  --white-10: hsla(0, 0%, 100%, 0.446);
  --white-11: hsla(0, 0%, 100%, 0.592);
  --white-12: hsla(0, 0%, 100%, 0.923);
}
```

## Authors

- [flamrdevs](https://github.com/flamrdevs)

## License

MIT
