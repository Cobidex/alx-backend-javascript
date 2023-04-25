export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeOb = newGrades
        .filter((gradeOb) => student.id === gradeOb.studentId)
        .map((gradeOb) => gradeOb.grade)[0];
      const grade = gradeOb ? gradeOb : 'N/A';
      return { ...student, grade };
    });
}
