import Decay from '../';

const rate = 0.1;
const max = 10000;

let decay;
let handler;

jest.useFakeTimers();

describe('Decay', () => {
  beforeEach(() => {
    decay = new Decay(rate, max);
    handler = jest.fn();
  });

  it('should be initialized with a value, stepCount, and curve', () => {
    expect(decay.value).toBe(0);
    expect(decay.__stepCount__).toBe(1);
    expect(decay._curve).toBeInstanceOf(Function);
  });

  it('should step and set the new value on each `getValue` call', () => {
    const value = decay.value;

    // Initial call
    expect(value).toEqual(decay.getValue());
    expect(value).not.toEqual(decay.getValue());
  });

  it('should allow you to subscribe with a handler that is called each step', () => {
    decay.subscribe(handler);

    expect(handler).toBeCalled();
    expect(handler.mock.calls.length).toBe(1);

    jest.runOnlyPendingTimers();

    expect(handler.mock.calls.length).toBe(2);
  });
});
