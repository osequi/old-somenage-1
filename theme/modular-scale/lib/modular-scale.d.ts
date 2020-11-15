/**
 * Defines the modular scale type.
 * @category Theme
 */
export declare type TModularScale = {
    name: string;
    settings: {
        base: number[];
        ratio: number;
    };
};
/**
 * Defines the modular scale.
 * @category Theme
 * @example
 * name: 'modular',
 * settings: {base:[1], ratio: 1.33}
 */
declare const modularScale: {
    name: string;
    settings: {
        base: number[];
        ratio: number[];
    };
};
export default modularScale;
