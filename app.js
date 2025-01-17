const express = require('express');
const dotenv = require('dotenv');
const router = require('./routes');
const db=require('./db/index');
const cors = require('cors');
const app = express();


dotenv.config();
const port = process.env.PORT;
// Middleware to parse incoming JSON requests
app.use(express.json());
app.use(cors());

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.use('/FD',router)



// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
