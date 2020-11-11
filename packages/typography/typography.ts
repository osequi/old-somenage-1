import type { TTypographicGrid } from "@somenage/typographic-grid";
import { typographicGrid } from "@somenage/typographic-grid";

import type { TTypographicScale } from "@somenage/typographic-scale";
import { typographicScale } from "@somenage/typographic-scale";

/**
 * Defines the typography type.
 *
 * @category Theme
 */
export type TTypography = {
  /**
   * The settings for the typographic grid.
   */
  grid: TTypographicGrid;
  /**
   * The settings for the typographic scale.
   */
  scale: TTypographicScale;
};

/**
 * Defines the typography.
 *
 * @category Theme
 */
const typography: TTypography = {
  grid: typographicGrid,
  scale: typographicScale,
};

export default typography;
export type { TTypographicGrid, TTypographicScale };
