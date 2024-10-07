// Import the required packages
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('./db');
const app = express();

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies

// Register route
app.post('/register', (req, res) => {
  const { email, password, phone } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);
  db.query('INSERT INTO users (email, password, phone) VALUES (?, ?, ?)', [email, hashedPassword, phone], (err, result) => {
    if (err) return res.status(500).send('Database error');
    res.status(200).send('User registered');
  });
});

// Login route with role check
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  db.query('SELECT * FROM users WHERE email = ?', [email], (err, result) => {
    if (err) return res.status(500).send('Database error');
    if (result.length === 0) return res.status(404).send('User not found');

    const user = result[0];
    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) return res.status(401).send('Invalid password');

    // Create JWT token
    const token = jwt.sign({ id: user.id }, 'your_secret_key', { expiresIn: 86400 });

    // Send back the token and user info (including role)
    res.status(200).send({
      auth: true,
      token,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
      }
    });
  });
});

// Route to get a specific user's profile
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;

  db.query('SELECT * FROM users WHERE id = ?', [userId], (err, result) => {
    if (err) return res.status(500).send('Database error');
    if (result.length === 0) return res.status(404).send('User not found');

    res.status(200).json(result[0]);
  });
});

// Route to update a user's profile
app.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const { first_name, last_name, email, phone, birth_date, gender } = req.body;

  db.query(
    'UPDATE users SET first_name = ?, last_name = ?, email = ?, phone = ?, birth_date = ?, gender = ? WHERE id = ?',
    [first_name, last_name, email, phone, birth_date, gender, userId],
    (err, result) => {
      if (err) return res.status(500).send('Database error');
      res.status(200).send('Profile updated successfully');
    }
  );
});

// Fetch concerts route
app.get('/concerts', (req, res) => {
  db.query('SELECT * FROM concerts', (err, result) => {
    if (err) return res.status(500).send('Database error');
    res.status(200).json(result);
  });
});

// Start the server
app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});
