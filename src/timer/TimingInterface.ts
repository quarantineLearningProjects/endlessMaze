class TimingInterface {
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
///////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////////////
    startTime() {
        // rate determines how many times per second time decrements by 1
        this.timerId = setInterval(() => {
            this.decrement(); 
            //uncomment following line for test
            console.log(this.currentTime);
            if (this.isZero()) {
                clearInterval(this.timerId)}
            }
            , 1000/this.getRate())
    }

    pauseTime() {
        clearInterval(this.timerId);
    }

}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// test getCurrentTime
var timer = new TimingInterface(1);
console.log("1 == " + timer.getCurrentTime());

// test setCurrentTime
timer.setCurrentTime(2);
console.log("2 == " + timer.currentTime);

//test getRate
console.log("1 == " + timer.getRate());
timer = new TimingInterface(1, 2);
console.log("2 == " + timer.getRate());

// test setRate
console.log("2 == " + timer.rate);
timer.setRate(1);
console.log("1 == " + timer.rate);

// test isZero
console.log("false == " + timer.isZero());
timer.currentTime = 0;
console.log("true == " + timer.isZero());
timer.currentTime = 0.5;
console.log("true == " + timer.isZero());

// test isPositive
console.log("false == " + timer.isPositive());
timer.currentTime = 1;
console.log("true == " + timer.isPositive());
timer.currentTime = -1;
console.log("false == " + timer.isPositive());

// test addTime
timer.addTime(2);
console.log("1 == " + timer.currentTime);

// test subtractTime
timer.subtractTime(1);
console.log("0 == " + timer.currentTime);

// test increment
timer.increment();
console.log("1 == " + timer.currentTime);

// test decrement
timer.decrement();
console.log("0 == " + timer.currentTime);

// test getMinutes
console.log("0 == " + timer.getMinutes());
timer.currentTime = 60;
console.log("1 == " + timer.getMinutes());
timer.currentTime = 121;
console.log("2 == " + timer.getMinutes());
timer.currentTime = 180.5;
console.log("3 == " + timer.getMinutes());

// test getSeconds
console.log("0 == " + timer.getSeconds());
timer.currentTime = 61;
console.log("1 == " + timer.getSeconds());
timer.currentTime = 120.5;
console.log("0 == " + timer.getSeconds());

// test startTime (uncomment in function to use this test)
timer.currentTime = 5;
timer.startTime();

// test pauseTime
