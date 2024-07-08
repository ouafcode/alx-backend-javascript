export default function iterateThroughObject(reportWithIterator) {
  const str = [];
  for (const report of reportWithIterator) {
    str.push(report);
  }
  return str.join(' | ');
}
