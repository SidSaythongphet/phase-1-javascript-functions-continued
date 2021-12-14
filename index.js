function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
saturdayFun("bathe my dog");

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}
mondayWork("work from home");

function wrapAdjective(prompt) {
    return function(adj = "special") {
        return `You are ${prompt}${adj}${prompt}!`
    }
}
wrapAdjective("*")("a hard worker");
wrapAdjective("||")("a dedicated programmer")