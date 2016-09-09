
var mongoose=require('mongoose');
mongoose.Promise = global.Promise;

var Schema=mongoose.Schema;

var MissionSchema=new Schema({
    name : String,
    assignee : String,
    assigner : String,
    target : String,
    parentMission : String,
    childMissions : [],
    startTime : Date,
    initialEndTime : Date,
    actualEndTime : Date,
    reward : String,
},{ collection:'missions'});

var Mission=mongoose.model('Mission',MissionSchema);

module.exports=Mission;
