import type { TTypography } from "@somenage/typography";
import { typography } from "@somenage/typography";

/**
 * Defines the theme type.
 *
 * @category API
 * @subcategory Theme
 */
export type TTheme = {
  typography: TTypography;
};

/**
 * Defines the theme.
 *
 * @category API
 * @subcategory Theme
 */
const theme: TTheme = {
  typography: typography,
};

export default theme;
