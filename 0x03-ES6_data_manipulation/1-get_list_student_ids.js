export default function getListStudentIds(lists) {
  if (Array.isArray(lists)) {
    return lists.map(({ id }) => id);
  }
  return [];
}
