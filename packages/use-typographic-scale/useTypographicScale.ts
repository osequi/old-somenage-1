import type { TTypographicScale } from "@somenage/theme";
import { theme } from "@somenage/theme";

/**
 * Resizes the font to a value on a scale.
 * @param  value        	The value on the scale.
 * @param  typographicScale The typographic scale to use.
 * @return 					The font size set to the new value.
 * @category Hooks
 * @example
 * useTypographicScale(1, 'linear') => { fontSize: 2em }
 * @example
 * useTypographicScale(1, 'modular') => { fontSize: 1.33em }
 * @example
 * useTypographicScale(1, 'modular', {base:[1], ratio: 1.25}) => { fontSize: 1.25em }
 */
const useTypographicScale = (
  value: number,
  typographicScale?: TTypographicScale
): {} => {
  const {
    typography: { scale },
  } = theme;

  const scale2 = typographicScale || scale;
  const { name } = scale2;

  switch (name) {
    case "linear":
      return {};
    case "modular":
      return {};
  }
};

export default useTypographicScale;
