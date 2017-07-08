/* jshint esversion: 6 */
const net = require('net');


let args = process.argv;
console.log(args)



const client = net.connect({port: 8080}, () => {
  console.log('Connected');





  // Write to server
  process.stdin.on('data', (data) => {


  });

  // receive from server
  client.on('data', (data) => {



  })

});
