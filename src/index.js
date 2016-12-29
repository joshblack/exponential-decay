import { curve } from './curve';

export default class Decay {
  constructor(rate = 0.1, max = 10000) {
    this.value = 0;
    this.__stepCount__ = 1;
    this._curve = curve(rate, max);
  }

  getValue() {
    const value = this.value;

    this._step();

    return value;
  }

  _step() {
    const value = this._curve(this.__stepCount__++);

    this.value = value;
  }

  subscribe(handler) {
    this._handler = handler;
    this._callback();
  }

  _callback() {
    this._handler();

    const delay = this.getValue();
    window.setTimeout(() => this._callback(), delay);
  }

  reset() {
    this.value = 0;
  }
}
