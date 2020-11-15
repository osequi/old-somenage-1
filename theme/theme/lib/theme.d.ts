import type { TBreakpoint, TBreakpointNames } from "@osequi/somenage-theme-breakpoints";
import type { TTypography, TTypographicGrid, TTypographicScale, TLinearScale, TModularScale } from "@osequi/somenage-theme-typography";
/**
 * Defines the CSS notations type.
 *
 * The object notation is preferred. However sometimes the string notation is required.
 */
export declare type TCssNotations = "object" | "string";
/**
 * Defines the theme type.
 *
 * @category Theme
 */
export declare type TTheme = {
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
declare const theme: TTheme;
export default theme;
export type { TBreakpoint, TBreakpointNames, TTypographicGrid, TTypographicScale, TLinearScale, TModularScale, };
