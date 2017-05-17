// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define(["./Widgette","./support/AnchorElementViewModel","dojo/dom-class","dojo/dom-construct","dojo/dom-style"],function(f,g,c,d,e){var b={base:"esri-message",visible:"esri-message--visible",text:"esri-message__text",messageFadeIn:"esri-message--fade-in"};return f.createSubclass({properties:{viewModel:{type:g}},declaredClass:"esri.widgets.Message",baseClass:b.base,constructor:function(){this._text=d.create("span",{className:b.text})},postCreate:function(){this.inherited(arguments);d.place(this._text,
this.domNode);this.own(this.viewModel.watch("point",function(a){this._setDomClasses(a)}.bind(this)),this.viewModel.watch("screenPoint",function(a){this._positionDomNode(a)}.bind(this)))},destroy:function(){this._clearTimeout()},_css:b,animationDelay:3E3,visible:!0,_setVisibleAttr:function(a){this._set("visible",a);this._visibleChange()},text:"",_setTextAttr:{node:"_text",type:"innerText"},_clearTimeout:function(){this._resetTimeout&&(clearTimeout(this._resetTimeout),this._resetTimeout=0)},_setDomClasses:function(a){this._clearTimeout();
c.remove(this.domNode,b.messageFadeIn);this.domNode.offsetWidth=this.domNode.offsetWidth;a&&(c.add(this.domNode,b.messageFadeIn),this._resetTimeout=setTimeout(function(){this.viewModel.point=null;this._resetTimeout=0}.bind(this),this.animationDelay))},_positionDomNode:function(a){a?e.set(this.domNode,{left:a.x+"px",top:a.y+"px"}):e.set(this.domNode,{left:"",top:""})},_visibleChange:function(){c.toggle(this.domNode,b.visible,this.visible)}})});