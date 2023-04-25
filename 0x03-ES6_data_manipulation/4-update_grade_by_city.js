export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeOb = newGrades.find((grade) => grade.studentId === student.id);
      const grade = gradeOb ? gradeOb.grade : 'N/A';
      return { ...student, grade };
    });
}
