(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1677:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASCAYAAABfJS4tAAAByklEQVR4Aa2RA7AeQRCEu7dipxTbtm3btm3btm0bhdi2bdvJj53nq6vs//y+w3LUg5BwROrF2vu5TtO9XxvHR0Sy423NntvfVpft76o/2vm2RjaEACIEbHhRdSRERggAEr9AtmyUdO/WcDte9ajySIEeARskxzdPVWAYOVLDA1x0r3xGaswGJLZxqAjR4j2qpCLi84EkRCTgfL9Eitu4Q5ot3wzbOdfLDAMxGt4YhiAE4jta9YnfGHBfKXWfgppdsh28Axucdqm0UWYY+EGyaZ/cR3ZbjsedKT4SFM+OxcrSzPi/JQkBOGpg/mOjSQpHnihqZWxY2jGlMqCf2c4YZPNIfx0uW4Ji6erZkJZzE0vzjG7lThjJ4dKeMwiDNiS2RYoZqdWEomd+RHI4NLRoqxQRv9Es3bxgzQVuRQyeW+3yZPjjnbELbi0ICaYUAkB9QCQ2XFrt8mHYiPT7n35MaBgYpZo9IHE+aiSps7T69ZeeLNFofY4sWktsBIa42wp0G3sgUi3KFEW6j6x/y4GwUnNZxpE1lqWXmsszSI3l6f/UXpGxJSKCSovS96m4MK1UXJjuSbVFmXIjoii/OnvMMvPSNqkyP1t8hBAvK0rbVvfapoMAAAAASUVORK5CYII="},1772:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(a(2453)),r=c(a(2685));function c(e){return e&&e.__esModule?e:{default:e}}n.default.Group=r.default;var o=n.default;t.default=o},2453:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(a(0)),r=d(a(272)),c=a(108),o=f(a(5)),l=f(a(2660)),s=f(a(276)),i=a(173),u=f(a(203));function f(e){return e&&e.__esModule?e:{default:e}}function p(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function d(e){if(e&&e.__esModule)return e;var t=p();if(t&&t.has(e))return t.get(e);var a={};if(null!=e){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var c=n?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(a,r,c):a[r]=e[r]}}return a.default=e,t&&t.set(e,a),a}function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function y(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},x=function(e){function t(){var e,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,r=h(t).apply(this,arguments),(e=!r||"object"!==m(r)&&"function"!==typeof r?O(a):r).saveCheckbox=function(t){e.rcCheckbox=t},e.renderCheckbox=function(t){var a,r=t.getPrefixCls,c=O(e),s=c.props,i=c.context,u=s.prefixCls,f=s.className,p=s.children,d=s.indeterminate,m=s.style,y=s.onMouseEnter,h=s.onMouseLeave,E=g(s,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave"]),x=i.checkboxGroup,k=r("checkbox",u),j=v({},E);x&&(j.onChange=function(){E.onChange&&E.onChange.apply(E,arguments),x.toggleOption({label:p,value:s.value})},j.name=x.name,j.checked=-1!==x.value.indexOf(s.value),j.disabled=s.disabled||x.disabled);var N=(0,o.default)(f,(b(a={},"".concat(k,"-wrapper"),!0),b(a,"".concat(k,"-wrapper-checked"),j.checked),b(a,"".concat(k,"-wrapper-disabled"),j.disabled),a)),w=(0,o.default)(b({},"".concat(k,"-indeterminate"),d));return n.createElement("label",{className:N,style:m,onMouseEnter:y,onMouseLeave:h},n.createElement(l.default,v({},j,{prefixCls:k,className:w,ref:e.saveCheckbox})),void 0!==p&&n.createElement("span",null,p))},e}var a,r,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,n.Component),a=t,(r=[{key:"componentDidMount",value:function(){var e=this.props.value,t=(this.context||{}).checkboxGroup,a=void 0===t?{}:t;a.registerValue&&a.registerValue(e),(0,u.default)("checked"in this.props||(this.context||{}).checkboxGroup||!("value"in this.props),"Checkbox","`value` is not validate prop, do you mean `checked`?")}},{key:"shouldComponentUpdate",value:function(e,t,a){return!(0,s.default)(this.props,e)||!(0,s.default)(this.state,t)||!(0,s.default)(this.context.checkboxGroup,a.checkboxGroup)}},{key:"componentDidUpdate",value:function(e){var t=e.value,a=this.props.value,n=(this.context||{}).checkboxGroup,r=void 0===n?{}:n;a!==t&&r.registerValue&&r.cancelValue&&(r.cancelValue(t),r.registerValue(a))}},{key:"componentWillUnmount",value:function(){var e=this.props.value,t=(this.context||{}).checkboxGroup,a=void 0===t?{}:t;a.cancelValue&&a.cancelValue(e)}},{key:"focus",value:function(){this.rcCheckbox.focus()}},{key:"blur",value:function(){this.rcCheckbox.blur()}},{key:"render",value:function(){return n.createElement(i.ConfigConsumer,null,this.renderCheckbox)}}])&&y(a.prototype,r),c&&y(a,c),t}();x.__ANT_CHECKBOX=!0,x.defaultProps={indeterminate:!1},x.contextTypes={checkboxGroup:r.any},(0,c.polyfill)(x);var k=x;t.default=k},2660:function(e,t,a){"use strict";a.r(t);var n=a(109),r=a.n(n),c=a(36),o=a.n(c),l=a(41),s=a.n(l),i=a(39),u=a.n(i),f=a(43),p=a.n(f),d=a(0),m=a.n(d),b=a(2682),v=a.n(b),y=a(5),h=a.n(y),O=a(108),E=function(e){function t(a){s()(this,t);var n=u()(this,e.call(this,a));n.handleChange=function(e){var t=n.props,a=t.disabled,r=t.onChange;a||("checked"in n.props||n.setState({checked:e.target.checked}),r&&r({target:o()({},n.props,{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},n.saveInput=function(e){n.input=e};var r="checked"in a?a.checked:a.defaultChecked;return n.state={checked:r},n}return p()(t,e),t.getDerivedStateFromProps=function(e,t){return"checked"in e?o()({},t,{checked:e.checked}):null},t.prototype.focus=function(){this.input.focus()},t.prototype.blur=function(){this.input.blur()},t.prototype.render=function(){var e,t=this.props,a=t.prefixCls,n=t.className,c=t.style,l=t.name,s=t.id,i=t.type,u=t.disabled,f=t.readOnly,p=t.tabIndex,d=t.onClick,b=t.onFocus,v=t.onBlur,y=t.autoFocus,O=t.value,E=r()(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","autoFocus","value"]),g=Object.keys(E).reduce(function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=E[t]),e},{}),x=this.state.checked,k=h()(a,n,((e={})[a+"-checked"]=x,e[a+"-disabled"]=u,e));return m.a.createElement("span",{className:k,style:c},m.a.createElement("input",o()({name:l,id:s,type:i,readOnly:f,disabled:u,tabIndex:p,className:a+"-input",checked:!!x,onClick:d,onFocus:b,onBlur:v,onChange:this.handleChange,autoFocus:y,ref:this.saveInput,value:O},g)),m.a.createElement("span",{className:a+"-inner"}))},t}(d.Component);E.propTypes={prefixCls:v.a.string,className:v.a.string,style:v.a.object,name:v.a.string,id:v.a.string,type:v.a.string,defaultChecked:v.a.oneOfType([v.a.number,v.a.bool]),checked:v.a.oneOfType([v.a.number,v.a.bool]),disabled:v.a.bool,onFocus:v.a.func,onBlur:v.a.func,onChange:v.a.func,onClick:v.a.func,tabIndex:v.a.oneOfType([v.a.string,v.a.number]),readOnly:v.a.bool,autoFocus:v.a.bool,value:v.a.any},E.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){}},Object(O.polyfill)(E);var g=E;t.default=g},2682:function(e,t,a){e.exports=a(2683)()},2683:function(e,t,a){"use strict";var n=a(2684);function r(){}function c(){}c.resetWarningCache=r,e.exports=function(){function e(e,t,a,r,c,o){if(o!==n){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:r};return a.PropTypes=a,a}},2684:function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2685:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(a(0)),r=d(a(272)),c=a(108),o=f(a(5)),l=f(a(276)),s=f(a(385)),i=f(a(2453)),u=a(173);function f(e){return e&&e.__esModule?e:{default:e}}function p(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function d(e){if(e&&e.__esModule)return e;var t=p();if(t&&t.has(e))return t.get(e);var a={};if(null!=e){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var c=n?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(a,r,c):a[r]=e[r]}}return a.default=e,t&&t.set(e,a),a}function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function v(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function y(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},x=function(e){function t(e){var a,r,c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,c=h(t).call(this,e),(a=!c||"object"!==m(c)&&"function"!==typeof c?O(r):c).cancelValue=function(e){a.setState(function(t){return{registeredValues:t.registeredValues.filter(function(t){return t!==e})}})},a.registerValue=function(e){a.setState(function(t){var a=t.registeredValues;return{registeredValues:[].concat(v(a),[e])}})},a.toggleOption=function(e){var t=a.state.registeredValues,n=a.state.value.indexOf(e.value),r=v(a.state.value);-1===n?r.push(e.value):r.splice(n,1),"value"in a.props||a.setState({value:r});var c=a.props.onChange;if(c){var o=a.getOptions();c(r.filter(function(e){return-1!==t.indexOf(e)}).sort(function(e,t){return o.findIndex(function(t){return t.value===e})-o.findIndex(function(e){return e.value===t})}))}},a.renderGroup=function(e){var t=e.getPrefixCls,r=O(a),c=r.props,l=r.state,u=c.prefixCls,f=c.className,p=c.style,d=c.options,m=g(c,["prefixCls","className","style","options"]),v=t("checkbox",u),y="".concat(v,"-group"),h=(0,s.default)(m,["children","defaultValue","value","onChange","disabled"]),E=c.children;d&&d.length>0&&(E=a.getOptions().map(function(e){return n.createElement(i.default,{prefixCls:v,key:e.value.toString(),disabled:"disabled"in e?e.disabled:c.disabled,value:e.value,checked:-1!==l.value.indexOf(e.value),onChange:e.onChange,className:"".concat(y,"-item")},e.label)}));var x=(0,o.default)(y,f);return n.createElement("div",b({className:x,style:p},h),E)},a.state={value:e.value||e.defaultValue||[],registeredValues:[]},a}var a,r,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,n.Component),a=t,c=[{key:"getDerivedStateFromProps",value:function(e){return"value"in e?{value:e.value||[]}:null}}],(r=[{key:"getChildContext",value:function(){return{checkboxGroup:{toggleOption:this.toggleOption,value:this.state.value,disabled:this.props.disabled,name:this.props.name,registerValue:this.registerValue,cancelValue:this.cancelValue}}}},{key:"shouldComponentUpdate",value:function(e,t){return!(0,l.default)(this.props,e)||!(0,l.default)(this.state,t)}},{key:"getOptions",value:function(){return this.props.options.map(function(e){return"string"===typeof e?{label:e,value:e}:e})}},{key:"render",value:function(){return n.createElement(u.ConfigConsumer,null,this.renderGroup)}}])&&y(a.prototype,r),c&&y(a,c),t}();x.defaultProps={options:[]},x.propTypes={defaultValue:r.array,value:r.array,options:r.array.isRequired,onChange:r.func},x.childContextTypes={checkboxGroup:r.any},(0,c.polyfill)(x);var k=x;t.default=k},4217:function(e,t,a){"use strict";a.r(t);var n=a(1652),r=a.n(n),c=a(1651),o=a.n(c),l=a(1772),s=a.n(l),i=a(103),u=a(21),f=a(22),p=a(29),d=a(28),m=a(30),b=a(66),v=a(0),y=a.n(v),h=a(40),O=(a(19),a(14)),E=a(6),g=a(98),x=a(25),k=a(3),j=30;function N(e){var t=e.valdata,a=(e.icon,e.children),n=Object(b.a)(e,["valdata","icon","children"]);return y.a.createElement("li",{className:"list-group-item p-1"},y.a.createElement("div",Object.assign({className:"media my-3 mx-3",key:t},n),y.a.createElement("div",{className:"media-body mb-0 lh-125 "},a)))}var w=function(e){function t(){var e;Object(u.a)(this,t),(e=Object(p.a)(this,Object(d.a)(t).call(this))).listen=function(){},e.addEvent=function(t){t.id=e.id++,e.state.filters.indexOf(t.type)>-1&&e.setState(function(e,a){return{events:[t].concat(Object(i.a)(e.events.slice(0,j)))}})},e.id=0,e.state={events:[],filters:[],filterButtons:[{label:Object(k.c)("transactions"),icon:"fa fa-exchange-alt",value:"transfer"},{label:Object(k.c)("votes"),icon:"fa fa-bullhorn",value:"vote"},{label:Object(k.c)("asset_participation"),icon:"fa fa-arrow-right",value:"asset-participate"},{label:Object(k.c)("token_created"),icon:"fa fa-plus-circle",value:"asset-create"},{label:Object(k.c)("witness"),icon:"fa fa-eye",value:"witness-create"},{label:Object(k.c)("account"),icon:"fa fa-user",value:"account-name-changed"}]};var a=!0,n=!1,r=void 0;try{for(var c,o=e.state.filterButtons[Symbol.iterator]();!(a=(c=o.next()).done);a=!0){var l=c.value;e.state.filters.push(l.value)}}catch(s){n=!0,r=s}finally{try{a||null==o.return||o.return()}finally{if(n)throw r}}return e}return Object(m.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.listen()}},{key:"componentWillUnmount",value:function(){this.listener.close()}},{key:"buildRow",value:function(e,t){switch(e.type){case"transfer":return y.a.createElement(N,{key:e.id,icon:"fa-exchange-alt"},y.a.createElement("div",{className:"row"},y.a.createElement("div",{className:"col-xs-10 col-sm-5"},y.a.createElement("h5",{className:"card-title text-left"},y.a.createElement("b",null,Object(k.c)("token_transfer"))),Object(k.c)("from"),": ",y.a.createElement("span",{className:"position-absolute ml-2"},y.a.createElement(x.a,{address:e.transferFromAddress,truncate:!0}))),y.a.createElement("div",{className:"col-xs-4 col-sm-2 d-flex justify-content-center align-items-center"},y.a.createElement("img",{src:a(1677)})),y.a.createElement("div",{className:"col-xs-10 col-sm-5"},y.a.createElement("div",null,Object(k.c)("asset"),": ","TRX"===e.tokenName?y.a.createElement("b",null,y.a.createElement(O.c,{maximumFractionDigits:7,minimunFractionDigits:7,value:e.amount/E.E})):y.a.createElement("b",null,y.a.createElement(O.c,{maximumFractionDigits:7,minimunFractionDigits:7,value:e.amount}))," ",e.tokenName),y.a.createElement("div",null,Object(k.c)("to"),": ",y.a.createElement("span",{className:"position-absolute ml-2"},y.a.createElement(x.a,{address:e.transferToAddress,truncate:!0}))))));case"vote":return y.a.createElement(N,{key:e.id,icon:"fa-bullhorn"},y.a.createElement("div",{className:"row"},y.a.createElement("div",{className:"col-xs-8 col-sm-5"},y.a.createElement("h5",{className:"card-title text-left"},y.a.createElement("b",null,Object(k.c)("voting")))),y.a.createElement("div",{className:"col-xs-8 col-sm-2"}),y.a.createElement("div",{className:"col-xs-8 col-sm-5"},Object(k.c)("votes"),": ",y.a.createElement("b",null,y.a.createElement(O.c,{value:e.votes}))),y.a.createElement("div",{className:"col-xs-8 col-sm-5"},Object(k.c)("voter"),": ",y.a.createElement("span",{className:"position-absolute ml-2"},y.a.createElement(x.a,{address:e.voterAddress,truncate:!1}))),y.a.createElement("div",{className:"col-xs-8 col-sm-2"}),y.a.createElement("div",{className:"col-xs-8 col-sm-5"},Object(k.c)("representatives"),": ",y.a.createElement("span",{className:"position-absolute ml-2"},y.a.createElement(x.a,{address:e.candidateAddress,truncate:!1})))));case"asset-participate":return y.a.createElement(N,{key:e.id,icon:"fa-arrow-right"},y.a.createElement("div",{className:"row"},y.a.createElement("div",{className:"col-xs-8 col-sm-5"},y.a.createElement("h5",{className:"card-title text-left"},y.a.createElement("b",null,Object(k.c)("asset_participation")))),y.a.createElement("div",{className:"col-xs-8 col-sm-2"}),y.a.createElement("div",{className:"col-xs-8 col-sm-5"},Object(k.c)("token_name"),": ",y.a.createElement("b",null,e.name)),y.a.createElement("div",{className:"col-xs-8 col-sm-5"},Object(k.c)("owner_address"),": ",y.a.createElement("span",{className:"position-absolute ml-2"},y.a.createElement(x.a,{address:e.ownerAddress,truncate:!1}))),y.a.createElement("div",{className:"col-xs-8 col-sm-2"}),y.a.createElement("div",{className:"col-xs-8 col-sm-5"},Object(k.c)("bought"),": ",e.amount," ",e.name)));case"asset-create":return y.a.createElement(N,{key:e.id,icon:"fa-plus-circle"},y.a.createElement("div",{className:"row"},y.a.createElement("div",{className:"col-xs-8 col-sm-5"},y.a.createElement("h5",{className:"card-title text-left"},y.a.createElement("b",null,Object(k.c)("token_creation")))),y.a.createElement("div",{className:"col-xs-8 col-sm-2"}),y.a.createElement("div",{className:"col-xs-8 col-sm-5"},Object(k.c)("token_name"),": ",y.a.createElement("b",null,y.a.createElement(x.f,{name:e.name}))),y.a.createElement("div",{className:"col-sm-9"},Object(k.c)("address"),": ",y.a.createElement(x.a,{address:e.ownerAddress,truncate:!1})," ",Object(k.b)("created_token")," ",y.a.createElement(x.f,{name:e.name}))));case"witness-create":return y.a.createElement(N,{key:e.id,icon:"fa-user"},y.a.createElement("div",{className:"row"},y.a.createElement("div",{className:"col-xs-8 col-sm-5"},y.a.createElement("h5",{className:"card-title text-left"},y.a.createElement("b",null,Object(k.c)("sr_candidature")))),y.a.createElement("div",{className:"col-xs-8 col-sm-2"}),y.a.createElement("div",{className:"col-xs-8 col-sm-5"},Object(k.c)("address"),": ",y.a.createElement(x.a,{address:e.ownerAddress,truncate:!1})," ",Object(k.b)("applied_for_super_representative"))))}return y.a.createElement("div",{className:"media pt-3",key:"other-"+t},y.a.createElement("p",{className:"media-body pb-3 mb-0 small lh-125 "},"Unknown"))}},{key:"setFilter",value:function(e){this.setState({filters:e})}},{key:"render",value:function(){var e=this,t=this.state,a=t.events,n=t.filters,c=t.filterButtons;return y.a.createElement("main",{className:"container header-overlap page-live pb-3 token_black live"},y.a.createElement("div",{className:"row"},y.a.createElement("div",{className:"col-md-12 mb-4"},y.a.createElement("div",{className:"card"},y.a.createElement("div",{className:"card-body"},y.a.createElement("h5",{className:"card-title"},Object(k.c)("filters")),y.a.createElement("form",{className:"pt-2"},y.a.createElement(s.a.Group,{style:{width:"100%"},onChange:this.setFilter.bind(this),defaultValue:n},y.a.createElement(r.a,{className:"d-flex"},c.map(function(e){return y.a.createElement(o.a,{className:"mr-5",key:e.value},y.a.createElement("i",{className:e.icon+" ml-2"}),y.a.createElement("span",{className:"ml-1 mr-1"},e.label),y.a.createElement(s.a,{value:e.value}))}))))))),y.a.createElement("div",{className:"col-md-12 mt-3 mt-md-0"},0===a.length?y.a.createElement("div",{className:"card"},y.a.createElement(g.b,null,Object(k.c)("waiting_for_transactions"))):y.a.createElement("div",{className:"card"},y.a.createElement("ul",{className:"list-group list-group-flush"},a.map(function(t){return e.buildRow(t)}))))))}}]),t}(y.a.Component);t.default=Object(h.connect)(function(e){return{}},{})(w)}}]);