export default function updateStudentGradeByCity(lists, city, newGrades) {
  return lists
    .filter(({ location }) => location === city)
    .map((student) => {
      const gradeTraget = newGrades.find(({ studentId }) => studentId === student.id);
      const grade = gradeTraget ? gradeTraget.grade : 'N/A';
      return { ...student, grade };
    });
}
