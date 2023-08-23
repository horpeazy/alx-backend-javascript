const http = require('http');
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
  let numOfStudents = 0; // Declare numOfStudents using let
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

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      const dataArray = transformData(data);
      const [dataStats, numberOfStudents] = extractStats(dataArray);
      const response = [];
      response.push(`Number of students: ${numberOfStudents}`);
      for (const field in dataStats) {
        if (Object.prototype.hasOwnProperty.call(dataStats, field)) {
          let names = dataStats[field];
          const numOfNames = names.length;
          names = names.join(', ');
          response.push(`Number of students in ${field}: ${numOfNames}. List: ${names}`);
        }
      }
      resolve(response.join('\n'));
    }
  });
});

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.write(Buffer.from('Hello Holberton School!'));
  }
  if (req.url === '/students') {
    try {
      const result = await countStudents(process.argv[2]);
      res.write(Buffer.from('This is the list of our students\n'));
      res.write(Buffer.from(result));
      res.end();
    } catch (err) {
      res.end('This is the list of our students\n');
    }
  }
});

const port = 1245;

app.listen(port);
