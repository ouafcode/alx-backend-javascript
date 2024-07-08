export default function getStudentIdsSum(lists) {
  return lists.reduce((acc, cur) => acc + cur.id, 1);
}
