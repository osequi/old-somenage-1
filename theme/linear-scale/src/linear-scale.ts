/**
 * Defines the linear scale type.
 * @category Theme
 */
export type TLinearScale = {
  name: string;
  settings: object;
};

/**
 * Defines the linear scale.
 *
 * On linear scale values scale with 1 unit. See 'useLinearScale'.
 *
 * @category Theme
 * @example
 * name: "linear",
 * settings: {},
 */
const linearScale = {
  name: "linear",
  settings: {},
};

export default linearScale;
