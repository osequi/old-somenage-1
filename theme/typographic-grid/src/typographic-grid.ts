/**
 * Defines the typographic grid type.
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
 */
export type TTypographicGrid = {
  /**
   * Responsive font sizes for the [breakpoints](#TBreakpoint).
   * The first number is for the default / smallest viewport, like watches.
   * The rest of the numbers are for each breakpoint, like mobile, tablet and co.
   * It's not necesary to define font sizes for all the breakpoints. Larger screens inherit settings from lower screens &mdash; following the progressive enhancment pattern.
   */
  fontSizes: number[];
  /**
   * Unitless line height.
   */
  lineHeight: number;
};

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
const typographicGrid: TTypographicGrid = {
  fontSizes: [100, 100, 110, 120, 140],
  lineHeight: 1.25,
};

export default typographicGrid;
