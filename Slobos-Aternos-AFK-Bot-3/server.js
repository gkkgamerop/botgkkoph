const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('AFK Bot is running!');
});

app.listen(3000, () => {
  console.log('Web server is running on port 3000');
});
