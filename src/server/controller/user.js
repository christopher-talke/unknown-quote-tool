const knex = require('../config/database');

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
    data = { status: 404, message: 'There are currently no users registered' };
  } else {
    data = data.map(user => {
      delete user.password;
      return user;
    });
  }

  return data;
};

module.exports = { getOneUser, getAllUsers };
