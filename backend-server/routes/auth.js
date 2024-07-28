import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from '../db.js';
import { authenticateToken } from '../middleware/authmiddleware.js';

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

try {
    const result = await pool.query(
        'insert into users(username, email, password) values ($1, $2, $3) returning *', 
        [username, email, hashedPassword]
    );
    res.status(201).json(result.rows[0]);
}
catch(error) {
    console.error("Error inserting user:", error);
    res.status(500).json({error : "Database error"});
}
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (result.rows.length === 0) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const user = result.rows[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user.id }, 'vishnu79', { expiresIn: '1h' });
    res.json({token, user});
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ error: 'Database error' });
  }
});

router.get("/user", authenticateToken, async (req, res) => {

  console.log('Received request for /user with headers:', req.headers);
  console.log('User ID from token:', req.user.id);

try {
  const result = await pool.query("select id, username, email from users where id = $1", [req.user.id]);
  if(result.rows.length === 0) {
    return res.status(404).json({error : 'User not found'});
  }
  res.json(result.rows[0]);
}
 catch(error) {
  console.error("Error fetching user data:", error);
  res.status(500).json({error : 'Database error'});
 }
});

// router.post("/logout", authenticateToken, async (req, res) => {
//   try {
//     req.user.token = null;

//     res.status(200);
//   }
//   catch(error) {
//     console.error(error);
//     res.status(500);
//   }
// })

export default router;
