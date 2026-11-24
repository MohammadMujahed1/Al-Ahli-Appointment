// Express application: security headers, CORS, JSON body, routes, errors.
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const config = require('./config/env');
const apiRoutes = require('./routes');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(helmet());
app.use(cors({ origin: config.corsOrigin }));
app.use(express.json({ limit: '100kb' }));

app.use('/api/v1', apiRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
