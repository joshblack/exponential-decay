/* @flow */
import { curve } from './curve';

export default class Decay {
  value: number;
  __stepCount__: number;
  _curve: (number) => number;
  _handler: () => any;

  constructor(rate: number = 0.1, max: number = 10000): void {
    this.value = 0;
    this.__stepCount__ = 1;
    this._curve = curve(rate, max);
  }

  getValue(): number {
    const value = this.value;

    this._step();

    return value;
  }

  _step(): void {
    const value: number = this._curve(this.__stepCount__++);

    this.value = value;
  }

  subscribe(handler: () => any): void {
    this._handler = handler;
    this._callback();
  }

  _callback(): void {
    const delay: number = this.getValue();

    this._handler();

    window.setTimeout((): void => this._callback(), delay);
  }

  reset(): void {
    this.value = 0;
  }
}
