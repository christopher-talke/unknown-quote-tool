const express = require('express');
const router = express.Router();
const { authenticateUser } = require('../controller/auth');

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const data = await authenticateUser(username, password);
  if (data.status === 401) {
    res.status(data.status).json(data);
  } else {
    res.status(200).json(data);
  }
});

router.get('/logout', async (req, res) => {
  req.session.destroy();
  res.json({
    message: 'Logged out'
  });
});

module.exports = router;
