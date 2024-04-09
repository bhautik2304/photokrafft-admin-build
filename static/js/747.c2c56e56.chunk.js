"use strict";(self.webpackChunkphotokrafft_com=self.webpackChunkphotokrafft_com||[]).push([[747],{18430:function(e,n,t){t.d(n,{Z:function(){return h}});var r=t(1413),o=t(45987),i=t(5289),a=t(65661),s=t(39157),l=t(97123),c=t(36151),d=t(80184),u=["title","content","action","open","onClose"];function h(e){var n=e.title,t=e.content,h=e.action,m=e.open,g=e.onClose,f=(0,o.Z)(e,u);return(0,d.jsxs)(i.Z,(0,r.Z)((0,r.Z)({fullWidth:!0,maxWidth:"xs",open:m,onClose:g},f),{},{children:[(0,d.jsx)(a.Z,{sx:{pb:2},children:n}),t&&(0,d.jsxs)(s.Z,{sx:{typography:"body2"},children:[" ",t," "]}),(0,d.jsxs)(l.Z,{children:[h,(0,d.jsx)(c.Z,{variant:"outlined",color:"inherit",onClick:g,children:"Cancel"})]})]}))}},2417:function(e,n,t){t.d(n,{Z:function(){return g}});var r=t(1413),o=t(45987),i=t(64554),a=t(53767),s=t(20890),l=t(93517),c=t(50533),d=t(11087),u=t(80184);function h(e){var n=e.link,t=e.activeLast,o=e.disabled,a=n.name,s=n.href,l=n.icon,h=(0,r.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},o&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),m=(0,u.jsxs)(u.Fragment,{children:[l&&(0,u.jsx)(i.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:l}),a]});return s?(0,u.jsx)(c.Z,{component:d.rU,to:s,sx:h,children:m}):(0,u.jsxs)(i.Z,{sx:h,children:[" ",m," "]})}var m=["links","action","heading","moreLink","activeLast","sx"];function g(e){var n=e.links,t=e.action,d=e.heading,g=e.moreLink,p=e.activeLast,x=e.sx,Z=(0,o.Z)(e,m),v=n[n.length-1].name;return(0,u.jsxs)(i.Z,{sx:(0,r.Z)({mb:5},x),children:[(0,u.jsxs)(a.Z,{direction:"row",alignItems:"center",children:[(0,u.jsxs)(i.Z,{sx:{flexGrow:1},children:[d&&(0,u.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:d}),!!n.length&&(0,u.jsx)(l.Z,(0,r.Z)((0,r.Z)({separator:(0,u.jsx)(f,{})},Z),{},{children:n.map((function(e){return(0,u.jsx)(h,{link:e,activeLast:p,disabled:e.name===v},e.name||"")}))}))]}),t&&(0,u.jsxs)(i.Z,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!g&&(0,u.jsx)(i.Z,{sx:{mt:2},children:g.map((function(e){return(0,u.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function f(){return(0,u.jsx)(i.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},73379:function(e,n,t){t.d(n,{Z:function(){return r.Z}});var r=t(2417)},738:function(e,n,t){function r(e,n,t){return e>0?Math.max(0,(1+e)*n-t):0}function o(e,n,t){return n[t]<e[t]?-1:n[t]>e[t]?1:0}function i(e,n){return"desc"===e?function(e,t){return o(e,t,n)}:function(e,t){return-o(e,t,n)}}t.d(n,{$W:function(){return j},K:function(){return k},et:function(){return v},S_:function(){return _},Z4:function(){return R},fQ:function(){return r},sQ:function(){return i},x6:function(){return l}});var a=t(29439),s=t(72791);function l(e){var n=(0,s.useState)(!(null===e||void 0===e||!e.defaultDense)),t=(0,a.Z)(n,2),r=t[0],o=t[1],i=(0,s.useState)((null===e||void 0===e?void 0:e.defaultOrderBy)||"name"),l=(0,a.Z)(i,2),c=l[0],d=l[1],u=(0,s.useState)((null===e||void 0===e?void 0:e.defaultOrder)||"asc"),h=(0,a.Z)(u,2),m=h[0],g=h[1],f=(0,s.useState)((null===e||void 0===e?void 0:e.defaultCurrentPage)||0),p=(0,a.Z)(f,2),x=p[0],Z=p[1],v=(0,s.useState)((null===e||void 0===e?void 0:e.defaultRowsPerPage)||5),j=(0,a.Z)(v,2),w=j[0],b=j[1],C=(0,s.useState)((null===e||void 0===e?void 0:e.defaultSelected)||[]),S=(0,a.Z)(C,2),y=S[0],k=S[1],P=(0,s.useCallback)((function(e){""!==e&&(g(c===e&&"asc"===m?"desc":"asc"),d(e))}),[m,c]),R=(0,s.useCallback)((function(e){var n=y.indexOf(e),t=[];-1===n?t=t.concat(y,e):0===n?t=t.concat(y.slice(1)):n===y.length-1?t=t.concat(y.slice(0,-1)):n>0&&(t=t.concat(y.slice(0,n),y.slice(n+1))),k(t)}),[y]),A=(0,s.useCallback)((function(e,n){k(e?n:[])}),[]),B=(0,s.useCallback)((function(e,n){Z(n)}),[]),L=(0,s.useCallback)((function(e){Z(0),b(parseInt(e.target.value,10))}),[]),D=(0,s.useCallback)((function(e){o(e.target.checked)}),[]);return{dense:r,order:m,page:x,orderBy:c,rowsPerPage:w,selected:y,onSelectRow:R,onSelectAllRows:A,onSort:P,onChangePage:B,onChangeDense:D,onChangeRowsPerPage:L,setPage:Z,setDense:o,setOrder:g,setOrderBy:d,setSelected:k,setRowsPerPage:b}}var c=t(35855),d=t(53994),u=t(1413),h=t(45987),m=t(53767),g=t(20890),f=t(58008),p=t(80184),x=["title","description","img","sx"];function Z(e){var n=e.title,t=e.description,r=e.img,o=e.sx,i=(0,h.Z)(e,x);return(0,p.jsxs)(m.Z,(0,u.Z)((0,u.Z)({alignItems:"center",justifyContent:"center",sx:(0,u.Z)({height:1,textAlign:"center",p:function(e){return e.spacing(8,2)}},o)},i),{},{children:[(0,p.jsx)(f.Z,{disabledEffect:!0,alt:"empty content",src:r||"/assets/illustrations/illustration_empty_content.svg",sx:{height:240,mb:3}}),(0,p.jsx)(g.Z,{variant:"h5",gutterBottom:!0,children:n}),t&&(0,p.jsx)(g.Z,{variant:"body2",sx:{color:"text.secondary"},children:t})]}))}function v(e){var n=e.isNotFound;return(0,p.jsx)(c.Z,{children:n?(0,p.jsx)(d.Z,{colSpan:12,children:(0,p.jsx)(Z,{title:"No Data",sx:{"& span.MuiBox-root":{height:160}}})}):(0,p.jsx)(d.Z,{colSpan:12,sx:{p:0}})})}function j(e){var n=e.emptyRows,t=e.height;return n?(0,p.jsx)(c.Z,{sx:(0,u.Z)({},t&&{height:t*n}),children:(0,p.jsx)(d.Z,{colSpan:9})}):null}var w=t(56890),b=t(94454),C=t(80720),S=t(64554),y={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function k(e){var n=e.order,t=e.orderBy,r=e.rowCount,o=void 0===r?0:r,i=e.headLabel,a=e.numSelected,s=void 0===a?0:a,l=e.onSort,h=e.onSelectAllRows,m=e.sx;return(0,p.jsx)(w.Z,{sx:m,children:(0,p.jsxs)(c.Z,{children:[h&&(0,p.jsx)(d.Z,{padding:"checkbox",children:(0,p.jsx)(b.Z,{indeterminate:s>0&&s<o,checked:o>0&&s===o,onChange:function(e){return h(e.target.checked)}})}),i.map((function(e){return(0,p.jsx)(d.Z,{align:e.align||"left",sortDirection:t===e.id&&n,sx:{width:e.width,minWidth:e.minWidth},children:l?(0,p.jsxs)(C.Z,{hideSortIcon:!0,active:t===e.id,direction:t===e.id?n:"asc",onClick:function(){return l(e.id)},sx:{textTransform:"capitalize"},children:[e.label,t===e.id?(0,p.jsx)(S.Z,{sx:(0,u.Z)({},y),children:"desc"===n?"sorted descending":"sorted ascending"}):null]}):e.label},e.id)}))]})})}var P=["dense","action","rowCount","numSelected","onSelectAllRows","sx"];function R(e){var n=e.dense,t=e.action,r=e.rowCount,o=e.numSelected,i=e.onSelectAllRows,a=e.sx,s=(0,h.Z)(e,P);return o?(0,p.jsxs)(m.Z,(0,u.Z)((0,u.Z)({direction:"row",alignItems:"center",sx:(0,u.Z)((0,u.Z)({pl:1,pr:2,top:0,left:0,width:1,zIndex:9,height:58,position:"absolute",bgcolor:"primary.lighter"},n&&{height:38}),a)},s),{},{children:[(0,p.jsx)(b.Z,{indeterminate:o>0&&o<r,checked:r>0&&o===r,onChange:function(e){return i(e.target.checked)}}),(0,p.jsxs)(g.Z,{variant:"subtitle1",sx:(0,u.Z)({ml:2,flexGrow:1,color:"primary.main"},n&&{ml:3}),children:[o," selected"]}),t&&t]})):null}var A=t(63033),B=t(85523),L=t(9955),D=["dense","onChangeDense","rowsPerPageOptions","sx"];function _(e){var n=e.dense,t=e.onChangeDense,r=e.rowsPerPageOptions,o=void 0===r?[5,10,25]:r,i=e.sx,a=(0,h.Z)(e,D);return(0,p.jsxs)(S.Z,{sx:(0,u.Z)({position:"relative"},i),children:[(0,p.jsx)(A.Z,(0,u.Z)({rowsPerPageOptions:o,component:"div"},a)),t&&(0,p.jsx)(B.Z,{label:"Dense",control:(0,p.jsx)(L.Z,{checked:n,onChange:t}),sx:{pl:2,py:1.5,top:0,position:{sm:"absolute"}}})]})}},92747:function(e,n,t){t.r(n),t.d(n,{default:function(){return q}});var r=t(1413),o=t(29439),i=t(6907);t(3431);var a=t(72791),s=t(39709),l=t(57689),c=t(11087),d=t(91614),u=t(36151),h=t(57621),m=t(39281),g=t(20068),f=t(13400),p=t(79836),x=t(53382),Z=t(61889),v=t(48550),j=t(30829),w=t(67303),b=t(738),C=t(74319),S=t(72422),y=t(73379),k=t(18430),P=t(35855),R=t(53994),A=t(94454),B=t(53767),L=t(50533),D=t(38820),_=t(42142),I=(t(7870),t(1695),t(58008)),M=(t(229),t(56488)),N=t(84864),T=t(4034),W=t(70188),O=t(80184);function z(e){var n=e.row,t=e.selected,r=e.onSelectRow,i=(e.onDeleteRow,e.onEditRow),s=e.onViewRow,l=n.id,c=n.name,d=n.img,u=n.created_at,h=(n.inventoryType,n.price,(0,a.useState)(!1)),m=(0,o.Z)(h,2),g=(m[0],m[1],(0,a.useState)(null)),p=(0,o.Z)(g,2),x=(p[0],p[1],(0,T.I0)());return(0,O.jsxs)(P.Z,{hover:!0,selected:t,children:[(0,O.jsx)(R.Z,{padding:"checkbox",children:(0,O.jsx)(A.Z,{checked:t,onClick:r})}),(0,O.jsx)(R.Z,{children:(0,O.jsxs)(B.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,O.jsx)(I.Z,{disabledEffect:!0,visibleByDefault:!0,alt:c,src:d,sx:{borderRadius:1.5,width:48,height:48}}),(0,O.jsx)(L.Z,{noWrap:!0,color:"inherit",variant:"subtitle2",onClick:s,sx:{cursor:"pointer"},children:c})]})}),(0,O.jsx)(R.Z,{children:(0,_.Mu)(u)}),(0,O.jsxs)(R.Z,{align:"right",children:[(0,O.jsx)(f.Z,{color:"error",onClick:function(){var e=w.Am.loading("Please wait...");M.h.productApi.Delete(l).then((function(n){if(n.data.code===W.hn.created)return x((0,N.lJ)()),w.Am.update(e,{render:n.data.message,type:"success",isLoading:!1}),void setTimeout((function(){w.Am.dismiss(e)}),5e3);w.Am.update(e,{render:n.data.message,type:"error",isLoading:!1}),setTimeout((function(){w.Am.dismiss(e)}),5e3)})).catch((function(n){console.log(n),w.Am.update(e,{render:"some thing went wrong",type:"error",isLoading:!1}),setTimeout((function(){w.Am.dismiss(e)}),5e3)}))},children:(0,O.jsx)(C.Z,{icon:"eva:trash-2-outline"})}),(0,O.jsx)(f.Z,{color:"warning",onClick:function(){return i()},children:(0,O.jsx)(D.Z,{})})]})]})}t(18829);var E=t(38072),F=t(4809),Q=[{id:"name",label:"Product",align:"left"},{id:"",label:"Created at",align:"left"},{id:""}],V={name:"",min_page:"",boxandsleeve:!0,img:""};var q=function(){var e=(0,b.x6)({defaultOrderBy:"createdAt"}),n=e.dense,t=e.page,P=e.order,R=e.orderBy,A=e.rowsPerPage,B=e.setPage,L=e.selected,D=e.setSelected,_=(e.onSelectRow,e.onSelectAllRows),I=e.onSort,q=e.onChangeDense,K=e.onChangePage,U=e.onChangeRowsPerPage,$=(0,F.K$)().themeStretch,G=(0,l.s0)(),J=(0,T.I0)(),Y=(0,T.v9)((function(e){return e.resource})).product,H=(0,a.useState)([]),X=(0,o.Z)(H,2),ee=X[0],ne=X[1],te=(0,a.useState)(V),re=(0,o.Z)(te,2),oe=re[0],ie=re[1],ae=(0,a.useState)(""),se=(0,o.Z)(ae,2),le=se[0],ce=(se[1],(0,a.useState)([])),de=(0,o.Z)(ce,2),ue=de[0],he=(de[1],(0,a.useState)(!1)),me=(0,o.Z)(he,2),ge=me[0],fe=me[1],pe=(0,a.useState)(!1),xe=(0,o.Z)(pe,2),Ze=xe[0],ve=xe[1];(0,a.useEffect)((function(){null!==Y&&void 0!==Y&&Y.length&&ne(Y)}),[Y]);var je=function(e){var n=e.inputData,t=e.comparator,r=e.filterName,o=e.filterStatus,i=n.map((function(e,n){return[e,n]}));i.sort((function(e,n){var r=t(e[0],n[0]);return 0!==r?r:e[1]-n[1]})),n=i.map((function(e){return e[0]})),r&&(n=n.filter((function(e){return-1!==e.name.toLowerCase().indexOf(r.toLowerCase())})));o.length&&(n=n.filter((function(e){return o.includes(e.inventoryType)})));return n}({inputData:ee,comparator:(0,b.sQ)(P,R),filterName:le,filterStatus:ue}),we=je.slice(t*A,t*A+A),be=n?60:80,Ce=!je.length&&!!le,Se=function(){fe(!0)},ye=function(e){G(E.vB.products.productEdit(e))};return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(i.ql,{children:(0,O.jsx)("title",{children:" Product List | Photokraft"})}),(0,O.jsxs)(d.Z,{maxWidth:!$&&"lg",children:[(0,O.jsx)(y.Z,{heading:"Product List",links:[{name:"Dashboard",href:E.vB.dashbord},{name:"Product List"}],action:(0,O.jsx)(u.Z,{component:c.rU,onClick:function(){return Se()},variant:"contained",startIcon:(0,O.jsx)(C.Z,{icon:"eva:plus-fill"}),children:"New Product"})}),(0,O.jsxs)(h.Z,{children:[(0,O.jsxs)(m.Z,{sx:{position:"relative",overflow:"unset"},children:[(0,O.jsx)(b.Z4,{dense:n,numSelected:L.length,rowCount:ee.length,onSelectAllRows:function(e){return _(e,ee.map((function(e){return e.id})))},action:(0,O.jsx)(g.Z,{title:"Delete",children:(0,O.jsx)(f.Z,{color:"primary",onClick:Se,children:(0,O.jsx)(C.Z,{icon:"eva:trash-2-outline"})})})}),(0,O.jsx)(S.Z,{children:(0,O.jsxs)(p.Z,{size:n?"small":"medium",sx:{minWidth:960},children:[(0,O.jsx)(b.K,{order:P,orderBy:R,headLabel:Q,rowCount:ee.length,numSelected:L.length,onSort:I,onSelectAllRows:function(e){return _(e,ee.map((function(e){return e.id})))}}),(0,O.jsxs)(x.Z,{children:[null===Y||void 0===Y?void 0:Y.slice(t*A,t*A+A).map((function(e,n){return e&&(0,O.jsx)(z,{row:e,onViewRow:function(){return ye(e.id)},onDeleteRow:function(){return function(e){var n=ee.filter((function(n){return n.id!==e}));D([]),ne(n),t>0&&we.length<2&&B(t-1)}(e.id)},onEditRow:function(){return ye(e.id)}},e.id)})),(0,O.jsx)(b.$W,{height:be,emptyRows:(0,b.fQ)(t,A,ee.length)}),(0,O.jsx)(b.et,{isNotFound:Ce})]})]})})]}),(0,O.jsx)(b.S_,{count:je.length,page:t,rowsPerPage:A,onPageChange:K,onRowsPerPageChange:U,dense:n,onChangeDense:q})]})]}),(0,O.jsx)(k.Z,{open:ge,onClose:function(){fe(!1)},title:"Create New Product",content:(0,O.jsxs)(Z.ZP,{spacing:3,children:[(0,O.jsx)(v.Z,{sx:{marginY:2},onChange:function(e){ve((0,r.Z)((0,r.Z)({},Ze),{},{name:!1})),ie((0,r.Z)((0,r.Z)({},oe),{},{name:e.target.value}))},label:"Product Name",error:null===Ze||void 0===Ze?void 0:Ze.name,fullWidth:!0}),(0,O.jsx)(v.Z,{sx:{marginY:2},onChange:function(e){ve((0,r.Z)((0,r.Z)({},Ze),{},{min_page:!1})),ie((0,r.Z)((0,r.Z)({},oe),{},{min_page:e.target.value}))},label:"Minnimum Page",error:null===Ze||void 0===Ze?void 0:Ze.min_page,fullWidth:!0}),(0,O.jsx)(j.Z,{sx:{color:"#777",marginBottom:".5em",marginTop:"1em",fontSize:".75em",display:"block"},children:"Upload Product Image"}),(0,O.jsx)(v.Z,{error:null===Ze||void 0===Ze?void 0:Ze.img,type:"file",onChange:function(e){ve((0,r.Z)((0,r.Z)({},Ze),{},{img:!1})),ie((0,r.Z)((0,r.Z)({},oe),{},{img:e.target.files[0]}))},fullWidth:!0})]}),action:(0,O.jsx)(s.Z,{variant:"contained",onClick:function(){return function(){var e=w.Am.loading("Please wait..."),n={};if(null!==oe&&void 0!==oe&&oe.name||(n.name="Please select name"),null!==oe&&void 0!==oe&&oe.img||(n.img="Please select img"),null!==oe&&void 0!==oe&&oe.min_page||(n.min_page="Please select minimum page"),Object.keys(n).length>0)return ve(n),w.Am.update(e,{render:"Required Field *",type:"error",isLoading:!1}),void setTimeout((function(){w.Am.dismiss(e)}),5e3);var t=new FormData;t.append("name",oe.name),t.append("img",oe.img),t.append("min_page",oe.min_page),t.append("boxandsleeve",oe.boxandsleeve),M.h.productApi.Create(t).then((function(n){if(n.data.code===W.hn.created)return J((0,N.lJ)()),ie(V),ve({}),fe(!ge),w.Am.update(e,{render:n.data.message,type:"success",isLoading:!1}),void setTimeout((function(){w.Am.dismiss(e)}),5e3);w.Am.update(e,{render:n.data.message,type:"error",isLoading:!1}),setTimeout((function(){w.Am.dismiss(e)}),5e3)})).catch((function(n){console.log(n),w.Am.update(e,{render:"some thing went wrong",type:"error",isLoading:!1}),setTimeout((function(){w.Am.dismiss(e)}),5e3)}))}()},children:"Create"})})]})}},38820:function(e,n,t){var r=t(74223),o=t(80184);n.Z=(0,r.Z)((0,o.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit")},93517:function(e,n,t){t.d(n,{Z:function(){return L}});var r=t(93433),o=t(29439),i=t(4942),a=t(87462),s=t(63366),l=t(72791),c=(t(57441),t(28182)),d=t(94419),u=t(66934),h=t(31402),m=t(20890),g=t(12065),f=t(74223),p=t(80184),x=(0,f.Z)((0,p.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),Z=t(23701),v=(0,u.ZP)(Z.Z)((function(e){var n=e.theme;return(0,a.Z)({display:"flex",marginLeft:"calc(".concat(n.spacing(1)," * 0.5)"),marginRight:"calc(".concat(n.spacing(1)," * 0.5)")},"light"===n.palette.mode?{backgroundColor:n.palette.grey[100],color:n.palette.grey[700]}:{backgroundColor:n.palette.grey[700],color:n.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,a.Z)({},"light"===n.palette.mode?{backgroundColor:n.palette.grey[200]}:{backgroundColor:n.palette.grey[600]}),"&:active":(0,a.Z)({boxShadow:n.shadows[0]},"light"===n.palette.mode?{backgroundColor:(0,g._4)(n.palette.grey[200],.12)}:{backgroundColor:(0,g._4)(n.palette.grey[600],.12)})})})),j=(0,u.ZP)(x)({width:24,height:16});var w=function(e){var n=e;return(0,p.jsx)("li",{children:(0,p.jsx)(v,(0,a.Z)({focusRipple:!0},e,{ownerState:n,children:(0,p.jsx)(j,{ownerState:n})}))})},b=t(75878),C=t(21217);function S(e){return(0,C.Z)("MuiBreadcrumbs",e)}var y=(0,b.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),k=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],P=(0,u.ZP)(m.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,n){return[(0,i.Z)({},"& .".concat(y.li),n.li),n.root]}})({}),R=(0,u.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,n){return n.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),A=(0,u.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,n){return n.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function B(e,n,t,r){return e.reduce((function(o,i,a){return a<e.length-1?o=o.concat(i,(0,p.jsx)(A,{"aria-hidden":!0,className:n,ownerState:r,children:t},"separator-".concat(a))):o.push(i),o}),[])}var L=l.forwardRef((function(e,n){var t=(0,h.Z)({props:e,name:"MuiBreadcrumbs"}),i=t.children,u=t.className,m=t.component,g=void 0===m?"nav":m,f=t.expandText,x=void 0===f?"Show path":f,Z=t.itemsAfterCollapse,v=void 0===Z?1:Z,j=t.itemsBeforeCollapse,b=void 0===j?1:j,C=t.maxItems,y=void 0===C?8:C,A=t.separator,L=void 0===A?"/":A,D=(0,s.Z)(t,k),_=l.useState(!1),I=(0,o.Z)(_,2),M=I[0],N=I[1],T=(0,a.Z)({},t,{component:g,expanded:M,expandText:x,itemsAfterCollapse:v,itemsBeforeCollapse:b,maxItems:y,separator:L}),W=function(e){var n=e.classes;return(0,d.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},S,n)}(T),O=l.useRef(null),z=l.Children.toArray(i).filter((function(e){return l.isValidElement(e)})).map((function(e,n){return(0,p.jsx)("li",{className:W.li,children:e},"child-".concat(n))}));return(0,p.jsx)(P,(0,a.Z)({ref:n,component:g,color:"text.secondary",className:(0,c.Z)(W.root,u),ownerState:T},D,{children:(0,p.jsx)(R,{className:W.ol,ref:O,ownerState:T,children:B(M||y&&z.length<=y?z:function(e){return b+v>=e.length?e:[].concat((0,r.Z)(e.slice(0,b)),[(0,p.jsx)(w,{"aria-label":x,onClick:function(){N(!0);var e=O.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,r.Z)(e.slice(e.length-v,e.length)))}(z),W.separator,L,T)})}))}))}}]);
//# sourceMappingURL=747.c2c56e56.chunk.js.map