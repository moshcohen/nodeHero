var express = require('express');
var router = express.Router();
var models=require('../models');
var Mission=models.Mission;
var utils=models.utils;

router.get('/', function(req, res, next) {
    Mission.find()
    .then(function(doc){
        res.send(doc);
    });
});

router.post('/', function(req, res, next) {
    console.log(req.body);
    var data=new Mission(req.body);
    data.save();
    res.send("success");
});

router.put('/:id', function(req, res, next) {
    var id=req.params.id;
    Mission.findById(id,function(err,doc){
        if(err)
        {
            console.error('error');
        }
        utils.ReplacePropertiesFlat(req.body,doc);
        doc.save();
    });
    res.send(id+" updated");
});

router.delete('/:id', function(req, res, next) {//TODO: remove in hero too
    console.log("entered");
    var id=req.params.id;
    Mission.findByIdAndRemove(id).exec();
    res.send(id+" deleted");
});

router.get('/?name=:name', function(req, res, next) {
    var name = req.params.name;
    Mission.find({'name':`/${name}/i`})
    .then(function(doc){
        res.send(doc);
    });
});

module.exports = router;
