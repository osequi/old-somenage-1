"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the typographic grid.
 *
 * The typographic grid is defined by the font size and line height. It is set on the `<body>` tag and it can be set to be responsive..
 *
 * @example <caption>Responsive font sizes defined for all breakpoints:</caption>
 * fontSizes: [100, 100, 110, 120, 140], // watch, mobile, tablet, laptop, desktop
 * lineHeight: 1.25,
 *
 * @example <caption>Responsive font sizes are the same for tablet and up:</caption>
 * fontSizes: [100, 100, 110], // watch, mobile, tablet. laptop and desktop will have the font size defined for tablet.
 * lineHeight: 1.25,
 *
 * @category Theme
 * @see [Long description](https://bit.ly/3pew04j)
 * @see [Short description](https://bit.ly/2IoeYjt)
 */
const typographicGrid = {
    fontSizes: [100, 100, 110, 120, 140],
    lineHeight: 1.25,
};
exports.default = typographicGrid;
//# sourceMappingURL=typographic-grid.js.map