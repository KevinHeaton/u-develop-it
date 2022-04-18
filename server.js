const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middlesware
app.use(express.urlencoded({ extend: false}));

app.use(express.json());


// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});