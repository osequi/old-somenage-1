import type { TBreakpointNames, TBreakpoint } from "@somenage/theme";
import { theme } from "@somenage/theme";

/**
 * Returns an *Emotion object styles* friendly media query for a breakpoint name.
 * @param  name The breakpoint name.
 * @return      The media query string, or null
 *
 * @category Hooks
 *
 * @example
 * const tablet = useBreakpoint('tablet') => '@media(min-width: 1024px)'
 *
 * @see https://emotion.sh/docs/object-styles#media-queries
 */
const useBreakpoint = (name: TBreakpointNames): string | null => {
  const { breakpoints } = theme;

  const breakpoint = breakpoints.find(
    (item: TBreakpoint) => item.name === name
  );

  const query = breakpoint?.value ? `min-width: ${breakpoint.value}px` : null;

  return query ? `@media(${query})` : null;
};

export default useBreakpoint;
