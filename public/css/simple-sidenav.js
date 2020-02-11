module.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e,n){"use strict";var o=n(0);function r(){}t.exports=function(){function t(t,e,n,r,i,a){if(a!==o){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e};return n.checkPropTypes=r,n.PropTypes=n,n}},function(t,e,n){t.exports=n(1)()},function(t,e){t.exports=require("react")},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MenuIcon=e.SideNav=void 0;var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=u(n(3)),a=u(n(2));function u(t){return t&&t.__esModule?t:{default:t}}var l=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n._nav=i.default.createRef(),n.hideNav=n.hideNav.bind(n),n.onTouchStart=n.onTouchStart.bind(n),n.onTouchMove=n.onTouchMove.bind(n),n.onTouchEnd=n.onTouchEnd.bind(n),n.getDefaultContent=n.getDefaultContent.bind(n),n.update=n.update.bind(n),n.getStyle=n.getStyle.bind(n),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,i.default.Component),r(e,[{key:"hideNav",value:function(){var t=this.props.onHideNav;t&&t()}},{key:"onTouchStart",value:function(t){this.startX=t.touches[0].pageX,this.currentX=this.startX,this.touchingSideNav=!0,requestAnimationFrame(this.update)}},{key:"onTouchMove",value:function(t){var e=this.props.openFromRight;if(this.touchingSideNav){this.currentX=t.touches[0].pageX;Math[e?"max":"min"](0,this.currentX-this.startX)}}},{key:"onTouchEnd",value:function(t){var e=this.props.openFromRight;if(this.touchingSideNav){this.touchingSideNav=!1;var n=Math[e?"max":"min"](0,this.currentX-this.startX);this._nav.current.style.transform="",!e&&n<0&&this.hideNav(),e&&n>0&&this.hideNav()}}},{key:"update",value:function(){var t=this.props.openFromRight;if(this.touchingSideNav){requestAnimationFrame(this.update);var e=Math[t?"max":"min"](0,this.currentX-this.startX);this._nav.current.style.transform="translateX("+e+"px)"}}},{key:"getDefaultContent",value:function(){var t=this,e={title:{background:"#E91E63",color:"#fff",fontWeight:400,margin:0,lineHeight:"82px",padding:22},li:{padding:22,cursor:"pointer",backgroundColor:"#fff"}};Object.assign(e.li,this.props.itemStyle),Object.assign(e.title,this.props.titleStyle);var n=function(n,o){o?Object.assign(n.currentTarget.style,e.li,t.props.itemHoverStyle||{backgroundColor:"#f5f5f5"}):Object.assign(n.currentTarget.style,e.li)};return i.default.createElement("div",null,i.default.createElement("h1",{style:e.title},this.props.title||"Simple SideNav"),i.default.createElement("ul",null,this.props.items?this.props.items.map(function(t,o){return i.default.createElement("li",{key:"item"+o,style:e.li,onMouseOver:function(t){return n(t,!0)},onMouseOut:function(t){return n(t,!1)}},t)}):i.default.createElement("li",{key:"item1",style:e.li},"Item 1")))}},{key:"getStyle",value:function(){var t=this.props,e=t.openFromRight,n=t.showNav,o={root:{left:0,top:0,width:"100%",height:"100%",pointerEvents:n?"auto":"none"},nav:{position:"relative",width:"90%",maxWidth:400,height:"100%",background:"#FFF",boxShadow:"2px 0 12px rgba(0,0,0,0.4)",transform:n?"none":"translateX("+(e?102:-102)+"%)",transition:"transform "+(n?"0.33s":"0.13s")+" cubic-bezier(0,0,0.3,1)",display:"flex",willChange:"transform",flexDirection:"column",float:e?"right":"left"}};
return Object.assign(o.root,this.props.style),Object.assign(o.nav,this.props.navStyle),o}},{key:"render",value:function(){var t=this.getStyle();return i.default.createElement("aside",{style:t.root},i.default.createElement("div",{style:t.overlay,onClick:this.hideNav}),i.default.createElement("nav",{style:t.nav,onTransitionEnd:function(t){t.target.style.transition="none"},onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,ref:this._nav},this.props.children||this.getDefaultContent()))}}]),e}();l.propTypes={style:a.default.object,navStyle:a.default.object,titleStyle:a.default.object,itemStyle:a.default.object,itemHoverStyle:a.default.object,title:a.default.node,children:a.default.node,items:a.default.arrayOf(a.default.node),showNav:a.default.bool,openFromRight:a.default.bool,onHideNav:a.default.func,onShowNav:a.default.func};e.SideNav=l,e.MenuIcon=function(t){return i.default.createElement("svg",o({},t,{xmlns:"http://www.w3.org/2000/svg",cursor:"pointer",fill:"#fff",height:"24",viewBox:"0 0 24 24",width:"24"}),i.default.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),i.default.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}))},e.default=l}]);