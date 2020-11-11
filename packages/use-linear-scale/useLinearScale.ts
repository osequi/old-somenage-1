import type { TLinearScale } from "@somenage/theme";

/**
 * Returns a value from the linear scale.
 * @param  value       	The value on the scale.
 * @param  linearScale 	The settings for the scale.
 * @return 				The value from the scale.
 * @category Hooks
 * @example
 * useLinearScale(0) => 1
 * useLinearScale(1) => 2
 */
const useLinearScale = (value: number, linearScale?: TLinearScale): number => {
  return value + 1;
};

export default useLinearScale;
