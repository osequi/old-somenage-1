import type { TTypographicGrid } from "@osequi/somenage-theme-typographic-grid";
import { typographicGrid } from "@osequi/somenage-theme-typographic-grid";

import type {
  TTypographicScale,
  TLinearScale,
  TModularScale,
} from "@osequi/somenage-theme-typographic-scale";
import { typographicScale } from "@osequi/somenage-theme-typographic-scale";

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
export type {
  TTypographicGrid,
  TTypographicScale,
  TLinearScale,
  TModularScale,
};
