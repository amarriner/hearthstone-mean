var express         = require('express');
var app             = express();
var mongoose        = require('mongoose');

var db              = require('./config/db');
var Card            = require('./app/models/card');

mongoose.connect(db.url);

var port = process.env.PORT || 8080;

var router = express.Router();
router.use(function(req, res, next) {
    console.log('Something is happening');
    next();
});

router.route('/cards')
    .get(function(req, res) {
        Card.find(function(err, cards){
            if (err) {
                res.send(err);
            }

            res.json(cards);
        });
    });

router.route('/cards/:id')
    .get(function(req, res) {
        Card.findById(req.params.id, function(err, card) {
            if (err) {
                res.send(err);
            }

            res.json(card);
        });
    });

router.get('/', function(req, res) {
    res.json({ message: 'It works...'});
});

app.use('/', router);
app.listen(port);

console.log('Server listening on port ' + port);
