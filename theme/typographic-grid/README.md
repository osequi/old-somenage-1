<a name="typographicGrid"></a>

## typographicGrid
Defines the typographic grid.

The typographic grid is defined by the font size and line height. It is set on the `<body>` tag and it can be set to be responsive..

**Kind**: global constant  
**Category**: Theme  
**See**

- [Long description](https://bit.ly/3pew04j)
- [Short description](https://bit.ly/2IoeYjt)

**Example** *(Responsive font sizes defined for all breakpoints:)*  
```js
fontSizes: [100, 100, 110, 120, 140], // watch, mobile, tablet, laptop, desktop
lineHeight: 1.25,
```
**Example** *(Responsive font sizes are the same for tablet and up:)*  
```js
fontSizes: [100, 100, 110], // watch, mobile, tablet. laptop and desktop will have the font size defined for tablet.
lineHeight: 1.25,
```
