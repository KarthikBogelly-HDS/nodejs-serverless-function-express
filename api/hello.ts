export default function handler(req, res) {
  res.status(404).send('Server starting...');  // Return 404 immediately
  
  // Set a timeout to return 200 after 1 second
  setTimeout(() => {
    res.status(200).send('Ready!');
  }, 1000);  // 1 second delay
}
