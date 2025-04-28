let serverStarted = false;  // Flag to track whether the server has started

export default function handler(req, res) {
  if (!serverStarted) {
    // Return 404 for the first request (simulate the "cold start")
    serverStarted = true;  // Set the flag to true after the first call
    res.status(404).send('Server starting...');  // Simulate 404 on the first call
  } else {
    // After the first call, always return 200 with "Ready!"
    res.status(200).send('Ready!');
  }
}
