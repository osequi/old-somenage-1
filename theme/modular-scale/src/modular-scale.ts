/**
 * Defines the modular scale type.
 * @category Theme
 */
export type TModularScale = {
  name: string;
  settings: {
    base: number[];
    ratio: number;
  };
};

/**
 * Defines the modular scale.
 *
 * On modular scale values scale based on the settings. See 'useModularScale'.
 *
 * @category Theme
 * @example
 * name: 'modular',
 * settings: {base:[1], ratio: 1.33}
 * @see https://github.com/modularscale/modularscale-js
 */
const modularScale = {
  name: "modular",
  settings: {
    base: [1],
    ratio: [1.25],
  },
};

export default modularScale;
