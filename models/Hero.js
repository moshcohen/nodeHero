var mongoUrl=require('./mongoUrl');
var mongoose=require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(mongoUrl);

var Schema=mongoose.Schema;

var HeroSchema=new Schema({
    id:Number,
    name:String,
    picture:String
},{ collection:'heroes'});

var Hero=mongoose.model('Hero',HeroSchema);

module.exports=Hero;
