parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"NVij":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.LEVEL=exports.CLASS_LIST=exports.OBJECT_TYPE=exports.DIRECTIONS=exports.CELL_SIZE=exports.GRID_SIZE=void 0;var o=20;exports.GRID_SIZE=o;var e=20;exports.CELL_SIZE=e;var r={ArrowLeft:{code:37,movement:-1,rotation:180},ArrowUp:{code:38,movement:-o,rotation:270},ArrowRight:{code:39,movement:1,rotation:0},ArrowDown:{code:40,movement:o,rotation:90}};exports.DIRECTIONS=r;var t={BLANK:"blank",WALL:"wall",DOT:"dot",BLINKY:"blinky",PINKY:"pinky",INKY:"inky",CLYDE:"clyde",PILL:"pill",PACMAN:"pacman",GHOST:"ghost",SCARED:"scared",GHOSTLAIR:"lair"};exports.OBJECT_TYPE=t;var L=[t.BLANK,t.WALL,t.DOT,t.BLINKY,t.PINKY,t.INKY,t.CLYDE,t.PILL,t.PACMAN,t.GHOSTLAIR];exports.CLASS_LIST=L;var I=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,1,1,2,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,2,1,1,7,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,7,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,2,1,1,2,1,2,1,1,1,1,1,1,2,1,2,1,1,2,1,1,2,2,2,2,1,2,2,2,1,1,2,2,2,1,2,2,2,2,1,1,1,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,1,1,0,0,0,1,2,1,2,2,2,2,2,2,2,2,1,2,1,0,0,0,0,0,0,1,2,1,2,1,9,9,9,9,1,2,1,2,1,0,0,0,1,1,1,1,2,1,2,1,9,9,9,9,1,2,1,2,1,1,1,1,1,0,0,0,2,2,2,1,9,9,9,9,1,2,2,2,0,0,0,1,1,1,1,1,2,1,2,1,9,9,9,9,1,2,1,2,1,1,1,1,0,0,0,1,2,1,2,1,1,1,1,1,1,2,1,2,1,0,0,0,0,0,0,1,2,1,2,0,0,0,0,0,0,2,1,2,1,0,0,0,1,1,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,1,1,1,2,2,2,2,1,2,2,2,1,1,2,2,2,1,2,2,2,2,1,1,2,1,1,2,1,2,1,1,1,1,1,1,2,1,2,1,1,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,7,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,7,1,1,2,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,2,1,1,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];exports.LEVEL=I;
},{}],"MuB3":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.randomMovement=t;var e=require("./setup.js");function t(t,r,o){for(var n=r,s=t+n.movement,a=Object.keys(e.DIRECTIONS);o(s,e.OBJECT_TYPE.WALL)||o(s,e.OBJECT_TYPE.GHOST);){var v=a[Math.floor(Math.random()*a.length)];s=t+(n=e.DIRECTIONS[v]).movement}return{nextMovePos:s,direction:n}}
},{"./setup.js":"NVij"}],"NVR6":[function(require,module,exports) {
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
},{}],"IxO8":[function(require,module,exports) {
function e(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}module.exports=e;
},{}],"p2kp":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=a(require("@babel/runtime/helpers/toConsumableArray")),t=a(require("@babel/runtime/helpers/classCallCheck")),r=a(require("@babel/runtime/helpers/createClass")),i=a(require("@babel/runtime/helpers/defineProperty")),s=require("./setup.js");function a(e){return e&&e.__esModule?e:{default:e}}var o=function(){function a(e){var r=this;(0,t.default)(this,a),(0,i.default)(this,"objectExist",function(e,t){return r.grid[e].classList.contains(t)}),this.dotCount=0,this.grid=[],this.DOMGrid=e}return(0,r.default)(a,[{key:"showGameStatus",value:function(e){var t=document.createElement("div");t.classList.add("game-status"),t.innerHTML="".concat(e?"WIN!":"GAME OVER!"),this.DOMGrid.appendChild(t)}},{key:"createGrid",value:function(e){var t=this;this.dotCount=0,this.grid=[],this.DOMGrid.innerHTML="",this.DOMGrid.style.cssText="grid-template-columns: repeat(".concat(s.GRID_SIZE,", ").concat(s.CELL_SIZE,"px);"),e.forEach(function(e){var r=document.createElement("div");r.classList.add("square",s.CLASS_LIST[e]),r.style.cssText="width: ".concat(s.CELL_SIZE,"px; height: ").concat(s.CELL_SIZE,"px;"),t.DOMGrid.appendChild(r),t.grid.push(r),s.CLASS_LIST[e]===s.OBJECT_TYPE.DOT&&t.dotCount++})}},{key:"addObject",value:function(t,r){var i;(i=this.grid[t].classList).add.apply(i,(0,e.default)(r))}},{key:"removeObject",value:function(t,r){var i;(i=this.grid[t].classList).remove.apply(i,(0,e.default)(r))}},{key:"rotateDiv",value:function(e,t){this.grid[e].style.transform="rotate(".concat(t,"deg)")}},{key:"moveCharacter",value:function(e){if(e.shouldMove()){var t=e.getNextMove(this.objectExist),r=t.nextMovePos,i=t.direction,s=e.makeMove(),a=s.classesToRemove,o=s.classesToAdd;e.rotation&&r!==e.pos&&(this.rotateDiv(r,e.dir.rotation),this.rotateDiv(e.pos,0)),this.removeObject(e.pos,a),this.addObject(r,o),e.setNewPos(r,i)}}}],[{key:"createGameBoard",value:function(e,t){var r=new this(e);return r.createGrid(t),r}}]),a}(),n=o;exports.default=n;
},{"@babel/runtime/helpers/toConsumableArray":"Fhqp","@babel/runtime/helpers/classCallCheck":"fcMS","@babel/runtime/helpers/createClass":"P8NW","@babel/runtime/helpers/defineProperty":"IxO8","./setup.js":"NVij"}],"naqe":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("@babel/runtime/helpers/classCallCheck")),t=r(require("@babel/runtime/helpers/createClass")),i=r(require("@babel/runtime/helpers/defineProperty")),s=require("./setup.js");function r(e){return e&&e.__esModule?e:{default:e}}var o=function(){function r(t,o){var u=this;(0,e.default)(this,r),(0,i.default)(this,"handleKeyInput",function(e,t){var i;e.keyCode>=37&&e.keyCode<=40&&(i=s.DIRECTIONS[e.key],t(u.pos+i.movement,s.OBJECT_TYPE.WALL)||(u.dir=i))}),this.pos=o,this.speed=t,this.dir=null,this.timer=0,this.powerPill=!1,this.rotation=!0}return(0,t.default)(r,[{key:"shouldMove",value:function(){return!!this.dir&&(this.timer===this.speed?(this.timer=0,!0):void this.timer++)}},{key:"getNextMove",value:function(e){var t=this.pos+this.dir.movement;return(e(t,s.OBJECT_TYPE.WALL)||e(t,s.OBJECT_TYPE.GHOSTLAIR))&&(t=this.pos),{nextMovePos:t,direction:this.dir}}},{key:"makeMove",value:function(){return{classesToRemove:[s.OBJECT_TYPE.PACMAN],classesToAdd:[s.OBJECT_TYPE.PACMAN]}}},{key:"setNewPos",value:function(e){this.pos=e}}]),r}(),u=o;exports.default=u;
},{"@babel/runtime/helpers/classCallCheck":"fcMS","@babel/runtime/helpers/createClass":"P8NW","@babel/runtime/helpers/defineProperty":"IxO8","./setup.js":"NVij"}],"BSCL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("@babel/runtime/helpers/toConsumableArray")),t=r(require("@babel/runtime/helpers/classCallCheck")),s=r(require("@babel/runtime/helpers/createClass")),i=require("./setup.js");function r(e){return e&&e.__esModule?e:{default:e}}var o=function(){function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,s=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0;(0,t.default)(this,r),this.name=n,this.movement=o,this.startPos=s,this.pos=s,this.dir=i.DIRECTIONS.ArrowRight,this.speed=e,this.timer=0,this.isScared=!1,this.rotation=!1}return(0,s.default)(r,[{key:"shouldMove",value:function(){return this.timer===this.speed?(this.timer=0,!0):(this.timer++,!1)}},{key:"getNextMove",value:function(e){var t=this.movement(this.pos,this.dir,e);return{nextMovePos:t.nextMovePos,direction:t.direction}}},{key:"makeMove",value:function(){var t=[i.OBJECT_TYPE.GHOST,i.OBJECT_TYPE.SCARED,this.name],s=[i.OBJECT_TYPE.GHOST,this.name];return this.isScared&&(s=[].concat((0,e.default)(s),[i.OBJECT_TYPE.SCARED])),{classesToRemove:t,classesToAdd:s}}},{key:"setNewPos",value:function(e,t){this.pos=e,this.dir=t}}]),r}(),n=o;exports.default=n;
},{"@babel/runtime/helpers/toConsumableArray":"Fhqp","@babel/runtime/helpers/classCallCheck":"fcMS","@babel/runtime/helpers/createClass":"P8NW","./setup.js":"NVij"}],"LAbX":[function(require,module,exports) {
module.exports="sounds/munch.wav";
},{}],"mqJk":[function(require,module,exports) {
module.exports="sounds/pill.wav";
},{}],"Zfvf":[function(require,module,exports) {
module.exports="sounds/game_start.wav";
},{}],"zCmu":[function(require,module,exports) {
module.exports="sounds/death.wav";
},{}],"PIU3":[function(require,module,exports) {
module.exports="sounds/eat_ghost.wav";
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./setup"),t=require("./ghostMoves.js"),r=c(require("./GameBoard")),o=c(require("./Pacman")),n=c(require("./Ghost")),u=c(require("./sounds/munch.wav")),a=c(require("./sounds/pill.wav")),i=c(require("./sounds/game_start.wav")),s=c(require("./sounds/death.wav")),d=c(require("./sounds/eat_ghost.wav"));function c(e){return e&&e.__esModule?e:{default:e}}var l=document.querySelector("#game"),E=document.querySelector("#score"),m=document.querySelector("#start-button"),T=1e4,v=80,f=r.default.createGameBoard(l,e.LEVEL),P=0,p=null,w=!1,C=!1,O=null;function L(e){new Audio(e).play()}function Y(e,t){L(s.default),document.removeEventListener("keydown",function(t){return e.handleKeyInput(t,f.objectExist.bind(f))}),f.showGameStatus(w),clearInterval(p),m.classList.remove("hide")}function _(t,r){var o=r.find(function(e){return t.pos===e.pos});o&&(t.powerPill?(L(d.default),f.removeObject(o.pos,[e.OBJECT_TYPE.GHOST,e.OBJECT_TYPE.SCARED,o.name]),o.pos=o.startPos,P+=100):(f.removeObject(t.pos,[e.OBJECT_TYPE.PACMAN]),f.rotateDiv(t.pos,0),Y(t,l)))}function B(t,r){f.moveCharacter(t),_(t,r),r.forEach(function(e){return f.moveCharacter(e)}),_(t,r),f.objectExist(t.pos,e.OBJECT_TYPE.DOT)&&(L(u.default),f.removeObject(t.pos,[e.OBJECT_TYPE.DOT]),f.dotCount--,P+=10),f.objectExist(t.pos,e.OBJECT_TYPE.PILL)&&(L(a.default),f.removeObject(t.pos,[e.OBJECT_TYPE.PILL]),t.powerPill=!0,P+=50,clearTimeout(O),O=setTimeout(function(){return t.powerPill=!1},T)),t.powerPill!==C&&(C=t.powerPill,r.forEach(function(e){return e.isScared=t.powerPill})),0===f.dotCount&&(w=!0,Y(t,l)),E.innerHTML=P}function h(){L(i.default),w=!1,C=!1,P=0,m.classList.add("hide"),f.createGrid(e.LEVEL);var r=new o.default(2,287);f.addObject(287,[e.OBJECT_TYPE.PACMAN]),document.addEventListener("keydown",function(e){return r.handleKeyInput(e,f.objectExist)});var u=[new n.default(5,188,t.randomMovement,e.OBJECT_TYPE.BLINKY),new n.default(4,209,t.randomMovement,e.OBJECT_TYPE.PINKY),new n.default(3,230,t.randomMovement,e.OBJECT_TYPE.INKY),new n.default(2,251,t.randomMovement,e.OBJECT_TYPE.CLYDE)];p=setInterval(function(){return B(r,u)},v)}m.addEventListener("click",h);
},{"./setup":"NVij","./ghostMoves.js":"MuB3","./GameBoard":"p2kp","./Pacman":"naqe","./Ghost":"BSCL","./sounds/munch.wav":"LAbX","./sounds/pill.wav":"mqJk","./sounds/game_start.wav":"Zfvf","./sounds/death.wav":"zCmu","./sounds/eat_ghost.wav":"PIU3"}]},{},["Focm"], null)
//# sourceMappingURL=/index.js.map