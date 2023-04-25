export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const grades = newGrades
        .find((gradeOb) => gradeOb.studentId === student.id);
      const grade = grades ? grades : 'N/A';
      return { ...student, grade };
    });
}
