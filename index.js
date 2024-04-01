
const https = require('https');
const fs = require('fs');

const server = https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.crt')
}, (req, res) => {
  res.writeHead(200);
  res.end('Hello, world! I am secure :)');
});

server.listen(443, () => {
  console.log('Server running on https://mydomain.com');
});