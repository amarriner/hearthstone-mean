var express         = require('express');
var bodyParser      = require('body-parser');
var app             = express();
var mongoose        = require('mongoose');
var passport        = require('passport');
var LocalStrategy   = require('passport-local').Strategy;
var jwt             = require('jsonwebtoken');

var db              = require('./config/db');
var User            = require('./app/models/user');

var secret          = "fuwheiu2h398d298hdoweinlwkneckiwyci8yo43hroiqw";

mongoose.connect(db.url);

var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//
// API Routes
//
app.use('/api/classes', require('./routes/card-classes'));
app.use('/api/sets', require('./routes/card-sets'));
app.use('/api/cards', require('./routes/cards'));

app.use(passport.initialize());

passport.use(new LocalStrategy(
    function(username, password, done) {

        User.findOne({ username: username }, function (err, user) {
            if (err) {
                return done(err);
            }

            if (! user) {
                return done(null, false, { message: 'Incorrect username' });
            }

            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Incorrect password' });
            }

            return done(null, user);
        });
    }
));

app.post('/login', function(req, res, next) {

    if (req.headers.authorization) {

        try {
            var payload = jwt.verify(req.headers.authorization, secret);
        }
        catch(e) {
            res.statusCode = 401;
            res.json({"message": "Token expired or invalid"});
            return;
        }

        res.json({"username": payload.username, "token": jwt.sign({"username": payload.username}, secret, { expiresIn: "24h" })});
        return;
    }

    passport.authenticate('local', function(err, user, info) {

        if (err) {
            res.statusCode = 400;
            res.json(err);
            return;
        }

        if (!user) {
            res.statusCode = 401;
            res.json({"message": info.message});
            return;
        }

        res.json({"username": user.username, "token": jwt.sign({"username": user.username}, secret, { expiresIn: "24h" })});
    })(req, res, next);
});

app.use(express.static(__dirname + '/public'));

app.listen(port);

console.log('Server listening on port ' + port);
