var express = require('express');
var router  = express.Router();

var User    = require('../app/models/user');

/*
router.route('/')
    .get(function(req, res) {
        Deck.find(req.query, function(err, decks){
            if (err) {
                res.send(err);
            }

            res.json(decks);
        });
    })
    .post(function(req, res) {
        var deck = new Deck();
        deck.name = req.body.name;

        deck.save(function(error) {
            if (error) {
                res.send(err);
            }

            res.json(deck);
        })
    });

router.route('/:id')
    .get(function(req, res) {
        Deck.findById(req.params.id, function(err, deck) {
            if (err) {
                res.send(err);
            }

            res.json(deck);
        });
    });

module.exports = router;
*/
