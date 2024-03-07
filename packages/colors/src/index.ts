import {
  // colors
  tomato as tomatoLight,
  tomatoDark,
  red as redLight,
  redDark,
  ruby as rubyLight,
  rubyDark,
  crimson as crimsonLight,
  crimsonDark,
  pink as pinkLight,
  pinkDark,
  plum as plumLight,
  plumDark,
  purple as purpleLight,
  purpleDark,
  violet as violetLight,
  violetDark,
  iris as irisLight,
  irisDark,
  indigo as indigoLight,
  indigoDark,
  blue as blueLight,
  blueDark,
  cyan as cyanLight,
  cyanDark,
  teal as tealLight,
  tealDark,
  jade as jadeLight,
  jadeDark,
  green as greenLight,
  greenDark,
  grass as grassLight,
  grassDark,
  orange as orangeLight,
  orangeDark,
  brown as brownLight,
  brownDark,
  // bright colors
  sky as skyLight,
  skyDark,
  mint as mintLight,
  mintDark,
  lime as limeLight,
  limeDark,
  yellow as yellowLight,
  yellowDark,
  amber as amberLight,
  amberDark,
  // grays
  gray as grayLight,
  grayDark,
  mauve as mauveLight,
  mauveDark,
  slate as slateLight,
  slateDark,
  sage as sageLight,
  sageDark,
  olive as oliveLight,
  oliveDark,
  sand as sandLight,
  sandDark,
  // metals
  gold as goldLight,
  goldDark,
  bronze as bronzeLight,
  bronzeDark,
} from "@radix-ui/colors";

import type { Color, ColorValue } from "./types";

export type { Alias, Color, ColorValue, ColorsOverlayResult, ColorsResult, CustomColorObject, RadixColorObject, Shade } from "./types";

// colors

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#tomato
 */
export const tomato: ColorValue<"tomato"> = [tomatoLight, tomatoDark];

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#red
 */
export const red: ColorValue<"red"> = [redLight, redDark];

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#ruby
 */
export const ruby: ColorValue<"ruby"> = [rubyLight, rubyDark];

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#crimson
 */
export const crimson: ColorValue<"crimson"> = [crimsonLight, crimsonDark];

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#pink
 */
export const pink: ColorValue<"pink"> = [pinkLight, pinkDark];

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#plum
 */
export const plum: ColorValue<"plum"> = [plumLight, plumDark];

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#purple
 */
export const purple: ColorValue<"purple"> = [purpleLight, purpleDark];

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#violet
 */
export const violet: ColorValue<"violet"> = [violetLight, violetDark];

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#iris
 */
export const iris: ColorValue<"iris"> = [irisLight, irisDark];

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#indigo
 */
export const indigo: ColorValue<"indigo"> = [indigoLight, indigoDark];

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#blue
 */
export const blue: ColorValue<"blue"> = [blueLight, blueDark];

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#cyan
 */
export const cyan: ColorValue<"cyan"> = [cyanLight, cyanDark];

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#teal
 */
export const teal: ColorValue<"teal"> = [tealLight, tealDark];

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#jade
 */
export const jade: ColorValue<"jade"> = [jadeLight, jadeDark];

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#green
 */
export const green: ColorValue<"green"> = [greenLight, greenDark];

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#grass
 */
export const grass: ColorValue<"grass"> = [grassLight, grassDark];

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#orange
 */
export const orange: ColorValue<"orange"> = [orangeLight, orangeDark];

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#brown
 */
export const brown: ColorValue<"brown"> = [brownLight, brownDark];

// bright colors

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#sky
 */
export const sky: ColorValue<"sky"> = [skyLight, skyDark];

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#mint
 */
export const mint: ColorValue<"mint"> = [mintLight, mintDark];

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#lime
 */
export const lime: ColorValue<"lime"> = [limeLight, limeDark];

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#yellow
 */
export const yellow: ColorValue<"yellow"> = [yellowLight, yellowDark];

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#amber
 */
export const amber: ColorValue<"amber"> = [amberLight, amberDark];

// grays

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#gray
 */
export const gray: ColorValue<"gray"> = [grayLight, grayDark];

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#mauve
 */
export const mauve: ColorValue<"mauve"> = [mauveLight, mauveDark];

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#slate
 */
export const slate: ColorValue<"slate"> = [slateLight, slateDark];

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#sage
 */
export const sage: ColorValue<"sage"> = [sageLight, sageDark];

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#olive
 */
export const olive: ColorValue<"olive"> = [oliveLight, oliveDark];

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#sand
 */
export const sand: ColorValue<"sand"> = [sandLight, sandDark];

// metals

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#gold
 */
export const gold: ColorValue<"gold"> = [goldLight, goldDark];

/**
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales#bronze
 */
export const bronze: ColorValue<"bronze"> = [bronzeLight, bronzeDark];

/**
 *
 * rename color variable
 *
 * ```css
 * :root {
 *    --gray-1: 252 252 252;
 *    --gray-2: 249 249 249;
 *    --gray-3: 240 240 240;
 *    --etc: etc;
 * }
 *
 * :root {
 *    --custom-gray-1: 252 252 252;
 *    --custom-gray-2: 249 249 249;
 *    --custom-gray-3: 240 240 240;
 *    --etc: etc;
 * }
 * ```
 *
 */
export const rename = <K extends string>(color: Color<K>) => {
  return {
    to: <V extends string>(next: Readonly<{ [key in K]: V }>) => {
      return Object.entries(color).reduce((obj, [key, value]) => {
        obj[next[key as K]] = (value as ColorValue<string>).map((mode) => {
          return Object.entries(mode).reduce((_mode, [, value], index) => {
            _mode[`${next[key as K]}${index + 1}`] = value;
            return _mode;
          }, {} as Record<string, string>);
        }) as any;
        return obj;
      }, {} as Color<V>);
    },
  };
};
