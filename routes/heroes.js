var express = require('express');
var router = express.Router();
var Hero=require('../models').Hero;

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
        ReplacePropertiesFlat(req.body,doc);
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


function ReplacePropertiesFlat(fromObject,to){
    for(property in fromObject)
    {
        to[property]=fromObject[property];
    }
}

module.exports = router;
