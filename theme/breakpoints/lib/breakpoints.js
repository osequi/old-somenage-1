"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.breakpointNames = void 0;
/**
 * Collects the breakpoint names into an array.
 *
 * - `TBreakpointNames` is an union type. It offers no methods like `length`.
 * - `breakpointNames` is an array. It can be used to make calculations with breakpoint names.
 *
 * @ignore
 */
const breakpointNames = ["mobile", "tablet", "laptop", "desktop"];
exports.breakpointNames = breakpointNames;
/**
 * Defines the breakpoints for the theme.
 *
 * Breakpoints are an array of `{name, value}` pairs.
 * - `name` comes from `TBreakpointNames`.
 * - `value` is unitless but represents pixels.
 *
 * Breakpoints follow the [mobile first design / progressive enhancement](https://abookapart.com/products/mobile-first) pattern.
 * This implies media queries on breakpoints will use the `min-width` approach. See 'useBreakpoints'.
 *
 * @example
 * [{name: 'mobile', value: 320}, {name: 'tablet', value: 768}, ...]
 *
 * @see https://abookapart.com/products/mobile-first
 * @see https://www.uxpin.com/studio/blog/a-hands-on-guide-to-mobile-first-design/
 *
 * @category Theme
 */
const breakpoints = [
    { name: "mobile", value: 320 },
    { name: "tablet", value: 768 },
    { name: "laptop", value: 1024 },
    { name: "desktop", value: 1600 },
];
exports.default = breakpoints;
//# sourceMappingURL=breakpoints.js.map