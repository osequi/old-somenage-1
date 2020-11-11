/**
 * Defines the modular scale type.
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
 */
const modularScale = {
  name: "modular",
  settings: {
    base: [1],
    ratio: [1.25],
  },
};

export default modularScale;
