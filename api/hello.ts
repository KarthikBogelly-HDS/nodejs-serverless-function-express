let serverStartTime = Date.now();  // Track when the function was first invoked

export default function handler(req, res) {
  const now = Date.now();
  const elapsedMs = now - serverStartTime;

  if (elapsedMs < 1500) {  // Check if less than 1.5 seconds have passed
    res.status(404).send('Server starting...');  // Return 404 during cold start
  } else {
    res.status(200).send('Ready!');  // Return 200 after warm-up period
  }
}
