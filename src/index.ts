// @ts-ignore
import { Map } from "./map/index.ts";
// @ts-ignore
import { Brush } from "./brush/index.ts";

const map = new Map(5, 5);
const pensil = new Brush(map.grid2D)

pensil.draw(0, 0, 2, 4, {character: 'x'})
pensil.display()

