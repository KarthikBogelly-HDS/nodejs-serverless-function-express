export default function handler(req, res) {
  // Delay for 1 second before sending the 200 response
  setTimeout(() => {
    res.status(200).send('Ready!');
  }, 1000); // 1 second delay
}
