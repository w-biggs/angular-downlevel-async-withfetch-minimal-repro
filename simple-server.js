const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Special route for test3.json - takes 5 seconds to respond
app.get('/test3.json', (req, res) => {
  setTimeout(() => {
    res.status(404).send('Not Found');
  }, 5000);
});

// All other routes respond with 404 immediately
app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

app.listen(port, () => {
  console.log(`Simple Express server listening on http://localhost:${port}`);
});
