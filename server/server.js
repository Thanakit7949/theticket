const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('./db');
const app = express();

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies

app.post('/register', (req, res) => {
  const { email, password, phone } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);
  db.query('INSERT INTO users (email, password, phone) VALUES (?, ?, ?)', [email, hashedPassword, phone], (err, result) => {
    if (err) return res.status(500).send('Database error'); // Handle errors properly
    res.status(200).send('User registered');
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  db.query('SELECT * FROM users WHERE email = ?', [email], (err, result) => {
    if (err) return res.status(500).send('Database error'); // Handle errors properly
    if (result.length === 0) return res.status(404).send('User not found');
    const user = result[0];
    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) return res.status(401).send('Invalid password');
    const token = jwt.sign({ id: user.id }, 'your_secret_key', { expiresIn: 86400 });
    res.status(200).send({ auth: true, token });
  });
});

app.get('/concerts', (req, res) => {
  db.query('SELECT * FROM concerts', (err, result) => {
    if (err) return res.status(500).send('Database error'); // Handle errors properly
    res.status(200).json(result);
  });
});

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});
