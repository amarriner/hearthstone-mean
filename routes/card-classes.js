var express         = require('express');
var router          = express.Router();

var validClasses    = require('../config/enums/card-classes').validClasses;

router.route('/')
    .get(function(req, res) {
        res.json(validClasses);
    });

module.exports = router;
