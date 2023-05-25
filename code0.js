gdjs.HomeCode = {};
gdjs.HomeCode.GDbgObjects1= [];
gdjs.HomeCode.GDbgObjects2= [];
gdjs.HomeCode.GDbgObjects3= [];
gdjs.HomeCode.GDbtnObjects1= [];
gdjs.HomeCode.GDbtnObjects2= [];
gdjs.HomeCode.GDbtnObjects3= [];
gdjs.HomeCode.GDshowObjects1= [];
gdjs.HomeCode.GDshowObjects2= [];
gdjs.HomeCode.GDshowObjects3= [];


gdjs.HomeCode.mapOfGDgdjs_46HomeCode_46GDbtnObjects2Objects = Hashtable.newFrom({"btn": gdjs.HomeCode.GDbtnObjects2});
gdjs.HomeCode.mapOfGDgdjs_46HomeCode_46GDshowObjects1Objects = Hashtable.newFrom({"show": gdjs.HomeCode.GDshowObjects1});
gdjs.HomeCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Game assets\\Super Mario Bros. 2 Overworld Theme (320 kbps).mp3", 1, true, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn"), gdjs.HomeCode.GDbtnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.HomeCode.mapOfGDgdjs_46HomeCode_46GDbtnObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game1", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("btn"), gdjs.HomeCode.GDbtnObjects2);
{for(var i = 0, len = gdjs.HomeCode.GDbtnObjects2.length ;i < len;++i) {
    gdjs.HomeCode.GDbtnObjects2[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("show"), gdjs.HomeCode.GDshowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.HomeCode.mapOfGDgdjs_46HomeCode_46GDshowObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "e5b3756d-a0c5-494d-b46d-e02c9b65b980", true);
}}

}


};gdjs.HomeCode.eventsList1 = function(runtimeScene) {

{


gdjs.HomeCode.eventsList0(runtimeScene);
}


};

gdjs.HomeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.HomeCode.GDbgObjects1.length = 0;
gdjs.HomeCode.GDbgObjects2.length = 0;
gdjs.HomeCode.GDbgObjects3.length = 0;
gdjs.HomeCode.GDbtnObjects1.length = 0;
gdjs.HomeCode.GDbtnObjects2.length = 0;
gdjs.HomeCode.GDbtnObjects3.length = 0;
gdjs.HomeCode.GDshowObjects1.length = 0;
gdjs.HomeCode.GDshowObjects2.length = 0;
gdjs.HomeCode.GDshowObjects3.length = 0;

gdjs.HomeCode.eventsList1(runtimeScene);

return;

}

gdjs['HomeCode'] = gdjs.HomeCode;
