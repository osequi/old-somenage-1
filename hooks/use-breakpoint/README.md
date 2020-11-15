<a name="useBreakpoint"></a>

## useBreakpoint(breakpoints) ⇒
Returns [Emotion object styles](https://emotion.sh/docs/object-styles#media-queries) friendly media queries for breakpoint names.

**Kind**: global function  
**Returns**: An array of media queries, or a single media query, or null.  
**Category**: Hooks  
**See**: https://emotion.sh/docs/object-styles#media-queries  

| Param | Description |
| --- | --- |
| breakpoints | An array of breakpoint names, or a single breakpoint name. |

**Example** *(An array of breakpoint names:)*  
```js
const [mobile, tablet] = useBreakpoint(['mobile', 'tablet']) => ['@media(min-width: 320px)','@media(min-width: 768px)']
```
**Example** *(Single breakpoint name:)*  
```js
const tablet = useBreakpoint('tablet') => '@media(min-width: 768px)'
```
