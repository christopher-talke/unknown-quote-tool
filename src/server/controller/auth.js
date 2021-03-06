const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { getOneUser } = require('./user');

const ERROR_INCORRECT = {
  status: 401,
  error: `Your account or password is incorrect. If you don't remember your username or password!`
};

const ERROR_UNAUTHORISED = {
  status: 401,
  error: `Not authorised, please login first!`
};

const verifyToken = async (req, _, next) => {
  // Check for JWT
  const { tkn } = req.cookies;
  // Verify token and attach to req object
  if (tkn) {
    const { username } = jwt.verify(tkn, 'CATS');
    req.username = username;
  }
  // Finish Middleware
  next();
};

const verifyUser = async (req, res, next) => {
  // Check for username, handle error
  if (!req.username) {
    res.json(ERROR_UNAUTHORISED);
    return;
  }
  // Find user
  const user = await getOneUser(req.username);
  // Destructure user
  const { password, isActive, ...rest } = user;
  // Attach user to req object
  req.user = rest;
  // Finish middleware
  next();
};

const authenticateUser = async (username, password) => {
  try {
    const user = await getOneUser(username, false);
    if (!user) {
      return ERROR_INCORRECT;
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return ERROR_INCORRECT;
    }
    delete user.password;
    return user;
  } catch (error) {
    return {
      status: 500,
      error: `Internal Server Error, something broke!`
    };
  }
};

module.exports = { authenticateUser, verifyUser, verifyToken };
