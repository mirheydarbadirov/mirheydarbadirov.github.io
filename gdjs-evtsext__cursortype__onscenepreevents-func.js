
if (typeof gdjs.evtsExt__CursorType__onScenePreEvents !== "undefined") {
  gdjs.evtsExt__CursorType__onScenePreEvents.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CursorType__onScenePreEvents = {};

gdjs.evtsExt__CursorType__onScenePreEvents.conditionTrue_0 = {val:false};
gdjs.evtsExt__CursorType__onScenePreEvents.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__CursorType__onScenePreEvents.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__CursorType__onScenePreEvents.userFunc0xbdcdf0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
// Reset to default cursor
runtimeScene.getGame().getRenderer().getCanvas().style.cursor =
    runtimeScene
        .getGame()
        .getVariables()
        .get("__CursorType_defaultCursor")
        .getAsString();

};
gdjs.evtsExt__CursorType__onScenePreEvents.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
{runtimeScene.getGame().getVariables().get("__CursorType_zOrderSorting").setNumber(0);
}}

}


{



}


{


gdjs.evtsExt__CursorType__onScenePreEvents.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CursorType__onScenePreEvents.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("__CursorType_defaultCursor")) == "0";
}if (gdjs.evtsExt__CursorType__onScenePreEvents.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("__CursorType_defaultCursor").setString("default");
}}

}


{


gdjs.evtsExt__CursorType__onScenePreEvents.userFunc0xbdcdf0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__CursorType__onScenePreEvents.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CursorType__onScenePreEvents.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__CursorType__onScenePreEvents.registeredGdjsCallbacks = [];
gdjs.evtsExt__CursorType__onScenePreEvents.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__CursorType__onScenePreEvents.func(runtimeScene, runtimeScene);
})
gdjs.registerRuntimeScenePreEventsCallback(gdjs.evtsExt__CursorType__onScenePreEvents.registeredGdjsCallbacks[gdjs.evtsExt__CursorType__onScenePreEvents.registeredGdjsCallbacks.length - 1]);
