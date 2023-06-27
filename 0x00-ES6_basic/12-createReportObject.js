export default function createReportObject(employeesList) {
  const reportObject = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments() {
      const departments = Object.keys(employeesList);
      return departments.length;
    },
  };

  return reportObject;
}
