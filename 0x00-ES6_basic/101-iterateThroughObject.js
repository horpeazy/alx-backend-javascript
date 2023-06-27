export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  for (const employeeName of reportWithIterator) {
    result += `${employeeName} | `;
  }
  return result.slice(0, -3);
}
