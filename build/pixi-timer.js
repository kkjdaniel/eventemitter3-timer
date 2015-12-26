!function(e){function t(r){if(i[r])return i[r].exports;var n=i[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var i={};return t.m=e,t.c=i,t.p="",t(0)}([function(e,t,i){e.exports=i(4)},function(e,t,i){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var u=i(2),l=r(u),f=function(e){function t(){var e=arguments.length<=0||void 0===arguments[0]?1:arguments[0],i=arguments[1];n(this,t);var r=a(this,Object.getPrototypeOf(t).call(this));return r.time=e,i&&r.addTo(i),r.active=!1,r.isEnded=!1,r.isStarted=!1,r.expire=!1,r.delay=0,r.repeat=0,r.loop=!1,r._delayTime=0,r._elapsedTime=0,r._repeat=0,r}return s(t,e),o(t,[{key:"addTo",value:function(e){return this.manager=e,this.manager.addTimer(this),this}},{key:"remove",value:function(){return this.manager?(this.manager.removeTimer(this),this):void 0}},{key:"start",value:function(){return this.active=!0,this}},{key:"stop",value:function(){return this.active=!1,this.emit("stop",this._elapsedTime),this}},{key:"reset",value:function(){return this._elapsedTime=0,this._repeat=0,this._delayTime=0,this.isStarted=!1,this.isEnded=!1,this}},{key:"update",value:function(e,t){if(this.active){if(this.delay>this._delayTime)return void(this._delayTime+=t);if(this.isStarted||(this.isStarted=!0,this.emit("start",this._elapsedTime)),this.time>this._elapsedTime){var i=this._elapsedTime+t,r=i>=this.time;if(this._elapsedTime=r?this.time:i,this.emit("update",this._elapsedTime,e),r){if(this.loop||this.repeat>this._repeat)return this._repeat++,this.emit("repeat",this._elapsedTime,this._repeat),void(this._elapsedTime=0);this.isEnded=!0,this.active=!1,this.emit("end",this._elapsedTime)}}}}}]),t}(l["default"].utils.EventEmitter);t["default"]=f},function(e,t){e.exports=PIXI},function(e,t,i){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var s=i(1),o=r(s),u=function(){function e(){n(this,e),this.timers=[],this._timersToDelete=[],this._last=0}return a(e,[{key:"update",value:function(e){var t=void 0;e||0===e?t=1e3*e:(t=this._getDeltaMS(),e=t/1e3);for(var i=0;i<this.timers.length;i++){var r=this.timers[i];r.active&&(r.update(e,t),r.isEnded&&r.expire&&r.remove())}if(this._timersToDelete.length){for(var i=0;i<this._timersToDelete.length;i++)this._remove(this._timersToDelete[i]);this._timersToDelete.length=0}}},{key:"removeTimer",value:function(e){this._timersToDelete.push(e)}},{key:"addTimer",value:function(e){e.manager=this,this.timers.push(e)}},{key:"createTimer",value:function(e){return new o["default"](e,this)}},{key:"_remove",value:function(e){var t=this.timers.indexOf(e);t>0&&this.timers.splice(t,1)}},{key:"_getDeltaMS",value:function(){0===this._last&&(this._last=Date.now());var e=Date.now(),t=e-this._last;return this._last=e,t}}]),e}();t["default"]=u},function(e,t,i){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(2),a=r(n),s=i(3),o=r(s),u=i(1),l=r(u);if(!a["default"].TimerManager){var f=new o["default"];a["default"].TimerManager=o["default"],a["default"].Timer=l["default"],a["default"].timer=f}t["default"]=a["default"].timer}]);
//# sourceMappingURL=pixi-timer.js.map