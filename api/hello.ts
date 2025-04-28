export default function handler(req, res) {
  // Send initial 404 response
  res.status(404).send('Server starting...');

  // Use a timeout to simulate the 1-second delay before sending the 200 status
  setTimeout(() => {
    // Trigger another response with status 200 after 1 second
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Ready!');
  }, 1000); // 1 second delay
}
