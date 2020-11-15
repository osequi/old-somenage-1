<a name="useLem"></a>

## useLem(typographicGrid) ⇒
Calculates the typographic grid cell size.

**Kind**: global function  
**Returns**: The cell size (in em)  
**Category**: Hooks  

| Param | Description |
| --- | --- |
| typographicGrid | The typographic grid settings. It's optional. It's better to be loaded from the theme than passed as args. |

**Example**  
```js
{fontSizes: [100], lineHeight: 1.25} => (100 * 1.25) / 100 = 1.25
```
**Example**  
```js
{fontSizes: [110], lineHeight: 1.25} => (110 * 1.25) / 100 = 1.375
```
