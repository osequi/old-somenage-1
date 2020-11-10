/**
 * Defines the breakpoint names.
 * @category Theme
 */
export type TBreakpointNames = "mobile" | "tablet" | "laptop" | "desktop";

/**
 * Defines the breakpoint type.
 *
 * Please check the source for the available TBreakpointNames.
 *
 * @category Theme
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
 * Breakpoints are an array of `{name, value}` pairs.
 * - `name` comes from [TBreakpointNames](#TBreakpoint).
 * - `value` is unitless but represents pixels.
 *
 * @example
 * [{name: 'mobile', value: 320}, {name: 'tablet', value: 768}, ...]
 *
 * @category Theme
 */
const breakpoints: TBreakpoint[] = [
  { name: "mobile", value: 320 },
  { name: "tablet", value: 768 },
  { name: "laptop", value: 1024 },
  { name: "desktop", value: 1600 },
];

export default breakpoints;
