export default function getListStudentIds(studentsList) {
  if (!Array.isArray(studentsList)) return [];

  const idArray = studentsList.map((student) => student.id);
  return idArray;
}
