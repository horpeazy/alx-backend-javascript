export default function createIteratorObject(report) {
  let departments = Object.keys(report.allEmployees);
  let employees = []
  for (let department of departments) {
    employees = [...employees, ...report.allEmployees[department]];
  }
  let index = 0;

  return {
    next() {
      if (index < employees.length) {
        return { value: employees[index++], done: false };
      } else {
        return { done: true };
      }
    },
    [Symbol.iterator]() {
      return this;
    }
  };
}
