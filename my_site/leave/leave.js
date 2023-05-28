const express = require('express');
const app = express();
app.use(express.json());

// In-memory database for demo purposes only
const studentsDb = {
  john: {
    password: 'password',
    class: 'XII',
    dept: 'Science',
    leaves_taken: 3,
  },
};

// Register endpoint
app.post('/register', (req, res) => {
  const { username, password, class_, dept } = req.body;

  // Check if username already exists
  if (studentsDb[username]) {
    return res.status(400).json({ message: 'Username already exists' });
  }

  // Add user to the database
  studentsDb[username] = {
    password,
    class_,
    dept,
    leaves_taken: 0,
  };

  return res.status(200).json({ message: 'User registered successfully' });
});

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if user exists in the database
  if (!studentsDb[username]) {
    return res.status(400).json({ message: 'Invalid username' });
  }

  // Check if password is correct
  if (studentsDb[username].password !== password) {
    return res.status(400).json({ message: 'Incorrect password' });
  }

  return res.status(200).json({ message: 'Login successful' });
});

// Apply leave endpoint
app.post('/apply_leave', (req, res) => {
  const { username, leave_type, start_date, end_date } = req.body;

  // TODO: Validate input data and check for required documents

  // TODO: Generate leave application using a template

  // TODO: Implement leave validation process

  return res.status(200).json({ message: 'Leave application submitted successfully' });
});

// Start server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
