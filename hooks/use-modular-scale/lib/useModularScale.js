"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const somenage_theme_modular_scale_1 = require("@osequi/somenage-theme-modular-scale");
const somenage_theme_1 = require("@osequi/somenage-theme");
const modularscale_js_1 = __importDefault(require("modularscale-js"));
/**
 * Returns a value from the modular scale.
 * @param  value       	The value on the scale.
 * @param  modularScale The settings for the scale.
 * @return 				The value from the scale.
 * @category Hooks
 * @example
 * useModularScale(0) => 1
 * useModularScale(1) => 1.33
 * useModularScale(1, {base:[1], ratio: 1.25}) => 1.25
 * @see https://github.com/modularscale/modularscale-js
 */
const useModularScale = (value, modularScale) => {
    var _a;
    const { typography: { scale }, } = somenage_theme_1.theme;
    const scale2 = modularScale || scale;
    const scale3 = ((_a = scale2 === null || scale2 === void 0 ? void 0 : scale2.settings) === null || _a === void 0 ? void 0 : _a.base) === undefined ? somenage_theme_modular_scale_1.modularScale : scale2;
    const { settings } = scale3;
    return modularscale_js_1.default(value, settings);
};
exports.default = useModularScale;
//# sourceMappingURL=useModularScale.js.map