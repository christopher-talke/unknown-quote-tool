const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const authRoutes = require('./routes/auth_routes');
const userRoutes = require('./routes/user_routes');

const app = express();

app.use(logger('dev'));
app.use(cors({ credentials: true, origin: 'http://localhost:8080' }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/user', userRoutes);

module.exports = app;
