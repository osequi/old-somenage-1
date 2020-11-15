import type { TLinearScale } from "@osequi/somenage-theme-linear-scale";
import type { TModularScale } from "@osequi/somenage-theme-modular-scale";
/**
 * Defines the scale names.
 * @category Theme
 */
export declare type TTypographicScaleNames = "linear" | "modular";
/**
 * Defines the typographic scale type.
 * @category Theme
 */
export declare type TTypographicScale = {
    /**
     * The name of the scale. Identifies a scale preset.
     */
    name: TTypographicScaleNames;
    /**
     * The settings for the scale.
     */
    settings?: object;
};
/**
 * Defines the typographic scale.
 *
 * The scale defines how typographic elements vary in size compared to the body text.
 * The scale comes from one of the presets: linear scale, modular scale.
 *
 * @category Theme
 * @example
 * name: "linear",
 * settings: {},
 * @example
 * name: 'modular',
 * settings: {base:[1], ratio: 1.33}
 */
declare const typographicScale: TTypographicScale;
export default typographicScale;
export type { TLinearScale, TModularScale };
