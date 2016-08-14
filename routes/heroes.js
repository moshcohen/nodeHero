var express = require('express');
var router = express.Router();
var Hero=require('../models').Hero;

/* GET users listing. */
router.get('/', function(req, res, next) {
    Hero.find()
    .then(function(doc){
        res.send(doc);
    });
});

module.exports = router;
