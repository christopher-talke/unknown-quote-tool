const express = require('express');
const router = express.Router();
const { verifyUser, verifyToken } = require('../controller/auth');
const { getOneUser, getAllUsers, registerNewUser } = require('../controller/user');

// Gets Logged In User, requires auth
router.get('/', verifyToken, verifyUser, async (req, res) => {
  res.json(req.user);
});

// Gets All Users, requires auth
router.get('/all', verifyToken, verifyUser, async (_, res) => {
  let data = await getAllUsers();
  if (data.status === 404) res.status(404);
  res.json(data);
});

// Gets User Data, requiers auth
router.get('/:username', verifyToken, verifyUser, async (req, res) => {
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

// Register New User, requires auth and admin access
router.post('/register', verifyToken, verifyUser, async (req, res) => {
  const data = await registerNewUser(req.body);
  if (data.status === 409) res.status(409);
  res.json(data);
});

// Trigger Password Reset, requires username or email
router.post('/forgot-password', async (req, res) => {
  return;
});

// Change Password, requires auth and current password
router.post('/change-password', verifyToken, verifyUser, async (req, res) => {
  return;
});

// Reset Password, requires temporary UUID
router.post('/reset-forgotten-password', async (req, res) => {
  return;
});

module.exports = router;
