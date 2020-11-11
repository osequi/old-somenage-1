/**
 * Defines the scale names.
 * @category Theme
 */
export type TTypographicScaleNames = "linear" | "modular";

/**
 * Defines the typographic scale type.
 * @category Theme
 */
export type TTypographicScale = {
  /**
   * The name of the scale. Identifies a scale preset.
   */
  name: TTypographicScaleNames;
  /**
   * The settings for the scale.
   */
  settings: object;
};

/**
 * Defines the typographic scale.
 *
 * The scale comes from one of the presets: linear scale, modular scale.
 * @category Theme
 * @example
 * name: "linear",
 * settings: {},
 * @example
 * name: 'modular',
 * settings: {base:[1], ratio: 1.33}
 */
const typographicScale: TTypographicScale = {
  name: "linear",
  settings: {},
};

export default typographicScale;
