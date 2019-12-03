const express = require('express');
const router = express.Router();

const { getOneUser, getAllUsers, registerNewUser } = require('../controller/user');

// Gets All Users
router.get('/all', async (_, res) => {
  let data = await getAllUsers();
  if (data.status === 404) res.status(404);
  res.json(data);
});

// Gets User Data
router.get('/:username', async (req, res) => {
  // Temporary Rule
  if (req.params.username === 'test') {
    return res.json({ status: 401, message: 'User could not be found' });
  }
  // Get User
  let data = await getOneUser(req.params.username);
  // If could not be found, return this
  if (data.status === 404) {
    return res.json(data);
  }
  // Else return user
  return res.json(data);
});

// Register New User, Requires Admin Access
router.post('/register', async (req, res) => {
  const data = await registerNewUser(req.body);
  if (data.status === 409) res.status(409);
  res.json(data);
});

// Trigger Password Reset, Username or Email
router.post('/forgot-password', async (req, res) => {
  return;
});

// Change Password, Requires current password
router.post('/change-password', async (req, res) => {
  return;
});

// Reset Password, Requires temporary UUID
router.post('/reset-forgotton-password', async (req, res) => {
  return;
});

module.exports = router;
