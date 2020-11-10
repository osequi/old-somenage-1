import type { TTypographicGrid } from "@somenage/typographic-grid";
import { typographicGrid } from "@somenage/typographic-grid";

/**
 * Defines the typography type.
 *
 * @category Theme
 */
export type TTypography = {
  grid: TTypographicGrid;
};

/**
 * Defines the typography.
 *
 * @category Theme
 */
const typography: TTypography = {
  grid: typographicGrid,
};

export default typography;
