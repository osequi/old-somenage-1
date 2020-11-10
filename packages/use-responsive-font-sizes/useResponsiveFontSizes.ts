import type { TTypographicGrid, TCssNotations} from "@somenage/theme";
import { theme } from "@somenage/theme";
import {useBreakpoint} from '@somenage/use-breakpoint'

/**
 * Creates the media queries for the responsive font sizes.
 * @param  typographicGrid The typographic grid settings. It's optional. It's better to be loaded from the theme than passed as args.
 * @param  notation        The format of the results.
 * @return                 The media queries for the responsive font sizes in the preferred format.
 */
const useResponsiveFontSizes(typographicGrid?: TTypographicGrid, notation: TCssNotations ): object | string => {
	const {fontSizes: fontSizesFromProps} = typographicGrid
	const {breakpoints, typography: {grid: {fontSizes: fontSizesFromTheme}}} = theme

	const fontSizes = fontSizesFromTheme || fontSizesFromProps
	const fontSizesWithoutTheDefaultFontSize = fontSizes.slice(1);

	switch (notation) {
		case "string":
	      return (
	        fontSizesWithoutTheDefaultFontSize &&
	        fontSizesWithoutTheDefaultFontSize.reduce((result, item, index) => {
	          const breakpoint = breakpoints[index];
	          const query = useBreakpoint(breakpoint.name);
	          return `${result} ${query} {body {font-size: ${item}%;}}`;
	        }, "")
	      );
	    case "object":
	      let responsiveSizes = [];
	      return (
	        fontSizesWithoutTheDefaultFontSize &&
	        fontSizesWithoutTheDefaultFontSize.map((item, index) => {
	          const breakpoint = breakpoints[index];
	          const query = useBreakpoint(breakpoint.name);
	          responsiveSizes[`${query}`] = { fontSize: `${item}%` };
	        })
	      );
	}
}


export default useResponsiveFontSizes
