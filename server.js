var express         = require('express');
var app             = express();
var mongoose        = require('mongoose');

var db              = require('./config/db');
var cards           = require('./routes/cards');

mongoose.connect(db.url);

var port = process.env.PORT || 8080;

app.use('/api/cards', cards);
app.use(express.static(__dirname + '/public'));

app.listen(port);

console.log('Server listening on port ' + port);
