const express = require('express');

const app = express();

let port = 3000;
const portArg = process.argv[2];
if (portArg !== undefined && !Number.isNaN(parseInt(portArg, 10))) {
  port = parseInt(portArg, 10);
}

app.get('/', (req, res) => {
  res.send('<h1>Hello Express!</h1>');
});

app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});
