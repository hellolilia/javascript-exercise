export default function numberMapToWord(collection) {
  return collection.map(x => String.fromCharCode(x + 96));
}
