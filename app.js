const express = require('express');
const app = express();
const itemsRouter = require('./routes/items');

const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the REST API!');
});

// Use the items router
app.use('/items', itemsRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});