const express = require('express');
const app = express();

app.get('/current-date', (req, res) => {
  const currentDate = new Date().toISOString();
  res.json({ currentDate });
});

// Use the provided Vercel port or default to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
