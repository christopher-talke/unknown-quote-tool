module.exports = {
  saltRounds: 12,
  sessionConfig: {
    secret: 'development',
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: true,
      maxAge: 30 * 24 * 60 * 60 * 1000
    }
  }
};
