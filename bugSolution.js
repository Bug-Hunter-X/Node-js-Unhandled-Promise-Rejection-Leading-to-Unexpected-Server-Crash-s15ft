const http = require('http');

const requestListener = async (request, response) => {
  try {
    response.writeHead(200);
    response.end('Hello, World!');
  } catch (error) {
    console.error('Error handling request:', error);
    response.writeHead(500);
    response.end('Internal Server Error');
  }
};

const server = http.createServer(requestListener);

server.listen(8080);
console.log('Server is running on port 8080');

// Simulate a promise rejection elsewhere in the code to demonstrate the issue.  
//Remove this part in real-world application and add your own promise handling. 
(async () => {
  try {
    await someAsyncOperationThatMightFail(); 
  } catch (error) {
    console.error('Unhandled promise rejection:', error);
  }
})();

async function someAsyncOperationThatMightFail() {
  // Simulate an error 
  throw new Error('Simulated async operation error');
} 