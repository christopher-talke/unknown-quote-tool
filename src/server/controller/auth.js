const bcrypt = require('bcrypt');
const { getOneUser } = require('./user');

const errorMessage = {
  status: 401,
  error: `Your account or password is incorrect. If you don't remember your username or password, click here: !`
};

const authenticateUser = async (username, password) => {
  try {
    const user = await getOneUser(username, false);
    if (!user) {
      return {
        status: 401,
        error: `This username may be incorrect. Make sure you typed it correctly.`
      };
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return {
        status: 401,
        error: `Your account or password is incorrect. If you don't remember your username or password, click here: !`
      };
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

module.exports = { authenticateUser };
