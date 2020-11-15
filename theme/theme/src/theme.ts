import type {
  TBreakpoint,
  TBreakpointNames,
} from "@osequi/somenage-theme-breakpoints";

import type {
  TTypography,
  TTypographicGrid,
  TTypographicScale,
  TLinearScale,
  TModularScale,
} from "@osequi/somenage-theme-typography";

/**
 * Defines the CSS notations type.
 *
 * The object notation is preferred. However sometimes the string notation is required.
 */
export type TCssNotations = "object" | "string";

/**
 * Defines the theme type.
 *
 * @category Theme
 */
export type TTheme = {
  /**
   * The breakpoints for the theme.
   */
  breakpoints: TBreakpoint[];
  /**
   * The typography for the theme.
   */
  typography: TTypography;
};

/**
 * Defines the theme.
 *
 * @category Theme
 */
const theme: TTheme = {
  breakpoints: [
    { name: "mobile", value: 320 },
    { name: "tablet", value: 768 },
    { name: "laptop", value: 1024 },
    { name: "desktop", value: 1600 },
  ],
  typography: {
    grid: { fontSizes: [100, 100, 110, 120, 140], lineHeight: 1.25 },
    scale: { name: "linear", settings: {} },
  },
};

export default theme;
export type {
  TBreakpoint,
  TBreakpointNames,
  TTypographicGrid,
  TTypographicScale,
  TLinearScale,
  TModularScale,
};
