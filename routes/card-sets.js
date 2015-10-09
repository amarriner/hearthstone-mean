var express     = require('express');
var router      = express.Router();

var validSets   = require('../config/enums/card-sets').validSets;

router.route('/')
    .get(function(req, res) {
        res.json(validSets);
    });

module.exports = router;
