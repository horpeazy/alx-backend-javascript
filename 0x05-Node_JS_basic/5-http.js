const http = require('http');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    try {
      res.write('This is the list of our students');
      res.end();
    } catch (err) {

    }
  }
});

const port = 1245;

app.listen(port);
