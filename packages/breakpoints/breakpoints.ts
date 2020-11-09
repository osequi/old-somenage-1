/**
 * Defines the breakpoint names.
 */
export type TBreakpointNames = "mobile" | "tablet" | "laptop" | "desktop";

/**
 * Defines the breakpoint type.
 *
 * @example
 * {name: 'mobile', value: 320}
 *
 * @example <caption>Valid breakpoint names are set up in TBreakpointNames</caption>
 * ["mobile" | "tablet" | "laptop" | "desktop"]
 *
 * @category API
 * @subcategory Theme
 */
export type TBreakpoint = {
  /**
   * The breakpoint name.
   */
  name: TBreakpointNames;
  /**
   * The breakpoint value in pixels.
   */
  value: number;
};

/**
 * Defines the breakpoints.
 *
 * @category API
 * @subcategory Theme
 */
const breakpoints: TBreakpoint[] = [
  { name: "mobile", value: 320 },
  { name: "tablet", value: 768 },
  { name: "laptop", value: 1024 },
  { name: "desktop", value: 1600 },
];

export default breakpoints;
