const knex = require('knex');

const config = {
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'user',
    password: 'uqt-psql-db',
    database: 'uqt-db',
    charset: 'utf8'
  }
};

const bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;
