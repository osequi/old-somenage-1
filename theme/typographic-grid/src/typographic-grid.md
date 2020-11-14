# Typographic Grid

Font size in percentage combined with unitless line height set on the `<body>` tag defines a typographic grid.

For example, `font-size: 100%; line-height: 1.25` defines a grid where the cell size is '`16px * 1.25 = 20px`'.

When child elements define their dimension and position in `em` the underlying typographic grid will stay the same across the page. This way every element aligns perfectly to the grid, both vertically and horizontally.

The typographic grid is responsive. Setting different font sizes on the `<body>` tag with media queries makes the grid cell scale with the screen size.
