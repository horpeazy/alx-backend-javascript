const fs  = require("fs");


const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error("Cannot load the database"));
    }
    const dataArray = transformData(data);
    const [dataStats, numberOfStudents] = extractStats(dataArray);
    let response = []
    response.push(`Number of students: ${numOfStudents}`);
    for (const field in dataStats) {
      if (dataStats.hasOwnProperty(field)) {
        let names = dataStats[field];
        const numOfNames = names.length;
        names = names.join(", ");
        response.push(`Number of students in ${field}: ${numOfNames}. List : ${names}`);
      }
    }
   console.log(response.join("\n"))
   resolve(true);
  })
});

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
