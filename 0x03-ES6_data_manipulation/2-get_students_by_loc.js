export default function getStudentsByLocation(students, city) {
  if (Array.isArray(students)) {
    return students.filter((student) => student.location === city).map((student) => student.name);
  }
  return [];
}
