export class Timer {
    initialTime: number;
    currentTime: number;
    rate:number;
    timerId: number;

    constructor (duration: number, rate: number = 1) {
        this.initialTime = duration;
        this.currentTime = duration;
        this.rate = rate;
    }

    getCurrentTime() {
        return this.currentTime;
    }

    setCurrentTime(duration: number) {
        this.currentTime = duration;
    }

    getRate() {
        return this.rate;
    }
    
    setRate(rate: number) {
        this.rate = rate;
    }

    isZero() {
        return Math.floor(this.getCurrentTime()) == 0;
    }

    isPositive() {
        return Math.floor(this.getCurrentTime()) > 0;
    }

    addTime(duration: number) {
        this.currentTime += duration;
    }

    subtractTime(duration: number) {
        this.currentTime -= duration;
    }

    increment() {
        this.addTime(1);
    }

    decrement() {
        this.subtractTime(1);
    }

    getMinutes() {
        return Math.floor(this.getCurrentTime() / 60);
    }

    getSeconds() {
        return Math.floor(this.getCurrentTime() % 60);
    }

    startTime() {
        // rate determines how many times per second time decrements by 1
        this.timerId = setInterval(() => {
            this.decrement(); 
            if (this.isZero()) {
                clearInterval(this.timerId)}
            }
            , 1000/this.getRate())
    }

    pauseTime() {
        clearInterval(this.timerId);
    }

}