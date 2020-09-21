export default function collectCarNumberCount(collection) {
  return collection.filter(x => x.startsWith('粤A')).length;
}
