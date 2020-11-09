import { TBreakpoint } from "@somenage/breakpoints";
import { breakpoints } from "@somenage/breakpoints";

import type { TTypography } from "@somenage/typography";
import { typography } from "@somenage/typography";

/**
 * Defines the theme type.
 *
 * @category API
 * @subcategory Theme
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
 * @category API
 * @subcategory Theme
 */
const theme: TTheme = {
  breakpoints: breakpoints,
  typography: typography,
};

export default theme;
