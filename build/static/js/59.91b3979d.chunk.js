(self.webpackChunkfront=self.webpackChunkfront||[]).push([[59],{77059:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return q}});var r=t(97143),o=t.n(r),i=function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},e(n,t)};return function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),a=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return i(n,e),n}(o()),c=a,s=t(74165),l=t(1413),u=t(15861),d=t(29439),f=t(15671),p=t(43144),h=t(97326),v=t(60136),_=t(27277),m=t(811),y=t(1742),w=t.n(y),g=function(e){(0,v.Z)(t,e);var n=(0,_.Z)(t);function t(e,r){var o,i,a;if((0,f.Z)(this,t),o=n.call(this),i=(0,h.Z)(o),o._handleMessage=function(e){if(o._injectedProvider&&e.source===window||e.origin===o._providerUrl.origin&&e.source===o._popup)if("connected"===e.data.method){var n=new m.PublicKey(e.data.params.publicKey);o._publicKey&&o._publicKey.equals(n)||(o._publicKey&&!o._publicKey.equals(n)&&o._handleDisconnect(),o._publicKey=n,o._autoApprove=!!e.data.params.autoApprove,o.emit("connect",o._publicKey))}else if("disconnected"===e.data.method)o._handleDisconnect();else if((e.data.result||e.data.error)&&o._responsePromises.has(e.data.id)){var t=o._responsePromises.get(e.data.id),r=(0,d.Z)(t,2),i=r[0],a=r[1];e.data.result?i(e.data.result):a(new Error(e.data.error))}},o._handleConnect=function(){return o._handlerAdded||(o._handlerAdded=!0,window.addEventListener("message",o._handleMessage),window.addEventListener("beforeunload",o.disconnect)),o._injectedProvider?new Promise((function(e){o._sendRequest("connect",{}),e()})):(window.name="parent",o._popup=window.open(o._providerUrl.toString(),"_blank","location,resizable,width=460,height=675"),new Promise((function(e){o.once("connect",e)})))},o._handleDisconnect=function(){o._handlerAdded&&(o._handlerAdded=!1,window.removeEventListener("message",o._handleMessage),window.removeEventListener("beforeunload",o.disconnect)),o._publicKey&&(o._publicKey=null,o.emit("disconnect")),o._responsePromises.forEach((function(e,n){var t=(0,d.Z)(e,2),r=(t[0],t[1]);o._responsePromises.delete(n),r("Wallet disconnected")}))},o._sendRequest=function(){var e=(0,u.Z)((0,s.Z)().mark((function e(n,t){var r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("connect"===n||i.connected){e.next=2;break}throw new Error("Wallet not connected");case 2:return r=i._nextRequestId,++i._nextRequestId,e.abrupt("return",new Promise((function(e,o){i._responsePromises.set(r,[e,o]),i._injectedProvider?i._injectedProvider.postMessage({jsonrpc:"2.0",id:r,method:n,params:(0,l.Z)({network:i._network},t)}):(i._popup.postMessage({jsonrpc:"2.0",id:r,method:n,params:t},i._providerUrl.origin),i.autoApprove||i._popup.focus())})));case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),o.connect=function(){return o._popup&&o._popup.close(),o._handleConnect()},o.disconnect=(0,u.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i._injectedProvider){e.next=3;break}return e.next=3,i._sendRequest("disconnect",{});case 3:i._popup&&i._popup.close(),i._handleDisconnect();case 5:case"end":return e.stop()}}),e)}))),o.sign=function(){var e=(0,u.Z)((0,s.Z)().mark((function e(n,t){var r,o,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n instanceof Uint8Array){e.next=2;break}throw new Error("Data must be an instance of Uint8Array");case 2:return e.next=4,i._sendRequest("sign",{data:n,display:t});case 4:return r=e.sent,o=w().decode(r.signature),a=new m.PublicKey(r.publicKey),e.abrupt("return",{signature:o,publicKey:a});case 8:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),o.signTransaction=function(){var e=(0,u.Z)((0,s.Z)().mark((function e(n){var t,r,o;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i._sendRequest("signTransaction",{message:w().encode(n.serializeMessage())});case 2:return t=e.sent,r=w().decode(t.signature),o=new m.PublicKey(t.publicKey),n.addSignature(o,r),e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o.signAllTransactions=function(){var e=(0,u.Z)((0,s.Z)().mark((function e(n){var t,r,o;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i._sendRequest("signAllTransactions",{messages:n.map((function(e){return w().encode(e.serializeMessage())}))});case 2:return t=e.sent,r=t.signatures.map((function(e){return w().decode(e)})),o=new m.PublicKey(t.publicKey),n=n.map((function(e,n){return e.addSignature(o,r[n]),e})),e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),function(e){return"object"===typeof e&&null!==e}(a=e)&&function(e){return"function"===typeof e}(a.postMessage))o._injectedProvider=e;else{if(!function(e){return"string"===typeof e}(e))throw new Error("provider parameter must be an injected provider or a URL string.");o._providerUrl=new URL(e),o._providerUrl.hash=new URLSearchParams({origin:window.location.origin,network:r}).toString()}return o._network=r,o._publicKey=null,o._autoApprove=!1,o._popup=null,o._handlerAdded=!1,o._nextRequestId=1,o._responsePromises=new Map,o}return(0,p.Z)(t,[{key:"publicKey",get:function(){return this._publicKey}},{key:"connected",get:function(){return null!==this._publicKey}},{key:"autoApprove",get:function(){return this._autoApprove}}]),t}(o());var b=g,x=function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},e(n,t)};return function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),A=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(n){i(n)}}function c(e){try{s(r.throw(e))}catch(n){i(n)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}s((r=r.apply(e,n||[])).next())}))},E=function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(c){i=[6,c],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},I=function(e){function n(n,t,r){var o=e.call(this)||this;return o._instance=null,o.handleMessage=function(e){},o._sendRequest=function(e,n){return A(o,void 0,void 0,(function(){return E(this,(function(t){switch(t.label){case 0:return this._instance.sendRequest?[4,this._instance.sendRequest(e,n)]:[3,2];case 1:case 3:return[2,t.sent()];case 2:return this._instance._sendRequest?[4,this._instance._sendRequest(e,n)]:[3,4];case 4:throw new Error("Unsupported version of `@project-serum/sol-wallet-adapter`")}}))}))},o._handleConnect=function(){o.emit("connect")},o._handleDisconnect=function(){window.clearInterval(o._pollTimer),o.emit("disconnect")},o._network=t,o._provider=r,o}return x(n,e),Object.defineProperty(n.prototype,"publicKey",{get:function(){return this._instance.publicKey||null},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"connected",{get:function(){return this._instance.connected||!1},enumerable:!1,configurable:!0}),n.prototype.connect=function(){return A(this,void 0,void 0,(function(){var e=this;return E(this,(function(n){switch(n.label){case 0:return this._instance=new b(this._provider,this._network),this._instance.on("connect",this._handleConnect),this._instance.on("disconnect",this._handleDisconnect),this._pollTimer=window.setInterval((function(){var n,t;!1!==(null===(t=null===(n=e._instance)||void 0===n?void 0:n._popup)||void 0===t?void 0:t.closed)&&e._handleDisconnect()}),200),[4,this._instance.connect()];case 1:return n.sent(),[2]}}))}))},n.prototype.disconnect=function(){return A(this,void 0,void 0,(function(){return E(this,(function(e){switch(e.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return this._instance.removeAllListeners("connect"),this._instance.removeAllListeners("disconnect"),[4,this._instance.disconnect()];case 1:return e.sent(),[2]}}))}))},n.prototype.signTransaction=function(e){return A(this,void 0,void 0,(function(){var n;return E(this,(function(t){switch(t.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._sendRequest("signTransaction",{message:w().encode(e)})];case 1:return n=t.sent(),[2,w().decode(n.signature)]}}))}))},n.prototype.signAllTransactions=function(e){return A(this,void 0,void 0,(function(){return E(this,(function(n){switch(n.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._sendRequest("signAllTransactions",{messages:e.map((function(e){return w().encode(e)}))})];case 1:return[2,n.sent().signatures.map((function(e){return w().decode(e)}))]}}))}))},n.prototype.signMessage=function(e,n){return void 0===n&&(n="hex"),A(this,void 0,void 0,(function(){var t;return E(this,(function(r){switch(r.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._instance.sign(e,n)];case 1:return t=r.sent().signature,[2,Uint8Array.from(t)]}}))}))},n}(c),P=t(92810),M=function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},e(n,t)};return function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),K=function(){return K=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},K.apply(this,arguments)},j=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(n){i(n)}}function c(e){try{s(r.throw(e))}catch(n){i(n)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}s((r=r.apply(e,n||[])).next())}))},k=function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(c){i=[6,c],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},T=function(e){function n(n,t){var r,o=this;return(o=e.call(this)||this)._publicKey=null,o._messageHandlers={},o.handleMessage=function(e){if(o._messageHandlers[e.id]){var n=o._messageHandlers[e.id],t=n.resolve,r=n.reject;delete o._messageHandlers[e.id],e.error?r(e.error):t(e.result)}},o._sendMessage=function(e){if(!o.connected)throw new Error("Wallet not connected");return new Promise((function(n,t){var r,i,a=(0,P.Z)();o._messageHandlers[a]={resolve:n,reject:t},null===(i=null===(r=o._iframe)||void 0===r?void 0:r.contentWindow)||void 0===i||i.postMessage({channel:"solflareWalletAdapterToIframe",data:K({id:a},e)},"*")}))},o._iframe=n,o._publicKey=new m.PublicKey(null===(r=null===t||void 0===t?void 0:t.toString)||void 0===r?void 0:r.call(t)),o}return M(n,e),Object.defineProperty(n.prototype,"publicKey",{get:function(){return this._publicKey||null},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"connected",{get:function(){return!0},enumerable:!1,configurable:!0}),n.prototype.connect=function(){return j(this,void 0,void 0,(function(){return k(this,(function(e){return[2]}))}))},n.prototype.disconnect=function(){return j(this,void 0,void 0,(function(){return k(this,(function(e){switch(e.label){case 0:return[4,this._sendMessage({method:"disconnect"})];case 1:return e.sent(),[2]}}))}))},n.prototype.signTransaction=function(e){return j(this,void 0,void 0,(function(){var n,t;return k(this,(function(r){switch(r.label){case 0:if(!this.connected)throw new Error("Wallet not connected");r.label=1;case 1:return r.trys.push([1,3,,4]),[4,this._sendMessage({method:"signTransaction",params:{message:w().encode(e)}})];case 2:return n=r.sent().signature,[2,w().decode(n)];case 3:throw t=r.sent(),console.log(t),new Error("Failed to sign transaction");case 4:return[2]}}))}))},n.prototype.signAllTransactions=function(e){return j(this,void 0,void 0,(function(){var n;return k(this,(function(t){switch(t.label){case 0:if(!this.connected)throw new Error("Wallet not connected");t.label=1;case 1:return t.trys.push([1,3,,4]),[4,this._sendMessage({method:"signAllTransactions",params:{messages:e.map((function(e){return w().encode(e)}))}})];case 2:return[2,t.sent().signatures.map((function(e){return w().decode(e)}))];case 3:throw n=t.sent(),console.log(n),new Error("Failed to sign transactions");case 4:return[2]}}))}))},n.prototype.signMessage=function(e,n){return void 0===n&&(n="hex"),j(this,void 0,void 0,(function(){var t,r;return k(this,(function(o){switch(o.label){case 0:if(!this.connected)throw new Error("Wallet not connected");o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this._sendMessage({method:"signMessage",params:{data:e,display:n}})];case 2:return t=o.sent(),[2,Uint8Array.from(w().decode(t))];case 3:throw r=o.sent(),console.log(r),new Error("Failed to sign message");case 4:return[2]}}))}))},n}(c),S=T;function O(e){return void 0===e.version}var R=t(19778).Buffer,C=function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},e(n,t)};return function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),H=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(n){i(n)}}function c(e){try{s(r.throw(e))}catch(n){i(n)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}s((r=r.apply(e,n||[])).next())}))},U=function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(c){i=[6,c],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},Z=function(e){var n="function"===typeof Symbol&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")},q=function(e){function n(t){var r=e.call(this)||this;return r._network="mainnet-beta",r._provider=null,r._adapterInstance=null,r._element=null,r._iframe=null,r._connectHandler=null,r._flutterHandlerInterval=null,r._handleEvent=function(e){var n,t,o,i;switch(e.type){case"connect_native_web":return r._collapseIframe(),r._adapterInstance=new I(r._iframe,r._network,(null===(n=e.data)||void 0===n?void 0:n.provider)||r._provider||"https://solflare.com/provider"),r._adapterInstance.on("connect",r._webConnected),r._adapterInstance.on("disconnect",r._webDisconnected),r._adapterInstance.connect(),void r._setPreferredAdapter("native_web");case"connect":return r._collapseIframe(),r._adapterInstance=new S(r._iframe,(null===(t=e.data)||void 0===t?void 0:t.publicKey)||""),r._adapterInstance.connect(),r._setPreferredAdapter(null===(o=e.data)||void 0===o?void 0:o.adapter),r._connectHandler&&(r._connectHandler.resolve(),r._connectHandler=null),void r.emit("connect",r.publicKey);case"disconnect":return r._connectHandler&&(r._connectHandler.reject(),r._connectHandler=null),r._disconnected(),void r.emit("disconnect");case"accountChanged":return void((null===(i=e.data)||void 0===i?void 0:i.publicKey)?(r._adapterInstance=new S(r._iframe,e.data.publicKey),r._adapterInstance.connect(),r.emit("accountChanged",r.publicKey)):r.emit("accountChanged",void 0));case"collapse":return void r._collapseIframe();default:return}},r._handleResize=function(e){"full"===e.resizeMode?"fullscreen"===e.params.mode?r._expandIframe():"hide"===e.params.mode&&r._collapseIframe():"coordinates"===e.resizeMode&&r._iframe&&(r._iframe.style.top=isFinite(e.params.top)?"".concat(e.params.top,"px"):"",r._iframe.style.bottom=isFinite(e.params.bottom)?"".concat(e.params.bottom,"px"):"",r._iframe.style.left=isFinite(e.params.left)?"".concat(e.params.left,"px"):"",r._iframe.style.right=isFinite(e.params.right)?"".concat(e.params.right,"px"):"",r._iframe.style.width=isFinite(e.params.width)?"".concat(e.params.width,"px"):e.params.width,r._iframe.style.height=isFinite(e.params.height)?"".concat(e.params.height,"px"):e.params.height)},r._handleMessage=function(e){var n;if("solflareIframeToWalletAdapter"===(null===(n=e.data)||void 0===n?void 0:n.channel)){var t=e.data.data||{};"event"===t.type?r._handleEvent(t.event):"resize"===t.type?r._handleResize(t):"response"===t.type&&r._adapterInstance&&r._adapterInstance.handleMessage(t)}},r._removeElement=function(){null!==r._flutterHandlerInterval&&(clearInterval(r._flutterHandlerInterval),r._flutterHandlerInterval=null),r._element&&(r._element.remove(),r._element=null)},r._removeDanglingElements=function(){var e,n,t=document.getElementsByClassName("solflare-wallet-adapter-iframe");try{for(var r=Z(t),o=r.next();!o.done;o=r.next()){var i=o.value;i.parentElement&&i.remove()}}catch(a){e={error:a}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}},r._injectElement=function(){r._removeElement(),r._removeDanglingElements();var e="".concat(n.IFRAME_URL,"?cluster=").concat(encodeURIComponent(r._network),"&origin=").concat(encodeURIComponent(window.location.origin),"&version=1"),t=r._getPreferredAdapter();t&&(e+="&adapter=".concat(encodeURIComponent(t))),r._provider&&(e+="&provider=".concat(encodeURIComponent(r._provider))),r._element=document.createElement("div"),r._element.className="solflare-wallet-adapter-iframe",r._element.innerHTML="\n      <iframe src='".concat(e,"' style='position: fixed; top: 0; bottom: 0; left: 0; right: 0; width: 100%; height: 100%; border: none; border-radius: 0; z-index: 99999; color-scheme: auto;' allowtransparency='true'></iframe>\n    "),document.body.appendChild(r._element),r._iframe=r._element.querySelector("iframe"),window.fromFlutter=r._handleMobileMessage,r._flutterHandlerInterval=setInterval((function(){window.fromFlutter=r._handleMobileMessage}),100),window.addEventListener("message",r._handleMessage,!1)},r._collapseIframe=function(){r._iframe&&(r._iframe.style.top="",r._iframe.style.right="",r._iframe.style.height="2px",r._iframe.style.width="2px")},r._expandIframe=function(){r._iframe&&(r._iframe.style.top="0px",r._iframe.style.bottom="0px",r._iframe.style.left="0px",r._iframe.style.right="0px",r._iframe.style.width="100%",r._iframe.style.height="100%")},r._getPreferredAdapter=function(){return localStorage&&localStorage.getItem("solflarePreferredWalletAdapter")||null},r._setPreferredAdapter=function(e){localStorage&&e&&localStorage.setItem("solflarePreferredWalletAdapter",e)},r._clearPreferredAdapter=function(){localStorage&&localStorage.removeItem("solflarePreferredWalletAdapter")},r._webConnected=function(){r._connectHandler&&(r._connectHandler.resolve(),r._connectHandler=null),r.emit("connect",r.publicKey)},r._webDisconnected=function(){r._connectHandler&&(r._connectHandler.reject(),r._connectHandler=null),r._disconnected(),r.emit("disconnect")},r._disconnected=function(){window.removeEventListener("message",r._handleMessage,!1),r._removeElement(),r._clearPreferredAdapter(),r._adapterInstance=null},r._handleMobileMessage=function(e){var n,t;null===(t=null===(n=r._iframe)||void 0===n?void 0:n.contentWindow)||void 0===t||t.postMessage({channel:"solflareMobileToIframe",data:e},"*")},(null===t||void 0===t?void 0:t.network)&&(r._network=null===t||void 0===t?void 0:t.network),(null===t||void 0===t?void 0:t.provider)&&(r._provider=null===t||void 0===t?void 0:t.provider),r}return C(n,e),Object.defineProperty(n.prototype,"publicKey",{get:function(){var e;return(null===(e=this._adapterInstance)||void 0===e?void 0:e.publicKey)||null},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"isConnected",{get:function(){var e;return!!(null===(e=this._adapterInstance)||void 0===e?void 0:e.connected)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"connected",{get:function(){return this.isConnected},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"autoApprove",{get:function(){return!1},enumerable:!1,configurable:!0}),n.prototype.connect=function(){return H(this,void 0,void 0,(function(){var e=this;return U(this,(function(n){switch(n.label){case 0:return this.connected?[2]:(this._injectElement(),[4,new Promise((function(n,t){e._connectHandler={resolve:n,reject:t}}))]);case 1:return n.sent(),[2]}}))}))},n.prototype.disconnect=function(){return H(this,void 0,void 0,(function(){return U(this,(function(e){switch(e.label){case 0:return this._adapterInstance?[4,this._adapterInstance.disconnect()]:[2];case 1:return e.sent(),this._disconnected(),this.emit("disconnect"),[2]}}))}))},n.prototype.signTransaction=function(e){return H(this,void 0,void 0,(function(){var n,t,r,o,i=this;return U(this,(function(a){switch(a.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return n=O(e)?e.serializeMessage():e.message.serialize(),[4,this._adapterInstance.signTransaction(n)];case 1:return t=a.sent(),O(e)?e.addSignature(this.publicKey,R.from(t)):(r=e.message.staticAccountKeys.slice(0,e.message.header.numRequiredSignatures),(o=r.findIndex((function(e){return e.equals(i.publicKey)})))>=0&&(e.signatures[o]=t)),[2,e]}}))}))},n.prototype.signAllTransactions=function(e){return H(this,void 0,void 0,(function(){var n,t,r,o,i,a,c=this;return U(this,(function(s){switch(s.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return n=e.map((function(e){return O(e)?e.serializeMessage():e.message.serialize()})),[4,this._adapterInstance.signAllTransactions(n)];case 1:for(t=s.sent(),r=0;r<e.length;r++)O(o=e[r])?o.addSignature(this.publicKey,R.from(t[r])):(i=o.message.staticAccountKeys.slice(0,o.message.header.numRequiredSignatures),(a=i.findIndex((function(e){return e.equals(c.publicKey)})))>=0&&(o.signatures[a]=t[r]));return[2,e]}}))}))},n.prototype.signMessage=function(e,n){return void 0===n&&(n="utf8"),H(this,void 0,void 0,(function(){return U(this,(function(t){switch(t.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._adapterInstance.signMessage(e,n)];case 1:return[2,t.sent()]}}))}))},n.prototype.sign=function(e,n){return void 0===n&&(n="utf8"),H(this,void 0,void 0,(function(){return U(this,(function(t){switch(t.label){case 0:return[4,this.signMessage(e,n)];case 1:return[2,t.sent()]}}))}))},n.prototype.detectWallet=function(e){var n;return void 0===e&&(e=10),H(this,void 0,void 0,(function(){return U(this,(function(t){return window.SolflareApp||(null===(n=window.solflare)||void 0===n?void 0:n.isSolflare)?[2,!0]:[2,new Promise((function(n){var t,r;t=setInterval((function(){var e;(window.SolflareApp||(null===(e=window.solflare)||void 0===e?void 0:e.isSolflare))&&(clearInterval(t),clearTimeout(r),n(!0))}),500),r=setTimeout((function(){clearInterval(t),n(!1)}),1e3*e)}))]}))}))},n.IFRAME_URL="https://connect.solflare.com/",n}(o())},62155:function(e,n,t){"use strict";var r=t(82543).Buffer;e.exports=function(e){if(e.length>=255)throw new TypeError("Alphabet too long");for(var n=new Uint8Array(256),t=0;t<n.length;t++)n[t]=255;for(var o=0;o<e.length;o++){var i=e.charAt(o),a=i.charCodeAt(0);if(255!==n[a])throw new TypeError(i+" is ambiguous");n[a]=o}var c=e.length,s=e.charAt(0),l=Math.log(c)/Math.log(256),u=Math.log(256)/Math.log(c);function d(e){if("string"!==typeof e)throw new TypeError("Expected String");if(0===e.length)return r.alloc(0);for(var t=0,o=0,i=0;e[t]===s;)o++,t++;for(var a=(e.length-t)*l+1>>>0,u=new Uint8Array(a);e[t];){var d=n[e.charCodeAt(t)];if(255===d)return;for(var f=0,p=a-1;(0!==d||f<i)&&-1!==p;p--,f++)d+=c*u[p]>>>0,u[p]=d%256>>>0,d=d/256>>>0;if(0!==d)throw new Error("Non-zero carry");i=f,t++}for(var h=a-i;h!==a&&0===u[h];)h++;var v=r.allocUnsafe(o+(a-h));v.fill(0,0,o);for(var _=o;h!==a;)v[_++]=u[h++];return v}return{encode:function(n){if((Array.isArray(n)||n instanceof Uint8Array)&&(n=r.from(n)),!r.isBuffer(n))throw new TypeError("Expected Buffer");if(0===n.length)return"";for(var t=0,o=0,i=0,a=n.length;i!==a&&0===n[i];)i++,t++;for(var l=(a-i)*u+1>>>0,d=new Uint8Array(l);i!==a;){for(var f=n[i],p=0,h=l-1;(0!==f||p<o)&&-1!==h;h--,p++)f+=256*d[h]>>>0,d[h]=f%c>>>0,f=f/c>>>0;if(0!==f)throw new Error("Non-zero carry");o=p,i++}for(var v=l-o;v!==l&&0===d[v];)v++;for(var _=s.repeat(t);v<l;++v)_+=e.charAt(d[v]);return _},decodeUnsafe:d,decode:function(e){var n=d(e);if(n)return n;throw new Error("Non-base"+c+" character")}}}},1742:function(e,n,t){var r=t(62155);e.exports=r("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")}}]);
//# sourceMappingURL=59.91b3979d.chunk.js.map