## Members

<dl>
<dt><a href="#breakpointNames">breakpointNames</a></dt>
<dd><p>Defines the breakpoint type.</p>
<p>Please check the source for the available TBreakpointNames.</p></dd>
</dl>

## Constants

<dl>
<dt><a href="#breakpoints">breakpoints</a></dt>
<dd><p>Defines the breakpoints for the theme.</p>
<p>Breakpoints are an array of <code>{name, value}</code> pairs.</p>
<ul>
<li><code>name</code> comes from <code>TBreakpointNames</code>.</li>
<li><code>value</code> is unitless but represents pixels.</li>
</ul>
<p>Breakpoints follow the <a href="https://abookapart.com/products/mobile-first">mobile first design / progressive enhancement</a> pattern.
This implies media queries on breakpoints will use the <code>min-width</code> approach. See 'useBreakpoints'.</p></dd>
</dl>

<a name="breakpointNames"></a>

## breakpointNames
<p>Defines the breakpoint type.</p>
<p>Please check the source for the available TBreakpointNames.</p>

**Kind**: global variable  
**Category**: Theme  
**Example**  
```js
[{name: 'mobile', value: 320}, {name: 'tablet', value: 768}, ...]
```
<a name="breakpoints"></a>

## breakpoints
<p>Defines the breakpoints for the theme.</p>
<p>Breakpoints are an array of <code>{name, value}</code> pairs.</p>
<ul>
<li><code>name</code> comes from <code>TBreakpointNames</code>.</li>
<li><code>value</code> is unitless but represents pixels.</li>
</ul>
<p>Breakpoints follow the <a href="https://abookapart.com/products/mobile-first">mobile first design / progressive enhancement</a> pattern.
This implies media queries on breakpoints will use the <code>min-width</code> approach. See 'useBreakpoints'.</p>

**Kind**: global constant  
**Category**: Theme  
**See**

- https://abookapart.com/products/mobile-first
- https://www.uxpin.com/studio/blog/a-hands-on-guide-to-mobile-first-design/

**Example**  
```js
[{name: 'mobile', value: 320}, {name: 'tablet', value: 768}, ...]
```
