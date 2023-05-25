gdjs.Game3Code = {};
gdjs.Game3Code.GDbgObjects1= [];
gdjs.Game3Code.GDbgObjects2= [];
gdjs.Game3Code.GDbgObjects3= [];
gdjs.Game3Code.GDbowlObjects1= [];
gdjs.Game3Code.GDbowlObjects2= [];
gdjs.Game3Code.GDbowlObjects3= [];
gdjs.Game3Code.GDphysicsStaticObjects1= [];
gdjs.Game3Code.GDphysicsStaticObjects2= [];
gdjs.Game3Code.GDphysicsStaticObjects3= [];
gdjs.Game3Code.GDgunObjects1= [];
gdjs.Game3Code.GDgunObjects2= [];
gdjs.Game3Code.GDgunObjects3= [];
gdjs.Game3Code.GDintroObjects1= [];
gdjs.Game3Code.GDintroObjects2= [];
gdjs.Game3Code.GDintroObjects3= [];
gdjs.Game3Code.GDflashObjects1= [];
gdjs.Game3Code.GDflashObjects2= [];
gdjs.Game3Code.GDflashObjects3= [];
gdjs.Game3Code.GDfoodObjects1= [];
gdjs.Game3Code.GDfoodObjects2= [];
gdjs.Game3Code.GDfoodObjects3= [];
gdjs.Game3Code.GDother6Objects1= [];
gdjs.Game3Code.GDother6Objects2= [];
gdjs.Game3Code.GDother6Objects3= [];
gdjs.Game3Code.GDother1Objects1= [];
gdjs.Game3Code.GDother1Objects2= [];
gdjs.Game3Code.GDother1Objects3= [];
gdjs.Game3Code.GDother2Objects1= [];
gdjs.Game3Code.GDother2Objects2= [];
gdjs.Game3Code.GDother2Objects3= [];
gdjs.Game3Code.GDother3Objects1= [];
gdjs.Game3Code.GDother3Objects2= [];
gdjs.Game3Code.GDother3Objects3= [];
gdjs.Game3Code.GDother4Objects1= [];
gdjs.Game3Code.GDother4Objects2= [];
gdjs.Game3Code.GDother4Objects3= [];
gdjs.Game3Code.GDother5Objects1= [];
gdjs.Game3Code.GDother5Objects2= [];
gdjs.Game3Code.GDother5Objects3= [];
gdjs.Game3Code.GDother7Objects1= [];
gdjs.Game3Code.GDother7Objects2= [];
gdjs.Game3Code.GDother7Objects3= [];
gdjs.Game3Code.GDbgUpObjects1= [];
gdjs.Game3Code.GDbgUpObjects2= [];
gdjs.Game3Code.GDbgUpObjects3= [];
gdjs.Game3Code.GDlevelObjects1= [];
gdjs.Game3Code.GDlevelObjects2= [];
gdjs.Game3Code.GDlevelObjects3= [];
gdjs.Game3Code.GDtimeObjects1= [];
gdjs.Game3Code.GDtimeObjects2= [];
gdjs.Game3Code.GDtimeObjects3= [];
gdjs.Game3Code.GDremainingTxtObjects1= [];
gdjs.Game3Code.GDremainingTxtObjects2= [];
gdjs.Game3Code.GDremainingTxtObjects3= [];
gdjs.Game3Code.GDremainingNumObjects1= [];
gdjs.Game3Code.GDremainingNumObjects2= [];
gdjs.Game3Code.GDremainingNumObjects3= [];


gdjs.Game3Code.mapOfGDgdjs_46Game3Code_46GDfoodObjects1Objects = Hashtable.newFrom({"food": gdjs.Game3Code.GDfoodObjects1});
gdjs.Game3Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("gun"), gdjs.Game3Code.GDgunObjects2);
{for(var i = 0, len = gdjs.Game3Code.GDgunObjects2.length ;i < len;++i) {
    gdjs.Game3Code.GDgunObjects2[i].rotateTowardPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 0, runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "start") >= 0.1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("gun"), gdjs.Game3Code.GDgunObjects1);
