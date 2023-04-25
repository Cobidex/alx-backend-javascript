export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const grades = newGrades
        .filter((gradeOb) => student.id === gradeOb.studentId)
        .map((gradeOb) => gradeOb.grade)[0];
      const grade = grades ? grades : 'N/A';
      return { ...student, grade };
    });
}
