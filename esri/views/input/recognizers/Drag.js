// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/tsSupport/extendsHelper","../InputHandler","./support"],function(d,g,h,k,l){d=function(d){function b(){d.call(this,"recognizers.Drag",!1);this._activePointers=[];this._activePointerMap=new Map;this._isDragging=!1;this._drag=this.registerOutgoing("drag");this.registerIncoming("pointer-drag",this._handlePointerDrag.bind(this));this.registerIncoming("pointer-down",this._handlePointerDown.bind(this));this.registerIncoming("pointer-up",this._handlePointerUp.bind(this))}
h(b,d);b.prototype._createPayload=function(a,e){return{action:a,pointers:this._activePointers.map(function(a){return a.data}),startState:this._startState,previousState:this._previousState,currentState:e}};b.prototype._fitCircleLSQ=function(){var a=this._activePointers.map(function(a){return a.data.currentEvent});return l.fitCircleLSQ(a)};b.prototype._createDragState=function(){for(var a=this._fitCircleLSQ(),e=0,c=0,b=this._activePointers;c<b.length;c++){var f=b[c],f=this._pointerAngle(f,a)-f.initialAngle;
0>f&&(f+=2*Math.PI);e+=f}e/=this._activePointers.length;return{angle:e,radius:a.radius,center:a.center}};b.prototype._updateMultiPointer=function(a){var e=a.startEvent.native.pointerId,b=this._activePointerMap.get(e),d=!b;d&&(b={data:null,initialAngle:0},this._activePointers.push(b),this._activePointerMap.set(e,b));b.data={startEvent:a.startEvent,previousEvent:a.previousEvent,currentEvent:a.currentEvent};d&&this._isDragging&&this._updateInitialAngles();return b};b.prototype._pointerAngle=function(a,
b){var c=a.data.currentEvent;return Math.atan2(c.y-b.center.y,c.x-b.center.x)};b.prototype._updateInitialAngle=function(a,b){a.initialAngle=this._pointerAngle(a,b);this._previousState&&(a.initialAngle-=this._previousState.angle)};b.prototype._updateInitialAngles=function(){for(var a=this._createDragState(),b=0,c=this._activePointers;b<c.length;b++)this._updateInitialAngle(c[b],a)};b.prototype._emitStart=function(){this._updateInitialAngles();var a=this._createDragState();this._previousState=this._startState=
a;this._isDragging=!0;this._drag.emit(this._createPayload("start",a))};b.prototype._emitUpdate=function(){var a=this._createDragState();this._drag.emit(this._createPayload("update",a));this._previousState=a};b.prototype._emitEnd=function(){var a=this._createDragState();this._drag.emit(this._createPayload("end",a));this._startState=this._previousState=null;this._isDragging=!1};b.prototype._handlePointerDown=function(a){a=a.data;this._isDragging&&1===this._activePointers.length&&this._emitEnd();this._updateMultiPointer({startEvent:a,
previousEvent:a,currentEvent:a});this._isDragging&&this._emitUpdate()};b.prototype._removeMultiPointer=function(a){var b=this,c=a.pointerId,d=this._activePointerMap.get(c);a=function(){b._activePointerMap.delete(c);var a=b._activePointers.indexOf(d);b._activePointers.splice(a,1);b._isDragging&&b._updateInitialAngles()};this._isDragging?1===this._activePointers.length||2===this._activePointers.length?(this._emitEnd(),a()):(a(),this._emitUpdate()):a()};b.prototype._handlePointerUp=function(a){this._removeMultiPointer(a.data.native)};
b.prototype._handlePointerDrag=function(a){a=a.data;switch(a.action){case "start":this._isDragging||this._emitStart();break;case "update":this._isDragging||this._emitStart(),this._updateMultiPointer(a),this._emitUpdate()}};return b}(k.InputHandler);g.Drag=d});