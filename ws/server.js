var express = require('express');
var app = express();
var api = require("./public/controllers/api.js");
var bodyParser = require('body-parser');
var mongoose =  require('mongoose');
	http = require('http');
	path = require('path');

app.set('port',process.env.PORT || 9090);
app.listen(9090);
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


mongoose.connect('mongodb://localhost/Wallpaper',function(err)
{
	if (err) {
		console.log("error connection");
	}
	if (!err) {
		console.log('OK');
	}
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

// set up the RESTful API, handler methods are defined in api.js
app.post('/image',api.post);

app.get('/list',api.list);


