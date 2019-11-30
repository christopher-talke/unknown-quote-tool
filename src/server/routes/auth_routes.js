const express = require('express');
const router = express.Router();

router.post('/login', async (req, res) => {
  req.session.uuid = 'adsfasdfasdf34324123432';
  req.session.save();
  res.send({ message: 'authenticated' });
});

router.get('/logout', async (req, res) => {
  req.session.destroy();
  res.json({
    message: 'Logged out'
  });
});

module.exports = router;
