export const createEmpty1D = (width: number) => {
  return Array.from(Array(width), (_) => null);
};

export const createEmpty2D = (width: number, height: number) => {
  return [...Array(height)].map((_) => [...Array(width)].map(_ => null));
};
