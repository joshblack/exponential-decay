/* @flow */

/**
 * Exponnential decay (increasing form) is modeled as:
 * y = C ( 1 - e^(-kt) ), k > 0
 */
export const curve = (rate: number, upper: number) => (t :number): number => {
  return upper * (1 - Math.exp(-(rate * t)));
};
