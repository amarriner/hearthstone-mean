var express = require('express');
var router  = express.Router();

var Card    = require('../app/models/card');

router.route('/')
    .get(function(req, res) {
        Card.find(req.query, function(err, cards){
            if (err) {
                res.send(err);
            }

            res.json(cards);
        });
    });

router.route('/:id')
    .get(function(req, res) {
        Card.findById(req.params.id, function(err, card) {
            if (err) {
                res.send(err);
            }

            res.json(card);
        });
    });

module.exports = router;
