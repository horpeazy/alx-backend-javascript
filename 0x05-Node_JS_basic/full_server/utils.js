import fs from 'fs';

function transformData(data) {
  let dataArray = data.split('\n');
  dataArray = dataArray.slice(1);
  dataArray = dataArray.filter((data) => data !== '');
  dataArray = dataArray.map((data) => data.split(','));
  return dataArray;
}

function extractStats(dataArray) {
  const dataStats = {};
  dataArray.forEach((data) => {
    const field = data[3];
    const name = data[0];
    if (Object.prototype.hasOwnProperty.call(dataStats, field)) {
      const names = dataStats[field];
      names.push(name);
    } else {
      dataStats[field] = [name];
    }
  });
  return dataStats;
}

const readDatabase = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      const dataArray = transformData(data);
      const dataStats = extractStats(dataArray);
      resolve(dataStats);
    }
  });
});

export default readDatabase;
