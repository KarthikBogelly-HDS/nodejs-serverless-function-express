export default function handler(req, res) {
  const startTime = Date.now();

  // Simulate the delay (cold start) for the first 1.5 seconds
  setTimeout(() => {
    const elapsed = Date.now() - startTime;
    
    if (elapsed < 1500) {
      res.status(404).send('Server starting...');
    } else {
      res.status(200).send('Ready!');
    }
  }, 1500);  // Delay by 1.5 seconds before responding
}
