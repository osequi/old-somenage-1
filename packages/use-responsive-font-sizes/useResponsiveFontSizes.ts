import type {
  TTypographicGrid,
  TCssNotations,
  TBreakpoint,
} from "@somenage/theme";
import { theme } from "@somenage/theme";
import { useBreakpoint } from "@somenage/use-breakpoint";

/**
 * Returns media queries following the string notation.
 * @ignore
 */
const stringNotation = (
  fontSizes: number[],
  breakpoints: TBreakpoint[]
): string => {
  return (
    fontSizes &&
    fontSizes.reduce((result, item, index) => {
      const breakpoint = breakpoints[index] ? breakpoints[index] : null;
      if (!breakpoint || !breakpoint.name) return null;

      const query = useBreakpoint(breakpoint.name);
      return query ? `${result} ${query} {body {font-size: ${item}%;}}` : null;
    }, "")
  );
};

/**
 * Returns media queries following the object notation.
 * @ignore
 */
const objectNotation = (
  fontSizes: number[],
  breakpoints: TBreakpoint[]
): {} => {
  let responsiveSizes = {};

  fontSizes &&
    fontSizes.map((item, index) => {
      const breakpoint = breakpoints[index] ? breakpoints[index] : null;
      if (!breakpoint || !breakpoint.name) return null;

      const query = useBreakpoint(breakpoint.name);
      if (!query) return null;

      responsiveSizes[`${query}`] = { fontSize: `${item}%` };
    });

  return responsiveSizes;
};

/**
 * Creates the media queries for the responsive font sizes.
 * @param  notation        The format of the results.
 * @param  typographicGrid The typographic grid settings. It's optional. It's better to be loaded from the theme than passed as args.
 * @return                 The media queries for the responsive font sizes in the preferred format.
 * @category Hooks
 * @example
 * "@media(min-width: 320px)": {"fontSize": "100%"},
 * "@media(min-width: 768px)": {"fontSize": "110%"},
 * "@media(min-width: 1024px)": {"fontSize": "120%"},
 * "@media(min-width: 1600px)": {"fontSize": "140%"},
 */
const useResponsiveFontSizes = (
  notation: TCssNotations,
  typographicGrid?: TTypographicGrid
): {} | string => {
  const {
    breakpoints,
    typography: { grid },
  } = theme;

  const grid2 = typographicGrid || grid;
  const { fontSizes } = grid2;
  const fontSizesWithoutTheDefaultFontSize = fontSizes.slice(1);

  switch (notation) {
    case "string":
      return stringNotation(fontSizesWithoutTheDefaultFontSize, breakpoints);
    case "object":
      return objectNotation(fontSizesWithoutTheDefaultFontSize, breakpoints);
  }
};

export default useResponsiveFontSizes;