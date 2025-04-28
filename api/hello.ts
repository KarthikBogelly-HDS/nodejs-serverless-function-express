let serverStartTime = Date.now();  // Track the server start time

export default function handler(req, res) {
  const now = Date.now();
  const elapsedMs = now - serverStartTime;

  if (elapsedMs < 1500) {  // If server has been running for less than 1.5 seconds
    res.status(404).send('Server starting...');
  } else {
    res.status(200).send('Ready!');
  }
}
