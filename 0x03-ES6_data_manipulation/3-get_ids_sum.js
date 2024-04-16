export default function getStudentIdsSum(students) {
  if (Array.isArray(students)) {
    return students.reduce(
      (prev, curr) => typeof prev === 'object' ? prev.id + curr.id : prev + curr.id,
      0
    );
  }
  return 0;
}
