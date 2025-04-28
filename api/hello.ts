export default function handler(req, res) {
  const currentRequestTime = Date.now();
  const coldStartDuration = 1500; // 1.5 seconds

  // Simulate the "cold start" by waiting for 1.5 seconds on each request
  if (currentRequestTime % coldStartDuration < coldStartDuration) {
    res.status(404).send('Server starting...');
  } else {
    res.status(200).send('Ready!');
  }
}
