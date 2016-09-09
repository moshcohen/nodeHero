var express = require('express');
var router = express.Router();
var models=require('../models');
var Hero=models.Hero;
var utils=models.utils;

router.get('/', function(req, res, next) {
    Hero.find()
    .then(function(doc){
        res.send(doc);
    });
});

router.post('/', function(req, res, next) {
    console.log(req.body);
    var data=new Hero(req.body);
    data.save();
    
    res.send("success");
});

router.put('/:id', function(req, res, next) {
    var id=req.params.id;
    Hero.findById(id,function(err,doc){
        if(err)
        {
            console.error('error');
        }
        utils.ReplacePropertiesFlat(req.body,doc);
        doc.save();
    });
    res.send(id+" updated");
});

router.delete('/:id', function(req, res, next) {
    console.log("entered");
    var id=req.params.id;
    Hero.findByIdAndRemove(id).exec();
    res.send(id+" deleted");
});

router.get('/?name=:name', function(req, res, next) {
    var name = req.params.name;
    Hero.find({'name':`/${name}/i`})
    .then(function(doc){
        res.send(doc);
    });
});


module.exports = router;
