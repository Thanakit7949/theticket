// Import the required packages
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('./db');
const multer = require('multer');
const path = require('path');
const app = express();

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies
// ให้บริการไฟล์ในโฟลเดอร์ uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ตั้งค่า storage สำหรับ multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // กำหนด folder สำหรับเก็บไฟล์
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // ตั้งชื่อไฟล์ใหม่
  },
});

const upload = multer({ storage });

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

app.post('/uploads', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const imageUrl = `http://localhost:3001/uploads/${req.file.filename}`;
  const userId = req.body.userId; // สมมุติว่าคุณส่ง userId มาด้วย

  if (!userId) {
    return res.status(400).send('User ID is required.');
  }

  db.query('UPDATE users SET profile_image = ? WHERE id = ?', [imageUrl, userId], (err, result) => {
    if (err) {
      console.error('Error updating profile_image:', err);
      return res.status(500).send('Database error');
    }
    res.status(200).send({ imageUrl });
  });
});

// Route to update a user's profile
app.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const { first_name, last_name, email, phone, birth_date, gender, profile_image } = req.body;

  db.query(
    'UPDATE users SET first_name = ?, last_name = ?, email = ?, phone = ?, birth_date = ?, gender = ?, profile_image = ? WHERE id = ?',
    [first_name, last_name, email, phone, birth_date, gender, profile_image, userId],
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
