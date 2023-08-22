const fs  = require("fs");


function countStudents(path) {
  if (!fs.existsSync(path) || !fs.statsSync(path).isFile()) {
    throw new Error("Cannot load the database");
  }
  const data = fs.readFileSync(path, 'utf-8');
  const dataArray = transformData(data);
  const [dataStats, numberOfStudents] = extractStats(dataArray);
  console.log(`Number of students: ${numOfStudents}`);
  for (const field in dataStats) {
    if (dataStats.hasOwnProperty(field)) {
      let names = dataStats[field];
      const numOfNames = names.length;
      names = names.join(", ");
      console.log(`Number of students in ${field}: ${numOfNames}. List : ${names}`);
    }
  }
}

function transformData(data) { 
  let dataArray = data.split("\n");
  dataArray = dataArray.slice(1,)
  dataArray = dataArray.filter(data => data !== "");
  dataArray = dataArray.map((data) => data.split(","));
  return dataArray;
}

function extractStats(dataArray) {
  const dataStats = {}
  numOfStudents = 0;
  dataArray.forEach((data) => {
    const field = data[3];
    const name = data[0];
    if (dataStats.hasOwnProperty(field)) {
      const names = dataStats[field];
      names.push(name);
    } else {
      dataStats[field] = [name];
    }
    numOfStudents += 1;
  })
  return [dataStats, numOfStudents];
}


module.exports = countStudents;
