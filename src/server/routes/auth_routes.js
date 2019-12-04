const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { authenticateUser } = require('../controller/auth');

router.post('/login', async (req, res) => {
  // Destructure and authenticate user
  const { username, password } = req.body;
  const data = await authenticateUser(username, password);
  // If invalid, return with error
  if (data.status === 401) {
    return res.status(data.status).json(data);
  }
  // If valud, sign JWT
  const token = jwt.sign({ username: data.username }, 'CATS');
  // Create Cookie
  res.cookie('tkn', token, {
    httpOnly: true,
    maxAge: 432000000 // 5 Days
  });
  res.status(200).json(data);
});

router.get('/logout', async (_, res) => {
  res.clearCookie('tkn');
  res.status(200).json({
    message: 'true'
  });
});

module.exports = router;
