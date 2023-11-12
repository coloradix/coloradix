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
export const tomato: ColorValue<"tomato"> = [tomatoLight, tomatoDark];
export const red: ColorValue<"red"> = [redLight, redDark];
export const ruby: ColorValue<"ruby"> = [rubyLight, rubyDark];
export const crimson: ColorValue<"crimson"> = [crimsonLight, crimsonDark];
export const pink: ColorValue<"pink"> = [pinkLight, pinkDark];
export const plum: ColorValue<"plum"> = [plumLight, plumDark];
export const purple: ColorValue<"purple"> = [purpleLight, purpleDark];
export const violet: ColorValue<"violet"> = [violetLight, violetDark];
export const iris: ColorValue<"iris"> = [irisLight, irisDark];
export const indigo: ColorValue<"indigo"> = [indigoLight, indigoDark];
export const blue: ColorValue<"blue"> = [blueLight, blueDark];
export const cyan: ColorValue<"cyan"> = [cyanLight, cyanDark];
export const teal: ColorValue<"teal"> = [tealLight, tealDark];
export const jade: ColorValue<"jade"> = [jadeLight, jadeDark];
export const green: ColorValue<"green"> = [greenLight, greenDark];
export const grass: ColorValue<"grass"> = [grassLight, grassDark];
export const orange: ColorValue<"orange"> = [orangeLight, orangeDark];
export const brown: ColorValue<"brown"> = [brownLight, brownDark];
// bright colors
export const sky: ColorValue<"sky"> = [skyLight, skyDark];
export const mint: ColorValue<"mint"> = [mintLight, mintDark];
export const lime: ColorValue<"lime"> = [limeLight, limeDark];
export const yellow: ColorValue<"yellow"> = [yellowLight, yellowDark];
export const amber: ColorValue<"amber"> = [amberLight, amberDark];
// grays
export const gray: ColorValue<"gray"> = [grayLight, grayDark];
export const mauve: ColorValue<"mauve"> = [mauveLight, mauveDark];
export const slate: ColorValue<"slate"> = [slateLight, slateDark];
export const sage: ColorValue<"sage"> = [sageLight, sageDark];
export const olive: ColorValue<"olive"> = [oliveLight, oliveDark];
export const sand: ColorValue<"sand"> = [sandLight, sandDark];
// metals
export const gold: ColorValue<"gold"> = [goldLight, goldDark];
export const bronze: ColorValue<"bronze"> = [bronzeLight, bronzeDark];

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
