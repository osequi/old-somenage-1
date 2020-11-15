import type { TModularScale } from "@osequi/somenage-theme";
import { modularScale } from "@osequi/somenage-theme-modular-scale";
import { theme } from "@osequi/somenage-theme";
import ms from "modularscale-js";

/**
 * Returns a value from the modular scale.
 * @param  value       	The value on the scale.
 * @param  modularScale The settings for the scale.
 * @return 				The value from the scale.
 * @category Hooks
 * @example
 * useModularScale(0) => 1
 * useModularScale(1) => 1.33
 * useModularScale(1, {base:[1], ratio: 1.25}) => 1.25
 * @see https://github.com/modularscale/modularscale-js
 */
const useModularScale = (
  value: number,
  modularScaleFromProps?: TModularScale
): number => {
  const {
    typography: { scale },
  } = theme;

  const scale2 = modularScaleFromProps || scale;
  const scale3 =
    scale2 && scale2.settings && scale2.settings.hasOwnProperty("base")
      ? modularScale
      : scale2;
  const { settings } = scale3;

  return ms(value, settings);
};

export default useModularScale;
