"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the theme.
 *
 * @category Theme
 */
const theme = {
    breakpoints: [
        { name: "mobile", value: 320 },
        { name: "tablet", value: 768 },
        { name: "laptop", value: 1024 },
        { name: "desktop", value: 1600 },
    ],
    typography: {
        grid: { fontSizes: [100, 100, 110, 120, 140], lineHeight: 1.25 },
        scale: { name: "linear", settings: {} },
    },
};
exports.default = theme;
//# sourceMappingURL=theme.js.map