type Shade = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";

type CustomShadeCSSVaraible<T extends string> = `--${T}-${Shade}`;
type CustomColorObject<T extends string> = {
  [key in CustomShadeCSSVaraible<T>]: string;
};

type RadixShadeVariable<T extends string> = `${T}${Shade}`;
type RadixColorObject<T extends string> = {
  [key in RadixShadeVariable<T>]: string;
};

type ColorValue<T extends string> = [
  {
    [key in RadixShadeVariable<T>]: string;
  },
  {
    [key in RadixShadeVariable<T>]: string;
  }
];

type Color<K extends string> = {
  [key in K]: ColorValue<key>;
};

type Alias<K extends string, T extends string> = {
  [key in K]?: T | T[];
};

type ColorsResult<N extends string> = Record<N, Record<Shade, string>>;
type ColorsOverlayResult = Record<"black" | "white", Record<"DEFAULT" | Shade, string>>;

export type { Shade };
export type { CustomColorObject, RadixColorObject };
export type { ColorValue };
export type { Color, Alias };
export type { ColorsResult, ColorsOverlayResult };
