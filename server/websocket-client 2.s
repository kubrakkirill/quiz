const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:3000'); // Assuming your server is running on localhost:3000

ws.on('open', function open() {
  console.log('WebSocket connection established');

  // Send a message to the server
  ws.send('Hello from the client!');
});

ws.on('message', function incoming(data) {
  console.log('Received message from server:', data);

  // Close the WebSocket connection after receiving a message
  ws.close();
});

ws.on('close', function close() {
  console.log('WebSocket connection closed');
});
