const express = require('express');
const router = express.Router();

const knex = require('../config/database');

// Gets User Data
router.get('/:username', async (req, res, next) => {
  const data = await knex('users')
    .where('username', req.params.username)
    .first();

  delete data.password;

  res.json(data);
});

module.exports = router;
