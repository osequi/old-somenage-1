"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const somenage_theme_1 = require("@osequi/somenage-theme");
/**
 * Returns an *Emotion object styles* friendly media query for a breakpoint name.
 * @param  name The breakpoint name.
 * @return      The media query string, or null
 *
 * @ignore
 */
const getBreakpoint = (name) => {
    const { breakpoints } = somenage_theme_1.theme;
    const breakpoint = breakpoints.find((item) => item.name === name);
    const query = (breakpoint === null || breakpoint === void 0 ? void 0 : breakpoint.value) ? `min-width: ${breakpoint.value}px` : null;
    return query ? `@media(${query})` : null;
};
/**
 * Returns [Emotion object styles](https://emotion.sh/docs/object-styles#media-queries) friendly media queries for breakpoint names.
 *
 * @param  breakpoints An array of breakpoint names, or a single breakpoint name.
 * @return             An array of media queries, or a single media query, or null.
 *
 * @category Hooks
 *
 * @example <caption>An array of breakpoint names:</caption>
 * const [mobile, tablet] = useBreakpoint(['mobile', 'tablet']) => ['@media(min-width: 320px)','@media(min-width: 768px)']
 *
 * @example <caption>Single breakpoint name:</caption>
 * const tablet = useBreakpoint('tablet') => '@media(min-width: 768px)'
 *
 * @see https://emotion.sh/docs/object-styles#media-queries
 */
const useBreakpoint = (breakpoints) => {
    return Array.isArray(breakpoints)
        ? breakpoints &&
            breakpoints.reduce((result, breakpoint) => {
                return [...result, getBreakpoint(breakpoint)];
            }, [])
        : getBreakpoint(breakpoints);
};
exports.default = useBreakpoint;
//# sourceMappingURL=useBreakpoint.js.map