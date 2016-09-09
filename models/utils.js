var utils={};

utils.ReplacePropertiesFlat=function(fromObject,to){
    for(property in fromObject)
    {
        to[property]=fromObject[property];
    }
};

module.exports=utils;
