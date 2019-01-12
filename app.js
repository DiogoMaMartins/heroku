const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
var config = require('./config');
app.use(cors());

mongoose.connect(config.database);
app.set('superNode-auth', config.configName);

const userRoutes = require('./app/routes/user');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());




app.use('/user', userRoutes);

app.use((req, res, next) => {
	const error = new Error('Not found');
	error.status = 404;
	next(error);
})

app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message
		}
	});
})

module.exports = app;