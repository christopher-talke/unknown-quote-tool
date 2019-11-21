const express = require('express');
const router = express.Router();

// Gets User Data
router.get('/get-user/:id', function(req, res, next) {
  res.json({ title: 'Express' });
});

module.exports = router;
