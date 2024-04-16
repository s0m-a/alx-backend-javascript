function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }

  return students
    .filter(student => student.location === city)
    .map(student => {
      const gradeObj = newGrades.find(grade => grade.studentId === student.id);
      const grade = gradeObj ? gradeObj.grade : 'N/A';

      return {
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: grade
      };
    });
}

export default updateStudentGradeByCity;
