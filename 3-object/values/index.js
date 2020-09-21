export default function countTypesNumber(source) {
  return Object.values(source)
    .map(x => parseInt(x))
    .reduce((a, b) => a + b);
}
