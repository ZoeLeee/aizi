!function(i){function e(e){for(var t,n,r=e[0],o=e[1],a=e[2],u=0,c=[];u<r.length;u++)n=r[u],Object.prototype.hasOwnProperty.call(f,n)&&f[n]&&c.push(f[n][0]),f[n]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(i[t]=o[t]);for(s&&s(e);c.length;)c.shift()();return p.push.apply(p,a||[]),l()}function l(){for(var e,t=0;t<p.length;t++){for(var n=p[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==f[a]&&(r=!1)}r&&(p.splice(t--,1),e=u(u.s=n[0]))}return e}var n={},f={0:0},p=[];function u(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=i,u.c=n,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var t=window.webpackJsonp=window.webpackJsonp||[],r=t.push.bind(t);t.push=e,t=t.slice();for(var o=0;o<t.length;o++)e(t[o]);var s=r;p.push([173,1]),l()}({0:function(e,t,n){e.exports=n(27)(0)},12:function(e,t,n){e.exports=n(27)(20)},173:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(12),u=n.n(r),c=n(7),i=(n(84),n(36)),l=n.n(i),f=(n(139),n(77)),p=n.n(f);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d={backgroundColor:"white",height:"100%",textAlign:"center"},v=function(){function n(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(t=b(this,m(n).call(this,e))).state={selectedTab:0},t}var e,t,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(n,a.a.Component),e=n,(t=[{key:"renderContent",value:function(){return a.a.createElement("div",{style:d},a.a.createElement(p.a,{placeholder:"搜索"}),a.a.createElement("div",{className:"home-icons"},a.a.createElement("div",null,a.a.createElement(c.Link,{to:"/apply"},"申请HIV试纸")),a.a.createElement("div",null,a.a.createElement(c.Link,{to:"/upload"},"上传测试结果")),a.a.createElement("div",null,a.a.createElement(c.Link,{to:"/check"},"预约到店检测")),a.a.createElement("div",null,a.a.createElement(c.Link,{to:"/ask"},"预约心理咨询"))))}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{style:{position:"fixed",height:"100%",width:"100%",top:0}},a.a.createElement(l.a,{tintColor:"#fff",unselectedTintColor:"#888888"},a.a.createElement(l.a.Item,{title:"申请阻断药",selected:0===this.state.selectedTab,onPress:function(){e.setState({selectedTab:0})},"data-seed":0===this.state.selectedTab?"true":""},this.renderContent()),a.a.createElement(l.a.Item,{title:"我要捐款",selected:1===this.state.selectedTab,onPress:function(){e.setState({selectedTab:1})},"data-seed":1===this.state.selectedTab?"true":""},a.a.createElement("div",{style:d},"我要捐款"))))}}])&&y(e.prototype,t),r&&y(e,r),n}(),O=(n(142),n(54)),E=n.n(O),w=n(83),g=(n(71),n(35)),_=n.n(g),j=(n(26),n(13)),S=n.n(j),P=(n(148),n(55)),k=n.n(P);n(195);function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var L=k.a.CheckboxItem,N=(k.a.AgreeItem,function(){function e(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),T(this,R(e).apply(this,arguments))}var t,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(e,o["Component"]),t=e,(n=[{key:"render",value:function(){var t=this,e=[{value:0,label:"Ph.D."},{value:1,label:"Bachelor"},{value:2,label:"College diploma"}];return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"questionnaire"},a.a.createElement(S.a,{renderHeader:function(){return"从哪里得知消息"}},e.map(function(e){return a.a.createElement(L,{key:e.value,onChange:function(){return t.onChange(e.value)}},e.label)}),a.a.createElement(L,{key:"disabled","data-seed":"logId",disabled:!0,defaultChecked:!0,multipleLine:!0},"Undergraduate",a.a.createElement(S.a.Item.Brief,null,"Auxiliary text"))),a.a.createElement(S.a,{renderHeader:function(){return"从哪里得知消息"}},e.map(function(e){return a.a.createElement(L,{key:e.value,onChange:function(){return t.onChange(e.value)}},e.label)}),a.a.createElement(L,{key:"disabled","data-seed":"logId",disabled:!0,defaultChecked:!0,multipleLine:!0},"Undergraduate",a.a.createElement(S.a.Item.Brief,null,"Auxiliary text")))),a.a.createElement("div",{style:{height:100}},a.a.createElement(L,null,"我已经阅读并同意《知情同意书》"),a.a.createElement(_.a,{type:"primary"},a.a.createElement(c.Link,{to:"/apply/2"},"提交信息"))))}}])&&C(t.prototype,n),r&&C(t,r),e}()),A=(n(152),n(80)),B=n.n(A),H=(n(153),n(81)),M=n.n(H),z=(n(164),n(56)),D=n.n(z);function U(e){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function J(e,t){return!t||"object"!==U(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var W,G=function(){function e(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),J(this,V(e).apply(this,arguments))}var t,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(e,o["Component"]),t=e,(n=[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(S.a,null,a.a.createElement(D.a,{clear:!0,placeholder:"auto focus"},"姓名"),a.a.createElement(D.a,{type:"phone",clear:!0,placeholder:"click the button below to focus"},"手机"),a.a.createElement(M.a,{extra:"请选择地址",data:[{value:0,label:"test"}],title:"Areas",onOk:function(e){return console.log("ok",e)},onDismiss:function(e){return console.log("dismiss",e)}},a.a.createElement(S.a.Item,{arrow:"horizontal"},"城市")),a.a.createElement(B.a,{title:"收货地址",autoHeight:!0,labelNumber:5,rows:3})),a.a.createElement(_.a,{type:"primary"},a.a.createElement(c.Link,{to:"/apply/3"},"确认领取")))}}])&&F(t.prototype,n),r&&F(t,r),e}();function K(e){return(K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function X(e,t){return!t||"object"!==K(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function Y(e){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Z(e,t){return(Z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var $=E.a.Step,ee={padding:"20px 10px",height:"100%"},te=Object(w.hot)(W=function(){function n(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(t=X(this,Y(n).call(this,e))).state={current:0},document.title="申请HIV试纸",console.log(e),t}var e,t,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Z(e,t)}(n,o["Component"]),e=n,(t=[{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.location.pathname&&this.updateCurrent(e.location.pathname)}},{key:"componentDidMount",value:function(){this.props.location.pathname&&this.updateCurrent(this.props.location.pathname)}},{key:"render",value:function(){return a.a.createElement("div",{style:ee,className:"flex-col"},a.a.createElement(E.a,{direction:"horizontal",current:this.state.current,style:{height:60}},a.a.createElement($,{title:"相关调查"}),a.a.createElement($,{title:"领取试纸"}),a.a.createElement($,{title:"确认订单"})),a.a.createElement(c.Switch,null,a.a.createElement(c.Redirect,{exact:!0,from:"/apply",to:"/apply/1"}),a.a.createElement(c.Route,{exact:!0,path:"/apply/1",component:N}),a.a.createElement(c.Route,{exact:!0,path:"/apply/2",component:G}),a.a.createElement(c.Route,{exact:!0,path:"/apply/3"},a.a.createElement("div",null,"确认订单"))))}},{key:"updateCurrent",value:function(e){var t=parseInt(e.split("/").pop());isNaN(t)||this.setState({current:t-1})}}])&&Q(e.prototype,t),r&&Q(e,r),n}())||W;function ne(e){return(ne="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function re(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function oe(e,t){return!t||"object"!==ne(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function ae(e){return(ae=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ue(e,t){return(ue=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ce=function(){function e(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),oe(this,ae(e).apply(this,arguments))}var t,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ue(e,t)}(e,o["Component"]),t=e,(n=[{key:"render",value:function(){return a.a.createElement("div",null,"到店咨询")}}])&&re(t.prototype,n),r&&re(t,r),e}();function ie(e){return(ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function le(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function fe(e,t){return!t||"object"!==ie(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function pe(e){return(pe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function se(e,t){return(se=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ye=function(){function e(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),fe(this,pe(e).apply(this,arguments))}var t,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&se(e,t)}(e,o["Component"]),t=e,(n=[{key:"render",value:function(){return a.a.createElement("div",null,"上传测试结构")}}])&&le(t.prototype,n),r&&le(t,r),e}();function be(e){return(be="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function me(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function he(e,t){return!t||"object"!==be(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function de(e){return(de=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ve(e,t){return(ve=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Oe=function(){function e(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),he(this,de(e).apply(this,arguments))}var t,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ve(e,t)}(e,o["Component"]),t=e,(n=[{key:"render",value:function(){return a.a.createElement("div",null,"到店检测")}}])&&me(t.prototype,n),r&&me(t,r),e}();n(205);function Ee(e){return(Ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function we(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ge(e,t){return!t||"object"!==Ee(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function _e(e){return(_e=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function je(e,t){return(je=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Se=function(){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),ge(this,_e(t).call(this,e))}var e,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&je(e,t)}(t,a.a.Component),e=t,(n=[{key:"render",value:function(){return a.a.createElement(c.BrowserRouter,{basename:"https://zoeleee.github.io/aizi"},a.a.createElement(c.Switch,null,a.a.createElement(c.Route,{path:"/apply",component:te}),a.a.createElement(c.Route,{path:"/upload",component:ye}),a.a.createElement(c.Route,{path:"/check",component:Oe}),a.a.createElement(c.Route,{path:"/ask",component:ce}),a.a.createElement(c.Route,{exact:!0,path:"/",component:v}),a.a.createElement(c.Route,{component:function(){return a.a.createElement("div",null,"404 Not found 1")}})))}}])&&we(e.prototype,n),r&&we(e,r),t}();u.a.render(a.a.createElement(Se,null),document.getElementById("app"))},195:function(e,t){},205:function(e,t){},27:function(e,t){e.exports=dll},6:function(e,t,n){e.exports=n(27)(7)},7:function(e,t,n){e.exports=n(27)(24)}});