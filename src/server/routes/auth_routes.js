const express = require('express');
const router = express.Router();

router.post('/login', async (req, res) => {
  req.session.uuid = 'adsfasdfasdf34324123432';
  req.session.save();
  res.redirect('/api/v1/user/all');
});

router.get('/logout', async (req, res) => {
  req.session.destroy();
  res.json({
    message: 'Logged out'
  });
});

module.exports = router;
