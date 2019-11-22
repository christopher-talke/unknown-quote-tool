const express = require('express');
const router = express.Router();

const { getOneUser, getAllUsers } = require('../controller/user');

// Gets All Users
router.get('/all', async (req, res, next) => {
  let data = await getAllUsers();
  res.json(data);
});

// Gets User Data
router.get('/:username', async (req, res, next) => {
  let data = await getOneUser(req.params.username);
  res.json(data);
});

module.exports = router;
