
var mongoose=require('mongoose');
mongoose.Promise = global.Promise;

var Schema=mongoose.Schema;

var MissionSchema=new Schema({
    name : String,
    assignee : String,
    assigner : String,
    target : String,
    parentMission : String,
    childMissions : String[],
    startTime : Date,
    initialEndTime : Date,
    actualEndTime : Date,
    reward : number,
},{ collection:'missions'});

var Mission=mongoose.model('Mission',MissionSchema);

module.exports=Mission;
