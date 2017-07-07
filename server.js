/* jshint esversion: 6 */

const net = require('net');
const fs = require('fs');

let index = fs.readFileSync('./index.html');
let hydrogen = fs.readFileSync('./hydrogen.html');
let helium = fs.readFileSync('./helium.html');
let error404 = fs.readFileSync('./404.html');
let css = fs.readFileSync('./css/styles.css');


function writeHeader(status, fileType, fileName) {
  return `HTTP/1.1 ${status}
Date: ${new Date()};
Content-Type: ${fileType}; charset=utf-8
Content-Length: ${fileName.length}


${fileName}`;
}

const server = net.createServer( (request) => {

  request.on('data', (data) => {


    let headers = data.toString().split('\n');
    let requestMethod = headers[0].split(' ');
    let pathName = requestMethod[1];

    switch (pathName) {

      case '/':
      request.write(writeHeader('OK', 'text/html', index));
      request.end();
      break;

      case '/index.html':
      request.write(writeHeader('OK', 'text/html', index));
      request.end();
      break;

      case '/hydrogen.html':
      request.write(writeHeader('OK', 'text/html', hydrogen));
      request.end();
      break;

      case '/helium.html':
      request.write(writeHeader('OK', 'text/html', helium));
      request.end();
      break;

      case '/css/styles.css':
      request.write(writeHeader('OK', 'text/CSS', css));
      break;

      default:
      request.write(writeHeader('404', 'text/html', error404));
      request.end();

    }
  });

});


server.listen({port: 8080}, () => {
  console.log(server.address());
});



