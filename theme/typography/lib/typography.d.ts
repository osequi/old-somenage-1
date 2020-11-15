import type { TTypographicGrid } from "@osequi/somenage-theme-typographic-grid";
import type { TTypographicScale, TLinearScale, TModularScale } from "@osequi/somenage-theme-typographic-scale";
/**
 * Defines the typography type.
 *
 * @category Theme
 */
export declare type TTypography = {
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
declare const typography: TTypography;
export default typography;
export type { TTypographicGrid, TTypographicScale, TLinearScale, TModularScale, };
