import type { TTypographicGrid } from "@osequi/somenage-theme";
import { theme } from "@osequi/somenage-theme";

/**
 * Calculates the typographic grid cell size.
 * @param  typographicGrid The typographic grid settings. It's optional. It's better to be loaded from the theme than passed as args.
 * @return The cell size (in em)
 *
 * @category Hooks
 *
 * @example
 * {fontSizes: [100], lineHeight: 1.25} => (100 * 1.25) / 100 = 1.25
 *
 * @example
 * {fontSizes: [110], lineHeight: 1.25} => (110 * 1.25) / 100 = 1.375
 */
const useLem = (typographicGrid?: TTypographicGrid): number => {
  const {
    typography: { grid },
  } = theme;

  const { fontSizes, lineHeight } = { ...grid, ...typographicGrid };
  const fontSize = fontSizes[0] ? fontSizes[0] : null;

  return (fontSize * lineHeight) / 100;
};

export default useLem;
