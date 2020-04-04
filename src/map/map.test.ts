// test utilities
// ****************************************************************************
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

// code to test
// ****************************************************************************
import { Map } from "./index.ts";

//variables
// ****************************************************************************
const grid1D = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const grid2D = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];

//tests
// ****************************************************************************
Deno.test(function to2D() {
  const height = grid2D.length;
  const width = grid2D[0].length;
  const result = Map.to2D(grid1D, width, height);
  assertEquals(result, grid2D);
});

Deno.test(function to1D() {
  const result = Map.to1D(grid2D);
  assertEquals(result, grid1D);
});
