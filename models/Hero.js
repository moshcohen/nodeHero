
var mongoose=require('mongoose');
mongoose.Promise = global.Promise;

var Schema=mongoose.Schema;

var HeroSchema=new Schema({
    name:String,
    picture:String
},{ collection:'heroes'});

var Hero=mongoose.model('Hero',HeroSchema);

module.exports=Hero;
