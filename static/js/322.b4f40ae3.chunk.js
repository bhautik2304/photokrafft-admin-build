"use strict";(self.webpackChunkphotokrafft_com=self.webpackChunkphotokrafft_com||[]).push([[322],{2417:function(e,n,i){i.d(n,{Z:function(){return v}});var l=i(1413),t=i(45987),r=i(64554),o=i(53767),s=i(20890),d=i(93517),a=i(50533),c=i(11087),u=i(80184);function m(e){var n=e.link,i=e.activeLast,t=e.disabled,o=n.name,s=n.href,d=n.icon,m=(0,l.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},t&&!i&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),x=(0,u.jsxs)(u.Fragment,{children:[d&&(0,u.jsx)(r.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:d}),o]});return s?(0,u.jsx)(a.Z,{component:c.rU,to:s,sx:m,children:x}):(0,u.jsxs)(r.Z,{sx:m,children:[" ",x," "]})}var x=["links","action","heading","moreLink","activeLast","sx"];function v(e){var n=e.links,i=e.action,c=e.heading,v=e.moreLink,p=e.activeLast,Z=e.sx,j=(0,t.Z)(e,x),f=n[n.length-1].name;return(0,u.jsxs)(r.Z,{sx:(0,l.Z)({mb:5},Z),children:[(0,u.jsxs)(o.Z,{direction:"row",alignItems:"center",children:[(0,u.jsxs)(r.Z,{sx:{flexGrow:1},children:[c&&(0,u.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:c}),!!n.length&&(0,u.jsx)(d.Z,(0,l.Z)((0,l.Z)({separator:(0,u.jsx)(h,{})},j),{},{children:n.map((function(e){return(0,u.jsx)(m,{link:e,activeLast:p,disabled:e.name===f},e.name||"")}))}))]}),i&&(0,u.jsxs)(r.Z,{sx:{flexShrink:0},children:[" ",i," "]})]}),!!v&&(0,u.jsx)(r.Z,{sx:{mt:2},children:v.map((function(e){return(0,u.jsx)(a.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function h(){return(0,u.jsx)(r.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},73379:function(e,n,i){i.d(n,{Z:function(){return l.Z}});var l=i(2417)},16322:function(e,n,i){i.r(n),i.d(n,{default:function(){return U}});var l=i(29439),t=i(72791),r=i(6907),o=i(57689),s=i(91614),d=i(59434),a=i(38072),c=(i(14839),i(4809)),u=i(73379),m=(i(74165),i(15861),i(8007),i(57621)),x=(i(99352),i(1413)),v=i(39709),h=i(64554),p=i(20890),Z=i(53767),j=i(94721),f=i(61889),g=i(48550),b=i(63466),y=i(56488),P=i(14482),S=i(80184);function z(e){var n,i,r,o,s,a,c,u,m,z,I,w,k,_,W,C,L,B,A,D,N,O=e.data,R=(0,t.useState)({discount:0,discountAmount:0,orderValue:0}),E=(0,l.Z)(R,2),T=E[0],V=E[1],F=(0,t.useState)(!1),M=(0,l.Z)(F,2),J=M[0],q=M[1],G=(0,d.I0)();(0,t.useEffect)((function(){V((0,x.Z)((0,x.Z)({},T),{},{discount:null===O||void 0===O?void 0:O.discount,discountAmount:Number(null===O||void 0===O?void 0:O.order_total)*Number(null===O||void 0===O?void 0:O.discount)/100,orderValue:null===O||void 0===O?void 0:O.order_total}))}),[O]);var Q=function(e,n){return e*n/100+e},U=function(e,n){return"".concat(e," ").concat(n)};return console.log(T),(0,S.jsxs)(h.Z,{sx:{p:4},children:[(0,S.jsx)(p.Z,{variant:"h6",sx:{color:"text.disabled",mb:3},children:"Details:"}),(0,S.jsx)(Z.Z,{divider:(0,S.jsx)(j.Z,{flexItem:!0,sx:{borderStyle:"dashed"}}),spacing:3,children:(0,S.jsxs)(Z.Z,{alignItems:"flex-end",spacing:1.5,children:[(0,S.jsx)(Z.Z,{direction:{xs:"column",md:"row"},spacing:2,sx:{width:1},children:(0,S.jsxs)(f.ZP,{container:!0,spacing:2,children:[(0,S.jsx)(f.ZP,{item:!0,xs:12,md:5,children:(0,S.jsx)(g.Z,{size:"small",label:"Porduct Name",value:null===O||void 0===O||null===(n=O.product)||void 0===n?void 0:n.name,InputLabelProps:{shrink:!0,style:{fontSize:".875rem"}},fullWidth:!0,sx:{marginBottom:"1em"}})}),(0,S.jsx)(f.ZP,{item:!0,xs:12,md:2,children:(0,S.jsx)(g.Z,{size:"small",type:"number",label:"Quantity",value:"1",InputLabelProps:{shrink:!0,style:{fontSize:".875rem"}},fullWidth:!0,sx:{marginBottom:"1em"}})}),(0,S.jsx)(f.ZP,{item:!0,xs:12,md:3,children:(0,S.jsx)(g.Z,{size:"small",type:"number",label:"Price",value:"0",InputLabelProps:{style:{fontSize:".875rem"}},InputProps:{startAdornment:(0,S.jsx)(b.Z,{position:"start",children:null===O||void 0===O||null===(i=O.countryzone)||void 0===i?void 0:i.currency_sign})},fullWidth:!0})}),(0,S.jsx)(f.ZP,{item:!0,xs:12,md:2,children:(0,S.jsx)(g.Z,{disabled:!0,size:"small",label:"Total",value:"0",InputLabelProps:{style:{fontSize:".875rem"}},InputProps:{startAdornment:(0,S.jsx)(b.Z,{position:"start",children:null===O||void 0===O||null===(r=O.countryzone)||void 0===r?void 0:r.currency_sign})},fullWidth:!0})})]})}),(0,S.jsx)(Z.Z,{direction:{xs:"column",md:"row"},spacing:2,sx:{width:1},children:(0,S.jsxs)(f.ZP,{container:!0,spacing:2,children:[(0,S.jsx)(f.ZP,{item:!0,xs:12,md:5,children:(0,S.jsx)(g.Z,{size:"small",label:"Paper Sheets & Paper Type",value:"".concat(null===O||void 0===O||null===(o=O.productsheet)||void 0===o?void 0:o.name," + ( ").concat(null===O||void 0===O||null===(s=O.productpaper)||void 0===s?void 0:s.name," ").concat(null===O||void 0===O||null===(a=O.productpaper)||void 0===a?void 0:a.value,"%)"),InputLabelProps:{shrink:!0,style:{fontSize:".875rem"}},fullWidth:!0,sx:{marginBottom:"1em"}})}),(0,S.jsx)(f.ZP,{item:!0,xs:12,md:2,children:(0,S.jsx)(g.Z,{size:"small",type:"number",label:"Page Quantity",value:null===O||void 0===O?void 0:O.page_qty,InputLabelProps:{shrink:!0,style:{fontSize:".875rem"}},fullWidth:!0,sx:{marginBottom:"1em"}})}),(0,S.jsx)(f.ZP,{item:!0,xs:12,md:3,children:(0,S.jsx)(g.Z,{size:"small",label:"Price",InputLabelProps:{style:{fontSize:".875rem"}},value:"".concat(null===O||void 0===O?void 0:O.sheetValue," + ").concat(null===O||void 0===O||null===(c=O.productpaper)||void 0===c?void 0:c.value,"% ( ").concat(Q(null===O||void 0===O?void 0:O.sheetValue,null===O||void 0===O||null===(u=O.productpaper)||void 0===u?void 0:u.value)," )"),InputProps:{startAdornment:(0,S.jsx)(b.Z,{position:"start",children:null===O||void 0===O||null===(m=O.countryzone)||void 0===m?void 0:m.currency_sign})},fullWidth:!0})}),(0,S.jsx)(f.ZP,{item:!0,xs:12,md:2,children:(0,S.jsx)(g.Z,{disabled:!0,size:"small",label:"Total",InputLabelProps:{style:{fontSize:".875rem"}},value:Number(Q(null===O||void 0===O?void 0:O.sheetValue,null===O||void 0===O||null===(z=O.productpaper)||void 0===z?void 0:z.value))*Number(null===O||void 0===O?void 0:O.page_qty),InputProps:{startAdornment:(0,S.jsx)(b.Z,{position:"start",children:null===O||void 0===O||null===(I=O.countryzone)||void 0===I?void 0:I.currency_sign})},fullWidth:!0})})]})}),(0,S.jsx)(Z.Z,{direction:{xs:"column",md:"row"},spacing:2,sx:{width:1},children:(0,S.jsxs)(f.ZP,{container:!0,spacing:2,children:[(0,S.jsx)(f.ZP,{item:!0,xs:12,md:5,children:(0,S.jsx)(g.Z,{size:"small",label:"Cover",value:"".concat(null===O||void 0===O||null===(w=O.productcover)||void 0===w?void 0:w.name),InputLabelProps:{shrink:!0,style:{fontSize:".875rem"}},fullWidth:!0,sx:{marginBottom:"1em"}})}),(0,S.jsx)(f.ZP,{item:!0,xs:12,md:2,children:(0,S.jsx)(g.Z,{size:"small",type:"number",label:"Quantity",value:1,InputLabelProps:{shrink:!0,style:{fontSize:".875rem"}},fullWidth:!0,sx:{marginBottom:"1em"}})}),(0,S.jsx)(f.ZP,{item:!0,xs:12,md:3,children:(0,S.jsx)(g.Z,{size:"small",type:"number",label:"Price",InputLabelProps:{style:{fontSize:".875rem"}},value:null===O||void 0===O?void 0:O.coverValue,InputProps:{startAdornment:(0,S.jsx)(b.Z,{position:"start",children:null===O||void 0===O||null===(k=O.countryzone)||void 0===k?void 0:k.currency_sign})},fullWidth:!0})}),(0,S.jsx)(f.ZP,{item:!0,xs:12,md:2,children:(0,S.jsx)(g.Z,{disabled:!0,size:"small",label:"Total",InputLabelProps:{style:{fontSize:".875rem"}},value:null===O||void 0===O?void 0:O.coverValue,InputProps:{startAdornment:(0,S.jsx)(b.Z,{position:"start",children:null===O||void 0===O||null===(_=O.countryzone)||void 0===_?void 0:_.currency_sign})},fullWidth:!0})})]})}),(0,S.jsx)(Z.Z,{direction:{xs:"column",md:"row"},spacing:2,sx:{width:1},children:(0,S.jsxs)(f.ZP,{container:!0,spacing:2,children:[(0,S.jsx)(f.ZP,{item:!0,xs:12,md:5,children:(0,S.jsx)(g.Z,{size:"small",label:"Box & Sleeve",value:"".concat(null===O||void 0===O||null===(W=O.productboxsleeve)||void 0===W?void 0:W.name),InputLabelProps:{shrink:!0,style:{fontSize:".875rem"}},fullWidth:!0,sx:{marginBottom:"1em"}})}),(0,S.jsx)(f.ZP,{item:!0,xs:12,md:2,children:(0,S.jsx)(g.Z,{size:"small",type:"number",label:"Quantity",value:1,InputLabelProps:{shrink:!0,style:{fontSize:".875rem"}},fullWidth:!0,sx:{marginBottom:"1em"}})}),(0,S.jsx)(f.ZP,{item:!0,xs:12,md:3,children:(0,S.jsx)(g.Z,{size:"small",type:"number",label:"Price",InputLabelProps:{style:{fontSize:".875rem"}},value:null===O||void 0===O?void 0:O.boxSleeveValue,InputProps:{startAdornment:(0,S.jsx)(b.Z,{position:"start",children:null===O||void 0===O||null===(C=O.countryzone)||void 0===C?void 0:C.currency_sign})},fullWidth:!0})}),(0,S.jsx)(f.ZP,{item:!0,xs:12,md:2,children:(0,S.jsx)(g.Z,{disabled:!0,size:"small",label:"Total",InputLabelProps:{style:{fontSize:".875rem"}},value:null===O||void 0===O?void 0:O.boxSleeveValue,InputProps:{startAdornment:(0,S.jsx)(b.Z,{position:"start",children:null===O||void 0===O||null===(L=O.countryzone)||void 0===L?void 0:L.currency_sign})},fullWidth:!0})})]})})]})}),(0,S.jsx)(j.Z,{sx:{my:3,borderStyle:"dashed",borderColor:"#b4b4b4"}}),(0,S.jsx)(Z.Z,{spacing:2,direction:{xs:"column-reverse",md:"row"},alignItems:{xs:"flex-start",md:"center"},children:(0,S.jsx)(Z.Z,{spacing:2,justifyContent:"flex-end",direction:{xs:"column",md:"row"},sx:{width:1},children:(0,S.jsx)(g.Z,{size:"small",label:"Discount",value:T.discount,type:"number",InputLabelProps:{style:{fontSize:".875rem"}},onChange:function(e){return n=Number(e.target.value),void V((0,x.Z)((0,x.Z)({},T),{},{discount:n,discountAmount:Number(null===O||void 0===O?void 0:O.order_total)*n/100,orderValue:Number(null===O||void 0===O?void 0:O.order_total)-Number(null===O||void 0===O?void 0:O.order_total)*n/100}));var n},InputProps:{startAdornment:(0,S.jsx)(b.Z,{position:"start",children:"%"})},sx:{maxWidth:{md:200}}})})}),(0,S.jsxs)(Z.Z,{spacing:2,sx:{mt:3},children:[(0,S.jsxs)(Z.Z,{direction:"row",justifyContent:"flex-end",children:[(0,S.jsx)(p.Z,{children:"Subtotal :"}),(0,S.jsx)(p.Z,{sx:{textAlign:"right",width:120},children:U(null===O||void 0===O||null===(B=O.countryzone)||void 0===B?void 0:B.currency_sign,null===O||void 0===O?void 0:O.productValue)||"-"})]}),(0,S.jsxs)(Z.Z,{direction:"row",justifyContent:"flex-end",children:[(0,S.jsx)(p.Z,{children:"Shiping Charges :"}),(0,S.jsx)(p.Z,{sx:{textAlign:"right",width:120},children:null!==O&&void 0!==O&&O.shippingValue?U(null===O||void 0===O||null===(A=O.countryzone)||void 0===A?void 0:A.currency_sign,null===O||void 0===O?void 0:O.shippingValue):"-"})]}),(0,S.jsxs)(Z.Z,{direction:"row",justifyContent:"flex-end",children:[(0,S.jsx)(p.Z,{children:"Total Price:"}),(0,S.jsx)(p.Z,{sx:{textAlign:"right",width:120},children:"".concat(U(null===O||void 0===O||null===(D=O.countryzone)||void 0===D?void 0:D.currency_sign,null===O||void 0===O?void 0:O.order_total))})]}),(0,S.jsxs)(Z.Z,{direction:"row",justifyContent:"flex-end",children:[(0,S.jsx)(p.Z,{children:"Discount :"}),(0,S.jsx)(p.Z,{sx:{textAlign:"right",width:120},children:T.discount?"- ".concat(T.discount,"%"):"-"})]}),(0,S.jsxs)(Z.Z,{direction:"row",justifyContent:"flex-end",children:[(0,S.jsx)(p.Z,{variant:"h6",children:"Final Price :"}),(0,S.jsx)(p.Z,{variant:"h6",sx:{textAlign:"right",width:120},children:U(null===O||void 0===O||null===(N=O.countryzone)||void 0===N?void 0:N.currency_sign,null===T||void 0===T?void 0:T.orderValue)||"-"})]})]}),(0,S.jsx)(Z.Z,{justifyContent:"flex-end",direction:"row",spacing:2,sx:{mt:3},children:(0,S.jsx)(v.Z,{color:"success",size:"large",variant:"contained",loading:J,sx:{width:250},onClick:function(){q(!0),y.h.ordersApi.discount(null===O||void 0===O?void 0:O.id,T,(function(){G((0,P.G)()),q(!1)}))},children:"Save Changes"})})]})}var I=i(29998);i(74319),i(20169);function w(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}function k(e){var n,i,l,t,r=e.data,o=(0,I.Z)("up","md");return(0,S.jsxs)(Z.Z,{spacing:{xs:2,md:5},direction:{xs:"column",md:"row"},divider:(0,S.jsx)(j.Z,{flexItem:!0,orientation:o?"vertical":"horizontal",sx:{borderStyle:"dashed"}}),sx:{p:3},children:[(0,S.jsxs)(Z.Z,{sx:{width:1},children:[(0,S.jsx)(Z.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{mb:1},children:(0,S.jsx)(p.Z,{variant:"h6",sx:{color:"text.disabled"},children:"From:"})}),(0,S.jsx)(_,{name:"Photokraffr.com",address:"",phone:""})]}),(0,S.jsxs)(Z.Z,{sx:{width:1},children:[(0,S.jsx)(Z.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{mb:1},children:(0,S.jsx)(p.Z,{variant:"h6",sx:{color:"text.disabled"},children:"To:"})}),(0,S.jsx)(_,{name:w(null===r||void 0===r||null===(n=r.costomer)||void 0===n?void 0:n.name),compunysname:w(null===r||void 0===r||null===(i=r.costomer)||void 0===i?void 0:i.compunys_name),address:"0"!==(null===r||void 0===r?void 0:r.delivery_address)?null===r||void 0===r?void 0:r.delivery_address:null===r||void 0===r||null===(l=r.costomer)||void 0===l?void 0:l.address,phone:null===r||void 0===r||null===(t=r.costomer)||void 0===t?void 0:t.phone_no})]})]})}function _(e){var n=e.name,i=e.address,l=e.phone,t=e.compunysname;return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(p.Z,{variant:"subtitle2",children:n}),(0,S.jsx)(p.Z,{variant:"subtitle2",children:t}),(0,S.jsx)(p.Z,{variant:"body2",sx:{mt:1,mb:.5},children:i}),(0,S.jsx)(p.Z,{variant:"body2",children:l})]})}var W=i(68096),C=i(30829),L=i(12674),B=i(23786),A=(i(70188),["pending","paid","credit"]),D=["pending","processing","dispatch","completed","cancel"];function N(e){var n=e.data,i=(0,t.useState)({paymentStatus:"pending",orderStatus:"pending"}),r=(0,l.Z)(i,2),o=r[0],s=r[1];(0,t.useEffect)((function(){s({paymentStatus:null===n||void 0===n?void 0:n.payment_status,orderStatus:null===n||void 0===n?void 0:n.order_status})}),[n]);var a=(0,d.I0)();return(0,S.jsx)(Z.Z,{spacing:2,direction:{xs:"column",sm:"row"},sx:{p:3,bgcolor:"background.neutral"},children:(0,S.jsxs)(f.ZP,{container:!0,spacing:2,children:[(0,S.jsx)(f.ZP,{item:!0,xs:12,sm:4,children:(0,S.jsx)(g.Z,{label:"Order Number",disabled:!0,value:"ORD-".concat(null===n||void 0===n?void 0:n.order_no),fullWidth:!0})}),(0,S.jsx)(f.ZP,{item:!0,xs:12,sm:3,children:(0,S.jsxs)(W.Z,{fullWidth:!0,children:[(0,S.jsx)(C.Z,{id:"payment-select-standard-label",children:"Payment Status"}),(0,S.jsx)(L.Z,{fullWidth:!0,label:"Payment Status",labelId:"payment-select-standard-label",value:o.paymentStatus,onChange:function(e){return i=e.target.value,void y.h.ordersApi.paymentStatus(n.id,{status:i},(function(){a((0,P.G)())}));var i},InputLabelProps:{shrink:!0},children:A.map((function(e){return(0,S.jsx)(B.Z,{value:e,children:w(e)},e)}))})]})}),(0,S.jsx)(f.ZP,{item:!0,xs:12,sm:3,children:(0,S.jsxs)(W.Z,{fullWidth:!0,children:[(0,S.jsx)(C.Z,{id:"payment-select-standard-label",children:"Order Status"}),(0,S.jsx)(L.Z,{fullWidth:!0,label:"Order Status",value:o.orderStatus,onChange:function(e){return i=e.target.value,void y.h.ordersApi.status(n.id,{status:i},(function(){a((0,P.G)())}));var i},children:D.map((function(e){return(0,S.jsx)(B.Z,{value:e,children:w(e)},e)}))})]})}),(0,S.jsx)(f.ZP,{item:!0,xs:12,sm:2,children:(0,S.jsx)(g.Z,{value:null===n||void 0===n?void 0:n.order_date,fullWidth:!0})})]})})}function O(e){var n=e.isEdit,i=e.currentInvoice,r=((0,o.s0)(),(0,t.useState)(!1)),s=(0,l.Z)(r,2);s[0],s[1];(0,t.useEffect)((function(){}),[n,i]);return console.log(i),(0,S.jsx)(S.Fragment,{children:(0,S.jsxs)(m.Z,{children:[(0,S.jsx)(k,{data:i}),(0,S.jsx)(N,{data:i}),(0,S.jsx)(z,{data:i})]})})}var R=i(62711),E=i(36151),T=i(79836),V=i(56890),F=i(35855),M=i(53994);function J(e){var n,i,r,o,s,d,a,c,u,m,v,b,y,P,z,I,w,k,_,W,C,L=e.data,B=(0,t.useState)({discount:0,discountAmount:0,orderValue:0}),A=(0,l.Z)(B,2),D=A[0],N=A[1];(0,t.useEffect)((function(){N((0,x.Z)((0,x.Z)({},D),{},{orderValue:null===L||void 0===L?void 0:L.order_total}))}),[L]),console.log(L);return(0,S.jsxs)(h.Z,{sx:{p:4},children:[(0,S.jsx)(p.Z,{variant:"h6",sx:{color:"text.",mb:3},children:"Details:"}),(0,S.jsx)(Z.Z,{divider:(0,S.jsx)(j.Z,{flexItem:!0,sx:{borderStyle:"dashed"}}),spacing:3,children:(0,S.jsxs)(Z.Z,{alignItems:"flex-end",spacing:1.5,children:[(0,S.jsx)(Z.Z,{direction:{xs:"column",md:"row"},spacing:2,sx:{width:1},children:(0,S.jsxs)(f.ZP,{container:!0,spacing:2,children:[(0,S.jsx)(f.ZP,{item:!0,xs:12,md:4,children:(0,S.jsx)(g.Z,{size:"small",label:"Porduct Name",value:null===L||void 0===L||null===(n=L.product)||void 0===n?void 0:n.name,InputLabelProps:{shrink:!0,style:{fontSize:".875rem"}},fullWidth:!0,sx:{color:"red",marginBottom:"1em"}})}),(0,S.jsx)(f.ZP,{item:!0,xs:12,md:2,children:(0,S.jsx)(g.Z,{size:"small",label:"Orientation",value:null===L||void 0===L||null===(i=L.productorientation)||void 0===i?void 0:i.name,InputLabelProps:{shrink:!0,style:{fontSize:".875rem"}},fullWidth:!0,sx:{marginBottom:"1em"}})}),(0,S.jsx)(f.ZP,{item:!0,xs:12,md:2,children:(0,S.jsx)(g.Z,{size:"small",label:"Size",value:null===L||void 0===L||null===(r=L.productsize)||void 0===r?void 0:r.name,InputLabelProps:{shrink:!0,style:{fontSize:".875rem"}},fullWidth:!0,sx:{marginBottom:"1em"}})})]})}),(0,S.jsx)(Z.Z,{direction:{xs:"column",md:"row"},spacing:2,sx:{width:1},children:(0,S.jsxs)(f.ZP,{container:!0,spacing:2,children:[(0,S.jsx)(f.ZP,{item:!0,xs:12,md:4,children:(0,S.jsx)(g.Z,{size:"small",label:"Paper Sheet",value:null===L||void 0===L||null===(o=L.productsheet)||void 0===o?void 0:o.name,InputLabelProps:{shrink:!0,style:{fontSize:".875rem"}},fullWidth:!0,sx:{color:"red",marginBottom:"1em"}})}),(0,S.jsx)(f.ZP,{item:!0,xs:12,md:2,children:(0,S.jsx)(g.Z,{size:"small",label:"Paper Type",value:null===L||void 0===L||null===(s=L.productpaper)||void 0===s?void 0:s.name,InputLabelProps:{shrink:!0,style:{fontSize:".875rem"}},fullWidth:!0,sx:{marginBottom:"1em"}})}),(0,S.jsx)(f.ZP,{item:!0,xs:12,md:2,children:(0,S.jsx)(g.Z,{size:"small",label:"Print Pages Quantity",value:null===L||void 0===L?void 0:L.page_qty,InputLabelProps:{shrink:!0,style:{fontSize:".875rem"}},fullWidth:!0,sx:{marginBottom:"1em"}})})]})}),(0,S.jsx)(Z.Z,{direction:{xs:"column",md:"row"},spacing:2,sx:{width:1},children:(0,S.jsxs)(f.ZP,{container:!0,spacing:2,children:[(0,S.jsx)(f.ZP,{item:!0,xs:12,md:4,children:(0,S.jsx)(g.Z,{size:"small",label:"Album Cover",value:null===L||void 0===L||null===(d=L.productcover)||void 0===d?void 0:d.name,InputLabelProps:{shrink:!0,style:{fontSize:".875rem"}},fullWidth:!0,sx:{color:"red",marginBottom:"1em"}})}),(0,S.jsx)(f.ZP,{item:!0,xs:12,md:2,children:(0,S.jsx)(g.Z,{size:"small",label:" Leather option",value:null===L||void 0===L||null===(a=L.coversupgrade)||void 0===a?void 0:a.name,InputLabelProps:{shrink:!0,style:{fontSize:".875rem"}},fullWidth:!0,sx:{marginBottom:"1em"}})}),(0,S.jsx)(f.ZP,{item:!0,xs:12,md:2,children:(0,S.jsx)(g.Z,{size:"small",label:"Cover Option Color",value:null===L||void 0===L||null===(c=L.coversupgradecolor)||void 0===c?void 0:c.color,InputLabelProps:{shrink:!0,style:{fontSize:".875rem"}},fullWidth:!0})}),(0,S.jsx)(f.ZP,{item:!0,xs:12,md:2,children:(0,S.jsx)(g.Z,{size:"small",label:"Cover Type",value:null===L||void 0===L||null===(u=L.productcover)||void 0===u?void 0:u.type,InputLabelProps:{shrink:!0,style:{fontSize:".875rem"}},fullWidth:!0})}),"img"===(null===L||void 0===L||null===(m=L.productcover)||void 0===m?void 0:m.type)&&(0,S.jsx)(f.ZP,{item:!0,xs:12,md:2,children:(0,S.jsx)(E.Z,{variant:"outlined",fullWidth:!0,startIcon:(0,S.jsx)(R.JO,{icon:"mdi:download"}),children:"Download Photo"})})]})}),(0,S.jsx)(Z.Z,{direction:{xs:"column",md:"row"},spacing:2,sx:{width:1},children:(0,S.jsxs)(f.ZP,{container:!0,spacing:2,children:[(0,S.jsx)(f.ZP,{item:!0,xs:12,md:4,children:(0,S.jsx)(g.Z,{size:"small",label:"Box & Sleeve",value:null===L||void 0===L||null===(v=L.productboxsleeve)||void 0===v?void 0:v.name,InputLabelProps:{shrink:!0,style:{fontSize:".875rem"}},fullWidth:!0,sx:{color:"red"}})}),(0,S.jsx)(f.ZP,{item:!0,xs:12,md:2,children:(0,S.jsx)(g.Z,{size:"small",label:" Box & Sleeve option",value:null===L||void 0===L||null===(b=L.coversupgrade)||void 0===b?void 0:b.name,InputLabelProps:{shrink:!0,style:{fontSize:".875rem"}},fullWidth:!0,sx:{marginBottom:"1em"}})}),(0,S.jsx)(f.ZP,{item:!0,xs:12,md:2,children:(0,S.jsx)(g.Z,{size:"small",label:"Box & Sleeve Option Color",value:null===L||void 0===L||null===(y=L.productboxsleeve_upgrade_color)||void 0===y?void 0:y.color,InputLabelProps:{shrink:!0,style:{fontSize:".875rem"}},fullWidth:!0})}),(0,S.jsx)(f.ZP,{item:!0,xs:12,md:2,children:(0,S.jsx)(g.Z,{size:"small",label:"Box & Sleeve Type",value:null===L||void 0===L||null===(P=L.productcover)||void 0===P?void 0:P.type,InputLabelProps:{shrink:!0,style:{fontSize:".875rem"}},fullWidth:!0})})]})})]})}),(0,S.jsx)(j.Z,{sx:{my:3,borderStyle:"dashed"}}),(0,S.jsxs)(f.ZP,{container:!0,spacing:2,display:"flex",alignItems:"center",children:[null!==L&&void 0!==L&&L.coverfrontimg?(0,S.jsx)(f.ZP,{item:!0,xs:6,md:3,sx:{my:3},children:(0,S.jsx)(E.Z,{href:null===L||void 0===L?void 0:L.coverfrontimg,download:1,variant:"contained",fullWidth:!0,startIcon:(0,S.jsx)(R.JO,{icon:"mdi:download"}),children:"Covers front photo"})}):(0,S.jsx)(f.ZP,{item:!0,xs:6,md:3,sx:{my:3},children:(0,S.jsx)(p.Z,{children:"No Data From Customer Side"})}),null!==L&&void 0!==L&&L.coverbacksideimg?(0,S.jsx)(f.ZP,{item:!0,xs:6,md:3,sx:{my:3},children:(0,S.jsx)(E.Z,{download:!0,href:null===L||void 0===L?void 0:L.coverbacksideimg,variant:"contained",fullWidth:!0,startIcon:(0,S.jsx)(R.JO,{icon:"mdi:download"}),children:"Covers back photo"})}):(0,S.jsx)(f.ZP,{item:!0,xs:6,md:3,sx:{my:3},children:(0,S.jsx)(p.Z,{children:"No Data From Customer Side"})}),null!==L&&void 0!==L&&L.boxsleevefrontimg?(0,S.jsx)(f.ZP,{item:!0,xs:6,md:3,sx:{my:3},children:(0,S.jsx)(E.Z,{download:!0,href:null===L||void 0===L?void 0:L.boxsleevefrontimg,variant:"contained",fullWidth:!0,startIcon:(0,S.jsx)(R.JO,{icon:"mdi:download"}),children:"Box & sleve front photo"})}):(0,S.jsx)(f.ZP,{item:!0,xs:6,md:3,sx:{my:3},children:(0,S.jsx)(p.Z,{children:"No Data From Customer Side"})}),null!==L&&void 0!==L&&L.boxsleevebacksideimg?(0,S.jsx)(f.ZP,{item:!0,xs:6,md:3,sx:{my:3},children:(0,S.jsx)(E.Z,{download:!0,href:null===L||void 0===L?void 0:L.boxsleevebacksideimg,variant:"contained",fullWidth:!0,startIcon:(0,S.jsx)(R.JO,{icon:"mdi:download"}),children:"Box & sleve back photo"})}):(0,S.jsx)(f.ZP,{item:!0,xs:6,md:3,sx:{my:3},children:(0,S.jsx)(p.Z,{children:"No Data From Customer Side"})}),null!==L&&void 0!==L&&L.order_photos_link?(0,S.jsx)(f.ZP,{item:!0,xs:6,md:4,sx:{my:3},children:(0,S.jsx)(E.Z,{download:!0,href:null===L||void 0===L||null===(z=L.order_photos_link)||void 0===z?void 0:z.source_link,variant:"contained",fullWidth:!0,startIcon:(0,S.jsx)(R.JO,{icon:"mdi:download"}),children:"Download Photo Stack"})}):(0,S.jsx)(f.ZP,{item:!0,xs:6,md:3,sx:{my:3},children:(0,S.jsx)(p.Z,{children:"No Data From Customer Side"})})]}),(0,S.jsxs)(f.ZP,{container:!0,spacing:2,children:[(0,S.jsx)(f.ZP,{item:!0,xs:12,md:12,children:(0,S.jsxs)(T.Z,{style:{width:"100%"},children:[(0,S.jsx)(V.Z,{style:{width:"100%"},children:(0,S.jsxs)(F.Z,{style:{width:"100%"},children:[(0,S.jsx)(M.Z,{children:"Event Type"}),(0,S.jsx)(M.Z,{align:"right",children:"Event Name"}),(0,S.jsx)(M.Z,{align:"right",children:"Event Date"}),(0,S.jsx)(M.Z,{align:"right",children:"Imprinting"}),(0,S.jsx)(M.Z,{align:"right",children:"Fonts"})]})}),(0,S.jsxs)(F.Z,{style:{width:"100%"},children:[(0,S.jsx)(M.Z,{children:null===L||void 0===L||null===(I=L.order_detaild)||void 0===I?void 0:I.event_type}),(0,S.jsx)(M.Z,{align:"right",children:null===L||void 0===L||null===(w=L.order_detaild)||void 0===w?void 0:w.event_name}),(0,S.jsx)(M.Z,{align:"right",children:null===L||void 0===L||null===(k=L.order_detaild)||void 0===k?void 0:k.event_date}),(0,S.jsx)(M.Z,{align:"right",children:null===L||void 0===L||null===(_=L.order_detaild)||void 0===_?void 0:_.Imprinting}),(0,S.jsx)(M.Z,{align:"right",children:null===L||void 0===L||null===(W=L.order_detaild)||void 0===W?void 0:W.fonts})]})]})}),(0,S.jsx)(f.ZP,{item:!0,xs:12,md:12,children:(0,S.jsx)(g.Z,{name:"description",label:"Customize Message",multiline:!0,rows:3,cols:"30",fullWidth:!0,value:null===L||void 0===L||null===(C=L.order_detaild)||void 0===C?void 0:C.customizeMessage,InputLabelProps:{style:{fontSize:".875rem"}},readOnly:!0})})]})]})}i(67303),i(25286);function q(e){var n=e.data,i=(0,t.useState)({parnerlink:(null===n||void 0===n?void 0:n.delivery_partner_link)||"xyz.com",deliverycode:(null===n||void 0===n?void 0:n.delivery_tracking_no)||0}),r=(0,l.Z)(i,2),o=r[0],s=r[1],a=(0,t.useState)(!1),c=(0,l.Z)(a,2),u=c[0],m=(c[1],(0,d.I0)());return(0,S.jsxs)(h.Z,{sx:{p:4},children:[(0,S.jsx)(p.Z,{variant:"h6",sx:{color:"text.",mb:3},children:"Delivery Details:"}),(0,S.jsx)(Z.Z,{divider:(0,S.jsx)(j.Z,{flexItem:!0,sx:{borderStyle:"dashed"}}),spacing:3,children:(0,S.jsx)(Z.Z,{alignItems:"flex-end",spacing:1.5,children:(0,S.jsx)(Z.Z,{direction:{xs:"column",md:"row"},spacing:2,sx:{width:1},children:(0,S.jsxs)(f.ZP,{container:!0,spacing:2,children:[(0,S.jsx)(f.ZP,{item:!0,xs:12,md:4,children:(0,S.jsx)(g.Z,{size:"small",label:"Delivery / Tracking Number",InputLabelProps:{shrink:!0,style:{fontSize:".875rem"}},fullWidth:!0,onChange:function(e){return s((0,x.Z)((0,x.Z)({},o),{},{deliverycode:e.target.value}))},value:o.deliverycode,sx:{color:"red"}})}),(0,S.jsx)(f.ZP,{item:!0,xs:12,md:4,children:(0,S.jsx)(g.Z,{size:"small",label:"Delivery Partner Link",InputLabelProps:{shrink:!0,style:{fontSize:".875rem"}},fullWidth:!0,onChange:function(e){return s((0,x.Z)((0,x.Z)({},o),{},{parnerlink:e.target.value}))},value:o.parnerlink})}),(0,S.jsx)(f.ZP,{item:!0,xs:12,md:4,children:(0,S.jsx)(v.Z,{variant:"contained",onClick:function(){y.h.ordersApi.orderDeliveryDetails(n.id,o,(function(){m((0,P.G)())}))},loading:u,children:"Send Instructions to client"})})]})})})}),(0,S.jsx)(j.Z,{sx:{my:3,borderStyle:"dashed"}})]})}function G(e){var n=e.data,i=(0,t.useState)({paymentStatus:"pending",orderStatus:"pending"}),r=(0,l.Z)(i,2),o=(r[0],r[1]);(0,t.useEffect)((function(){o({paymentStatus:null===n||void 0===n?void 0:n.payment_status,orderStatus:null===n||void 0===n?void 0:n.order_status})}),[n]);(0,d.I0)();return(0,S.jsx)(Z.Z,{spacing:2,direction:{xs:"column",sm:"row"},sx:{p:3,bgcolor:"background.neutral"},children:(0,S.jsx)(f.ZP,{container:!0,spacing:2,children:(0,S.jsx)(f.ZP,{item:!0,xs:12,sm:4,children:(0,S.jsx)(g.Z,{label:"Order Number",disabled:!0,value:"ORD-".concat(null===n||void 0===n?void 0:n.order_no),fullWidth:!0})})})})}function Q(e){var n=e.isEdit,i=e.currentInvoice,r=((0,o.s0)(),(0,t.useState)(!1)),s=(0,l.Z)(r,2);s[0],s[1];(0,t.useEffect)((function(){}),[n,i]);return console.log(i),(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(m.Z,{children:[(0,S.jsx)(G,{data:i}),(0,S.jsx)(J,{data:i})]}),(0,S.jsx)(m.Z,{sx:{marginTop:5},children:(0,S.jsx)(q,{data:i})})]})}function U(){var e=(0,t.useState)({}),n=(0,l.Z)(e,2),i=n[0],m=n[1],x=(0,c.K$)().themeStretch,v=(0,o.UO)().id,h=(0,d.v9)((function(e){return e.order})).orders;return(0,t.useEffect)((function(){m(h.find((function(e){return e.id===Number(v)})))}),[h,v]),console.log(i),(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(r.ql,{children:(0,S.jsxs)("title",{children:[" Order :"," ORD-".concat(null===i||void 0===i?void 0:i.order_no),"  | Photokrfft.com"]})}),(0,S.jsxs)(s.Z,{maxWidth:!x&&"lg",children:[(0,S.jsx)(u.Z,{heading:"ORDER",links:[{name:"Dashboard",href:a.vB.root},{name:"Orders",href:a.vB.orders.root},{name:"ORD-".concat(null===i||void 0===i?void 0:i.order_no)}]}),(0,S.jsx)(O,{isEdit:!0,currentInvoice:i})]}),(0,S.jsxs)(s.Z,{maxWidth:!x&&"lg",children:[(0,S.jsx)(u.Z,{heading:"ORDER : DETAILS",links:[{name:"ORD-".concat(null===i||void 0===i?void 0:i.order_no)}]}),(0,S.jsx)(Q,{isEdit:!0,currentInvoice:i})]})]})}},93517:function(e,n,i){i.d(n,{Z:function(){return C}});var l=i(93433),t=i(29439),r=i(4942),o=i(87462),s=i(63366),d=i(72791),a=(i(57441),i(28182)),c=i(94419),u=i(66934),m=i(31402),x=i(20890),v=i(12065),h=i(74223),p=i(80184),Z=(0,h.Z)((0,p.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),j=i(23701),f=(0,u.ZP)(j.Z)((function(e){var n=e.theme;return(0,o.Z)({display:"flex",marginLeft:"calc(".concat(n.spacing(1)," * 0.5)"),marginRight:"calc(".concat(n.spacing(1)," * 0.5)")},"light"===n.palette.mode?{backgroundColor:n.palette.grey[100],color:n.palette.grey[700]}:{backgroundColor:n.palette.grey[700],color:n.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,o.Z)({},"light"===n.palette.mode?{backgroundColor:n.palette.grey[200]}:{backgroundColor:n.palette.grey[600]}),"&:active":(0,o.Z)({boxShadow:n.shadows[0]},"light"===n.palette.mode?{backgroundColor:(0,v._4)(n.palette.grey[200],.12)}:{backgroundColor:(0,v._4)(n.palette.grey[600],.12)})})})),g=(0,u.ZP)(Z)({width:24,height:16});var b=function(e){var n=e;return(0,p.jsx)("li",{children:(0,p.jsx)(f,(0,o.Z)({focusRipple:!0},e,{ownerState:n,children:(0,p.jsx)(g,{ownerState:n})}))})},y=i(75878),P=i(21217);function S(e){return(0,P.Z)("MuiBreadcrumbs",e)}var z=(0,y.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),I=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],w=(0,u.ZP)(x.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,n){return[(0,r.Z)({},"& .".concat(z.li),n.li),n.root]}})({}),k=(0,u.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,n){return n.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),_=(0,u.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,n){return n.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function W(e,n,i,l){return e.reduce((function(t,r,o){return o<e.length-1?t=t.concat(r,(0,p.jsx)(_,{"aria-hidden":!0,className:n,ownerState:l,children:i},"separator-".concat(o))):t.push(r),t}),[])}var C=d.forwardRef((function(e,n){var i=(0,m.Z)({props:e,name:"MuiBreadcrumbs"}),r=i.children,u=i.className,x=i.component,v=void 0===x?"nav":x,h=i.expandText,Z=void 0===h?"Show path":h,j=i.itemsAfterCollapse,f=void 0===j?1:j,g=i.itemsBeforeCollapse,y=void 0===g?1:g,P=i.maxItems,z=void 0===P?8:P,_=i.separator,C=void 0===_?"/":_,L=(0,s.Z)(i,I),B=d.useState(!1),A=(0,t.Z)(B,2),D=A[0],N=A[1],O=(0,o.Z)({},i,{component:v,expanded:D,expandText:Z,itemsAfterCollapse:f,itemsBeforeCollapse:y,maxItems:z,separator:C}),R=function(e){var n=e.classes;return(0,c.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},S,n)}(O),E=d.useRef(null),T=d.Children.toArray(r).filter((function(e){return d.isValidElement(e)})).map((function(e,n){return(0,p.jsx)("li",{className:R.li,children:e},"child-".concat(n))}));return(0,p.jsx)(w,(0,o.Z)({ref:n,component:v,color:"text.secondary",className:(0,a.Z)(R.root,u),ownerState:O},L,{children:(0,p.jsx)(k,{className:R.ol,ref:E,ownerState:O,children:W(D||z&&T.length<=z?T:function(e){return y+f>=e.length?e:[].concat((0,l.Z)(e.slice(0,y)),[(0,p.jsx)(b,{"aria-label":Z,onClick:function(){N(!0);var e=E.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,l.Z)(e.slice(e.length-f,e.length)))}(T),R.separator,C,O)})}))}))}}]);
//# sourceMappingURL=322.b4f40ae3.chunk.js.map