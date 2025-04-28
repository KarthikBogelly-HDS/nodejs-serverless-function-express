let serverStartTime = Date.now();  // Track the server start time

export default function handler(req, res) {
  const now = Date.now();
  const elapsedMs = now - serverStartTime;

  if (elapsedMs < 1500) {  // If server start time is less than 1.5 seconds
    res.status(404).send('Still starting...');  // Respond with 404
  } else {
    res.status(200).send('Ready!');  // After 1.5 seconds, respond with 200
  }
}
