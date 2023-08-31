const express = require('express');
const app = express();

// Define a route that responds with "Hello" in JSON format
app.get('/hello', (req, res) => {
  const response = { message: 'Hello' };
  res.json(response);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
