(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{1391:function(e,t,a){"use strict";a.d(t,"a",function(){return _});var n=a(1401),r=a.n(n),o=a(2),c=a.n(o),l=a(24),s=a(4),i=a(12),d=a(11),u=a(20),p=a(19),m=a(21),f=a(0),g=a.n(f),h=(a(3),a(16));a(70);function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(a,!0).forEach(function(t){Object(l.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var _=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).loadDatas=Object(s.a)(c.a.mark(function e(){var t,n,r,o,l=arguments;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:1,n=l.length>1&&void 0!==l[1]?l[1]:40,r=a.state.filter,e.next=5,h.b.getTokens(v({sort:"rank",limit:n,start:(t-1)*n},r));case 5:return o=e.sent,e.abrupt("return",o);case 7:case"end":return e.stop()}},e)})),a.handleTableChange=function(e,t,n){var r=v({},a.state.pagination);r.current=e.current,a.setState({pagination:r}),a.fetch(v({pageSize:e.pageSize,page:e.current,sortField:n.field,sortOrder:n.order},t))},a.fetch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.setState({loading:!0}),a.props.onPageChange?(a.props.onPageChange(e.page,e.pageSize),a.setState({loading:!1})):a.setState({loading:!1})},a.onInputChange=function(e){a.setState({searchText:e.target.value})},a.onReset=function(){a.setState({searchText:""},function(){a.onSearch()})},a.onSearch=function(){var e=a.props,t=e.tableData,n=(e.filterDropdownVisible,a.state.searchText),r=new RegExp(n,"gi");a.setState({filterDropdownVisible:!1,filtered:!!n,data:t.map(function(e){return e.name.match(r)?v({},e,{name:g.a.createElement("span",null," ",e.name.split(new RegExp("(?<=".concat(n,")|(?=").concat(n,")"),"i")).map(function(e,t){return e.toLowerCase()===n.toLowerCase()?g.a.createElement("span",{key:t,className:"highlight"}," ",e," "):e})," ")}):null}).filter(function(e){return!!e})})},a.setColumn=function(e){function t(e){return function(t,a){return t[e]>a[e]?1:t[e]<a[e]?-1:0}}var a={},n=[],r=!0,o=!1,c=void 0;try{for(var l,s=e[Symbol.iterator]();!(r=(l=s.next()).done);r=!0){var i=l.value;if(i.sorter&&!i.filterDropdown){var d={sorter:t(i.key)};n.push(v({},i,{},d))}else if(!i.sorter&&i.filterDropdown){var u=v({},a);n.push(v({},i,{},u))}else if(i.sorter&&i.filterDropdown){var p=v({sorter:t(i.key)},a);n.push(v({},i,{},p))}else n.push(i)}}catch(m){o=!0,c=m}finally{try{r||null==s.return||s.return()}finally{if(o)throw c}}return n},a.state={filterDropdownVisible:!1,data:[],searchText:"",filtered:!1,pagination:{showQuickJumper:!0,position:e.position||"both",showSizeChanger:!0,defaultPageSize:20,current:e.current||1},loading:!1},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e){var t=this.props.current,a=this.state.pagination;e.current!=t&&this.setState({pagination:v({},a,{current:t})})}},{key:"render",value:function(){var e=this.props,t=e.total,a=e.loading,n=e.data,o=e.column,c=e.bordered,l=e.pagination,s=void 0===l||l,i=e.scroll,d=e.Footer,u=e.locale,p=e.addr,m=e.transfers,f=e.nopadding,h=(e.contractAddress,e.isPaddingTop,this.setColumn(o)),b=s?v({total:t},this.state.pagination):s;return g.a.createElement("div",null," ",p?g.a.createElement("div",{className:"card table_pos table_pos_addr "+(0==n.length?"table_pos_addr_data":"")+("address"==m?" transfer-mt-100":" transfer-pt-100")+(f?" transfer-mp-0":"")},g.a.createElement(r.a,{bordered:c,columns:h,rowKey:function(e,t){return t},dataSource:n,locale:u,scroll:i,footer:d,pagination:b,loading:a,onChange:this.handleTableChange})," "):g.a.createElement("div",{className:"card table_pos"},g.a.createElement(r.a,{bordered:c,columns:h,footer:d,rowKey:function(e,t){return t},dataSource:n,locale:u,scroll:i,pagination:b,loading:a,onChange:this.handleTableChange})," ")," ")}}]),t}(f.Component)},1402:function(e,t,a){e.exports=a.p+"static/media/logo_default.22fc28d0.png"},1914:function(e,t,a){var n=a(115);e.exports=function(e){return n(e).toLowerCase()}},2034:function(e,t,a){"use strict";var n=a(257),r=a.n(n),o=a(1407),c=a.n(o),l=a(12),s=a(11),i=a(20),d=a(19),u=a(21),p=a(0),m=a.n(p),f=a(3),g=a(95),h=a.n(g);m.a.Component},3494:function(e,t,a){"use strict";a.r(t);var n=a(1914),r=a.n(n),o=a(256),c=a.n(o),l=a(38),s=a.n(l),i=a(2),d=a.n(i),u=a(4),p=a(12),m=a(11),f=a(20),g=a(19),h=a(21),b=a(0),v=a.n(b),_=a(31),w=a(370),y=a(10),E=(a(51),a(3)),x=(a(16),a(23)),k=a(374),O=(a(2034),a(79),a(1391)),S=a(5),C=a(18),j=a(52),D=a(89),P=a(65),N=a(15),T=a.n(N),M=function(e){function t(e){var n;Object(p.a)(this,t),(n=Object(f.a)(this,Object(g.a)(t).call(this,e))).loadPage=Object(u.a)(d.a.mark(function e(){var t,a,r,o,c,l,s=arguments;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=s.length>0&&void 0!==s[0]?s[0]:1,a=s.length>1&&void 0!==s[1]?s[1]:20,r=n.state.filter,n.props.intl,n.setState({loading:!0}),!r.name){e.next=12;break}return e.next=8,T.a.get(S.f+"/api/token_trc20?sort=issue_time&limit="+a+"&start="+(t-1)*a+"&name="+r.name);case 8:o=e.sent,c=o.data.trc20_tokens.length,e.next=16;break;case 12:return e.next=14,T.a.get(S.f+"/api/token_trc20?sort=issue_time&limit="+a+"&start="+(t-1)*a);case 14:o=e.sent,c=o.data.total;case 16:return(l=o.data.trc20_tokens).map(function(e,n){e.index=n+1+(t-1)*a}),n.setState({loading:!1,tokens:l,total:c,page:t}),n.addIEOClass(),e.abrupt("return",c);case 21:case"end":return e.stop()}},e)})),n.setSearch=function(){var e=s()(Object(k.a)(n.props.location,"search"));e.length>0?n.setState({filter:{name:"%25".concat(e,"%25")}}):n.setState({filter:{}})},n.addIEOClass=function(){var e=n.state.page,t=document.querySelector(".ant-table-tbody").firstElementChild;1==e?t.classList.add("trc20-star-ad"):t.classList.remove("trc20-star-ad"),document.querySelector(".trc20-star-ad")&&document.querySelector(".trc20-star-ad").addEventListener("click",function(){window.open("http://www.tronace.com")})},n.onChange=function(e,t){n.loadPage(e,t)},n.customizedColumn=function(){var e=n.props.intl,t=n.state.contractAddress,o=a(1402);return[{title:"#",dataIndex:"index",key:"index",width:"48px",align:"center",className:"ant_table _text_nowrap",render:function(e,a,n){return v.a.createElement("span",null,a.contract_address==t?v.a.createElement("div",null,v.a.createElement("span",{className:"starbeat"},v.a.createElement("i",{className:"fas fa-star"})," "),v.a.createElement("span",{className:"star-tip"})):v.a.createElement("span",null,e-1))}},{title:c()(e.formatMessage({id:"token"})),dataIndex:"name",key:"name",width:"50%",render:function(e,t,a){return v.a.createElement("div",{className:"table-imgtext"},t.icon_url?v.a.createElement("div",{style:{width:"42px",height:"42px",marginRight:"18px"}},v.a.createElement("img",{style:{width:"42px",height:"42px"},src:t.icon_url,onError:function(e){e.target.onerror=null,e.target.src=o}})):v.a.createElement("div",{style:{width:"42px",height:"42px",marginRight:"18px"}},v.a.createElement("img",{style:{width:"42px",height:"42px"},src:o})),v.a.createElement("div",null,v.a.createElement("h5",null,v.a.createElement(x.g,{name:t.name,namePlus:t.name+" ("+t.symbol+")",address:t.contract_address})),v.a.createElement("p",null,t.token_desc)))}},{title:e.formatMessage({id:"market_capitalization"}),align:"center",className:"ant_table d-none d-md-table-cell _text_nowrap",render:function(e,t,a){return v.a.createElement("div",null,t.price&&t.total_supply_with_decimals?v.a.createElement("div",null,v.a.createElement(y.c,{value:t.total_supply_with_decimals*t.price,maximumFractionDigits:1})," ","TRX"):v.a.createElement("span",{style:{color:"#666666"}},"-"))}},{title:e.formatMessage({id:"pice_per_onetrx"}),dataIndex:"pice_per_onetrx",key:"pice_per_onetrx",align:"center",className:"ant_table",render:function(e,t,a){r()(e);return v.a.createElement("div",null,t.price?v.a.createElement("div",null,v.a.createElement(y.c,{value:t.price,maximumFractionDigits:1})," ","TRX"):v.a.createElement("span",{style:{color:"#666666"}},"-"))}},{title:e.formatMessage({id:"total_tokens"}),dataIndex:"total_supply_with_decimals",key:"total_supply",render:function(e,t,a){return null===e&&(e=0),v.a.createElement("div",null,v.a.createElement(y.c,{value:t.total_supply_with_decimals/Math.pow(10,t.decimals),maximumFractionDigits:1}))},align:"center",className:"ant_table _text_nowrap"},{title:e.formatMessage({id:"contract_address"}),dataIndex:"contract_address",key:"contract_address",render:function(e,t,a){return v.a.createElement(x.a,{address:t.contract_address,isContract:!0})},align:"center",className:"ant_table"}]},n.state={tokens:[],buyAmount:0,loading:!1,total:0,filter:{},page:1,contractAddress:"TB2SqC48afC9FX36bPQQHatoKo5m79JXKL"};var o=s()(Object(k.a)(e.location,"search"));return o.length>0&&(n.state.filter.name="%25".concat(o,"%25")),n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.loadPage(),setTimeout(function(){e.addIEOClass()},1e3)}},{key:"componentDidUpdate",value:function(e,t){}},{key:"render",value:function(){var e=this,t=this.state,a=t.tokens,n=(t.alert,t.loading),r=t.total,o=t.contractAddress,c=this.props,l=(c.match,c.intl),s=this.customizedColumn(),i=l.formatMessage({id:"part_total"})+" "+r+" "+l.formatMessage({id:"part_pass"});return v.a.createElement("main",{className:"container header-overlap token_black trc20-ad-bg"},n&&v.a.createElement("div",{className:"loading-style"},v.a.createElement(D.b,null)),v.a.createElement("div",{className:"row"},v.a.createElement("div",{className:"col-md-12 table_pos"},r?v.a.createElement("div",{className:"table_pos_info d-none d-md-block d-flex",style:{left:"auto"}},i," \xa0\xa0",v.a.createElement(P.a,{to:"/exchange/trc20"},Object(E.b)("Trade_on_Poloni DEX"),">")):"",v.a.createElement("a",{className:"apply-trc20",href:"https://goo.gl/forms/PiyLiDeaXv3uesSE3",target:"_blank",style:{color:"#C23631"}},v.a.createElement("button",{className:"btn btn-danger"},Object(E.c)("application_entry"))),v.a.createElement(O.a,{bordered:!0,loading:n,column:s,data:a,total:r,contractAddress:o,onPageChange:function(t,a){e.loadPage(t,a)}}))))}}]),t}(b.Component);var I={loadTokens:w.b,login:C.v,reloadWallet:j.c};t.default=Object(_.connect)(function(e){return{account:e.app.account,tokens:e.tokens.tokens,wallet:e.wallet,currentWallet:e.wallet.current}},I)(Object(y.h)(M))}}]);