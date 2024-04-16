// Import the express module
const express = require('express');
// Create an instance of the express application
const app = express();
// Import the catsRouter module
const catsRouter = require('./routes/cats.router');

// Middleware to parse JSON bodies
app.use(express.json());

// Mount the catsRouter at the '/cats' endpoint
app.use('/cats', catsRouter);

// Route handler for the root endpoint
app.get('/', (req, res) => {
  // Send 'Hello World!' as the response
  res.send('Hello World!');
});

// Start the server
const PORT = process.env.PORT || 3000; // Define the port number
app.listen(PORT, () => {
  // Callback function executed when the server starts
  console.log(`Server is running on port ${PORT}`);
});
