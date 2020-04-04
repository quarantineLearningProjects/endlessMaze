export const createEmpty2D = (width:number, height:number) => {
  return Array.from(Array(width * height), (_) => null);
}