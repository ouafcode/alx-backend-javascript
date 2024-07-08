export default function hasValuesFromArray(Set, Array) {
  return Array.every((item) => Set.has(item));
}
