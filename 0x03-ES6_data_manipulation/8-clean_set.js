export default function cleanSet(tSet, startString) {
  if (!tSet || !startString || !(tSet instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  return Array.from(tSet)
    .filter((ele) => ele && ele.startsWith(startString))
    .map((ele) => ele.slice(startString.length))
    .join('-');
}
