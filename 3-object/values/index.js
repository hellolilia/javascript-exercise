export default function countTypesNumber(source) {
  return Object.values(source)
    .map(x => parseInt(x, 10))
    .reduce((a, b) => a + b);
}
