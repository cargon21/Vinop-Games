parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"NVR6":[function(require,module,exports) {
function n(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,l=new Array(r);e<r;e++)l[e]=n[e];return l}module.exports=n;
},{}],"XfJI":[function(require,module,exports) {
var r=require("./arrayLikeToArray");function a(a){if(Array.isArray(a))return r(a)}module.exports=a;
},{"./arrayLikeToArray":"NVR6"}],"OMTj":[function(require,module,exports) {
function e(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}module.exports=e;
},{}],"UyFj":[function(require,module,exports) {
var r=require("./arrayLikeToArray");function t(t,e){if(t){if("string"==typeof t)return r(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?r(t,e):void 0}}module.exports=t;
},{"./arrayLikeToArray":"NVR6"}],"wFNi":[function(require,module,exports) {
function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}module.exports=e;
},{}],"Fhqp":[function(require,module,exports) {
var r=require("./arrayWithoutHoles"),e=require("./iterableToArray"),u=require("./unsupportedIterableToArray"),a=require("./nonIterableSpread");function o(o){return r(o)||e(o)||u(o)||a()}module.exports=o;
},{"./arrayWithoutHoles":"XfJI","./iterableToArray":"OMTj","./unsupportedIterableToArray":"UyFj","./nonIterableSpread":"wFNi"}],"fcMS":[function(require,module,exports) {
function n(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}module.exports=n;
},{}],"P8NW":[function(require,module,exports) {
function e(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function r(r,n,t){return n&&e(r.prototype,n),t&&e(r,t),r}module.exports=r;
},{}],"NVij":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.LEVEL=exports.CLASS_LIST=exports.OBJECT_TYPE=exports.DIRECTIONS=exports.CELL_SIZE=exports.GRID_SIZE=void 0;var o=20;exports.GRID_SIZE=o;var e=20;exports.CELL_SIZE=e;var r={ArrowLeft:{code:37,movement:-1,rotation:180},ArrowUp:{code:38,movement:-o,rotation:270},ArrowRight:{code:39,movement:1,rotation:0},ArrowDown:{code:40,movement:o,rotation:90}};exports.DIRECTIONS=r;var t={BLANK:"blank",WALL:"wall",DOT:"dot",BLINKY:"blinky",PINKY:"pinky",INKY:"inky",CLYDE:"clyde",PILL:"pill",PACMAN:"pacman",GHOST:"ghost",SCARED:"scared",GHOSTLAIR:"lair"};exports.OBJECT_TYPE=t;var L=[t.BLANK,t.WALL,t.DOT,t.BLINKY,t.PINKY,t.INKY,t.CLYDE,t.PILL,t.PACMAN,t.GHOSTLAIR];exports.CLASS_LIST=L;var I=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,1,1,2,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,2,1,1,7,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,7,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,2,1,1,2,1,2,1,1,1,1,1,1,2,1,2,1,1,2,1,1,2,2,2,2,1,2,2,2,1,1,2,2,2,1,2,2,2,2,1,1,1,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,1,1,0,0,0,1,2,1,2,2,2,2,2,2,2,2,1,2,1,0,0,0,0,0,0,1,2,1,2,1,9,9,9,9,1,2,1,2,1,0,0,0,1,1,1,1,2,1,2,1,9,9,9,9,1,2,1,2,1,1,1,1,1,0,0,0,2,2,2,1,9,9,9,9,1,2,2,2,0,0,0,1,1,1,1,1,2,1,2,1,9,9,9,9,1,2,1,2,1,1,1,1,0,0,0,1,2,1,2,1,1,1,1,1,1,2,1,2,1,0,0,0,0,0,0,1,2,1,2,0,0,0,0,0,0,2,1,2,1,0,0,0,1,1,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,1,1,1,2,2,2,2,1,2,2,2,1,1,2,2,2,1,2,2,2,2,1,1,2,1,1,2,1,2,1,1,1,1,1,1,2,1,2,1,1,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,7,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,7,1,1,2,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,2,1,1,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];exports.LEVEL=I;
},{}],"BSCL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("@babel/runtime/helpers/toConsumableArray")),t=r(require("@babel/runtime/helpers/classCallCheck")),s=r(require("@babel/runtime/helpers/createClass")),i=require("./setup.js");function r(e){return e&&e.__esModule?e:{default:e}}var o=function(){function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,s=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0;(0,t.default)(this,r),this.name=n,this.movement=o,this.startPos=s,this.pos=s,this.dir=i.DIRECTIONS.ArrowRight,this.speed=e,this.timer=0,this.isScared=!1,this.rotation=!1}return(0,s.default)(r,[{key:"shouldMove",value:function(){return this.timer===this.speed?(this.timer=0,!0):(this.timer++,!1)}},{key:"getNextMove",value:function(e){var t=this.movement(this.pos,this.dir,e);return{nextMovePos:t.nextMovePos,direction:t.direction}}},{key:"makeMove",value:function(){var t=[i.OBJECT_TYPE.GHOST,i.OBJECT_TYPE.SCARED,this.name],s=[i.OBJECT_TYPE.GHOST,this.name];return this.isScared&&(s=[].concat((0,e.default)(s),[i.OBJECT_TYPE.SCARED])),{classesToRemove:t,classesToAdd:s}}},{key:"setNewPos",value:function(e,t){this.pos=e,this.dir=t}}]),r}(),n=o;exports.default=n;
},{"@babel/runtime/helpers/toConsumableArray":"Fhqp","@babel/runtime/helpers/classCallCheck":"fcMS","@babel/runtime/helpers/createClass":"P8NW","./setup.js":"NVij"}]},{},["BSCL"], null)
//# sourceMappingURL=/Ghost.js.map