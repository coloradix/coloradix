import type { Preflight } from "unocss";

import { blackA, whiteA } from "@radix-ui/colors";

import type {
  Shade,
  CustomColorObject,
  RadixColorObject,
  ColorValue,
  Color,
  Alias,
  ColorsOverlayResult,
  ColorsResult,
} from "@coloradix/colors";

/**
 *
 * @param color colors
 * @returns alias function
 */
const coloradix = <N extends string>(color: Color<N>) => {
  return {
    /**
     *
     * @param alias aliases
     * @returns build function
     */
    alias: <A extends string>(alias: Alias<A, N>) => {
      return {
        /**
         *
         * @param options build options
         * @returns colors and plugin
         */
        build: <O extends boolean = true>(
          options: { overlay?: O } = {}
        ): { colors: ColorsResult<A> & (O extends true | undefined ? ColorsOverlayResult : {}); preflight: Preflight } => {
          const { overlay = true } = options;

          const aliasentries = Object.entries(alias) as [string, string | string[]][];

          const colorobject = (callback: { key: (i: number) => string; value: (i: number) => string }) => {
            let value: Record<string, string> = {};
            for (let i = 1; i <= 12; i++) value[callback.key(i)] = callback.value(i);
            return value;
          };

          return {
            colors: {
              ...aliasentries.reduce((object, [name]) => {
                object[name as A] = colorobject({
                  key: (i) => `${i}`,
                  value: (i) => `hsl(var(--${name}-${i}))`,
                });
                return object;
              }, {} as ColorsResult<A>),
              ...((overlay
                ? ({
                    black: {
                      DEFAULT: "#000000",
                      1: "var(--black-1)",
                      2: "var(--black-2)",
                      3: "var(--black-3)",
                      4: "var(--black-4)",
                      5: "var(--black-5)",
                      6: "var(--black-6)",
                      7: "var(--black-7)",
                      8: "var(--black-8)",
                      9: "var(--black-9)",
                      10: "var(--black-10)",
                      11: "var(--black-11)",
                      12: "var(--black-12)",
                    },
                    white: {
                      DEFAULT: "#ffffff",
                      1: "var(--white-1)",
                      2: "var(--white-2)",
                      3: "var(--white-3)",
                      4: "var(--white-4)",
                      5: "var(--white-5)",
                      6: "var(--white-6)",
                      7: "var(--white-7)",
                      8: "var(--white-8)",
                      9: "var(--white-9)",
                      10: "var(--white-10)",
                      11: "var(--white-11)",
                      12: "var(--white-12)",
                    },
                  } satisfies ColorsOverlayResult)
                : {}) as any),
            } as any,
            preflight: (() => {
              let css = "";

              const addBase = (record: Record<string, Record<string, string>>) => {
                let _css = "";
                for (const key in record) {
                  const value = record[key];
                  _css += `${key} {`;
                  for (const _key in value) _css += ` ${_key}: ${value[_key]};`;
                  _css += `}`;
                }
                css += `${_css}`;
              };

              const hsl = (value: string) => value.replace(/hsl\(|\)|\,/g, "").replace(/ /g, ", ");
              const convert = <T extends string>(name: T, radix: RadixColorObject<T>): CustomColorObject<T> => {
                return (Object.entries(radix) as [string, string][]).reduce((object, [key, value]) => {
                  object[`--${name}-${key.replace(/\D/g, "") as Shade}`] = hsl(value);
                  return object;
                }, {} as CustomColorObject<T>);
              };

              const LIGHT: CustomColorObject<string> = {};
              const DARK: CustomColorObject<string> = {};

              (Object.entries(color) as [string, ColorValue<string>][]).forEach(([name, [light, dark]]) => {
                Object.assign(LIGHT, convert(name, light));
                Object.assign(DARK, convert(name, dark));
              });

              addBase({
                [`:root, [data-theme="light"]`]: LIGHT,
                [`[data-theme="dark"]`]: DARK,
              });

              aliasentries.forEach(([name, color]) => {
                if (!name.match(/^[a-zA-Z0-9]*$/)) {
                  console.log(`ERROR : invalid ${name} alias`);
                  return;
                }

                if (Array.isArray(color)) {
                  color.forEach((value, index) => {
                    addBase({
                      [[index === 0 && `:root`, `[data-alias-${name}="${value}"]`].filter(Boolean).join(", ")]: colorobject({
                        key: (i) => `--${name}-${i}`,
                        value: (i) => `var(--${value}-${i})`,
                      }),
                    });
                  });
                } else {
                  addBase({
                    [`:root`]: colorobject({
                      key: (i) => `--${name}-${i}`,
                      value: (i) => `var(--${color}-${i})`,
                    }),
                  });
                }
              });

              if (overlay) {
                addBase({
                  [`:root`]: {
                    "--black-1": blackA["blackA1"],
                    "--black-2": blackA["blackA2"],
                    "--black-3": blackA["blackA3"],
                    "--black-4": blackA["blackA4"],
                    "--black-5": blackA["blackA5"],
                    "--black-6": blackA["blackA6"],
                    "--black-7": blackA["blackA7"],
                    "--black-8": blackA["blackA8"],
                    "--black-9": blackA["blackA9"],
                    "--black-10": blackA["blackA10"],
                    "--black-11": blackA["blackA11"],
                    "--black-12": blackA["blackA12"],
                    "--white-1": whiteA["whiteA1"],
                    "--white-2": whiteA["whiteA2"],
                    "--white-3": whiteA["whiteA3"],
                    "--white-4": whiteA["whiteA4"],
                    "--white-5": whiteA["whiteA5"],
                    "--white-6": whiteA["whiteA6"],
                    "--white-7": whiteA["whiteA7"],
                    "--white-8": whiteA["whiteA8"],
                    "--white-9": whiteA["whiteA9"],
                    "--white-10": whiteA["whiteA10"],
                    "--white-11": whiteA["whiteA11"],
                    "--white-12": whiteA["whiteA12"],
                  },
                });
              }

              return {
                getCSS: () => css,
              };
            })(),
          };
        },
      };
    },
  };
};

export * from "@coloradix/colors";
export default coloradix;
