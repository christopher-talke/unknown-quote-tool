'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'uqt',
      password: 'uqt-psql-db',
      database: 'uqt_db_dev'
    },
    migrations: {
      tableName: 'uqt_migrations',
      directory: `${__dirname}/db/migrations`
    },
    seeds: {
      directory: `${__dirname}/db/seeds`
    }
  },
  staging: {
    client: 'postgresql',
    connection: {
      database: '',
      user: '',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: ''
    }
  },
  production: {
    client: 'postgresql',
    connection: {
      database: '',
      user: '',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: ''
    }
  }
};
