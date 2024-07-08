export default function getStudentsByLocation(std, locat) {
  return std.filter(({ location }) => location === locat);
}
