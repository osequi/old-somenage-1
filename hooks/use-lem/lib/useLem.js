"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const somenage_theme_1 = require("@osequi/somenage-theme");
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
const useLem = (typographicGrid) => {
    const { typography: { grid }, } = somenage_theme_1.theme;
    const { fontSizes, lineHeight } = Object.assign(Object.assign({}, grid), typographicGrid);
    const fontSize = fontSizes[0] ? fontSizes[0] : null;
    return (fontSize * lineHeight) / 100;
};
exports.default = useLem;
//# sourceMappingURL=useLem.js.map