gdjs.ScoreSubmitCode = {};
gdjs.ScoreSubmitCode.GDbgObjects1= [];
gdjs.ScoreSubmitCode.GDbgObjects2= [];
gdjs.ScoreSubmitCode.GDbgObjects3= [];
gdjs.ScoreSubmitCode.GDbtnObjects1= [];
gdjs.ScoreSubmitCode.GDbtnObjects2= [];
gdjs.ScoreSubmitCode.GDbtnObjects3= [];
gdjs.ScoreSubmitCode.GDnameObjects1= [];
gdjs.ScoreSubmitCode.GDnameObjects2= [];
gdjs.ScoreSubmitCode.GDnameObjects3= [];
gdjs.ScoreSubmitCode.GDsubmitObjects1= [];
gdjs.ScoreSubmitCode.GDsubmitObjects2= [];
gdjs.ScoreSubmitCode.GDsubmitObjects3= [];


gdjs.ScoreSubmitCode.mapOfGDgdjs_46ScoreSubmitCode_46GDbtnObjects2Objects = Hashtable.newFrom({"btn": gdjs.ScoreSubmitCode.GDbtnObjects2});
gdjs.ScoreSubmitCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("btn"), gdjs.ScoreSubmitCode.GDbtnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ScoreSubmitCode.mapOfGDgdjs_46ScoreSubmitCode_46GDbtnObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.ScoreSubmitCode.GDnameObjects2);
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "e5b3756d-a0c5-494d-b46d-e02c9b65b980", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("GlobalTime")), (( gdjs.ScoreSubmitCode.GDnameObjects2.length === 0 ) ? "" :gdjs.ScoreSubmitCode.GDnameObjects2[0].getString()));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.hasBeenSaved("e5b3756d-a0c5-494d-b46d-e02c9b65b980");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9987100);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "e5b3756d-a0c5-494d-b46d-e02c9b65b980", true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.hasPlayerJustClosedLeaderboardView();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9988084);
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__URLTools__Reload.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("btn"), gdjs.ScoreSubmitCode.GDbtnObjects1);
{for(var i = 0, len = gdjs.ScoreSubmitCode.GDbtnObjects1.length ;i < len;++i) {
    gdjs.ScoreSubmitCode.GDbtnObjects1[i].hide();
}
}}

}


};gdjs.ScoreSubmitCode.eventsList1 = function(runtimeScene) {

{


gdjs.ScoreSubmitCode.eventsList0(runtimeScene);
}


};

gdjs.ScoreSubmitCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ScoreSubmitCode.GDbgObjects1.length = 0;
gdjs.ScoreSubmitCode.GDbgObjects2.length = 0;
gdjs.ScoreSubmitCode.GDbgObjects3.length = 0;
gdjs.ScoreSubmitCode.GDbtnObjects1.length = 0;
gdjs.ScoreSubmitCode.GDbtnObjects2.length = 0;
gdjs.ScoreSubmitCode.GDbtnObjects3.length = 0;
gdjs.ScoreSubmitCode.GDnameObjects1.length = 0;
gdjs.ScoreSubmitCode.GDnameObjects2.length = 0;
gdjs.ScoreSubmitCode.GDnameObjects3.length = 0;
gdjs.ScoreSubmitCode.GDsubmitObjects1.length = 0;
gdjs.ScoreSubmitCode.GDsubmitObjects2.length = 0;
gdjs.ScoreSubmitCode.GDsubmitObjects3.length = 0;

gdjs.ScoreSubmitCode.eventsList1(runtimeScene);

return;

}

gdjs['ScoreSubmitCode'] = gdjs.ScoreSubmitCode;
