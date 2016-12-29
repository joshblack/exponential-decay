/**
 * Exponnential decay (increasing form) is modeled as:
 * y = C ( 1 - e^(-kt) ), k > 0
 */
export const curve = (rate, upper) => (t) => {
  return upper * (1 - Math.exp(-(rate * t)));
};
