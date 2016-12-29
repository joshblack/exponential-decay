import { curve } from '../curve';

describe('#curve', () => {
  it('should be initialized with a given rate and bound and apply it for each step', () => {
    const c = curve(0.1, 100);
    const steps = [0, 1, 2, 3, 4, 5];
    const expectedOutput = [0, 9, 18, 25, 32, 39];

    steps.forEach((step, i) => {
      const output = Math.floor(c(step));

      expect(expectedOutput[i]).toBe(output);
    });
  });
});
