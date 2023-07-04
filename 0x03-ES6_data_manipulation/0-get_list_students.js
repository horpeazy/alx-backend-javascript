export default function getListStudents() {
  const listOfStudents = [];
  const guillaume = { id: 1, firstName: 'Guillaume', location: 'San Francisco' };
  const james = { id: 2, firstName: 'James', location: 'Columbia' };
  const serena = { id: 5, firstName: 'Serena', location: 'San Francisco' };

  listOfStudents.push(guillaume);
  listOfStudents.push(james);
  listOfStudents.push(serena);

  return listOfStudents;
}
