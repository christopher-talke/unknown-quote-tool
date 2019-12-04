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
      database: 'uqt_db_staging',
      user: 'uqt',
      password: 'uqt-psql-db'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'uqt_migrations'
    }
  },
  production: {
    client: 'postgresql',
    connection: {
      database: 'uqt_db_production',
      user: 'uqt',
      password: 'uqt-psql-db'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'uqt_migrations'
    }
  }
};
