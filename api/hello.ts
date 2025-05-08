let coldStartTimestamp = null;  // Keeps track of the initial timestamp

export default function handler(req, res) {
  // Initialize the cold start timestamp when the function is first invoked
  if (!coldStartTimestamp) {
    coldStartTimestamp = Date.now();
  }

  // Check how much time has passed since the first invocation
  const elapsedTime = Date.now() - coldStartTimestamp;

  // If it's within the first 1 second, return a 404 response
  if (elapsedTime < 1500) {
    res.status(204).send('Server starting...');
  } else {
    // After 1 second, return 200
    res.status(200).send('Ready!');
  }
}
