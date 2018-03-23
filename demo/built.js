!function(t){var e={};function i(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},i.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="../demo",i(i.s=3)}([function(t,e,i){"use strict";(function(t){var i=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var i=-1;return t.some(function(t,r){return t[0]===e&&(i=r,!0)}),i}return function(){function e(){this.__entries__=[]}var i={size:{configurable:!0}};return i.size.get=function(){return this.__entries__.length},e.prototype.get=function(e){var i=t(this.__entries__,e),r=this.__entries__[i];return r&&r[1]},e.prototype.set=function(e,i){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=i:this.__entries__.push([e,i])},e.prototype.delete=function(e){var i=this.__entries__,r=t(i,e);~r&&i.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var i=0,r=this.__entries__;i<r.length;i+=1){var n=r[i];t.call(e,n[1],n[0])}},Object.defineProperties(e.prototype,i),e}()}(),r="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,n=void 0!==t&&t.Math===Math?t:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),s="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(n):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)},o=2,a=["top","right","bottom","left","width","height","size","weight"],h="undefined"!=typeof MutationObserver,c=function(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var i=!1,r=!1,n=0;function a(){i&&(i=!1,t()),r&&c()}function h(){s(a)}function c(){var t=Date.now();if(i){if(t-n<o)return;r=!0}else i=!0,r=!1,setTimeout(h,e);n=t}return c}(this.refresh.bind(this),20)};c.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},c.prototype.removeObserver=function(t){var e=this.observers_,i=e.indexOf(t);~i&&e.splice(i,1),!e.length&&this.connected_&&this.disconnect_()},c.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},c.prototype.updateObservers_=function(){var t=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return t.forEach(function(t){return t.broadcastActive()}),t.length>0},c.prototype.connect_=function(){r&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),h?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},c.prototype.disconnect_=function(){r&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},c.prototype.onTransitionEnd_=function(t){var e=t.propertyName;void 0===e&&(e=""),a.some(function(t){return!!~e.indexOf(t)})&&this.refresh()},c.getInstance=function(){return this.instance_||(this.instance_=new c),this.instance_},c.instance_=null;var d=function(t,e){for(var i=0,r=Object.keys(e);i<r.length;i+=1){var n=r[i];Object.defineProperty(t,n,{value:e[n],enumerable:!1,writable:!1,configurable:!0})}return t},l=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||n},f=m(0,0,0,0);function u(t){return parseFloat(t)||0}function b(t){for(var e=[],i=arguments.length-1;i-- >0;)e[i]=arguments[i+1];return e.reduce(function(e,i){return e+u(t["border-"+i+"-width"])},0)}function v(t){var e=t.clientWidth,i=t.clientHeight;if(!e&&!i)return f;var r=l(t).getComputedStyle(t),n=function(t){for(var e={},i=0,r=["top","right","bottom","left"];i<r.length;i+=1){var n=r[i],s=t["padding-"+n];e[n]=u(s)}return e}(r),s=n.left+n.right,o=n.top+n.bottom,a=u(r.width),h=u(r.height);if("border-box"===r.boxSizing&&(Math.round(a+s)!==e&&(a-=b(r,"left","right")+s),Math.round(h+o)!==i&&(h-=b(r,"top","bottom")+o)),!function(t){return t===l(t).document.documentElement}(t)){var c=Math.round(a+s)-e,d=Math.round(h+o)-i;1!==Math.abs(c)&&(a-=c),1!==Math.abs(d)&&(h-=d)}return m(n.left,n.top,a,h)}var g="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof l(t).SVGGraphicsElement}:function(t){return t instanceof l(t).SVGElement&&"function"==typeof t.getBBox};function p(t){return r?g(t)?function(t){var e=t.getBBox();return m(0,0,e.width,e.height)}(t):v(t):f}function m(t,e,i,r){return{x:t,y:e,width:i,height:r}}var y=function(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=m(0,0,0,0),this.target=t};y.prototype.isActive=function(){var t=p(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},y.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t};var w=function(t,e){var i,r,n,s,o,a,h,c=(r=(i=e).x,n=i.y,s=i.width,o=i.height,a="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,h=Object.create(a.prototype),d(h,{x:r,y:n,width:s,height:o,top:n,right:r+s,bottom:o+n,left:r}),h);d(this,{target:t,contentRect:c})},_=function(t,e,r){if(this.activeObservations_=[],this.observations_=new i,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=r};_.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof l(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new y(t)),this.controller_.addObserver(this),this.controller_.refresh())}},_.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof l(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},_.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},_.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(e){e.isActive()&&t.activeObservations_.push(e)})},_.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map(function(t){return new w(t.target,t.broadcastRect())});this.callback_.call(t,e,t),this.clearActive()}},_.prototype.clearActive=function(){this.activeObservations_.splice(0)},_.prototype.hasActive=function(){return this.activeObservations_.length>0};var T="undefined"!=typeof WeakMap?new WeakMap:new i,E=function(t){if(!(this instanceof E))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var e=c.getInstance(),i=new _(t,e,this);T.set(this,i)};["observe","unobserve","disconnect"].forEach(function(t){E.prototype[t]=function(){return(e=T.get(this))[t].apply(e,arguments);var e}});var O=void 0!==n.ResizeObserver?n.ResizeObserver:E;e.a=O}).call(this,i(2))},function(t,e,i){"use strict";i.r(e);var r=i(0);function n(t){var e=this;t?(this.container=document.getElementById(t),this.registeredTabs=[],this.activeTabIndex=0,this.switchCallbacks=[],this.framer=this.container.getElementsByClassName("dynamic-tabs-framer")[0],this.framerShift=0,this.framerWidth=0,this.totalTabsWidth=0,this.indicatorBar=this.container.getElementsByClassName("dt-indicator-bar")[0],this.arrowLeft=this.container.getElementsByClassName("arrow-left")[0],this.arrowRight=this.container.getElementsByClassName("arrow-right")[0],this.arrowLeft.addEventListener("click",this.scrollLeft.bind(this,.85)),this.arrowRight.addEventListener("click",this.scrollRight.bind(this,.85)),new r.a(function(t){var i=!0,r=!1,n=void 0;try{for(var s,o=t[Symbol.iterator]();!(i=(s=o.next()).done);i=!0){var a=s.value;e.refreshLayout();var h=a.contentRect,c=h.left,d=h.top,l=h.width,f=h.height;console.log("Element:",a.target),console.log("Element's size: "+l+"px x "+f+"px"),console.log("Element's paddings: "+d+"px ; "+c+"px")}}catch(t){r=!0,n=t}finally{try{!i&&o.return&&o.return()}finally{if(r)throw n}}}).observe(this.framer)):console.log("ERROR: To register dynamic tabs, pass in the ID of a node containing the tabs")}function s(t){this.activeTabIndex<this.registeredTabs.length&&this.registeredTabs[this.activeTabIndex].el.removeAttribute("data-dtactive"),this.registeredTabs[t].el.setAttribute("data-dtactive","y")}function o(t,e){a.call(this,0,{left:t,width:e[0]});for(var i=1,r=this.registeredTabs.length;i<r;i++)a.call(this,i,{left:this.registeredTabs[i-1].rect.left+this.registeredTabs[i-1].rect.width,width:e[i]})}function a(t,e){this.registeredTabs.splice(t,1,{el:this.registeredTabs[t].el,rect:e})}n.prototype.registerTabs=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(void 0!==t&&0!==t.length){for(var i=0;i<t.length;i++)this.registerTab(document.getElementById(e+t[i]));s.call(this,0),this.refreshLayout()}else console.log("ERROR: Must pass in an array of tab IDs to register")},n.prototype.registerAllTabs=function(){var t=this.container.getElementsByClassName("dynamic-tab");if(0!==t.length){for(var e=0;e<t.length;e++)this.registerTab(t[e]);s.call(this,0),this.refreshLayout()}else console.log("ERROR: There are no tabs to register")},n.prototype.registerTab=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t.setAttribute("data-dtr","y");var i=this.registeredTabs.length,r=this;t.handleEvent=function(t){if("click"===t.type){r.setActiveTabIndex(i);for(var e=0;e<r.switchCallbacks.length;e++)r.switchCallbacks[e](r.activeTabIndex,i)}},t.addEventListener("click",t),this.registeredTabs.push({el:t,rect:{left:0,width:0}}),e&&this.refreshLayout()},n.prototype.deregisterAllTabs=function(){for(var t=this.registeredTabs.length;t>0;t--)this.deregisterTab(0);this.switchCallbacks=[],this.refreshLayout()},n.prototype.deregisterTab=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.registeredTabs[t].el.removeEventListener("click",this.registeredTabs[t].el),this.registeredTabs[t].el.removeAttribute("data-dtr"),this.registeredTabs[t].el.removeAttribute("data-dtactive");var i=this.registeredTabs[t].el.style["margin-left"];"0px"!==i&&""!==i&&(this.registeredTabs[t].el.style["margin-left"]="0px"),this.registeredTabs.splice(t,1),0===this.registeredTabs.length&&(this.indicatorBar.style.width="0"),e&&this.refreshLayout()},n.prototype.setActiveTabIndex=function(t){0!==this.registeredTabs.length?t>=this.registeredTabs.length?console.log("ERROR: Invalid tab index failed to set"):(this.activeTabIndex=t,s.call(this,t),this.scrollToActiveTab()):this.activeTabIndex=0},n.prototype.addSwitchCallback=function(t){this.switchCallbacks.push(t)},n.prototype.refreshLayout=function(){var t=this;if(0!==this.registeredTabs.length){this.framerWidth=this.framer.getBoundingClientRect().width,this.totalTabsWidth=0;var e=this.registeredTabs.map(function(e){var i=e.el.getBoundingClientRect().width;return t.totalTabsWidth+=i,i});this.totalTabsWidth>this.framerWidth?(this.framer.style["text-align"]="left",o.call(this,0,e),this.scrollToActiveTab()):(this.framer.style["text-align"]="center",this.setTabsOffset(0),o.call(this,(this.framerWidth-this.totalTabsWidth)/2,e),this.resetIndicator(),this.hideArrow())}},n.prototype.scrollToActiveTab=function(){if(this.totalTabsWidth<=this.framerWidth)this.resetIndicator();else{var t=this.registeredTabs[this.activeTabIndex],e=t.rect.left+this.framerShift,i=t.rect.left+t.rect.width+this.framerShift;if(e<0){var r=Math.abs(e)/this.framerWidth;this.scrollLeft(r+1.1*t.rect.width/this.framerWidth)}else if(i>this.framerWidth){var n=i/this.framerWidth;this.scrollRight(n-1.1*t.rect.width/this.framerWidth)}else 0===this.activeTabIndex&&this.hideArrow("left"),this.resetIndicator();var s=this.registeredTabs[this.registeredTabs.length-1].rect;s.left+s.width+this.framerShift>this.framerWidth&&this.showArrow("right")}},n.prototype.resetIndicator=function(){var t=this.activeTabIndex;t>=this.registeredTabs.length&&(t=this.registeredTabs.length-1),this.indicatorBar.style.left=this.framerShift+this.registeredTabs[t].rect.left+"px",this.indicatorBar.style.width=this.registeredTabs[t].rect.width+"px"},n.prototype.scrollLeft=function(t){void 0===t&&(t=.85);var e=t*this.framerWidth;this.framerShift>=0||(Math.abs(this.framerShift)>e?this.setTabsOffset(this.framerShift+e):(this.setTabsOffset(0),this.hideArrow("left")),this.resetIndicator(),this.showArrow("right"))},n.prototype.scrollRight=function(t){void 0===t&&(t=.85);var e=t*this.framerWidth,i=Math.abs(this.totalTabsWidth-this.framerWidth+this.framerShift);i<=0||(i>e?this.setTabsOffset(this.framerShift-e):(this.setTabsOffset(-(this.totalTabsWidth-this.framerWidth)),this.hideArrow("right")),this.resetIndicator(),this.showArrow("left"))},n.prototype.setTabsOffset=function(t){this.framerShift=t,this.registeredTabs[0].el.style["margin-left"]=this.framerShift+"px"},n.prototype.showArrow=function(t){"left"===t?this.arrowLeft.style.visibility="":"right"===t?this.arrowRight.style.visibility="":(this.arrowLeft.style.visibility="",this.arrowRight.style.visibility="")},n.prototype.hideArrow=function(t){"left"===t?this.arrowLeft.style.visibility="hidden":"right"===t?this.arrowRight.style.visibility="hidden":(this.arrowLeft.style.visibility="hidden",this.arrowRight.style.visibility="hidden")};var h=n,c=(i(8),["first","second","third","fourth","fifth","sixth","seventh"]),d=document.getElementById("current-indx"),l=document.getElementById("current-text");document.getElementById("my-tab-second").addEventListener("click",function(){console.log("click handled on second tab (before register)")});var f=new h("section-tabs");window.myTabs=f,f.registerAllTabs(),f.addSwitchCallback(function(t,e){d.innerHTML=e,l.innerHTML=document.getElementById("my-tab-"+c[e]).innerText}),document.getElementById("my-tab-second").addEventListener("click",function(){console.log("click handled on second tab (after register)")}),document.getElementById("show-odd").addEventListener("click",function(){f.deregisterAllTabs(),f.registerTabs(c.filter(function(t,e){return e%2==0}),"my-tab-")}),document.getElementById("show-even").addEventListener("click",function(){f.deregisterAllTabs(),f.registerTabs(c.filter(function(t,e){return e%2!=0}),"my-tab-")}),document.getElementById("show-all").addEventListener("click",function(){f.deregisterAllTabs(),f.registerTabs(c,"my-tab-")}),document.getElementById("deregister-all").addEventListener("click",function(){f.deregisterAllTabs()})},function(t,e){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(i=window)}t.exports=i},function(t,e,i){t.exports=i(1)},,,,,function(t,e){}]);