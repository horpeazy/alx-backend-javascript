const fs = require('fs');

function transformData(data) {
  let dataArray = data.split('\n');
  dataArray = dataArray.slice(1);
  dataArray = dataArray.filter((data) => data !== '');
  dataArray = dataArray.map((data) => data.split(','));
  return dataArray;
}

function extractStats(dataArray) {
  const dataStats = {};
  let numOfStudents = 0;
  dataArray.forEach((data) => {
    const field = data[3];
    const name = data[0];
    if (Object.prototype.hasOwnProperty.call(dataStats, field)) {
      const names = dataStats[field];
      names.push(name);
    } else {
      dataStats[field] = [name];
    }
    numOfStudents += 1;
  });
  return [dataStats, numOfStudents];
}

function countStudents(path) {
  if (!fs.existsSync(path) || !fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }
  const data = fs.readFileSync(path, 'utf-8');
  const dataArray = transformData(data);
  const [dataStats, numberOfStudents] = extractStats(dataArray);
  console.log(`Number of students: ${numberOfStudents}`);
  for (const field in dataStats) {
    if (Object.prototype.hasOwnProperty.call(dataStats, field)) {
      let names = dataStats[field];
      const numOfNames = names.length;
      names = names.join(', ');
      console.log(`Number of students in ${field}: ${numOfNames}. List: ${names}`);
    }
  }
}

module.exports = countStudents;
