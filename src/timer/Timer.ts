export class Timer {
  private _initialTime: number;
  private _currentTime: number;
  private _rate: number;
  private _timerId: number;

  constructor(duration: number, rate: number = 1) {
    this._initialTime = duration;
    this._currentTime = duration;
    this._rate = rate;
  }

  get currentTime() {
    return this._currentTime;
  }

  set currentTime(duration: number) {
    this._currentTime = duration;
  }

  get rate() {
    return this._rate;
  }

  set rate(rate: number) {
    this._rate = rate;
  }

  isZero() {
    return this.currentTime == 0;
  }

  isPositive() {
    return this.currentTime > 0;
  }

  addSeconds(duration: number) {
    this._currentTime += duration * 1000;
  }

  subtractSeconds(duration: number) {
    this._currentTime -= duration * 1000;
  }

  addMilliseconds(duration: number) {
    this._currentTime += duration;
  }

  subtractMilliseconds(duration: number) {
    this._currentTime -= duration;
  }

  incrementSecond() {
    this.addSeconds(1);
  }

  decrementSecond() {
    this.subtractSeconds(1);
  }

  incrementMillisecond() {
    this.addMilliseconds(1);
  }

  decrementMillisecond() {
    this.subtractMilliseconds(1);
  }

  get minutes() {
    return Math.floor(this.currentTime / 60000);
  }

  get seconds() {
    return Math.floor(this.currentTime / 1000);
  }

  get milliseconds() {
    return this.currentTime % 1000;
  }

  start() {
    // rate determines how many times per millisecond time decrements by 1
    this._timerId = setInterval(() => {
      if (!this.isPositive()) {
        clearInterval(this._timerId);
      }
      this.decrementMillisecond();
    }, 1 / this.rate);
  }

  pause() {
    clearInterval(this._timerId);
  }
}
