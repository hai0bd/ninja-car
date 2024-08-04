System.register("chunks:///_virtual/cameraFollow.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,r,o,i,n,a,s,l,c,u;return{setters:[function(t){e=t.applyDecoratedDescriptor,r=t.inheritsLoose,o=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){n=t.cclegacy,a=t._decorator,s=t.Node,l=t.CCFloat,c=t.Vec3,u=t.Component}],execute:function(){var p,f,g,h,d,y,b,v,P;n._RF.push({},"94fd9LX0yVAvLRj84hbjAog","cameraFollow",void 0);var m=a.ccclass,w=a.property;t("CameraFollow",(p=m("CameraFollow"),f=w(s),g=w(l),h=w({type:c}),p((b=e((y=function(t){function e(){for(var e,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return e=t.call.apply(t,[this].concat(n))||this,o(e,"target",b,i(e)),o(e,"speed",v,i(e)),o(e,"offset",P,i(e)),e.isMoving=!1,e.currentTargetPos=void 0,e}r(e,t);var n=e.prototype;return n.start=function(){this.offset=this.node.getPosition(),this.currentTargetPos=this.target.getPosition()},n.update=function(t){var e=this.node.getPosition(),r=this.target.getPosition().subtract(this.currentTargetPos);c.slerp(e,e,r.add(this.offset),this.speed*t),this.node.setPosition(e)},e}(u)).prototype,"target",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=e(y.prototype,"speed",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=e(y.prototype,"offset",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new c}}),d=y))||d));n._RF.pop()}}}));

System.register("chunks:///_virtual/coin.ts",["./rollupPluginModLoBabelHelpers.js","cc","./gameManager.ts"],(function(e){var r,n,i,t,o,c,a,l,s;return{setters:[function(e){r=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,t=e.assertThisInitialized},function(e){o=e.cclegacy,c=e._decorator,a=e.CylinderCollider,l=e.Component},function(e){s=e.GameManager}],execute:function(){var u,p,d,g,f;o._RF.push({},"00b2cAmvWJHcZvAxU4ipnGC","coin",void 0);var h=c.ccclass,y=c.property;e("Coin",(u=h("Coin"),p=y(a),u((f=r((g=function(e){function r(){for(var r,n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return r=e.call.apply(e,[this].concat(o))||this,i(r,"collider",f,t(r)),r}n(r,e);var o=r.prototype;return o.start=function(){this.collider.on("onTriggerEnter",this.onTriggerEnter,this)},o.onTriggerEnter=function(e){s.instance.addCoin(),this.node.destroy()},r}(l)).prototype,"collider",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=g))||d));o._RF.pop()}}}));

System.register("chunks:///_virtual/config.ts",["cc"],(function(e){var i;return{setters:[function(e){i=e.cclegacy}],execute:function(){i._RF.push({},"64c223Ye59PZb2UVEKTBxTK","config",void 0);e("config",{startGenPoint:-150,coin:{distance:20},shield:{upSpeed:2,time:5},map1:{maxView:10},map2:{maxView:20},map3:{maxView:30}});i._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,p=t.instantiate,c=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=p(s);l.parent=this.node,l.name="Buttons";var r=p(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=p(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(c);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=a.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?p(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=S;var x=p(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=p(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=p(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?p(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/enum.ts",["cc"],(function(t){var e;return{setters:[function(t){e=t.cclegacy}],execute:function(){e._RF.push({},"f9856nVYeBGBZ1Aq7pttfSY","enum",void 0);t("Layer",function(t){return t[t.Player=1]="Player",t}({})),t("InputKey",function(t){return t[t.Press_Left=0]="Press_Left",t[t.Press_Right=1]="Press_Right",t[t.Key_Up=2]="Key_Up",t}({})),t("Object",function(t){return t[t.Null=0]="Null",t[t.Coin=1]="Coin",t[t.Boom=2]="Boom",t}({})),t("CoinType",function(t){return t[t.Null=0]="Null",t[t.Mix=1]="Mix",t[t.Straight=2]="Straight",t[t.Zikzak=3]="Zikzak",t}({})),t("CoinGroup",function(t){return t[t.Null=0]="Null",t[t.Straight=1]="Straight",t[t.Left=2]="Left",t[t.Right=3]="Right",t}({}));e._RF.pop()}}}));

System.register("chunks:///_virtual/floatingItem.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,i,n,r,o,a,l,u,s,p;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,n=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){o=t.cclegacy,a=t._decorator,l=t.CCFloat,u=t.tween,s=t.Vec3,p=t.Component}],execute:function(){var c,f,g,h,y,d,b,m,F;o._RF.push({},"6a1a4yMt8NFca6WP4QCSWxL","floatingItem",void 0);var v=a.ccclass,w=a.property;t("FloatingItem",(c=v("FloatingItem"),f=w(l),g=w(l),h=w(l),c((b=e((d=function(t){function e(){for(var e,i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o))||this,n(e,"floatAmplitude",b,r(e)),n(e,"floatDuration",m,r(e)),n(e,"rotationSpeed",F,r(e)),e}i(e,t);var o=e.prototype;return o.start=function(){this.startFloating()},o.startFloating=function(){u(this.node).repeatForever(u().by(this.floatDuration,{position:new s(0,this.floatAmplitude,0)},{easing:"sineInOut"}).by(this.floatDuration,{position:new s(0,-this.floatAmplitude,0)},{easing:"sineInOut"})).start(),u(this.node).repeatForever(u().by(.5,{eulerAngles:new s(0,this.rotationSpeed,0)})).start()},e}(p)).prototype,"floatAmplitude",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 10}}),m=e(d.prototype,"floatDuration",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 2}}),F=e(d.prototype,"rotationSpeed",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 30}}),y=d))||y));o._RF.pop()}}}));

System.register("chunks:///_virtual/fuelBar.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(r){var e,t,i,o,a,n,l,s,u,c;return{setters:[function(r){e=r.applyDecoratedDescriptor,t=r.inheritsLoose,i=r.initializerDefineProperty,o=r.assertThisInitialized},function(r){a=r.cclegacy,n=r._decorator,l=r.Sprite,s=r.UITransform,u=r.Color,c=r.Component}],execute:function(){var p,f,h,b,g,d,m,v,y;a._RF.push({},"104622mMXhGOZrd1KcHGlzK","fuelBar",void 0);var w=n.ccclass,T=n.property;r("FuelBar",(p=w("FuelBar"),f=T(l),h=T({range:[0,1],slide:!0,step:.01}),b=T(s),p((m=e((d=function(r){function e(){for(var e,t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return e=r.call.apply(r,[this].concat(a))||this,i(e,"fuel",m,o(e)),i(e,"progress",v,o(e)),i(e,"fuelTransform",y,o(e)),e.duration=5.5,e.time=0,e.hue=0,e}t(e,r);var a=e.prototype;return a.updateBar=function(r){this.progress=r,this.fuelTransform.width=290*this.progress;var e=120*this.progress,t=this.hsvToRgb(e,1,1);this.fuel.color=t},a.hsvToRgb=function(r,e,t){var i,o,a,n=Math.floor(r/60),l=r/60-n,s=t*(1-e),c=t*(1-l*e),p=t*(1-(1-l)*e);switch(n){case 0:i=t,o=p,a=s;break;case 1:i=c,o=t,a=s;break;case 2:i=s,o=t,a=s;break;default:i=t,o=s,a=s}return new u(255*i,255*o,255*a)},e}(c)).prototype,"fuel",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=e(d.prototype,"progress",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),y=e(d.prototype,"fuelTransform",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=d))||g));a._RF.pop()}}}));

System.register("chunks:///_virtual/gameManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./player.ts","./cameraFollow.ts","./mapControl.ts","./uiManager.ts","./enum.ts","./handlerInput.ts","./config.ts"],(function(e){var t,i,n,a,s,r,o,l,p,c,u,h,m,d,f,y,g,v,b,x;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,a=e.assertThisInitialized,s=e.createClass},function(e){r=e.cclegacy,o=e._decorator,l=e.Prefab,p=e.CCInteger,c=e.lerp,u=e.instantiate,h=e.Vec3,m=e.Component},function(e){d=e.Player},function(e){f=e.CameraFollow},function(e){y=e.MapControl},function(e){g=e.UIManager},function(e){v=e.InputKey},function(e){b=e.HandleInput},function(e){x=e.config}],execute:function(){var w,P,_,M,C,I,S,K,T,U,L,z;r._RF.push({},"f1e4alJG7lLe7e8KYGV8Pxi","gameManager",void 0);var A=o.ccclass,F=o.property;e("GameManager",(w=A("GameManager"),P=F(d),_=F(f),M=F(l),C=F(p),w(((z=function(e){function t(){for(var t,i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return t=e.call.apply(e,[this].concat(s))||this,n(t,"player",K,a(t)),n(t,"mainCam",T,a(t)),n(t,"mapPrefab",U,a(t)),n(t,"mapIndex",L,a(t)),t.map=void 0,t.maxTilt=45,t.speedTilt=4,t.fuelPercent=void 0,t.tiltAngle=0,t.isSpeedUp=!1,t.inputKey=v.Key_Up,t}i(t,e);var r=t.prototype;return r.onLoad=function(){t._instance?this.destroy():t._instance=this;new b;console.log("version 1.0.2")},r.start=function(){this.nextLevel()},r.update=function(e){var t=this.calculateTilt(),i=this.map.speed*this.speedTilt*e;this.tiltAngle=c(this.tiltAngle,t,i*e),this.player.steer(this.tiltAngle,.02*t)},r.calculateTilt=function(){return this.inputKey==v.Key_Up?0:this.inputKey==v.Press_Left?this.maxTilt:this.inputKey==v.Press_Right?-this.maxTilt:void 0},r.onShield=function(){var e=this;if(!this.isSpeedUp){this.isSpeedUp=!0;var t=this.map.speed;this.map.speed*=x.shield.upSpeed,this.scheduleOnce((function(){e.map.speed=t,e.isSpeedUp=!1}),x.shield.time)}},r.hitObstacle=function(){this.isSpeedUp||this.map.hitObstacle()},r.addCoin=function(){this.player.coin++,g.instance.coinAmount.string=this.player.coin.toString()},r.nextLevel=function(){switch(this.resetMap(),this.mapIndex++,this.mapIndex){case 1:return this.map.viewMax=x.map1.maxView,void(this.map.speed=100);case 2:return this.map.viewMax=x.map2.maxView,void(this.map.speed=200);case 3:return this.map.viewMax=x.map3.maxView,void(this.map.speed=300)}},r.resetMap=function(){this.resetPlayer();var e=u(this.mapPrefab);this.map&&this.map.node.destroy(),this.map=e.getComponent(y),this.node.addChild(e)},r.resetPlayer=function(){var e=this.player.node.getPosition();e.x=0,this.player.node.setPosition(e),this.player.node.setRotationFromEuler(h.ZERO)},s(t,null,[{key:"instance",get:function(){return this._instance||(this._instance=new t),this._instance}}]),t}(m))._instance=void 0,K=t((S=z).prototype,"player",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),T=t(S.prototype,"mainCam",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),U=t(S.prototype,"mapPrefab",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),L=t(S.prototype,"mapIndex",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),I=S))||I));r._RF.pop()}}}));

System.register("chunks:///_virtual/generateCoin.ts",["cc","./enum.ts","./utils.ts","./config.ts"],(function(i){var t,s,n,o,h,e,r;return{setters:[function(i){t=i.cclegacy,s=i.Vec3,n=i.instantiate},function(i){o=i.CoinType,h=i.CoinGroup},function(i){e=i.randomChoice},function(i){r=i.config}],execute:function(){t._RF.push({},"8f1e2jzAbRHTZE5a0CbHb0P","generateCoin",void 0);i("GenerateCoin",function(){function i(i,t,s){this.coins=void 0,this.listCoin=[],this.minePos=[],this.prefab=void 0,this.testNull=void 0,this.posX=0,this.posZ=-100,this.distance=0,this.currentCoinGroup=h.Null,this.prefab=i,this.testNull=t,this.coins=s,this.posZ=r.startGenPoint,this.distance=r.coin.distance}var t=i.prototype;return t.generateCoin=function(i){if(i==o.Null||i==o.Zikzak)for(var t=0;t<5;t++)this.coinNull();else if(i==o.Straight)for(var s=0;s<5;s++)this.coinStraight();else if(i==o.Mix)for(var n=0;n<5;n++){var r=e(4,h.Null,h.Straight,h.Left,h.Right);r==h.Null?this.coinNull():r==h.Straight?this.coinStraight():r==h.Right?this.coinRight():r==h.Left&&this.coinLeft()}},t.coinStraight=function(){this.posX=e(3,25,0,-25);for(var i=0;i<3;i++)this.instantiateCoin("coinStraight"),this.posZ+=this.distance;this.currentCoinGroup=h.Straight},t.coinLeft=function(){if(25!=this.posX){this.currentCoinGroup==h.Right&&this.minePos.push(new s(this.posX,0,this.posZ)),this.currentCoinGroup=h.Left;for(var i=0;i<3;i++)this.instantiateCoin("coinLeft"),this.posX+=12.5,this.posZ+=this.distance;this.posX-=12.5}else this.coinRight()},t.coinRight=function(){if(-25!=this.posX){this.currentCoinGroup==h.Left&&this.minePos.push(new s(this.posX,0,this.posZ)),this.currentCoinGroup=h.Right;for(var i=0;i<3;i++)this.instantiateCoin("coinRight"),this.posX-=12.5,this.posZ+=this.distance;this.posX+=12.5}else this.coinLeft()},t.coinNull=function(){this.posX=e(3,25,0,-25);for(var i=Math.floor(2*Math.random()),t=0;t<3;t++){if(0==i){var o=n(this.testNull);o.setPosition(new s(this.posX,o.position.y,this.posZ)),this.coins.addChild(o)}this.posZ+=this.distance}this.currentCoinGroup=h.Null},t.instantiateCoin=function(i){var t=n(this.prefab);t.name=i,t.setPosition(new s(this.posX,t.position.y,this.posZ)),this.coins.addChild(t),this.listCoin.push(this.coins)},i}());t._RF.pop()}}}));

System.register("chunks:///_virtual/handlerInput.ts",["cc","./enum.ts","./gameManager.ts"],(function(n){var t,e,o,i,s,u,y;return{setters:[function(n){t=n.cclegacy,e=n.KeyCode,o=n.EventMouse,i=n.input,s=n.Input},function(n){u=n.InputKey},function(n){y=n.GameManager}],execute:function(){t._RF.push({},"b85c0O85yhH9ZD+pDuuEOQf","handlerInput",void 0);n("HandleInput",function(){function n(){i.on(s.EventType.KEY_DOWN,this.onKeyDown,this),i.on(s.EventType.KEY_PRESSING,this.onKeyDown,this),i.on(s.EventType.KEY_UP,this.onKeyUp,this),i.on(s.EventType.TOUCH_START,this.onTouchStart,this),i.on(s.EventType.TOUCH_END,this.onKeyUp,this),i.on(s.EventType.MOUSE_DOWN,this.onMouseDown,this),i.on(s.EventType.MOUSE_UP,this.onKeyUp,this)}var t=n.prototype;return t.onKeyDown=function(n){n.keyCode==e.ARROW_RIGHT||n.keyCode==e.KEY_D?y.instance.inputKey=u.Press_Right:n.keyCode!=e.ARROW_LEFT&&n.keyCode!=e.KEY_A||(y.instance.inputKey=u.Press_Left)},t.onKeyUp=function(){y.instance.inputKey=u.Key_Up},t.onTouchStart=function(n){n.getUILocation().x-270>0?y.instance.inputKey=u.Press_Right:y.instance.inputKey=u.Press_Left},t.onMouseDown=function(n){n.getButton()==o.BUTTON_RIGHT?y.instance.inputKey=u.Press_Right:n.getButton()==o.BUTTON_LEFT&&(y.instance.inputKey=u.Press_Left)},n}());t._RF.pop()}}}));

System.register("chunks:///_virtual/landmine.ts",["./rollupPluginModLoBabelHelpers.js","cc","./obstacle.ts"],(function(n){var e,t,c,r;return{setters:[function(n){e=n.inheritsLoose},function(n){t=n.cclegacy,c=n._decorator},function(n){r=n.Obstacle}],execute:function(){var i;t._RF.push({},"bc9d3ICrvBDEJbQH5bU2Ec2","landmine",void 0);var o=c.ccclass;c.property,n("Landmine",o("Landmine")(i=function(n){function t(){return n.apply(this,arguments)||this}return e(t,n),t}(r))||i);t._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./cameraFollow.ts","./gameManager.ts","./handlerInput.ts","./mapControl.ts","./uiManager.ts","./viewControl.ts","./coin.ts","./generateCoin.ts","./landmine.ts","./obstacle.ts","./shield.ts","./trafficCone.ts","./enum.ts","./floatingItem.ts","./mapPackage.ts","./player.ts","./popup.ts","./fuelBar.ts","./config.ts","./objectPooling.ts","./utils.ts","./debug-view-runtime-control.ts"],(function(){return{setters:[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/mapControl.ts",["./rollupPluginModLoBabelHelpers.js","cc","./uiManager.ts"],(function(e){var i,t,n,s,a,r,o,l,u,h,c,p;return{setters:[function(e){i=e.applyDecoratedDescriptor,t=e.inheritsLoose,n=e.initializerDefineProperty,s=e.assertThisInitialized},function(e){a=e.cclegacy,r=e._decorator,o=e.Prefab,l=e.Node,u=e.CCFloat,h=e.instantiate,c=e.Component},function(e){p=e.UIManager}],execute:function(){var w,v,f,d,g,b,x,z,m,y,P,V,M;a._RF.push({},"969a44Q8G9JG75RX5SdFzqH","mapControl",void 0);var C=r.ccclass,I=r.property;e("MapControl",(w=C("MapControl"),v=I(o),f=I(o),d=I(l),g=I(u),b=I(u),w((m=i((z=function(e){function i(){for(var i,t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return i=e.call.apply(e,[this].concat(a))||this,n(i,"viewPrefab",m,s(i)),n(i,"finishLine",y,s(i)),n(i,"view",P,s(i)),n(i,"fuelSize",V,s(i)),n(i,"speed",M,s(i)),i.travels=0,i.stage=1200,i.viewPool=[],i.viewMax=10,i.viewAmount=0,i.viewIndex=0,i.nextView=null,i.isPumping=!1,i}t(i,e);var a=i.prototype;return a.start=function(){console.log(this.viewMax),this.stage=this.fuelSize,this.instatiateNextView(0)},a.update=function(e){if(this.speed+=2*e,this.calculateFuel(e),this.viewAmount==this.viewMax){var i=h(this.finishLine);this.nextView.addChild(i),this.nextView.position.z<=-1100&&p.instance.onWin()}else this.nextView.position.z<=0&&(this.view.destroy(),this.view=this.nextView,console.log(this.viewAmount),this.viewAmount++,this.viewAmount%3==0&&(this.viewIndex++,this.viewIndex>=this.viewPrefab.length&&(this.viewIndex=0)),this.instatiateNextView(this.viewIndex));this.runMap(this.view,e),this.runMap(this.nextView,e)},a.calculateFuel=function(e){var i=this.speed*e;this.travels+=i,this.stage-=i;var t=this.stage/1200;this.stage<.1&&(this.stage=this.fuelSize),p.instance.fuelBar.updateBar(t)},a.instatiateNextView=function(e){this.nextView=h(this.viewPrefab[e]);var i=this.view.getPosition();i.z+=1200,this.nextView.setPosition(i),this.node.addChild(this.nextView)},a.runMap=function(e,i){var t=e.getPosition();t.z-=this.speed*i,e.setPosition(t)},a.hitObstacle=function(){this.stage-=100},i}(c)).prototype,"viewPrefab",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),y=i(z.prototype,"finishLine",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=i(z.prototype,"view",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),V=i(z.prototype,"fuelSize",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1200}}),M=i(z.prototype,"speed",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 200}}),x=z))||x));a._RF.pop()}}}));

System.register("chunks:///_virtual/mapPackage.ts",["cc"],(function(a){var c;return{setters:[function(a){c=a.cclegacy}],execute:function(){c._RF.push({},"baa74yPzgpAoai1FRfORBqM","mapPackage",void 0);a("mapPackage",(function(){this.road_1=[[1,0,0],[1,0,0],[1,2,0],[1,0,0],[0,1,0],[0,0,1],[0,0,1]]}));c._RF.pop()}}}));

System.register("chunks:///_virtual/objectPooling.ts",["cc"],(function(t){var e;return{setters:[function(t){e=t.cclegacy}],execute:function(){e._RF.push({},"2ec29iEpJZCwbIjldDMswNu","objectPooling",void 0);t("ObjectPooling",function(){function t(t,e){this.pool=[],this.createFunc=void 0,this.resetFunc=void 0,this.createFunc,this.resetFunc}var e=t.prototype;return e.acquire=function(){return this.pool.length>0?this.pool.pop():this.createFunc()},e.release=function(t){this.resetFunc(t),this.pool.push(t)},t}());e._RF.pop()}}}));

System.register("chunks:///_virtual/obstacle.ts",["./rollupPluginModLoBabelHelpers.js","cc","./gameManager.ts"],(function(e){var t,r,n,i,o,a,c,l,s;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,n=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){o=e.cclegacy,a=e._decorator,c=e.BoxCollider,l=e.Component},function(e){s=e.GameManager}],execute:function(){var u,p,g,f,h;o._RF.push({},"e8d35sb0kJDLZpv1MHGLpxs","obstacle",void 0);var b=a.ccclass,d=a.property;e("Obstacle",(u=b("Obstacle"),p=d(c),u((h=t((f=function(e){function t(){for(var t,r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o))||this,n(t,"collider",h,i(t)),t}r(t,e);var o=t.prototype;return o.start=function(){this.collider.on("onTriggerEnter",this.onTriggerEnter,this)},o.onTriggerEnter=function(e){s.instance.hitObstacle(),console.log("hit Obstacle")},t}(l)).prototype,"collider",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=f))||g));o._RF.pop()}}}));

System.register("chunks:///_virtual/player.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var r,t,i,o,n,l,a,c,s;return{setters:[function(e){r=e.applyDecoratedDescriptor,t=e.inheritsLoose,i=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){n=e.cclegacy,l=e._decorator,a=e.Node,c=e.BoxCollider,s=e.Component}],execute:function(){var u,p,y,d,f,h,g;n._RF.push({},"f0447aLuGFOaYaFogVBgXCS","player",void 0);var b=l.ccclass,m=l.property;e("Player",(u=b("Player"),p=m(a),y=m(c),u((h=r((f=function(e){function r(){for(var r,t=arguments.length,n=new Array(t),l=0;l<t;l++)n[l]=arguments[l];return r=e.call.apply(e,[this].concat(n))||this,i(r,"carAnim",h,o(r)),i(r,"collider",g,o(r)),r.coin=0,r}return t(r,e),r.prototype.steer=function(e,r){this.node.setRotationFromEuler(0,e,0);var t=this.node.getPosition();t.x+=r,t.x<=-29||t.x>=29||this.node.setPosition(t)},r}(s)).prototype,"carAnim",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=r(f.prototype,"collider",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=f))||d));n._RF.pop()}}}));

System.register("chunks:///_virtual/popup.ts",["./rollupPluginModLoBabelHelpers.js","cc","./gameManager.ts","./uiManager.ts"],(function(n){var e,t,o,c,a,i;return{setters:[function(n){e=n.inheritsLoose},function(n){t=n.cclegacy,o=n._decorator,c=n.Component},function(n){a=n.GameManager},function(n){i=n.UIManager}],execute:function(){var r;t._RF.push({},"c21aa4ovyNOsb+//SFJk2rb","popup",void 0);var p=o.ccclass;o.property,n("PopUp",p("PopUp")(r=function(n){function t(){return n.apply(this,arguments)||this}e(t,n);var o=t.prototype;return o.onNextLevelClick=function(){console.clear(),a.instance.nextLevel(),i.instance.winClick()},o.onReplayClick=function(){a.instance.resetMap(),i.instance.winClick()},t}(c))||r);t._RF.pop()}}}));

System.register("chunks:///_virtual/shield.ts",["./rollupPluginModLoBabelHelpers.js","cc","./enum.ts","./gameManager.ts"],(function(e){var r,n,i,t,o,l,a,c,s,u;return{setters:[function(e){r=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,t=e.assertThisInitialized},function(e){o=e.cclegacy,l=e._decorator,a=e.BoxCollider,c=e.Component},function(e){s=e.Layer},function(e){u=e.GameManager}],execute:function(){var d,p,h,g,f;o._RF.push({},"ac8dfLGKz5BZ60Qvwjvwm/V","shield",void 0);var y=l.ccclass,v=l.property;e("Shield",(d=y("Shield"),p=v(a),d((f=r((g=function(e){function r(){for(var r,n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return r=e.call.apply(e,[this].concat(o))||this,i(r,"collider",f,t(r)),r}n(r,e);var o=r.prototype;return o.start=function(){this.collider.on("onTriggerEnter",this.onTriggerEnter,this)},o.onTriggerEnter=function(e){e.otherCollider.node.layer==s.Player&&(u.instance.onShield(),console.log("onShield"))},r}(c)).prototype,"collider",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=g))||h));o._RF.pop()}}}));

System.register("chunks:///_virtual/trafficCone.ts",["./rollupPluginModLoBabelHelpers.js","cc","./obstacle.ts"],(function(t){var e,n,c,r;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,c=t._decorator},function(t){r=t.Obstacle}],execute:function(){var o;n._RF.push({},"52a70x5/EtDH5UFNhLUA9In","trafficCone",void 0);var i=c.ccclass;c.property,t("TrafficCone",i("TrafficCone")(o=function(t){function n(){return t.apply(this,arguments)||this}return e(n,t),n}(r))||o);n._RF.pop()}}}));

System.register("chunks:///_virtual/uiManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./fuelBar.ts"],(function(e){var n,i,t,r,a,o,l,c,u,s,p;return{setters:[function(e){n=e.applyDecoratedDescriptor,i=e.inheritsLoose,t=e.initializerDefineProperty,r=e.assertThisInitialized,a=e.createClass},function(e){o=e.cclegacy,l=e._decorator,c=e.Label,u=e.Node,s=e.Component},function(e){p=e.FuelBar}],execute:function(){var f,h,b,g,y,v,d,w,_,P,m,B;o._RF.push({},"2ca85YEV0BEcK+gqtr9lMPM","uiManager",void 0);var U=l.ccclass,M=l.property;e("UIManager",(f=U("UIManager"),h=M(p),b=M(c),g=M(u),y=M(u),f(((B=function(e){function n(){for(var n,i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return n=e.call.apply(e,[this].concat(a))||this,t(n,"fuelBar",w,r(n)),t(n,"coinAmount",_,r(n)),t(n,"losePopUp",P,r(n)),t(n,"winPopUp",m,r(n)),n}i(n,e);var o=n.prototype;return o.onLoad=function(){n._instance?this.destroy():n._instance=this},o.onWin=function(){this.winPopUp.active=!0,this.fuelBar.node.active=!1},o.winClick=function(){this.winPopUp.active=!1,this.fuelBar.node.active=!0},a(n,null,[{key:"instance",get:function(){return this._instance||(this._instance=new n),this._instance}}]),n}(s))._instance=void 0,w=n((d=B).prototype,"fuelBar",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_=n(d.prototype,"coinAmount",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=n(d.prototype,"losePopUp",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=n(d.prototype,"winPopUp",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=d))||v));o._RF.pop()}}}));

System.register("chunks:///_virtual/utils.ts",["cc"],(function(t){var r;return{setters:[function(t){r=t.cclegacy}],execute:function(){t({lerp:function(t,r,e){return t*(1-e)+r*e},randomChoice:function(t,r,e,n,u){switch(Math.floor(Math.random()*t)){case 0:return r;case 1:return e;case 2:return n;case 3:return u}return r}}),r._RF.push({},"04c3am7hJ9DoquuSo7Hhxyx","utils",void 0),r._RF.pop()}}}));

System.register("chunks:///_virtual/viewControl.ts",["./rollupPluginModLoBabelHelpers.js","cc","./utils.ts","./enum.ts","./generateCoin.ts"],(function(e){var i,n,t,r,o,a,l,s,c,u,f,h,b,d;return{setters:[function(e){i=e.applyDecoratedDescriptor,n=e.inheritsLoose,t=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){o=e.cclegacy,a=e._decorator,l=e.Node,s=e.Prefab,c=e.instantiate,u=e.Vec3,f=e.Component},function(e){h=e.randomChoice},function(e){b=e.CoinType},function(e){d=e.GenerateCoin}],execute:function(){var p,P,m,y,w,v,g,z,C,x,k,_,D,L,M,N,S,V,F;o._RF.push({},"ea6c4ndSo5Lc7k7MvuNqr94","viewControl",void 0);var R=a.ccclass,T=a.property;e("ViewControl",(p=R("ViewControl"),P=T(l),m=T(l),y=T(l),w=T(l),v=T(s),g=T(s),z=T(s),C=T(s),p((_=i((k=function(e){function i(){for(var i,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return i=e.call.apply(e,[this].concat(o))||this,t(i,"roads",_,r(i)),t(i,"coins",D,r(i)),t(i,"mines",L,r(i)),t(i,"shields",M,r(i)),t(i,"coinPrefab",N,r(i)),t(i,"conePrefab",S,r(i)),t(i,"shieldPrefab",V,r(i)),t(i,"minePrefab",F,r(i)),i}return n(i,e),i.prototype.start=function(){for(var e=new d(this.coinPrefab,this.conePrefab,this.coins),i=0;i<this.roads.length;i++){var n=h(4,b.Null,b.Straight,b.Mix,b.Zikzak);e.generateCoin(n)}for(var t=e.minePos,r=0;r<t.length;r++)if(25==t[r].x){var o=c(this.minePrefab);o.setPosition(new u(0,o.position.y,t[r].z)),this.mines.addChild(o);var a=c(this.shieldPrefab);a.setPosition(new u(-25,a.position.y,t[r].z)),this.shields.addChild(a)}else if(0==t[r].x){var l=c(this.minePrefab);l.setPosition(new u(-25,l.position.y,t[r].z)),this.mines.addChild(l);var s=c(this.shieldPrefab);s.setPosition(new u(0,s.position.y,t[r].z)),this.shields.addChild(s)}else if(-25==t[r].x){var f=c(this.minePrefab);f.setPosition(new u(0,f.position.y,t[r].z)),this.mines.addChild(f);var p=c(this.shieldPrefab);p.setPosition(new u(0,p.position.y,t[r].z)),this.shields.addChild(p)}},i}(f)).prototype,"roads",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),D=i(k.prototype,"coins",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),L=i(k.prototype,"mines",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),M=i(k.prototype,"shields",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),N=i(k.prototype,"coinPrefab",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=i(k.prototype,"conePrefab",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),V=i(k.prototype,"shieldPrefab",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),F=i(k.prototype,"minePrefab",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x=k))||x));o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});