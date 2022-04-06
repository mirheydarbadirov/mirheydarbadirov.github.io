
gdjs.evtsExt__CursorType__CursorHover = gdjs.evtsExt__CursorType__CursorHover || {};

/**
 * Behavior generated from Custom cursor when hovered
 */
gdjs.evtsExt__CursorType__CursorHover.CursorHover = class CursorHover extends gdjs.RuntimeBehavior {
  constructor(runtimeScene, behaviorData, owner) {
    super(runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    
    this._behaviorData.cursor_type = behaviorData.cursor_type !== undefined ? behaviorData.cursor_type : "default";
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.cursor_type !== newBehaviorData.cursor_type)
      this._behaviorData.cursor_type = newBehaviorData.cursor_type;

    return true;
  }

  // Properties:
  
  _getcursor_type() {
    return this._behaviorData.cursor_type !== undefined ? this._behaviorData.cursor_type : "default";
  }
  _setcursor_type(newValue) {
    this._behaviorData.cursor_type = newValue;
  }
}

// Methods:
gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.GDObjectObjects2= [];

gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.mapOfGDgdjs_46evtsExt_95_95CursorType_95_95CursorHover_46CursorHover_46prototype_46doStepPostEventsContext_46GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.GDObjectObjects1});gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.userFunc0x9f28e0 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
// Set cursor to behavior property cursor_type
runtimeScene
    .getGame()
    .getRenderer()
    .getCanvas()
    .style
    .cursor = objects[0]
        .getBehavior(
            eventsFunctionContext.getBehaviorName("Behavior")
        )
        ._getcursor_type();

};
gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.GDObjectObjects1 */

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.GDObjectObjects1);
gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.userFunc0x9f28e0(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.GDObjectObjects1);

gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.GDObjectObjects1[i].getZOrder() > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CursorType_zOrderSorting")) ) {
        gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.mapOfGDgdjs_46evtsExt_95_95CursorType_95_95CursorHover_46CursorHover_46prototype_46doStepPostEventsContext_46GDObjectObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.GDObjectObjects1 */
{runtimeScene.getGame().getVariables().get("__CursorType_zOrderSorting").setNumber((( gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.GDObjectObjects1[0].getZOrder()));
}
{ //Subevents
gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__CursorType__CursorHover.CursorHover.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("CursorType::CursorHover", gdjs.evtsExt__CursorType__CursorHover.CursorHover);
