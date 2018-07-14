!function(t){var e={};function i(r){if(e[r])return e[r].exports;var s=e[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(r,s,function(e){return t[e]}.bind(null,s));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=5)}([function(t,e,i){"use strict";(function(t){var i=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var i=-1;return t.some(function(t,r){return t[0]===e&&(i=r,!0)}),i}return function(){function e(){this.__entries__=[]}var i={size:{configurable:!0}};return i.size.get=function(){return this.__entries__.length},e.prototype.get=function(e){var i=t(this.__entries__,e),r=this.__entries__[i];return r&&r[1]},e.prototype.set=function(e,i){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=i:this.__entries__.push([e,i])},e.prototype.delete=function(e){var i=this.__entries__,r=t(i,e);~r&&i.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var i=0,r=this.__entries__;i<r.length;i+=1){var s=r[i];t.call(e,s[1],s[0])}},Object.defineProperties(e.prototype,i),e}()}(),r="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,s=void 0!==t&&t.Math===Math?t:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),n="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(s):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)},o=2,a=["top","right","bottom","left","width","height","size","weight"],h="undefined"!=typeof MutationObserver,c=function(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var i=!1,r=!1,s=0;function a(){i&&(i=!1,t()),r&&c()}function h(){n(a)}function c(){var t=Date.now();if(i){if(t-s<o)return;r=!0}else i=!0,r=!1,setTimeout(h,e);s=t}return c}(this.refresh.bind(this),20)};c.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},c.prototype.removeObserver=function(t){var e=this.observers_,i=e.indexOf(t);~i&&e.splice(i,1),!e.length&&this.connected_&&this.disconnect_()},c.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},c.prototype.updateObservers_=function(){var t=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return t.forEach(function(t){return t.broadcastActive()}),t.length>0},c.prototype.connect_=function(){r&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),h?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},c.prototype.disconnect_=function(){r&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},c.prototype.onTransitionEnd_=function(t){var e=t.propertyName;void 0===e&&(e=""),a.some(function(t){return!!~e.indexOf(t)})&&this.refresh()},c.getInstance=function(){return this.instance_||(this.instance_=new c),this.instance_},c.instance_=null;var f=function(t,e){for(var i=0,r=Object.keys(e);i<r.length;i+=1){var s=r[i];Object.defineProperty(t,s,{value:e[s],enumerable:!1,writable:!1,configurable:!0})}return t},d=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||s},l=y(0,0,0,0);function u(t){return parseFloat(t)||0}function b(t){for(var e=[],i=arguments.length-1;i-- >0;)e[i]=arguments[i+1];return e.reduce(function(e,i){return e+u(t["border-"+i+"-width"])},0)}function v(t){var e=t.clientWidth,i=t.clientHeight;if(!e&&!i)return l;var r=d(t).getComputedStyle(t),s=function(t){for(var e={},i=0,r=["top","right","bottom","left"];i<r.length;i+=1){var s=r[i],n=t["padding-"+s];e[s]=u(n)}return e}(r),n=s.left+s.right,o=s.top+s.bottom,a=u(r.width),h=u(r.height);if("border-box"===r.boxSizing&&(Math.round(a+n)!==e&&(a-=b(r,"left","right")+n),Math.round(h+o)!==i&&(h-=b(r,"top","bottom")+o)),!function(t){return t===d(t).document.documentElement}(t)){var c=Math.round(a+n)-e,f=Math.round(h+o)-i;1!==Math.abs(c)&&(a-=c),1!==Math.abs(f)&&(h-=f)}return y(s.left,s.top,a,h)}var p="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof d(t).SVGGraphicsElement}:function(t){return t instanceof d(t).SVGElement&&"function"==typeof t.getBBox};function g(t){return r?p(t)?function(t){var e=t.getBBox();return y(0,0,e.width,e.height)}(t):v(t):l}function y(t,e,i,r){return{x:t,y:e,width:i,height:r}}var m=function(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=y(0,0,0,0),this.target=t};m.prototype.isActive=function(){var t=g(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},m.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t};var _=function(t,e){var i=function(t){var e=t.x,i=t.y,r=t.width,s=t.height,n="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,o=Object.create(n.prototype);return f(o,{x:e,y:i,width:r,height:s,top:i,right:e+r,bottom:s+i,left:e}),o}(e);f(this,{target:t,contentRect:i})},w=function(t,e,r){if(this.activeObservations_=[],this.observations_=new i,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=r};w.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof d(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new m(t)),this.controller_.addObserver(this),this.controller_.refresh())}},w.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof d(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},w.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},w.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(e){e.isActive()&&t.activeObservations_.push(e)})},w.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map(function(t){return new _(t.target,t.broadcastRect())});this.callback_.call(t,e,t),this.clearActive()}},w.prototype.clearActive=function(){this.activeObservations_.splice(0)},w.prototype.hasActive=function(){return this.activeObservations_.length>0};var T="undefined"!=typeof WeakMap?new WeakMap:new i,O=function(t){if(!(this instanceof O))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var e=c.getInstance(),i=new w(t,e,this);T.set(this,i)};["observe","unobserve","disconnect"].forEach(function(t){O.prototype[t]=function(){return(e=T.get(this))[t].apply(e,arguments);var e}});var E=void 0!==s.ResizeObserver?s.ResizeObserver:O;e.a=E}).call(this,i(3))},,function(t,e,i){},function(t,e){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(i=window)}t.exports=i},function(t,e,i){"use strict";i.r(e);var r=i(0);function s(t){t?(this.container=document.getElementById(t),this.registeredTabs=[],this.activeTabIndex=0,this.switchCallbacks=[],this.framer=this.container.getElementsByClassName("dynamic-tabs-framer")[0],this.framerShift=0,this.framerWidth=0,this.totalTabsWidth=0,this.indicatorBar=this.container.getElementsByClassName("dt-indicator-bar")[0],this.arrowLeft=this.container.getElementsByClassName("arrow-left")[0],this.arrowRight=this.container.getElementsByClassName("arrow-right")[0],this.arrowLeft.addEventListener("click",this.scrollLeft.bind(this,.85)),this.arrowRight.addEventListener("click",this.scrollRight.bind(this,.85)),new r.a(this.refreshLayout.bind(this)).observe(this.framer)):console.log("ERROR: To register dynamic tabs, pass in the ID of a node containing the tabs")}function n(t){this.activeTabIndex<this.registeredTabs.length&&this.registeredTabs[this.activeTabIndex].el.removeAttribute("data-dtactive"),this.registeredTabs[t].el.setAttribute("data-dtactive","y")}function o(t,e){a.call(this,0,{left:t,width:e[0]});for(var i=1,r=this.registeredTabs.length;i<r;i++)a.call(this,i,{left:this.registeredTabs[i-1].rect.left+this.registeredTabs[i-1].rect.width,width:e[i]})}function a(t,e){this.registeredTabs.splice(t,1,{el:this.registeredTabs[t].el,rect:e})}s.prototype.registerTabs=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(void 0!==t&&0!==t.length){for(var i=0;i<t.length;i++)this.registerTab(document.getElementById(e+t[i]));n.call(this,0),this.refreshLayout()}else console.log("ERROR: Must pass in an array of tab IDs to register")},s.prototype.registerAllTabs=function(){var t=this.container.getElementsByClassName("dynamic-tab");if(0!==t.length){for(var e=0;e<t.length;e++)this.registerTab(t[e]);n.call(this,0),this.refreshLayout()}else console.log("ERROR: There are no tabs to register")},s.prototype.registerTab=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t.setAttribute("data-dtr","y");var i=this.registeredTabs.length,r=this;t.handleEvent=function(t){if("click"===t.type){r.setActiveTabIndex(i);for(var e=0;e<r.switchCallbacks.length;e++)r.switchCallbacks[e](r.activeTabIndex,i)}},t.addEventListener("click",t),this.registeredTabs.push({el:t,rect:{left:0,width:0}}),e&&this.refreshLayout()},s.prototype.deregisterAllTabs=function(){for(var t=this.registeredTabs.length;t>0;t--)this.deregisterTab(0);this.switchCallbacks=[],this.refreshLayout()},s.prototype.deregisterTab=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.registeredTabs[t].el.removeEventListener("click",this.registeredTabs[t].el),this.registeredTabs[t].el.removeAttribute("data-dtr"),this.registeredTabs[t].el.removeAttribute("data-dtactive");var i=this.registeredTabs[t].el.style["margin-left"];"0px"!==i&&""!==i&&(this.registeredTabs[t].el.style["margin-left"]="0px"),this.registeredTabs.splice(t,1),0===this.registeredTabs.length&&(this.indicatorBar.style.width="0"),e&&this.refreshLayout()},s.prototype.setActiveTabIndex=function(t){0!==this.registeredTabs.length?t>=this.registeredTabs.length?console.log("ERROR: Invalid tab index failed to set"):(this.activeTabIndex=t,n.call(this,t),this.scrollToActiveTab()):this.activeTabIndex=0},s.prototype.addSwitchCallback=function(t){this.switchCallbacks.push(t)},s.prototype.refreshLayout=function(){var t=this;if(0!==this.registeredTabs.length){this.framerWidth=this.framer.getBoundingClientRect().width,this.totalTabsWidth=0;var e=this.registeredTabs.map(function(e){var i=e.el.getBoundingClientRect().width;return t.totalTabsWidth+=i,i});this.totalTabsWidth>this.framerWidth?(this.framer.style["text-align"]="left",o.call(this,0,e),this.scrollToActiveTab()):(this.framer.style["text-align"]="center",this.setTabsOffset(0),o.call(this,(this.framerWidth-this.totalTabsWidth)/2,e),this.resetIndicator(),this.hideArrow())}},s.prototype.scrollToActiveTab=function(){if(this.totalTabsWidth<=this.framerWidth)this.resetIndicator();else{var t=this.registeredTabs[this.activeTabIndex],e=t.rect.left+this.framerShift,i=t.rect.left+t.rect.width+this.framerShift;if(e<0){var r=Math.abs(e)/this.framerWidth;this.scrollLeft(r+1.1*t.rect.width/this.framerWidth)}else if(i>this.framerWidth){var s=i/this.framerWidth;this.scrollRight(s-1.1*t.rect.width/this.framerWidth)}else 0===this.activeTabIndex&&this.hideArrow("left"),this.resetIndicator();var n=this.registeredTabs[this.registeredTabs.length-1].rect;n.left+n.width+this.framerShift>this.framerWidth&&this.showArrow("right")}},s.prototype.resetIndicator=function(){var t=this.activeTabIndex;t>=this.registeredTabs.length&&(t=this.registeredTabs.length-1),this.indicatorBar.style.left=this.framerShift+this.registeredTabs[t].rect.left+"px",this.indicatorBar.style.width=this.registeredTabs[t].rect.width+"px"},s.prototype.scrollLeft=function(t){void 0===t&&(t=.85);var e=t*this.framerWidth;this.framerShift>=0||(Math.abs(this.framerShift)>e?this.setTabsOffset(this.framerShift+e):(this.setTabsOffset(0),this.hideArrow("left")),this.resetIndicator(),this.showArrow("right"))},s.prototype.scrollRight=function(t){void 0===t&&(t=.85);var e=t*this.framerWidth,i=Math.abs(this.totalTabsWidth-this.framerWidth+this.framerShift);i<=0||(i>e?this.setTabsOffset(this.framerShift-e):(this.setTabsOffset(-(this.totalTabsWidth-this.framerWidth)),this.hideArrow("right")),this.resetIndicator(),this.showArrow("left"))},s.prototype.setTabsOffset=function(t){this.framerShift=t,this.registeredTabs[0].el.style["margin-left"]=this.framerShift+"px"},s.prototype.showArrow=function(t){"left"===t?this.arrowLeft.style.visibility="":"right"===t?this.arrowRight.style.visibility="":(this.arrowLeft.style.visibility="",this.arrowRight.style.visibility="")},s.prototype.hideArrow=function(t){"left"===t?this.arrowLeft.style.visibility="hidden":"right"===t?this.arrowRight.style.visibility="hidden":(this.arrowLeft.style.visibility="hidden",this.arrowRight.style.visibility="hidden")},e.default=s},function(t,e,i){i(4),t.exports=i(2)}]);