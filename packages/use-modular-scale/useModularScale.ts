import type { TModularScale } from "@somenage/theme";
import { modularScale as modularScaleDefaultProps } from "@somenage/modular-scale";
import { theme } from "@somenage/theme";
import ms from "modularscale-js";

/**
 * Returns a value from the linear scale.
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
  modularScale?: TModularScale
): number => {
  const {
    typography: { scale },
  } = theme;

  const scale2 = modularScale || scale;
  const scale3 =
    scale2?.settings?.base === undefined ? modularScaleDefaultProps : scale2;
  const { settings } = scale3;

  return ms(value, settings);
};

export default useModularScale;
