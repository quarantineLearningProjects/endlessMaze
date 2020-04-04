// @ts-ignore
import {Map} from "./map/index.ts"
import { createEmpty2D } from "./utils/arrayUtils.ts";

const grid2D = [[0,1,2], [3,4,5], [6,7,8]]
const grid1D = [0,1,2,3,4,5,6,7,8]

// const res = Map.to1D(grid2D);
const res = Map.to2D(grid1D, 3, 3);
// const res = createEmpty2D(3,4);

console.log(res);