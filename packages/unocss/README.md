<p>
  <h1 align="center">coloradix</h1>
</p>

<p align="center">
  <a title="license" href="https://github.com/coloradix/coloradix/blob/main/LICENSE">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://none.deno.dev/npm/l/@coloradix/unocss?t=dark">
      <img alt="license" src="https://none.deno.dev/npm/l/@coloradix/unocss?t=light" hspace="1">
    </picture>
  </a>
  <a title="version" href="https://www.npmjs.com/package/@coloradix/unocss">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://none.deno.dev/npm/v/@coloradix/unocss?t=dark">
      <img alt="version" src="https://none.deno.dev/npm/v/@coloradix/unocss?t=light" hspace="1">
    </picture>
  </a>
</p>

# coloradix unocss

simple radix colors for unocss

## Features

- Typescript first
- Custom selected color individually
- Light/Dark mode with data attribute `data-theme="{light|dark}"`
- Color alias with data attribute `data-alias-{name}="{color}"`
- Optional overlay colors (black and white)
- Support unocss opacity modifier `bg-{alias}-{shade}/{opacity}`

## Installation

```bash
npm install @coloradix/unocss @radix-ui/colors
# or
yarn add @coloradix/unocss @radix-ui/colors
# or
pnpm add @coloradix/unocss @radix-ui/colors
```

## Usage

Typescript Config (Typescript)

```tsx
import { defineConfig } from "unocss";

import coloradix, { gray, red, green, blue } from "@coloradix/unocss";

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

export default defineConfig({
  theme: {
    colors: radix.colors,
  },
  preflights: [radix.preflight],
});
```

Alias will be used as unocss colors

```html
<div class="bg-black text-white">
  <div class="bg-neutral-3 text-neutral-11">coloradix</div>
  <div class="bg-primary-3 text-primary-11">unocss</div>
</div>
```

Expected output, will be added to unocss preflight

```css
:root,
[data-theme="light"] {
  --gray-1: 252, 252, 252;
  --gray-2: 249, 249, 249;
  --gray-3: 240, 240, 240;
  --gray-4: 232, 232, 232;
  --gray-5: 224, 224, 224;
  --gray-6: 217, 217, 217;
  --gray-7: 206, 206, 206;
  --gray-8: 187, 187, 187;
  --gray-9: 141, 141, 141;
  --gray-10: 131, 131, 131;
  --gray-11: 100, 100, 100;
  --gray-12: 32, 32, 32;
  --red-1: 255, 252, 252;
  --red-2: 255, 247, 247;
  --red-3: 254, 235, 236;
  --red-4: 255, 219, 220;
  --red-5: 255, 205, 206;
  --red-6: 253, 189, 190;
  --red-7: 244, 169, 170;
  --red-8: 235, 142, 144;
  --red-9: 229, 72, 77;
  --red-10: 220, 62, 66;
  --red-11: 206, 44, 49;
  --red-12: 100, 23, 35;
  --green-1: 251, 254, 252;
  --green-2: 244, 251, 246;
  --green-3: 230, 246, 235;
  --green-4: 214, 241, 223;
  --green-5: 196, 232, 209;
  --green-6: 173, 221, 192;
  --green-7: 142, 206, 170;
  --green-8: 91, 185, 139;
  --green-9: 48, 164, 108;
  --green-10: 43, 154, 102;
  --green-11: 33, 131, 88;
  --green-12: 25, 59, 45;
  --blue-1: 251, 253, 255;
  --blue-2: 244, 250, 255;
  --blue-3: 230, 244, 254;
  --blue-4: 213, 239, 255;
  --blue-5: 194, 229, 255;
  --blue-6: 172, 216, 252;
  --blue-7: 142, 200, 246;
  --blue-8: 94, 177, 239;
  --blue-9: 0, 144, 255;
  --blue-10: 5, 136, 240;
  --blue-11: 13, 116, 206;
  --blue-12: 17, 50, 100;
}
[data-theme="dark"] {
  --gray-1: 17, 17, 17;
  --gray-2: 25, 25, 25;
  --gray-3: 34, 34, 34;
  --gray-4: 42, 42, 42;
  --gray-5: 49, 49, 49;
  --gray-6: 58, 58, 58;
  --gray-7: 72, 72, 72;
  --gray-8: 96, 96, 96;
  --gray-9: 110, 110, 110;
  --gray-10: 123, 123, 123;
  --gray-11: 180, 180, 180;
  --gray-12: 238, 238, 238;
  --red-1: 25, 17, 17;
  --red-2: 32, 19, 20;
  --red-3: 59, 18, 25;
  --red-4: 80, 15, 28;
  --red-5: 97, 22, 35;
  --red-6: 114, 35, 45;
  --red-7: 140, 51, 58;
  --red-8: 181, 69, 72;
  --red-9: 229, 72, 77;
  --red-10: 236, 93, 94;
  --red-11: 255, 149, 146;
  --red-12: 255, 209, 217;
  --green-1: 14, 21, 18;
  --green-2: 18, 27, 23;
  --green-3: 19, 45, 33;
  --green-4: 17, 59, 41;
  --green-5: 23, 73, 51;
  --green-6: 32, 87, 62;
  --green-7: 40, 104, 74;
  --green-8: 47, 124, 87;
  --green-9: 48, 164, 108;
  --green-10: 51, 176, 116;
  --green-11: 61, 214, 140;
  --green-12: 177, 241, 203;
  --blue-1: 13, 21, 32;
  --blue-2: 17, 25, 39;
  --blue-3: 13, 40, 71;
  --blue-4: 0, 51, 98;
  --blue-5: 0, 64, 116;
  --blue-6: 16, 77, 135;
  --blue-7: 32, 93, 158;
  --blue-8: 40, 112, 189;
  --blue-9: 0, 144, 255;
  --blue-10: 59, 158, 255;
  --blue-11: 112, 184, 255;
  --blue-12: 194, 230, 255;
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
  --black-1: rgba(0, 0, 0, 0.05);
  --black-2: rgba(0, 0, 0, 0.1);
  --black-3: rgba(0, 0, 0, 0.15);
  --black-4: rgba(0, 0, 0, 0.2);
  --black-5: rgba(0, 0, 0, 0.3);
  --black-6: rgba(0, 0, 0, 0.4);
  --black-7: rgba(0, 0, 0, 0.5);
  --black-8: rgba(0, 0, 0, 0.6);
  --black-9: rgba(0, 0, 0, 0.7);
  --black-10: rgba(0, 0, 0, 0.8);
  --black-11: rgba(0, 0, 0, 0.9);
  --black-12: rgba(0, 0, 0, 0.95);
  --white-1: rgba(255, 255, 255, 0.05);
  --white-2: rgba(255, 255, 255, 0.1);
  --white-3: rgba(255, 255, 255, 0.15);
  --white-4: rgba(255, 255, 255, 0.2);
  --white-5: rgba(255, 255, 255, 0.3);
  --white-6: rgba(255, 255, 255, 0.4);
  --white-7: rgba(255, 255, 255, 0.5);
  --white-8: rgba(255, 255, 255, 0.6);
  --white-9: rgba(255, 255, 255, 0.7);
  --white-10: rgba(255, 255, 255, 0.8);
  --white-11: rgba(255, 255, 255, 0.9);
  --white-12: rgba(255, 255, 255, 0.95);
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
