const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');

const { sessionConfig } = require('./config/constants');
const authRoutes = require('./routes/auth_routes');
const userRoutes = require('./routes/user_routes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sessionConfig));

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/user', userRoutes);

module.exports = app;
