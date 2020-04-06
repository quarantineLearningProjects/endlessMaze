// test utilities
// ****************************************************************************
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

// code to test
// ****************************************************************************
import { Timer } from "./Timer.ts";

//variables
// ****************************************************************************
var timer = new Timer(1);

//tests
// ****************************************************************************
Deno.test(function getCurrentTime() {
  assertEquals(timer.getCurrentTime(), 1);
});

Deno.test(function setCurrentTime() {
  timer.setCurrentTime(2);
  assertEquals(timer.currentTime, 2);
});

Deno.test(function getRate() {
  assertEquals(timer.getRate(), 1);
  timer = new Timer(1, 2);
  assertEquals(timer.getRate(), 2);
});

Deno.test(function setRate() {
  assertEquals(timer.rate, 2);
  timer.setRate(1);
  assertEquals(timer.rate, 1);
});

Deno.test(function setRate() {
  assertEquals(timer.rate, 2);
  timer.setRate(1);
  assertEquals(timer.rate, 1);
});

Deno.test(function isZero() {
  assertEquals(timer.isZero(), false);
  timer.currentTime = 0;
  assertEquals(timer.isZero(), true);
  timer.currentTime = 0.5;
  assertEquals(timer.isZero(), true);
});

Deno.test(function isPositive() {
  assertEquals(timer.isPositive(), false);
  timer.currentTime = 1;
  assertEquals(timer.isPositive(), true);
  timer.currentTime = -1;
  assertEquals(timer.isPositive(), false);
});

Deno.test(function addTime() {
  timer.addTime(2);
  assertEquals(timer.currentTime, 1);
});

Deno.test(function subtractTime() {
  timer.subtractTime(1);
  assertEquals(timer.currentTime, 0);
});

Deno.test(function increment() {
  timer.increment();
  assertEquals(timer.currentTime, 1);
});

Deno.test(function decrement() {
  timer.decrement();
  assertEquals(timer.currentTime, 0);
});

Deno.test(function getMinutes() {
  assertEquals(timer.getMinutes(), 0);
  timer.currentTime = 60;
  assertEquals(timer.getMinutes(), 1);
  timer.currentTime = 121;
  assertEquals(timer.getMinutes(), 2);
  timer.currentTime = 180.5;
  assertEquals(timer.getMinutes(), 3);
});

Deno.test(function getSeconds() {
  assertEquals(timer.getSeconds(), 0);
  timer.currentTime = 61;
  assertEquals(timer.getSeconds(), 1);
  timer.currentTime = 120.5;
  assertEquals(timer.getSeconds(), 0);
});

// test startTime

// test pauseTime
