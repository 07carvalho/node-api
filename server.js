const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// starting app
const app = express();

// starting db
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});
requireDir('./src/models');

// route
app.get('/', (req, res) => {
	return res.send('Hello Rocketseat');
});

app.listen(3001);

