<a name="breakpoints"></a>

## breakpoints
Defines the breakpoints for the theme.

Breakpoints are an array of `{name, value}` pairs.
- `name` comes from `TBreakpointNames`.
- `value` is unitless but represents pixels.

Breakpoints follow the [mobile first design / progressive enhancement](https://abookapart.com/products/mobile-first) pattern.
This implies media queries on breakpoints will use the `min-width` approach. See 'useBreakpoints'.

**Kind**: global constant  
**Category**: Theme  
**See**

- https://abookapart.com/products/mobile-first
- https://www.uxpin.com/studio/blog/a-hands-on-guide-to-mobile-first-design/

**Example**  
```js
[{name: 'mobile', value: 320}, {name: 'tablet', value: 768}, ...]
```
