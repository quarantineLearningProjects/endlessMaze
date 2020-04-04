// @ts-ignore
import {Map} from "./map/index.ts"

const grid = [[0,1,2], [3,4,5], [6,7,8]]

let nG = Map.to2D(grid, 3, 3)

console.log(nG)
