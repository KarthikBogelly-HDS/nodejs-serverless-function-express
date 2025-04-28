let isColdStart = true;  // Track cold start for each function call

export default function handler(req, res) {
  if (isColdStart) {
    // First call will simulate the cold start, returning 404 for the first 1.5 seconds
    isColdStart = false;  // Set this to false after first request to stop cold start behavior
    res.status(404).send('Server starting...');
    
    // Set a timer to allow the server to be "ready" after 1.5 seconds
    setTimeout(() => {
      isColdStart = true;  // Reset for the next call
    }, 1500);
    
  } else {
    // After 1.5 seconds, always return 200
    res.status(200).send('Ready!');
  }
}
