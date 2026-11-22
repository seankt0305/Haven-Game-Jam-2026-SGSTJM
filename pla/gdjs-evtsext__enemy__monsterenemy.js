
gdjs.evtsExt__Enemy__MonsterEnemy = gdjs.evtsExt__Enemy__MonsterEnemy || {};

/**
 * Behavior generated from 
 */
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy = class MonsterEnemy extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Animation = behaviorData.Animation !== undefined ? behaviorData.Animation : "";
    this._behaviorData.delay2 = behaviorData.delay2 !== undefined ? behaviorData.delay2 : Number("0") || 0;
    this._behaviorData.duration = behaviorData.duration !== undefined ? behaviorData.duration : Number("2") || 0;
    this._behaviorData.duration2 = behaviorData.duration2 !== undefined ? behaviorData.duration2 : Number("2") || 0;
    this._behaviorData.nextChange = behaviorData.nextChange !== undefined ? behaviorData.nextChange : Number("0") || 0;
    this._behaviorData.startup = behaviorData.startup !== undefined ? behaviorData.startup : false;
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.Animation !== undefined)
      this._behaviorData.Animation = behaviorOverriding.Animation;
    if (behaviorOverriding.delay2 !== undefined)
      this._behaviorData.delay2 = behaviorOverriding.delay2;
    if (behaviorOverriding.duration !== undefined)
      this._behaviorData.duration = behaviorOverriding.duration;
    if (behaviorOverriding.duration2 !== undefined)
      this._behaviorData.duration2 = behaviorOverriding.duration2;
    if (behaviorOverriding.nextChange !== undefined)
      this._behaviorData.nextChange = behaviorOverriding.nextChange;
    if (behaviorOverriding.startup !== undefined)
      this._behaviorData.startup = behaviorOverriding.startup;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    Animation: this._behaviorData.Animation,
    delay2: this._behaviorData.delay2,
    duration: this._behaviorData.duration,
    duration2: this._behaviorData.duration2,
    nextChange: this._behaviorData.nextChange,
    startup: this._behaviorData.startup,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.Animation !== undefined)
      this._behaviorData.Animation = networkSyncData.props.Animation;
    if (networkSyncData.props.delay2 !== undefined)
      this._behaviorData.delay2 = networkSyncData.props.delay2;
    if (networkSyncData.props.duration !== undefined)
      this._behaviorData.duration = networkSyncData.props.duration;
    if (networkSyncData.props.duration2 !== undefined)
      this._behaviorData.duration2 = networkSyncData.props.duration2;
    if (networkSyncData.props.nextChange !== undefined)
      this._behaviorData.nextChange = networkSyncData.props.nextChange;
    if (networkSyncData.props.startup !== undefined)
      this._behaviorData.startup = networkSyncData.props.startup;
  }

  // Properties:
  
  _getAnimation() {
    return this._behaviorData.Animation !== undefined ? this._behaviorData.Animation : "";
  }
  _setAnimation(newValue) {
    this._behaviorData.Animation = newValue;
  }
  _getdelay2() {
    return this._behaviorData.delay2 !== undefined ? this._behaviorData.delay2 : Number("0") || 0;
  }
  _setdelay2(newValue) {
    this._behaviorData.delay2 = newValue;
  }
  _getduration() {
    return this._behaviorData.duration !== undefined ? this._behaviorData.duration : Number("2") || 0;
  }
  _setduration(newValue) {
    this._behaviorData.duration = newValue;
  }
  _getduration2() {
    return this._behaviorData.duration2 !== undefined ? this._behaviorData.duration2 : Number("2") || 0;
  }
  _setduration2(newValue) {
    this._behaviorData.duration2 = newValue;
  }
  _getnextChange() {
    return this._behaviorData.nextChange !== undefined ? this._behaviorData.nextChange : Number("0") || 0;
  }
  _setnextChange(newValue) {
    this._behaviorData.nextChange = newValue;
  }
  _getstartup() {
    return this._behaviorData.startup !== undefined ? this._behaviorData.startup : false;
  }
  _setstartup(newValue) {
    this._behaviorData.startup = newValue;
  }
  _togglestartup() {
    this._setstartup(!this._getstartup());
  }
}

/**
 * Shared data generated from 
 */
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.SharedData = class MonsterEnemySharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Enemy_MonsterEnemySharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Enemy_MonsterEnemySharedData = new gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.SharedData(
      initialData
    );
  }
  return instanceContainer._Enemy_MonsterEnemySharedData;
}

// Methods:
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext = {};
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {
{

let elseEventsChainSatisfied = false;

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getstartup();
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.GDObjectObjects1[i].resetTimer("tick");
}
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setnextChange(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getdelay2())
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setstartup(false)
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.GDObjectObjects1[i].getTimerElapsedTimeInSecondsOrNaN("tick") >= 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.GDObjectObjects1[i].resetTimer("tick");
}
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setnextChange(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getnextChange()-(1))
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.GDObjectObjects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getnextChange() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsOnFire(eventsFunctionContext)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getstartup();
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName("Fire");
}
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setstartup(true)
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setnextChange(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getduration())
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.GDObjectObjects1);

if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsOnFire(eventsFunctionContext)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getstartup();
}
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName("Fire");
}
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setstartup(true)
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setnextChange(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getduration())
}
elseEventsChainSatisfied = true;
}
}

}

}

};

gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
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
, "Animation": this._getAnimation()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Enemy"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Enemy"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1[i].getTimerElapsedTimeInSecondsOrNaN("tick") >= 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1[i].resetTimer("tick");
}
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setnextChange(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getnextChange()-(1))
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getnextChange() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsOnFire(eventsFunctionContext)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName("Fire");
}
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setnextChange(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getduration())
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getnextChange() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsOnFire(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName("NoFire");
}
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setnextChange(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getduration2())
}
}

}


};

gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
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
, "Animation": this._getAnimation()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Enemy"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Enemy"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.IsOnFireContext = {};
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.IsOnFireContext.idToCallbackMap = new Map();
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.IsOnFireContext.GDObjectObjects1= [];
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.IsOnFireContext.GDObjectObjects2= [];


gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.IsOnFireContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.IsOnFireContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.IsOnFireContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.IsOnFireContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).getAnimationName() == "Fire" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.IsOnFireContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.IsOnFireContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.IsOnFireContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.IsOnFire = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
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
, "Animation": this._getAnimation()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Enemy"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Enemy"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.IsOnFireContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.IsOnFireContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.IsOnFireContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.IsOnFireContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.IsOnFireContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}


gdjs.registerBehavior("Enemy::MonsterEnemy", gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy);
