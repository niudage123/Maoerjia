require("common/manifest.js");
require("common/vendor.js");
global.webpackJsonp([12],[,,,,,,function(e,n,t){"use strict";var o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},u=l(t(3)),r=l(t(8)),i=l(t(11));function l(e){return e&&e.__esModule?e:{default:e}}u.default.config.productionTip=!1,r.default.mpType="app",u.default.prototype.$store=i.default,new u.default(o({store:i.default},r.default)).$mount()},,function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(10),u=t.n(o),r=!1;var i=function(e){r||t(9)},l=t(0)(u.a,null,i,null,null);l.options.__file="D:\\Users\\wt\\Desktop\\graceMall\\App.vue",l.esModule&&Object.keys(l.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),n.default=l.exports},function(e,n){},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}}},function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0});var o=i(t(12)),u=i(t(3)),r=i(t(15));function i(e){return e&&e.__esModule?e:{default:e}}u.default.use(r.default);var l=new r.default.Store({state:{hasLogin:!1,loginProvider:"",openid:null,location:"北京"},mutations:{login:function(e,n){e.hasLogin=!0,e.loginProvider=n},logout:function(e){e.hasLogin=!1,e.openid=null},setOpenid:function(e,n){e.openid=n},setLocation:function(e,n){console.log(n.length),n.length>3&&(console.log(n),n=n[0]+"..."+n.charAt(n.length-1)),e.location=n}},actions:{getUserOpenId:function(){var n,t=(n=o.default.mark(function n(t){var u=t.commit,r=t.state;return o.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,new Promise(function(n,t){r.openid?n(r.openid):e.login({success:function(e){u("login"),setTimeout(function(){console.log("uni.request mock openid[123456789]"),u("setOpenid","123456789"),n("123456789")},1e3)},fail:function(e){console.log("uni.login 接口调用失败，将无法正常使用开放接口等服务",e),t(e)}})});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}},n,this)}),function(){var e=n.apply(this,arguments);return new Promise(function(n,t){return function o(u,r){try{var i=e[u](r),l=i.value}catch(e){return void t(e)}if(!i.done)return Promise.resolve(l).then(function(e){o("next",e)},function(e){o("throw",e)});n(l)}("next")})});return function(e){return t.apply(this,arguments)}}()}});n.default=l}).call(n,t(2).default)}],[6]);
//# sourceMappingURL=../.sourcemap/mp-weixin/app.js.map