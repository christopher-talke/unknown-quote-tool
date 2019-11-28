const knex = require('../config/database');
const bcrypt = require('bcrypt');
const { saltRounds } = require('../config/constants');

const getOneUser = async username => {
  // Query Database
  let data = await knex('users')
    .where('username', username)
    .first()
    .catch(e => console.log(e));

  // If a username couldn't be found, return an error.
  if (data === undefined) {
    data = { status: 404, message: 'User could not be found' };
  } else {
    delete data.password;
  }

  return data;
};

const getAllUsers = async () => {
  // Query Database
  let data = await knex('users')
    .select()
    .orderBy('username')
    .catch(e => console.log(e));

  // If users couldn't be found, return an error.
  if (data.length === 0) {
    data = {
      status: 404,
      message: 'There are currently no users registered'
    };
  } else {
    data = data.map(user => {
      delete user.password;
      return user;
    });
  }

  return data;
};

const registerNewUser = async data => {
  const { password, ...userData } = data;

  const checkForExisting = await getOneUser(userData.username);

  if (checkForExisting.status === 404) {
    const salt = await bcrypt.genSalt(saltRounds).catch(err => {
      throw Error(`Issue generating salt.\n${err}`);
    });

    userData.password = await bcrypt.hash(password, salt).catch(err => {
      throw Error(`Issue hashing password.\n${err}`);
    });

    await knex('users')
      .insert(userData)
      .catch(err => {
        throw Error(`Issue registering new user.\n${err}`);
      });

    delete userData.password;
  } else {
    return {
      status: 409,
      message: 'Username already exists'
    };
  }

  return userData;
};

module.exports = { getOneUser, getAllUsers, registerNewUser };
