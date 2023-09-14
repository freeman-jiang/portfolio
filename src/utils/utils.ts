export function chunkArray<T>(arr: T[], chunkSize: number): T[][] {
  const chunked: T[][] = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunked.push(arr.slice(i, i + chunkSize));
  }
  return chunked;
}
