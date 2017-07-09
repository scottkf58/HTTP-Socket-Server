
/* jshint esversion: 6 */

const net = require('net');

let host = process.argv[2];


const client = net.connect({port: 8080}, host, () => {
  console.log('Connected');
});


client.write(`GET / HTTP/1.1
Date: ${new Date()}
Host: ${host}
User-Agent: Scott`);

client.on('data', (data) => {

  process.stdout.write(data);
});

client.on('close', () => {
  console.log("Connection Closed");
});






