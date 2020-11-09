import type { TBreakpointNames, TBreakpoint } from "@somenage/theme";
import { theme } from "@somenage/theme";

/**
 * Returns an *Emotion object styles* friendly media query for a breakpoint name.
 * @param  name The breakpoint name.
 * @return      The media query string, or null
 *
 * @ignore
 */
const getBreakpoint = (name: TBreakpointNames): string | null => {
  const { breakpoints } = theme;

  const breakpoint = breakpoints.find(
    (item: TBreakpoint) => item.name === name
  );

  const query = breakpoint?.value ? `min-width: ${breakpoint.value}px` : null;

  return query ? `@media(${query})` : null;
};

/**
 * Returns [Emotion object styles](https://emotion.sh/docs/object-styles#media-queries) friendly media queries for breakpoint names.
 *
 * The queries follow the `min-width` syntax suitable for [mobile first design / progressive enhancement](https://abookapart.com/products/mobile-first).
 * Mobile first design starts with the smallest screen. Then goes after the large screens.
 *
 * This design system sets the first breakpoint to mobile. This means the design starts with the watch or the feature phone. See [breakpoints]{@link breakpoints} for details.
 *
 * @param  breakpoints An array of breakpoint names, or a single breakpoint name.
 * @return             An array of media queries, or a single media query, or null.
 *
 * @category Hooks
 *
 * @example <caption>An array of breakpoint names:</caption>
 * const [mobile, tablet] = useBreakpoint(['mobile', 'tablet']) => ['@media(min-width: 320px)','@media(min-width: 1024px)']
 *
 * @example <caption>Single breakpoint name:</caption>
 * const tablet = useBreakpoint('tablet') => '@media(min-width: 1024px)'
 *
 * @see https://emotion.sh/docs/object-styles#media-queries
 * @see https://abookapart.com/products/mobile-first
 * @see https://www.uxpin.com/studio/blog/a-hands-on-guide-to-mobile-first-design/
 */
const useBreakpoint = (
  breakpoints: TBreakpointNames[] | TBreakpointNames
): string[] | string | null => {
  return Array.isArray(breakpoints)
    ? breakpoints &&
        breakpoints.reduce((result, breakpoint) => {
          return [...result, getBreakpoint(breakpoint)];
        }, [])
    : getBreakpoint(breakpoints);
};

export default useBreakpoint;
