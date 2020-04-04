// test utilities
// ****************************************************************************
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

// code to test
// ****************************************************************************
import { createEmpty1D, createEmpty2D } from "./arrayUtils.ts";

//variables
// ****************************************************************************
const grid1D = [null, null, null, null, null, null, null, null, null];
const grid2D = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

//tests
// ****************************************************************************
Deno.test(function empty1D() {
  const result = createEmpty1D(9);
  assertEquals(result, grid1D);
});

Deno.test(function empty2D() {
  const result = createEmpty2D(3, 3);
  assertEquals(result, grid2D);
});
