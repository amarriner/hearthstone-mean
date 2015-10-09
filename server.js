var express         = require('express');
var app             = express();
var mongoose        = require('mongoose');

var db              = require('./config/db');

mongoose.connect(db.url);

var port = process.env.PORT || 8080;

//
// API Routes
//
app.use('/api/classes', require('./routes/card-classes'));
app.use('/api/sets', require('./routes/card-sets'));
app.use('/api/cards', require('./routes/cards'));

app.use(express.static(__dirname + '/public'));

app.listen(port);

console.log('Server listening on port ' + port);
