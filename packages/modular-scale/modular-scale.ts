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
 * @category Theme
 * @example
 * name: 'modular',
 * settings: {base:[1], ratio: 1.33}
 */
const modularScale = {
  name: "modular",
  settings: {
    base: [1],
    ratio: [1.25],
  },
};

export default modularScale;
