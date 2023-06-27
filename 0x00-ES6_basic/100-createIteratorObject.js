export default function createIteratorObject(report) {
  const departments = Object.keys(report.allEmployees);
  let employees = [];
  for (const department of departments) {
    employees = [...employees, ...report.allEmployees[department]];
  }
  let index = 0;

  return {
    next() {
      let result;
      if (index < employees.length) {
        const current = index;
        index += 1;
        result = { value: employees[current], done: false };
      } else {
        result = { done: true };
      }
      return result;
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
