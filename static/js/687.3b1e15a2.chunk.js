"use strict";(self.webpackChunkphotokrafft_com=self.webpackChunkphotokrafft_com||[]).push([[687],{18430:function(n,e,o){o.d(e,{Z:function(){return h}});var i=o(1413),t=o(45987),r=o(5289),c=o(65661),s=o(39157),d=o(97123),l=o(36151),a=o(80184),u=["title","content","action","open","onClose"];function h(n){var e=n.title,o=n.content,h=n.action,x=n.open,p=n.onClose,Z=(0,t.Z)(n,u);return(0,a.jsxs)(r.Z,(0,i.Z)((0,i.Z)({fullWidth:!0,maxWidth:"xs",open:x,onClose:p},Z),{},{children:[(0,a.jsx)(c.Z,{sx:{pb:2},children:e}),o&&(0,a.jsxs)(s.Z,{sx:{typography:"body2"},children:[" ",o," "]}),(0,a.jsxs)(d.Z,{children:[h,(0,a.jsx)(l.Z,{variant:"outlined",color:"inherit",onClick:p,children:"Cancel"})]})]}))}},2417:function(n,e,o){o.d(e,{Z:function(){return p}});var i=o(1413),t=o(45987),r=o(64554),c=o(53767),s=o(20890),d=o(93517),l=o(50533),a=o(11087),u=o(80184);function h(n){var e=n.link,o=n.activeLast,t=n.disabled,c=e.name,s=e.href,d=e.icon,h=(0,i.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},t&&!o&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),x=(0,u.jsxs)(u.Fragment,{children:[d&&(0,u.jsx)(r.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:d}),c]});return s?(0,u.jsx)(l.Z,{component:a.rU,to:s,sx:h,children:x}):(0,u.jsxs)(r.Z,{sx:h,children:[" ",x," "]})}var x=["links","action","heading","moreLink","activeLast","sx"];function p(n){var e=n.links,o=n.action,a=n.heading,p=n.moreLink,v=n.activeLast,j=n.sx,f=(0,t.Z)(n,x),g=e[e.length-1].name;return(0,u.jsxs)(r.Z,{sx:(0,i.Z)({mb:5},j),children:[(0,u.jsxs)(c.Z,{direction:"row",alignItems:"center",children:[(0,u.jsxs)(r.Z,{sx:{flexGrow:1},children:[a&&(0,u.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:a}),!!e.length&&(0,u.jsx)(d.Z,(0,i.Z)((0,i.Z)({separator:(0,u.jsx)(Z,{})},f),{},{children:e.map((function(n){return(0,u.jsx)(h,{link:n,activeLast:v,disabled:n.name===g},n.name||"")}))}))]}),o&&(0,u.jsxs)(r.Z,{sx:{flexShrink:0},children:[" ",o," "]})]}),!!p&&(0,u.jsx)(r.Z,{sx:{mt:2},children:p.map((function(n){return(0,u.jsx)(l.Z,{noWrap:!0,href:n,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:n},n)}))})]})}function Z(){return(0,u.jsx)(r.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},73379:function(n,e,o){o.d(e,{Z:function(){return i.Z}});var i=o(2417)},72687:function(n,e,o){o.r(e);var i=o(45987),t=o(1413),r=o(29439),c=o(72791),s=(o(8007),o(59434)),d=o(57689),l=o(6907),a=o(26759),u=o(27247),h=o(91614),x=o(36151),p=o(35527),Z=o(61889),v=o(53767),j=o(68096),f=o(17133),g=o(20890),m=o(48550),b=o(64554),C=o(57621),w=o(9585),I=o(63466),S=o(13400),z=o(89673),y=o(5519),k=o(55818),P=o(3721),_=o(39504),R=o(13239),q=o(5289),A=o(65661),W=o(39157),J=o(31010),Q=o(97123),N=o(18267),F=o(66934),D=o(12065),O=o(87087),L=o(74319),T=(o(72422),o(73379)),B=(o(18430),o(38072)),V=o(4809),E=o(23825),Y=o(15476),U=o(84864),M=o(70188),H=o(25286),K=o(80184),$=["ratio","disabledEffect","effect","sx"];e.default=function(){var n=(0,d.UO)().id,e=(0,c.useState)(!1),o=(0,r.Z)(e,2),i=o[0],a=o[1],u=(0,c.useState)(!1),I=(0,r.Z)(u,2),S=I[0],z=I[1],y=(0,c.useState)(!1),k=(0,r.Z)(y,2),P=k[0],_=k[1],R=((0,E.Ds)().enqueueSnackbar,(0,s.v9)((function(n){return n.resource}))),q=R.product,A=R.countryzone;(0,c.useEffect)((function(){a(q.find((function(e){return e.name===n})))}),[q,n]),console.log(n);var W=(0,c.useCallback)((function(n){var e=n.map((function(n){return Object.assign(n,{preview:URL.createObjectURL(n)})}));z(e[0]),console.log(e)}),[]),J=(0,N.uI)({onDrop:W}),Q=J.getRootProps,F=J.getInputProps,D=J.isDragActive,O=(J.isDragReject,J.fileRejections,(0,V.K$)().themeStretch);return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(l.ql,{children:(0,K.jsx)("title",{children:" Product | Photokraft"})}),(0,K.jsxs)(h.Z,{maxWidth:!O&&"lg",children:[(0,K.jsx)(T.Z,{heading:"Edit ".concat(null===i||void 0===i?void 0:i.name),links:[{name:"Dashboard",href:B.vB.dashbord},{name:"Products",href:B.vB.products.root},{name:null===i||void 0===i?void 0:i.name}],action:(0,K.jsx)(x.Z,{variant:"contained",startIcon:(0,K.jsx)(L.Z,{icon:"eva:plus-fill"}),children:"New Product"})}),(0,K.jsx)(p.Z,{elevation:3,style:{padding:30},children:(0,K.jsxs)(Z.ZP,{container:!0,children:[(0,K.jsx)(Z.ZP,{sm:6,xs:12,lg:6,children:(0,K.jsxs)(v.Z,{flex:"colum",spacing:2,padding:5,children:[(0,K.jsxs)(j.Z,{children:[(0,K.jsx)(f.Z,{children:(0,K.jsx)(g.Z,{variant:"subtitle2",sx:{color:"text.secondary"},children:"Product Name"})}),(0,K.jsx)(m.Z,{fullWidth:!0,value:i.name,size:"small"})]}),(0,K.jsxs)(j.Z,{children:[(0,K.jsx)(f.Z,{children:(0,K.jsx)(g.Z,{variant:"subtitle2",sx:{color:"text.secondary"},children:"Minimum Page Requirement *"})}),(0,K.jsx)(m.Z,{fullWidth:!0,value:i.min_page,size:"small"})]})]})}),(0,K.jsx)(Z.ZP,{sm:6,xs:12,lg:6,children:(0,K.jsxs)(v.Z,{spacing:1,padding:0,children:[(0,K.jsx)(g.Z,{variant:"subtitle2",sx:{color:"text.secondary"},children:"Images"}),(0,K.jsx)(b.Z,{sx:{width:"100%",height:250,position:"relative"},children:(0,K.jsxs)(pn,(0,t.Z)((0,t.Z)({},Q()),{},{sx:(0,t.Z)((0,t.Z)({},D&&{opacity:.72}),{},{width:"100%",height:"100%"}),children:[(0,K.jsx)("input",(0,t.Z)({},F())),(0,K.jsx)(Zn,{file:S||(null===i||void 0===i?void 0:i.img)})]}))})]})}),(0,K.jsx)(Z.ZP,{sm:6,xs:12,lg:6,children:(0,K.jsx)(v.Z,{flex:"colum",spacing:2,padding:5,children:A&&i&&A.map((function(n,e){return console.log(n),(0,K.jsxs)(j.Z,{children:[(0,K.jsx)(f.Z,{children:(0,K.jsxs)(g.Z,{variant:"subtitle2",sx:{color:"text.secondary"},children:["Pocket Book Price In ","".concat(n.zonename)]})}),(0,K.jsx)(G,{fullWidth:!0,sign:n.currency_sign,productId:i.id,zoneId:n.id,pricrData:i.album_copy_price,size:"small"})]})}))})}),(0,K.jsx)(Z.ZP,{sm:6,xs:12,lg:6,children:(0,K.jsx)(v.Z,{flex:"colum",spacing:2,padding:5,children:A&&i&&A.map((function(n,e){return console.log(n),(0,K.jsxs)(j.Z,{children:[(0,K.jsx)(f.Z,{children:(0,K.jsxs)(g.Z,{variant:"subtitle2",sx:{color:"text.secondary"},children:["Print + Bind + Design Price In ","".concat(n.zonename)]})}),(0,K.jsx)(tn,{fullWidth:!0,sign:n.currency_sign,productId:i.id,zoneId:n.id,pricrData:i.pritnig_price,size:"small"})]})}))})}),(0,K.jsx)(v.Z,{flexDirection:"row",width:"100%",justifyContent:"flex-end",alignItems:"flex-end",children:(0,K.jsx)(x.Z,{variant:"contained",children:" Save Changes "})})]})}),(0,K.jsxs)(C.Z,{sx:{marginY:5,padding:2},children:[(0,K.jsxs)(v.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",width:"100%",children:[(0,K.jsx)(w.Z,{title:"Orientations",sx:{padding:0}}),(0,K.jsx)(v.Z,{spacing:3,direction:"row",children:(0,K.jsx)(x.Z,{variant:"contained",onClick:function(){return _(!0)},children:"Add Orientation"})})]}),i?null===i||void 0===i?void 0:i.orientation.map((function(n,e){return(0,K.jsx)(X,{data:n,setAddOrientationModelShow:_},e)})):null]})]}),(0,K.jsx)(dn,{show:P,productId:null===i||void 0===i?void 0:i.id,onClose:function(){return _(!1)}})]})};var G=function(n){var e=n.sign,o=n.productId,i=n.zoneId,t=n.pricrData;console.log(o);var d=t.find((function(n){return n.product_id===o&&n.countryzone_id===i})),l=(null===d||void 0===d?void 0:d.price)||0;console.log(l);var a=(0,c.useState)(l),u=(0,r.Z)(a,2),h=u[0],x=u[1],p=(0,c.useState)(!1),Z=(0,r.Z)(p,2),v=Z[0],j=Z[1],f=(0,c.useState)(!1),g=(0,r.Z)(f,2),b=(g[0],g[1]),C=(0,s.I0)(),w={productid:o,countryzone_id:i,price:h};return(0,K.jsx)(m.Z,{InputProps:{startAdornment:(0,K.jsx)(I.Z,{position:"start",children:e}),endAdornment:(0,K.jsx)(I.Z,{position:"end",children:l?(0,K.jsx)(S.Z,{loading:v,onClick:function(){return j(!0),void H.Z.put("".concat(M.QP.productReq,"/productalbumcopyprice/").concat(null===d||void 0===d?void 0:d.id),w).then((function(n){j(!1),C((0,U.lJ)())})).catch((function(n){j(!1),b(!0)}))},color:"warning",children:(0,K.jsx)(Y.Z,{src:"/assets/icons/product/edit.svg",sx:{width:18,height:18}})}):(0,K.jsx)(S.Z,{onClick:function(){return j(!0),void H.Z.post("".concat(M.QP.productReq,"/productalbumcopyprice/"),w).then((function(n){C((0,U.lJ)()),j(!1)})).catch((function(n){j(!1),b(!0)}))},color:"success",children:(0,K.jsx)(Y.Z,{src:"/assets/icons/product/plus.svg",sx:{width:18,height:18}})})})},value:h,onChange:function(n){return x(n.target.value)}})},X=function(n){var e,o=n.data,i=(n.setAddOrientationModelShow,(0,c.useState)(!1)),t=(0,r.Z)(i,2),d=t[0],l=t[1],a=(0,s.I0)();return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(z.Z,{sx:{margin:2,backgroundColor:y.Z},elevation:3,children:[(0,K.jsx)(k.Z,{"aria-controls":"panel1-content",id:"panel1-header",children:(0,K.jsxs)(v.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",width:"100%",children:[(0,K.jsx)(g.Z,{color:"text.primary",variant:"h6",children:null===o||void 0===o||null===(e=o.orientation)||void 0===e?void 0:e.name}),(0,K.jsxs)(v.Z,{spacing:3,direction:"row",children:[(0,K.jsx)(x.Z,{variant:"contained",onClick:function(){return l(!0)},children:"Add Size"}),(0,K.jsx)(S.Z,{onClick:function(){H.Z.delete("".concat(M.QP.productReq,"/productorientation/").concat(o.id)).then((function(n){a((0,U.lJ)())}))},children:(0,K.jsx)(u.Z,{color:"error"})})]})]})}),(0,K.jsx)(P.Z,{children:(0,K.jsx)(_.Z,{children:null===o||void 0===o?void 0:o.size.map((function(n,e){return(0,K.jsx)(nn,{data:n})}))})})]}),(0,K.jsx)(ln,{show:d,onClose:function(){return l(!1)},productOrientationId:o.id})]})},nn=function(n){var e,o=n.data;console.log(o);var i=(0,c.useState)(!1),t=(0,r.Z)(i,2),d=t[0],l=t[1],h=(0,c.useState)(!1),p=(0,r.Z)(h,2),Z=p[0],j=p[1],f=(0,c.useState)(!1),m=(0,r.Z)(f,2),b=m[0],C=m[1],I=(0,c.useState)(!1),R=(0,r.Z)(I,2),q=R[0],A=R[1],W=(0,s.I0)();return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(z.Z,{sx:{marginY:0,width:"100%",backgroundColor:y.Z,boxShadow:"none"},elevation:3,children:[(0,K.jsx)(k.Z,{sx:{boxShadow:"none",backgroundColor:"#ddd"},expandIcon:(0,K.jsx)(a.Z,{}),"aria-controls":"panel1-content",id:"panel1-header",children:(0,K.jsx)(v.Z,{children:(0,K.jsxs)(g.Z,{color:"text.primary",variant:"subtitle1",sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:["Size : ",null===o||void 0===o||null===(e=o.size)||void 0===e?void 0:e.name,(0,K.jsx)(S.Z,{onClick:function(){H.Z.delete("".concat(M.QP.productReq,"/productsize/").concat(o.id)).then((function(n){W((0,U.lJ)())}))},children:(0,K.jsx)(u.Z,{color:"error"})})]})})}),(0,K.jsxs)(P.Z,{sx:{boxShadow:"none"},children:[(0,K.jsxs)(z.Z,{sx:{backgroundColor:y.Z,boxShadow:"none",border:"1px solid #ddd",marginTop:"2em",borderRadius:"5px"},elevation:3,children:[(0,K.jsx)(k.Z,{sx:{boxShadow:"none",display:"block"},"aria-controls":"panel1-content",id:"panel1-header",children:(0,K.jsx)(w.Z,{title:(0,K.jsxs)(v.Z,{direction:"row",alignItems:"center",spacing:3,justifyContent:"space-between",sx:{width:"100%",padding:0},children:[(0,K.jsx)(g.Z,{variant:"h6",children:"Paper Sheet"}),(0,K.jsx)(x.Z,{variant:"contained",onClick:function(){return l(!0)},children:"Add Paper Sheet"})]}),sx:{display:"block",padding:"0px"}})}),(0,K.jsx)(P.Z,{children:(0,K.jsx)(_.Z,{children:null===o||void 0===o?void 0:o.sheet.map((function(n,e){return(0,K.jsx)(en,{data:n})}))})})]}),(0,K.jsxs)(z.Z,{sx:{marginY:5,backgroundColor:y.Z,boxShadow:"none",border:"1px solid #ddd",borderRadius:"5px"},elevation:3,children:[(0,K.jsx)(k.Z,{"aria-controls":"panel1-content",id:"panel1-header",children:(0,K.jsx)(w.Z,{title:(0,K.jsxs)(v.Z,{direction:"row",alignItems:"center",spacing:3,justifyContent:"space-between",sx:{width:"100%",padding:0},children:[(0,K.jsx)(g.Z,{variant:"h6",children:"Paper Type"}),(0,K.jsx)(x.Z,{variant:"contained",onClick:function(){return j(!0)},children:"Add Paper Type"})]})})}),(0,K.jsx)(P.Z,{children:(0,K.jsx)(_.Z,{children:null===o||void 0===o?void 0:o.papers.map((function(n,e){return(0,K.jsx)(rn,{data:n})}))})})]}),(0,K.jsxs)(z.Z,{sx:{marginY:5,backgroundColor:y.Z,boxShadow:"none",border:"1px solid #ddd",borderRadius:"5px"},elevation:3,children:[(0,K.jsx)(k.Z,{"aria-controls":"panel1-content",id:"panel1-header",children:(0,K.jsx)(w.Z,{title:(0,K.jsxs)(v.Z,{direction:"row",alignItems:"center",spacing:3,justifyContent:"space-between",sx:{width:"100%",padding:0},children:[(0,K.jsx)(g.Z,{variant:"h6",children:"Product Cover"}),(0,K.jsx)(x.Z,{variant:"contained",onClick:function(){return C(!0)},children:"Add Cover"})]})})}),(0,K.jsx)(P.Z,{children:(0,K.jsx)(_.Z,{children:null===o||void 0===o?void 0:o.cover.map((function(n,e){return(0,K.jsx)(cn,{data:n})}))})})]}),(0,K.jsxs)(z.Z,{sx:{marginY:5,backgroundColor:y.Z,boxShadow:"none",border:"1px solid #ddd",borderRadius:"5px"},elevation:3,children:[(0,K.jsx)(k.Z,{"aria-controls":"panel1-content",id:"panel1-header",children:(0,K.jsx)(w.Z,{title:(0,K.jsxs)(v.Z,{direction:"row",alignItems:"center",spacing:3,justifyContent:"space-between",sx:{width:"100%",padding:0},children:[(0,K.jsx)(g.Z,{variant:"h6",children:"Product Box & Sleeve"}),(0,K.jsx)(x.Z,{variant:"contained",onClick:function(){return A(!0)},children:"Add Box & Sleeve"})]})})}),(0,K.jsx)(P.Z,{children:(0,K.jsx)(_.Z,{children:null===o||void 0===o?void 0:o.boxsleeve.map((function(n,e){return(0,K.jsx)(sn,{data:n})}))})})]})]})]}),(0,K.jsx)(an,{sizeId:o.id,show:d,onClose:function(){return l(!1)}}),(0,K.jsx)(un,{sizeId:o.id,show:Z,onClose:function(){return j(!1)}}),(0,K.jsx)(hn,{sizeId:o.id,show:b,onClose:function(){return C(!1)}}),(0,K.jsx)(xn,{sizeId:o.id,show:q,onClose:function(){return A(!1)}})]})},en=function(n){var e=n.data,o=(0,s.v9)((function(n){return n.resource})).countryzone;console.log("data"),console.log(e);var i=(0,s.I0)();return(0,K.jsx)(Z.ZP,{container:!0,children:(0,K.jsxs)(v.Z,{spacing:3,sx:{marginTop:3,alignItems:"center"},direction:"row",children:[(0,K.jsx)(S.Z,{onClick:function(){H.Z.delete("".concat(M.QP.productReq,"/sheet/").concat(e.id)).then((function(){i((0,U.lJ)())}))},children:(0,K.jsx)(u.Z,{sx:{color:"#ff0000"}})}),(0,K.jsx)(Z.ZP,{item:!0,sm:"3",xs:"12",lg:"3",children:(0,K.jsx)(m.Z,{fullWidth:!0,value:e.sheet.name,label:"Paper Sheet",disabled:!0})}),o.map((function(n,o){var i,t;return(0,K.jsx)(on,{zoneId:n.id,parentId:e.id,price:(null===(i=e.sheetprice.find((function(e){return Number(e.countryzone_id)===Number(n.id)})))||void 0===i?void 0:i.price)||0,productResourcePriceId:(null===(t=e.sheetprice.find((function(e){return Number(e.countryzone_id)===Number(n.id)})))||void 0===t?void 0:t.id)||null,label:"Price in ".concat(n.zonename),sign:n.currency_sign,url:"productshetprice"},o)}))]})})},on=function(n){var e=n.price,o=n.label,i=n.sign,t=n.zoneId,d=n.productResourcePriceId,l=n.parentId,a=n.url,u=(0,c.useState)(e),h=(0,r.Z)(u,2),x=h[0],p=h[1],v=(0,c.useState)(!1),j=(0,r.Z)(v,2),f=j[0],g=j[1],b=(0,c.useState)(!1),C=(0,r.Z)(b,2),w=C[0],z=C[1],y=(0,c.useState)(),k=(0,r.Z)(y,2),P=(k[0],k[1],(0,V.K$)().themeStretch,(0,s.I0)()),_={parentid:l,countryzone_id:t,price:x};return(0,K.jsx)(Z.ZP,{item:!0,sm:"3",xs:"12",lg:"3",children:(0,K.jsx)(m.Z,{InputProps:{startAdornment:(0,K.jsx)(I.Z,{position:"start",children:i}),endAdornment:(0,K.jsx)(I.Z,{position:"end",children:e?(0,K.jsx)(S.Z,{disabled:f,onClick:function(){return g(!0),void H.Z.put("".concat(M.QP.productReq,"/").concat(a,"/").concat(d),_).then((function(n){g(!1),P((0,U.lJ)())})).catch((function(n){g(!1),z(!0)}))},color:"warning",children:f?(0,K.jsx)(R.Z,{size:25}):(0,K.jsx)(Y.Z,{src:"/assets/icons/product/edit.svg",sx:{width:18,height:18}})}):(0,K.jsx)(S.Z,{disabled:f,onClick:function(){return g(!0),void H.Z.post("".concat(M.QP.productReq,"/").concat(a,"/"),_).then((function(n){P((0,U.lJ)()),g(!1)})).catch((function(n){g(!1),z(!0)}))},color:"success",children:f?(0,K.jsx)(R.Z,{size:25}):(0,K.jsx)(Y.Z,{src:"/assets/icons/product/edit.svg",sx:{width:18,height:18}})})})},fullWidth:!0,value:x,error:w,onChange:function(n){return p(n.target.value)},type:"number",label:o})})},tn=function(n){var e=n.sign,o=n.productId,i=n.zoneId,t=n.pricrData,d=null===t||void 0===t?void 0:t.find((function(n){return n.product_id===o&&n.countryzone_id===i})),l=(null===d||void 0===d?void 0:d.price)||0;console.log(l);var a=(0,c.useState)(l),u=(0,r.Z)(a,2),h=u[0],x=u[1],p=(0,c.useState)(!1),Z=(0,r.Z)(p,2),v=Z[0],j=Z[1],f=(0,c.useState)(!1),g=(0,r.Z)(f,2),b=(g[0],g[1]),C=(0,s.I0)(),w={productid:o,countryzone_id:i,price:h};return(0,K.jsx)(m.Z,{InputProps:{startAdornment:(0,K.jsx)(I.Z,{position:"start",children:e}),endAdornment:(0,K.jsx)(I.Z,{position:"end",children:l?(0,K.jsx)(S.Z,{loading:v,onClick:function(){return j(!0),void H.Z.put("".concat(M.QP.productReq,"/printigprice/").concat(null===d||void 0===d?void 0:d.id),w).then((function(n){j(!1),C((0,U.lJ)())})).catch((function(n){j(!1),b(!0)}))},color:"warning",children:(0,K.jsx)(Y.Z,{src:"/assets/icons/product/edit.svg",sx:{width:18,height:18}})}):(0,K.jsx)(S.Z,{onClick:function(){return j(!0),void H.Z.post("".concat(M.QP.productReq,"/printigprice/"),w).then((function(n){C((0,U.lJ)()),j(!1)})).catch((function(n){j(!1),b(!0)}))},color:"success",children:(0,K.jsx)(Y.Z,{src:"/assets/icons/product/plus.svg",sx:{width:18,height:18}})})})},value:h,onChange:function(n){return x(n.target.value)}})},rn=function(n){var e=n.data;(0,s.v9)((function(n){return n.resource})).countryzone;console.log("data"),console.log(e);var o=(0,s.I0)();return(0,K.jsx)(Z.ZP,{container:!0,children:(0,K.jsxs)(v.Z,{spacing:3,sx:{marginTop:3},direction:{lg:"row",sm:"row",xs:"column",alignItems:"center"},children:[(0,K.jsx)(S.Z,{onClick:function(){H.Z.delete("".concat(M.QP.productReq,"/productpaper/").concat(e.id)).then((function(){o((0,U.lJ)())}))},children:(0,K.jsx)(u.Z,{sx:{color:"#ff0000"}})}),(0,K.jsx)(Z.ZP,{item:!0,sm:"6",xs:"12",lg:"6",children:(0,K.jsx)(m.Z,{fullWidth:!0,value:e.paper.name,label:"Paper Type",disabled:!0})}),(0,K.jsx)(Z.ZP,{item:!0,sm:"3",xs:"12",lg:"3",children:(0,K.jsx)(m.Z,{value:e.paper.value,InputProps:{endAdornment:(0,K.jsx)(I.Z,{position:"start",children:"%"})},disabled:!0})})]})})},cn=function(n){var e=n.data,o=(0,s.v9)((function(n){return n.resource})).countryzone;console.log("data"),console.log(e);var i=(0,s.I0)();return(0,K.jsx)(Z.ZP,{container:!0,children:(0,K.jsxs)(v.Z,{spacing:3,sx:{marginTop:3,alignItems:"center"},direction:"row",children:[(0,K.jsx)(S.Z,{onClick:function(){H.Z.delete("".concat(M.QP.productReq,"/productcover/").concat(e.id)).then((function(){i((0,U.lJ)())}))},children:(0,K.jsx)(u.Z,{sx:{color:"#ff0000"}})}),(0,K.jsx)(Z.ZP,{item:!0,sm:"3",xs:"12",lg:"3",children:(0,K.jsx)(m.Z,{fullWidth:!0,value:e.cover.name,label:"Cover Name",disabled:!0})}),o.map((function(n,o){var i,t;return(0,K.jsx)(on,{zoneId:n.id,parentId:e.id,price:(null===(i=e.coverprice.find((function(e){return Number(e.countryzone_id)===Number(n.id)})))||void 0===i?void 0:i.price)||0,productResourcePriceId:(null===(t=e.coverprice.find((function(e){return Number(e.countryzone_id)===Number(n.id)})))||void 0===t?void 0:t.id)||null,label:"Price in ".concat(n.zonename),sign:n.currency_sign,url:"productcoverprice"},o)}))]})})},sn=function(n){var e=n.data,o=(0,s.v9)((function(n){return n.resource})).countryzone;console.log("data"),console.log(e);var i=(0,s.I0)();return(0,K.jsx)(Z.ZP,{container:!0,children:(0,K.jsxs)(v.Z,{spacing:3,sx:{marginTop:3,alignItems:"center"},direction:"row",children:[(0,K.jsx)(S.Z,{onClick:function(){H.Z.delete("".concat(M.QP.productReq,"/productboxsleeve/").concat(e.id)).then((function(){i((0,U.lJ)())}))},children:(0,K.jsx)(u.Z,{sx:{color:"#ff0000"}})}),(0,K.jsx)(Z.ZP,{item:!0,sm:"3",xs:"12",lg:"3",children:(0,K.jsx)(m.Z,{fullWidth:!0,value:e.boxsleeve.name,label:"Box & Sleeve Type",disabled:!0})}),o.map((function(n,o){var i,t;return(0,K.jsx)(on,{zoneId:n.id,parentId:e.id,price:(null===(i=e.boxsleeveprice.find((function(e){return Number(e.countryzone_id)===Number(n.id)})))||void 0===i?void 0:i.price)||0,productResourcePriceId:(null===(t=e.boxsleeveprice.find((function(e){return Number(e.countryzone_id)===Number(n.id)})))||void 0===t?void 0:t.id)||null,label:"Price in ".concat(n.zonename),sign:n.currency_sign,url:"productboxsleeveprice"},o)}))]})})},dn=function(n){var e=n.show,o=n.onClose,i=n.productId,d=(0,s.v9)((function(n){return n.resource})).orientation,l=d&&(null===d||void 0===d?void 0:d.map((function(n){return{id:n.id,label:n.name}})))||[],a=c.useState(),u=(0,r.Z)(a,2),h=u[0],p=u[1],Z=c.useState(""),v=(0,r.Z)(Z,2),j=v[0],f=v[1],g=(0,s.I0)(),b={product_id:i,orientation_id:null===h||void 0===h?void 0:h.id};return(0,K.jsxs)(q.Z,{open:e,onClose:o,className:"test",children:[(0,K.jsx)(A.Z,{id:"alert-dialog-title",children:"Add Orientation"}),(0,K.jsx)(W.Z,{children:(0,K.jsx)(J.Z,{value:h,onChange:function(n,e){console.log(e),p(e)},inputValue:j,onInputChange:function(n,e){console.log(e),f(e)},id:"controllable-states-demo",options:l||[],sx:{width:300},renderInput:function(n){return(0,K.jsx)(m.Z,(0,t.Z)((0,t.Z)({},n),{},{label:"Select Orientation",fullWidth:!0}))}})}),(0,K.jsxs)(Q.Z,{children:[(0,K.jsx)(x.Z,{onClick:function(){H.Z.post("".concat(M.QP.productReq,"/productorientation/"),b).then((function(n){g((0,U.lJ)()),o()}))},children:"Save"}),(0,K.jsx)(x.Z,{onClick:o,color:"error",autoFocus:!0,children:"Cancel"})]})]})},ln=function(n){var e=n.show,o=n.onClose,i=n.productOrientationId,d=(0,s.v9)((function(n){return n.resource})).size;console.log(i);var l=(0,s.I0)(),a=d&&(null===d||void 0===d?void 0:d.map((function(n){return{id:n.id,label:n.name}})))||[],u=c.useState(),h=(0,r.Z)(u,2),p=h[0],Z=h[1],v=c.useState(""),j=(0,r.Z)(v,2),f=j[0],g=j[1],b={productorientation_id:i,size_id:null===p||void 0===p?void 0:p.id};return(0,K.jsxs)(q.Z,{open:e,onClose:o,children:[(0,K.jsx)(A.Z,{id:"alert-dialog-title",children:"Add Size"}),(0,K.jsx)(W.Z,{children:(0,K.jsx)(J.Z,{value:p,onChange:function(n,e){console.log(e),Z(e)},inputValue:f,onInputChange:function(n,e){console.log(e),g(e)},id:"controllable-states-demo",options:a||[],sx:{width:300},renderInput:function(n){return(0,K.jsx)(m.Z,(0,t.Z)((0,t.Z)({},n),{},{label:"Select Size",fullWidth:!0}))}})}),(0,K.jsxs)(Q.Z,{children:[(0,K.jsx)(x.Z,{onClick:function(){H.Z.post("".concat(M.QP.productReq,"/productsize/"),b).then((function(n){l((0,U.lJ)()),o()}))},children:"Save"}),(0,K.jsx)(x.Z,{onClick:o,color:"error",autoFocus:!0,children:"Cancel"})]})]})},an=function(n){var e=n.show,o=n.onClose,i=n.sizeId,d=(0,s.v9)((function(n){return n.resource})).sheet,l=(0,s.I0)(),a=d&&(null===d||void 0===d?void 0:d.map((function(n){return{id:n.id,label:n.name}})))||[],u=c.useState(),h=(0,r.Z)(u,2),p=h[0],Z=h[1],v=c.useState(""),j=(0,r.Z)(v,2),f=j[0],g=j[1],b={product_size_id:i,sheet_id:null===p||void 0===p?void 0:p.id};return(0,K.jsxs)(q.Z,{open:e,onClose:o,children:[(0,K.jsx)(A.Z,{id:"alert-dialog-title",children:"Add Product Sheet"}),(0,K.jsx)(W.Z,{children:(0,K.jsx)(J.Z,{value:p,onChange:function(n,e){console.log(e),Z(e)},inputValue:f,onInputChange:function(n,e){console.log(e),g(e)},id:"controllable-states-demo",options:a||[],sx:{width:300},renderInput:function(n){return(0,K.jsx)(m.Z,(0,t.Z)((0,t.Z)({},n),{},{label:"Select Size",fullWidth:!0}))}})}),(0,K.jsxs)(Q.Z,{children:[(0,K.jsx)(x.Z,{onClick:function(){H.Z.post("".concat(M.QP.productReq,"/sheet/"),b).then((function(n){l((0,U.lJ)()),o()}))},children:"Save"}),(0,K.jsx)(x.Z,{onClick:o,color:"error",autoFocus:!0,children:"Cancel"})]})]})},un=function(n){var e=n.show,o=n.onClose,i=n.sizeId,d=(0,s.v9)((function(n){return n.resource})).paper,l=(0,s.I0)(),a=d&&(null===d||void 0===d?void 0:d.map((function(n){return{id:n.id,label:n.name}})))||[],u=c.useState(),h=(0,r.Z)(u,2),p=h[0],Z=h[1],v=c.useState(""),j=(0,r.Z)(v,2),f=j[0],g=j[1],b={product_size_id:i,paper_id:null===p||void 0===p?void 0:p.id};return(0,K.jsxs)(q.Z,{open:e,onClose:o,children:[(0,K.jsx)(A.Z,{id:"alert-dialog-title",children:"Add Size"}),(0,K.jsx)(W.Z,{children:(0,K.jsx)(J.Z,{value:p,onChange:function(n,e){console.log(e),Z(e)},inputValue:f,onInputChange:function(n,e){console.log(e),g(e)},id:"controllable-states-demo",options:a||[],sx:{width:300},renderInput:function(n){return(0,K.jsx)(m.Z,(0,t.Z)((0,t.Z)({},n),{},{label:"Select Size",fullWidth:!0}))}})}),(0,K.jsxs)(Q.Z,{children:[(0,K.jsx)(x.Z,{onClick:function(){H.Z.post("".concat(M.QP.productReq,"/productpaper/"),b).then((function(n){l((0,U.lJ)()),o()}))},children:"Save"}),(0,K.jsx)(x.Z,{onClick:o,color:"error",autoFocus:!0,children:"Cancel"})]})]})},hn=function(n){var e=n.show,o=n.onClose,i=n.sizeId,d=(0,s.v9)((function(n){return n.resource})).cover,l=(0,s.I0)(),a=d&&(null===d||void 0===d?void 0:d.map((function(n){return{id:n.id,label:n.name}})))||[],u=c.useState(),h=(0,r.Z)(u,2),p=h[0],Z=h[1],v=c.useState(""),j=(0,r.Z)(v,2),f=j[0],g=j[1],b={product_size_id:i,cover_id:null===p||void 0===p?void 0:p.id};return(0,K.jsxs)(q.Z,{open:e,onClose:o,children:[(0,K.jsx)(A.Z,{id:"alert-dialog-title",children:"Add Size"}),(0,K.jsx)(W.Z,{children:(0,K.jsx)(J.Z,{value:p,onChange:function(n,e){console.log(e),Z(e)},inputValue:f,onInputChange:function(n,e){console.log(e),g(e)},id:"controllable-states-demo",options:a||[],sx:{width:300},renderInput:function(n){return(0,K.jsx)(m.Z,(0,t.Z)((0,t.Z)({},n),{},{label:"Select Size",fullWidth:!0}))}})}),(0,K.jsxs)(Q.Z,{children:[(0,K.jsx)(x.Z,{onClick:function(){H.Z.post("".concat(M.QP.productReq,"/productcover/"),b).then((function(n){l((0,U.lJ)()),o()}))},children:"Save"}),(0,K.jsx)(x.Z,{onClick:o,color:"error",autoFocus:!0,children:"Cancel"})]})]})},xn=function(n){var e=n.show,o=n.onClose,i=n.sizeId,d=(0,s.v9)((function(n){return n.resource})).boxsleev,l=(0,s.I0)(),a=d&&(null===d||void 0===d?void 0:d.map((function(n){return{id:n.id,label:n.name}})))||[],u=c.useState(),h=(0,r.Z)(u,2),p=h[0],Z=h[1],v=c.useState(""),j=(0,r.Z)(v,2),f=j[0],g=j[1],b={product_size_id:i,boxsleeve_id:null===p||void 0===p?void 0:p.id};return(0,K.jsxs)(q.Z,{open:e,onClose:o,children:[(0,K.jsx)(A.Z,{id:"alert-dialog-title",children:"Add Size"}),(0,K.jsx)(W.Z,{children:(0,K.jsx)(J.Z,{value:p,onChange:function(n,e){console.log(e),Z(e)},inputValue:f,onInputChange:function(n,e){console.log(e),g(e)},id:"controllable-states-demo",options:a||[],sx:{width:300},renderInput:function(n){return(0,K.jsx)(m.Z,(0,t.Z)((0,t.Z)({},n),{},{label:"Select Size",fullWidth:!0}))}})}),(0,K.jsxs)(Q.Z,{children:[(0,K.jsx)(x.Z,{onClick:function(){H.Z.post("".concat(M.QP.productReq,"/productboxsleeve/"),b).then((function(n){l((0,U.lJ)()),o()}))},children:"Save"}),(0,K.jsx)(x.Z,{onClick:o,color:"error",autoFocus:!0,children:"Cancel"})]})]})},pn=(0,F.ZP)("div")((function(n){var e=n.theme;return{outline:"none",cursor:"pointer",overflow:"hidden",position:"relative",height:300,width:550,padding:e.spacing(5),borderRadius:e.shape.borderRadius,transition:e.transitions.create("padding"),backgroundColor:e.palette.background.neutral,border:"1px dashed ".concat((0,D.Fq)(e.palette.grey[500],.32)),"&:hover":{opacity:.72}}}));function Zn(n){var e=n.file;if(console.log(typeof e),console.log(e),!e)return null;var o="string"===typeof e?e:e.preview;return(0,K.jsx)(jn,{alt:"file preview",src:o,sx:{top:8,left:8,zIndex:8,borderRadius:1,position:"absolute",width:"calc(100% - 16px)",height:"calc(100% - 16px)"}})}function vn(){return{"4/3":"calc(100% / 4 * 3)","3/4":"calc(100% / 3 * 4)","6/4":"calc(100% / 6 * 4)","4/6":"calc(100% / 4 * 6)","16/9":"calc(100% / 16 * 9)","9/16":"calc(100% / 9 * 16)","21/9":"calc(100% / 21 * 9)","9/21":"calc(100% / 9 * 21)","1/1":"100%"}[arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1/1"]}var jn=(0,c.forwardRef)((function(n,e){var o=n.ratio,r=n.disabledEffect,c=void 0!==r&&r,s=n.effect,d=void 0===s?"blur":s,l=n.sx,a=(0,i.Z)(n,$),u=(0,K.jsx)(b.Z,(0,t.Z)({component:O.LazyLoadImage,wrapperClassName:"wrapper",effect:c?void 0:d,placeholderSrc:c?"/assets/transparent.png":"/assets/placeholder.svg",sx:{width:1,height:1,objectFit:"cover"}},a));return o?(0,K.jsx)(b.Z,{ref:e,component:"span",sx:(0,t.Z)({width:1,lineHeight:1,display:"block",overflow:"hidden",position:"relative",pt:vn(o),"& .wrapper":{top:0,left:0,width:1,height:1,position:"absolute",backgroundSize:"cover !important"}},l),children:u}):(0,K.jsx)(b.Z,{ref:e,component:"span",sx:(0,t.Z)({lineHeight:1,display:"block",overflow:"hidden",position:"relative","& .wrapper":{width:1,height:1,backgroundSize:"cover !important"}},l),children:u})}))}}]);
//# sourceMappingURL=687.3b1e15a2.chunk.js.map