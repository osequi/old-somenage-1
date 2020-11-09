import type { TTypography } from "@somenage/typography";
import { typography } from "@somenage/typography";

/**
 * Defines the theme type.
 */
export type TTheme = {
  typography: TTypography;
};

/**
 * Defines the theme.
 */
const theme: TTheme = {
  typography: typography,
};

export default theme;
