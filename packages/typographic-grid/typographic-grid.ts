/**
 * Defines the typographic grid type.
 *
 * Font size in percentage combined with unitless line height set on the `<body>` tag defines a typographic grid.
 *
 * For example, `font-size: 100%; line-height: 1.25` defines a grid where the cell size is '`16px * 1.25 = 20px`'.
 *
 * When child elements define their dimension and position in `em` the underlying typographic grid will stay the same across the page. This way every element becomes aligned perfectly to the grid, both vertically and horizontally.
 *
 * The typographic grid is responsive. Setting different font sizes on the `<body>` tag with media queries makes the grid cell scale with the screen size.
 *
 * @category Theme
 * @see http://metamn.io/mr-ui/?selectedKind=Basics%2FTypography%20%E2%9C%93%2FClassic&selectedStory=Overview&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook-addon-background%2Fbackground-panel&background=beige
 */
export type TTypographicGrid = {
  /**
   * Responsive font sizes for all the breakpoints.
   * The first number is for the default / smallest viewport, like watches.
   * The rest of the numbers are for each breakpoint, like mobile, tablet and co.
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
 * @category Theme
 */
const typographicGrid: TTypographicGrid = {
  /**
   * The array must contain the default font size + font sizes for all the breakpoints.
   */
  fontSizes: [100, 100, 110, 120, 140],
  lineHeight: 1.25,
};

export default typographicGrid;