gdjs.Game3Code.GDfoodObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game3Code.mapOfGDgdjs_46Game3Code_46GDfoodObjects1Objects, (( gdjs.Game3Code.GDgunObjects1.length === 0 ) ? 0 :gdjs.Game3Code.GDgunObjects1[0].getPointX("spawn")), (( gdjs.Game3Code.GDgunObjects1.length === 0 ) ? 0 :gdjs.Game3Code.GDgunObjects1[0].getPointY("spawn")), "");
}{for(var i = 0, len = gdjs.Game3Code.GDfoodObjects1.length ;i < len;++i) {
    gdjs.Game3Code.GDfoodObjects1[i].getBehavior("Physics2").applyForceTowardPosition(1700, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), (( gdjs.Game3Code.GDgunObjects1.length === 0 ) ? 0 :gdjs.Game3Code.GDgunObjects1[0].getPointX("spawn")), (( gdjs.Game3Code.GDgunObjects1.length === 0 ) ? 0 :gdjs.Game3Code.GDgunObjects1[0].getPointY("spawn")));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Game assets\\Cannon Sound Effect (320 kbps).mp3", false, 40, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "start");
}}

}


};gdjs.Game3Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("flash"), gdjs.Game3Code.GDflashObjects2);
gdjs.copyArray(runtimeScene.getObjects("physicsStatic"), gdjs.Game3Code.GDphysicsStaticObjects2);
{gdjs.evtTools.camera.showLayer(runtimeScene, "intro");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "");
}{for(var i = 0, len = gdjs.Game3Code.GDphysicsStaticObjects2.length ;i < len;++i) {
    gdjs.Game3Code.GDphysicsStaticObjects2[i].hide();
}
}{gdjs.evtTools.camera.setLayerTimeScale(runtimeScene, "", 0);
}{for(var i = 0, len = gdjs.Game3Code.GDflashObjects2.length ;i < len;++i) {
    gdjs.Game3Code.GDflashObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "start");
}{runtimeScene.getScene().getVariables().get("countUp").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("GlobalTime")));
}{gdjs.evtTools.sound.playSound(runtimeScene, "Game assets\\Gong Sound Effect (320 kbps).mp3", false, 200, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("intro"), gdjs.Game3Code.GDintroObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game3Code.GDintroObjects2.length;i<l;++i) {
    if ( gdjs.Game3Code.GDintroObjects2[i].hasAnimationEnded2() ) {
        isConditionTrue_0 = true;
        gdjs.Game3Code.GDintroObjects2[k] = gdjs.Game3Code.GDintroObjects2[i];
        ++k;
    }
}
gdjs.Game3Code.GDintroObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9906652);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setLayerTimeScale(runtimeScene, "", 1);
}{gdjs.evtTools.camera.showLayer(runtimeScene, "");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "intro");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "");
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game3Code.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.Game3Code.mapOfGDgdjs_46Game3Code_46GDother1Objects2ObjectsGDgdjs_46Game3Code_46GDother2Objects2ObjectsGDgdjs_46Game3Code_46GDother3Objects2ObjectsGDgdjs_46Game3Code_46GDother4Objects2ObjectsGDgdjs_46Game3Code_46GDother5Objects2ObjectsGDgdjs_46Game3Code_46GDother7Objects2ObjectsGDgdjs_46Game3Code_46GDother6Objects2Objects = Hashtable.newFrom({"other1": gdjs.Game3Code.GDother1Objects2, "other2": gdjs.Game3Code.GDother2Objects2, "other3": gdjs.Game3Code.GDother3Objects2, "other4": gdjs.Game3Code.GDother4Objects2, "other5": gdjs.Game3Code.GDother5Objects2, "other7": gdjs.Game3Code.GDother7Objects2, "other6": gdjs.Game3Code.GDother6Objects2});
gdjs.Game3Code.eventsList2 = function(runtimeScene) {

};gdjs.Game3Code.eventsList3 = function(runtimeScene) {

{


const repeatCount2 = 20;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.copyArray(runtimeScene.getObjects("bowl"), gdjs.Game3Code.GDbowlObjects2);
gdjs.Game3Code.GDother1Objects2.length = 0;

gdjs.Game3Code.GDother2Objects2.length = 0;

gdjs.Game3Code.GDother3Objects2.length = 0;

gdjs.Game3Code.GDother4Objects2.length = 0;

gdjs.Game3Code.GDother5Objects2.length = 0;

gdjs.Game3Code.GDother6Objects2.length = 0;

gdjs.Game3Code.GDother7Objects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9910380);
}
}
if (isConditionTrue_0)
{
{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game3Code.mapOfGDgdjs_46Game3Code_46GDother1Objects2ObjectsGDgdjs_46Game3Code_46GDother2Objects2ObjectsGDgdjs_46Game3Code_46GDother3Objects2ObjectsGDgdjs_46Game3Code_46GDother4Objects2ObjectsGDgdjs_46Game3Code_46GDother5Objects2ObjectsGDgdjs_46Game3Code_46GDother7Objects2ObjectsGDgdjs_46Game3Code_46GDother6Objects2Objects, "other" + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 7)), gdjs.randomInRange((( gdjs.Game3Code.GDbowlObjects2.length === 0 ) ? 0 :gdjs.Game3Code.GDbowlObjects2[0].getPointX("")) + 20, (( gdjs.Game3Code.GDbowlObjects2.length === 0 ) ? 0 :gdjs.Game3Code.GDbowlObjects2[0].getPointX("")) + (( gdjs.Game3Code.GDbowlObjects2.length === 0 ) ? 0 :gdjs.Game3Code.GDbowlObjects2[0].getWidth()) - 20), 400, "");
}}
}

}


};gdjs.Game3Code.mapOfEmptyGDother1Objects = Hashtable.newFrom({"other1": []});
gdjs.Game3Code.mapOfEmptyGDother2Objects = Hashtable.newFrom({"other2": []});
gdjs.Game3Code.mapOfEmptyGDother3Objects = Hashtable.newFrom({"other3": []});
gdjs.Game3Code.mapOfEmptyGDother4Objects = Hashtable.newFrom({"other4": []});
gdjs.Game3Code.mapOfEmptyGDother5Objects = Hashtable.newFrom({"other5": []});
gdjs.Game3Code.mapOfEmptyGDother7Objects = Hashtable.newFrom({"other7": []});
gdjs.Game3Code.asyncCallback9914972 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ScoreSubmit", false);
}}
gdjs.Game3Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Game3Code.asyncCallback9914972(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game3Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("food"), gdjs.Game3Code.GDfoodObjects2);
gdjs.copyArray(runtimeScene.getObjects("other1"), gdjs.Game3Code.GDother1Objects2);
gdjs.copyArray(runtimeScene.getObjects("other2"), gdjs.Game3Code.GDother2Objects2);
gdjs.copyArray(runtimeScene.getObjects("other3"), gdjs.Game3Code.GDother3Objects2);
gdjs.copyArray(runtimeScene.getObjects("other4"), gdjs.Game3Code.GDother4Objects2);
gdjs.copyArray(runtimeScene.getObjects("other5"), gdjs.Game3Code.GDother5Objects2);
gdjs.copyArray(runtimeScene.getObjects("other6"), gdjs.Game3Code.GDother6Objects2);
gdjs.copyArray(runtimeScene.getObjects("other7"), gdjs.Game3Code.GDother7Objects2);
{runtimeScene.getScene().getVariables().get("one").setNumber(gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game3Code.mapOfEmptyGDother1Objects));
}{runtimeScene.getScene().getVariables().get("two").setNumber(gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game3Code.mapOfEmptyGDother2Objects));
}{runtimeScene.getScene().getVariables().get("three").setNumber(gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game3Code.mapOfEmptyGDother3Objects));
}{runtimeScene.getScene().getVariables().get("four").setNumber(gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game3Code.mapOfEmptyGDother4Objects));
}{runtimeScene.getScene().getVariables().get("five").setNumber(gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game3Code.mapOfEmptyGDother5Objects));
}{runtimeScene.getScene().getVariables().get("six").setNumber(gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game3Code.mapOfEmptyGDother7Objects));
}{for(var i = 0, len = gdjs.Game3Code.GDother1Objects2.length ;i < len;++i) {
    gdjs.Game3Code.GDother1Objects2[i].setZOrder(10);
}
for(var i = 0, len = gdjs.Game3Code.GDother2Objects2.length ;i < len;++i) {
    gdjs.Game3Code.GDother2Objects2[i].setZOrder(10);
}
for(var i = 0, len = gdjs.Game3Code.GDother3Objects2.length ;i < len;++i) {
    gdjs.Game3Code.GDother3Objects2[i].setZOrder(10);
}
for(var i = 0, len = gdjs.Game3Code.GDother4Objects2.length ;i < len;++i) {
    gdjs.Game3Code.GDother4Objects2[i].setZOrder(10);
}
for(var i = 0, len = gdjs.Game3Code.GDother5Objects2.length ;i < len;++i) {
    gdjs.Game3Code.GDother5Objects2[i].setZOrder(10);
}
for(var i = 0, len = gdjs.Game3Code.GDother7Objects2.length ;i < len;++i) {
    gdjs.Game3Code.GDother7Objects2[i].setZOrder(10);
}
for(var i = 0, len = gdjs.Game3Code.GDother6Objects2.length ;i < len;++i) {
    gdjs.Game3Code.GDother6Objects2[i].setZOrder(10);
}
}{for(var i = 0, len = gdjs.Game3Code.GDfoodObjects2.length ;i < len;++i) {
    gdjs.Game3Code.GDfoodObjects2[i].setZOrder(10);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("remainingNum"), gdjs.Game3Code.GDremainingNumObjects2);
{for(var i = 0, len = gdjs.Game3Code.GDremainingNumObjects2.length ;i < len;++i) {
    gdjs.Game3Code.GDremainingNumObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("one")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("two")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("three")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("four")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("five")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("six")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("seven"))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("remainingNum"), gdjs.Game3Code.GDremainingNumObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game3Code.GDremainingNumObjects1.length;i<l;++i) {
    if ( gdjs.Game3Code.GDremainingNumObjects1[i].getString() == "0" ) {
        isConditionTrue_0 = true;
        gdjs.Game3Code.GDremainingNumObjects1[k] = gdjs.Game3Code.GDremainingNumObjects1[i];
        ++k;
    }
}
gdjs.Game3Code.GDremainingNumObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9914612);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("flash"), gdjs.Game3Code.GDflashObjects1);
{for(var i = 0, len = gdjs.Game3Code.GDflashObjects1.length ;i < len;++i) {
    gdjs.Game3Code.GDflashObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Forward", 255, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getGame().getVariables().get("GlobalTime").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("countUp")));
}
{ //Subevents
gdjs.Game3Code.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.Game3Code.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("remainingNum"), gdjs.Game3Code.GDremainingNumObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game3Code.GDremainingNumObjects2.length;i<l;++i) {
    if ( gdjs.Game3Code.GDremainingNumObjects2[i].getString() != "0" ) {
        isConditionTrue_0 = true;
        gdjs.Game3Code.GDremainingNumObjects2[k] = gdjs.Game3Code.GDremainingNumObjects2[i];
        ++k;
    }
}
gdjs.Game3Code.GDremainingNumObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("countUp").add(0.013);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("time"), gdjs.Game3Code.GDtimeObjects1);
{for(var i = 0, len = gdjs.Game3Code.GDtimeObjects1.length ;i < len;++i) {
    gdjs.Game3Code.GDtimeObjects1[i].setString(gdjs.evtsExt__TimeFormatter__SecondsToHHMMSS000.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("countUp")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


};gdjs.Game3Code.eventsList7 = function(runtimeScene) {

{


gdjs.Game3Code.eventsList1(runtimeScene);
}


{


gdjs.Game3Code.eventsList3(runtimeScene);
}


{


gdjs.Game3Code.eventsList5(runtimeScene);
}


{


gdjs.Game3Code.eventsList6(runtimeScene);
}


};

gdjs.Game3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game3Code.GDbgObjects1.length = 0;
gdjs.Game3Code.GDbgObjects2.length = 0;
gdjs.Game3Code.GDbgObjects3.length = 0;
gdjs.Game3Code.GDbowlObjects1.length = 0;
gdjs.Game3Code.GDbowlObjects2.length = 0;
gdjs.Game3Code.GDbowlObjects3.length = 0;
gdjs.Game3Code.GDphysicsStaticObjects1.length = 0;
gdjs.Game3Code.GDphysicsStaticObjects2.length = 0;
gdjs.Game3Code.GDphysicsStaticObjects3.length = 0;
gdjs.Game3Code.GDgunObjects1.length = 0;
gdjs.Game3Code.GDgunObjects2.length = 0;
gdjs.Game3Code.GDgunObjects3.length = 0;
gdjs.Game3Code.GDintroObjects1.length = 0;
gdjs.Game3Code.GDintroObjects2.length = 0;
gdjs.Game3Code.GDintroObjects3.length = 0;
gdjs.Game3Code.GDflashObjects1.length = 0;
gdjs.Game3Code.GDflashObjects2.length = 0;
gdjs.Game3Code.GDflashObjects3.length = 0;
gdjs.Game3Code.GDfoodObjects1.length = 0;
gdjs.Game3Code.GDfoodObjects2.length = 0;
gdjs.Game3Code.GDfoodObjects3.length = 0;
gdjs.Game3Code.GDother6Objects1.length = 0;
gdjs.Game3Code.GDother6Objects2.length = 0;
gdjs.Game3Code.GDother6Objects3.length = 0;
gdjs.Game3Code.GDother1Objects1.length = 0;
gdjs.Game3Code.GDother1Objects2.length = 0;
gdjs.Game3Code.GDother1Objects3.length = 0;
gdjs.Game3Code.GDother2Objects1.length = 0;
gdjs.Game3Code.GDother2Objects2.length = 0;
gdjs.Game3Code.GDother2Objects3.length = 0;
gdjs.Game3Code.GDother3Objects1.length = 0;
gdjs.Game3Code.GDother3Objects2.length = 0;
gdjs.Game3Code.GDother3Objects3.length = 0;
gdjs.Game3Code.GDother4Objects1.length = 0;
gdjs.Game3Code.GDother4Objects2.length = 0;
gdjs.Game3Code.GDother4Objects3.length = 0;
gdjs.Game3Code.GDother5Objects1.length = 0;
gdjs.Game3Code.GDother5Objects2.length = 0;
gdjs.Game3Code.GDother5Objects3.length = 0;
gdjs.Game3Code.GDother7Objects1.length = 0;
gdjs.Game3Code.GDother7Objects2.length = 0;
gdjs.Game3Code.GDother7Objects3.length = 0;
gdjs.Game3Code.GDbgUpObjects1.length = 0;
gdjs.Game3Code.GDbgUpObjects2.length = 0;
gdjs.Game3Code.GDbgUpObjects3.length = 0;
gdjs.Game3Code.GDlevelObjects1.length = 0;
gdjs.Game3Code.GDlevelObjects2.length = 0;
gdjs.Game3Code.GDlevelObjects3.length = 0;
gdjs.Game3Code.GDtimeObjects1.length = 0;
gdjs.Game3Code.GDtimeObjects2.length = 0;
gdjs.Game3Code.GDtimeObjects3.length = 0;
gdjs.Game3Code.GDremainingTxtObjects1.length = 0;
gdjs.Game3Code.GDremainingTxtObjects2.length = 0;
gdjs.Game3Code.GDremainingTxtObjects3.length = 0;
gdjs.Game3Code.GDremainingNumObjects1.length = 0;
gdjs.Game3Code.GDremainingNumObjects2.length = 0;
gdjs.Game3Code.GDremainingNumObjects3.length = 0;

gdjs.Game3Code.eventsList7(runtimeScene);

return;

}

gdjs['Game3Code'] = gdjs.Game3Code;
