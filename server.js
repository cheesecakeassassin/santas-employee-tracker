const express = require('express');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');
const startEmployeeTracker = require('./lib/Prompts');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use apiRoutes
app.use('/api', apiRoutes);

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// Start server after DB connection
db.connect(err => {
  if (err) throw err;
  app.listen(PORT, () => {
  });
});

console.log("Welcome to Santa's Employee Tracker!");
// Starts inquirer
startEmployeeTracker();