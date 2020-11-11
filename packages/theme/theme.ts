import type { TBreakpoint, TBreakpointNames } from "@somenage/breakpoints";
import { breakpoints } from "@somenage/breakpoints";

import type {
  TTypography,
  TTypographicGrid,
  TTypographicScale,
} from "@somenage/typography";
import { typography } from "@somenage/typography";

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
  breakpoints: breakpoints,
  typography: typography,
};

export default theme;
export type {
  TBreakpoint,
  TBreakpointNames,
  TTypographicGrid,
  TTypographicScale,
};
