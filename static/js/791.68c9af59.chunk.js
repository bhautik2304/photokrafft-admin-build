(self.webpackChunkphotokrafft_com=self.webpackChunkphotokrafft_com||[]).push([[791],{2417:function(n,i,e){"use strict";e.d(i,{Z:function(){return Z}});var r=e(1413),s=e(45987),t=e(64554),o=e(53767),l=e(20890),d=e(93517),a=e(50533),c=e(11087),x=e(80184);function h(n){var i=n.link,e=n.activeLast,s=n.disabled,o=i.name,l=i.href,d=i.icon,h=(0,r.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},s&&!e&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),j=(0,x.jsxs)(x.Fragment,{children:[d&&(0,x.jsx)(t.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:d}),o]});return l?(0,x.jsx)(a.Z,{component:c.rU,to:l,sx:h,children:j}):(0,x.jsxs)(t.Z,{sx:h,children:[" ",j," "]})}var j=["links","action","heading","moreLink","activeLast","sx"];function Z(n){var i=n.links,e=n.action,c=n.heading,Z=n.moreLink,p=n.activeLast,g=n.sx,v=(0,s.Z)(n,j),m=i[i.length-1].name;return(0,x.jsxs)(t.Z,{sx:(0,r.Z)({mb:5},g),children:[(0,x.jsxs)(o.Z,{direction:"row",alignItems:"center",children:[(0,x.jsxs)(t.Z,{sx:{flexGrow:1},children:[c&&(0,x.jsx)(l.Z,{variant:"h4",gutterBottom:!0,children:c}),!!i.length&&(0,x.jsx)(d.Z,(0,r.Z)((0,r.Z)({separator:(0,x.jsx)(u,{})},v),{},{children:i.map((function(n){return(0,x.jsx)(h,{link:n,activeLast:p,disabled:n.name===m},n.name||"")}))}))]}),e&&(0,x.jsxs)(t.Z,{sx:{flexShrink:0},children:[" ",e," "]})]}),!!Z&&(0,x.jsx)(t.Z,{sx:{mt:2},children:Z.map((function(n){return(0,x.jsx)(a.Z,{noWrap:!0,href:n,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:n},n)}))})]})}function u(){return(0,x.jsx)(t.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},73379:function(n,i,e){"use strict";e.d(i,{Z:function(){return r.Z}});var r=e(2417)},68046:function(n,i,e){"use strict";e.r(i),e.d(i,{default:function(){return A}});var r=e(29439),s=e(72791),t=e(6907),o=e(57689),l=e(91614),d=e(59434),a=e(38072),c=e(4809),x=e(73379),h=e(66934),j=e(35855),Z=e(57621),u=e(61889),p=e(64554),g=e(20890),v=e(39281),m=e(79836),f=e(56890),y=e(53994),b=e(53382),w=e(94721),k=e(42142),S=(e(7870),e(1695)),P=e(58008),_=e(72422),I=e(81593),C=e(53767),D=e(20068),T=e(13400),B=e(36151),L=e(5289),E=e(97123),O=e(74319),V=e(80184);function W(n){var i=n.invoice,e=(0,o.s0)(),t=(0,s.useState)(!1),l=(0,r.Z)(t,2),d=l[0],c=l[1];return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(C.Z,{spacing:2,direction:{xs:"column",sm:"row"},justifyContent:"space-between",alignItems:{sm:"center"},sx:{mb:5},children:[(0,V.jsxs)(C.Z,{direction:"row",spacing:1,children:[(0,V.jsx)(D.Z,{title:"Edit",children:(0,V.jsx)(T.Z,{onClick:function(){e(a.vB.invoice.edit(i.id))},children:(0,V.jsx)(O.Z,{icon:"eva:edit-fill"})})}),(0,V.jsx)(D.Z,{title:"View",children:(0,V.jsx)(T.Z,{onClick:function(){c(!0)},children:(0,V.jsx)(O.Z,{icon:"eva:eye-fill"})})}),(0,V.jsx)(D.Z,{title:"Print",children:(0,V.jsx)(T.Z,{children:(0,V.jsx)(O.Z,{icon:"eva:printer-fill"})})}),(0,V.jsx)(D.Z,{title:"Send",children:(0,V.jsx)(T.Z,{children:(0,V.jsx)(O.Z,{icon:"ic:round-send"})})}),(0,V.jsx)(D.Z,{title:"Share",children:(0,V.jsx)(T.Z,{children:(0,V.jsx)(O.Z,{icon:"eva:share-fill"})})})]}),(0,V.jsx)(B.Z,{color:"inherit",variant:"outlined",startIcon:(0,V.jsx)(O.Z,{icon:"eva:checkmark-fill"}),sx:{alignSelf:"flex-end"},children:"Mark as Paid"})]}),(0,V.jsx)(L.Z,{fullScreen:!0,open:d,children:(0,V.jsxs)(p.Z,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,V.jsx)(E.Z,{sx:{zIndex:9,padding:"12px !important",boxShadow:function(n){return n.customShadows.z8}},children:(0,V.jsx)(D.Z,{title:"Close",children:(0,V.jsx)(T.Z,{color:"inherit",onClick:function(){c(!1)},children:(0,V.jsx)(O.Z,{icon:"eva:close-fill"})})})}),(0,V.jsx)(p.Z,{sx:{flexGrow:1,height:"100%",overflow:"hidden"},children:(0,V.jsx)(I.Z$,{width:"100%",height:"100%",style:{border:"none"}})})]})})]})}var F=(0,h.ZP)(j.Z)((function(n){var i=n.theme;return{"& td":{paddingTop:i.spacing(1),paddingBottom:i.spacing(1)}}}));function U(n){var i=n.invoice;if(!i)return null;var e=i.costomer,r=i.order_date,s=i.order_no,t=(i.shippingValue,i.productValue),o=(i.payment_status,i.order_status),l=i.order_total,d=i.discount;return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(W,{invoice:i}),(0,V.jsxs)(Z.Z,{sx:{pt:5,px:5},children:[(0,V.jsxs)(u.ZP,{container:!0,children:[(0,V.jsx)(u.ZP,{item:!0,xs:12,sm:6,sx:{mb:5},children:(0,V.jsx)(P.Z,{disabledEffect:!0,alt:"logo",src:"/logo/logo_full.svg",sx:{maxWidth:120}})}),(0,V.jsx)(u.ZP,{item:!0,xs:12,sm:6,sx:{mb:5},children:(0,V.jsxs)(p.Z,{sx:{textAlign:{sm:"right"}},children:[(0,V.jsx)(S.Z,{variant:"soft",color:("paid"===o?"success":"unpaid"===o&&"warning")||"overdue"===o&&"error"||"default",sx:{textTransform:"uppercase",mb:1},children:o}),(0,V.jsx)(g.Z,{variant:"h6",children:"ORD-".concat(s)})]})}),(0,V.jsxs)(u.ZP,{item:!0,xs:12,sm:6,sx:{mb:5},children:[(0,V.jsx)(g.Z,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Invoice from"}),(0,V.jsx)(g.Z,{variant:"body2",children:null===e||void 0===e?void 0:e.name}),(0,V.jsx)(g.Z,{variant:"body2",children:null===e||void 0===e?void 0:e.address}),(0,V.jsxs)(g.Z,{variant:"body2",children:["Phone: ",null===e||void 0===e?void 0:e.phone_no]})]}),(0,V.jsxs)(u.ZP,{item:!0,xs:12,sm:6,sx:{mb:5},children:[(0,V.jsx)(g.Z,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Invoice to"}),(0,V.jsx)(g.Z,{variant:"body2",children:null===e||void 0===e?void 0:e.name}),(0,V.jsx)(g.Z,{variant:"body2",children:null===e||void 0===e?void 0:e.address}),(0,V.jsxs)(g.Z,{variant:"body2",children:["Phone: ",null===e||void 0===e?void 0:e.phone_no]})]}),(0,V.jsxs)(u.ZP,{item:!0,xs:12,sm:6,sx:{mb:5},children:[(0,V.jsx)(g.Z,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"date create"}),(0,V.jsx)(g.Z,{variant:"body2",children:(0,k.Mu)(r)})]})]}),(0,V.jsx)(v.Z,{sx:{overflow:"unset"},children:(0,V.jsx)(_.Z,{children:(0,V.jsxs)(m.Z,{sx:{minWidth:960},children:[(0,V.jsx)(f.Z,{sx:{borderBottom:function(n){return"solid 1px ".concat(n.palette.divider)},"& th":{backgroundColor:"transparent"}},children:(0,V.jsxs)(j.Z,{children:[(0,V.jsx)(y.Z,{width:40,children:"#"}),(0,V.jsx)(y.Z,{align:"left",children:"Description"}),(0,V.jsx)(y.Z,{align:"left",children:"Qty"}),(0,V.jsx)(y.Z,{align:"right",children:"Unit price"}),(0,V.jsx)(y.Z,{align:"right",children:"Total"})]})}),(0,V.jsxs)(b.Z,{children:[(0,V.jsxs)(F,{children:[(0,V.jsx)(y.Z,{colSpan:3}),(0,V.jsxs)(y.Z,{align:"right",sx:{typography:"body1"},children:[(0,V.jsx)(p.Z,{sx:{mt:2}}),"Subtotal"]}),(0,V.jsxs)(y.Z,{align:"right",width:120,sx:{typography:"body1"},children:[(0,V.jsx)(p.Z,{sx:{mt:2}}),t||0]})]}),(0,V.jsxs)(F,{children:[(0,V.jsx)(y.Z,{colSpan:3}),(0,V.jsx)(y.Z,{align:"right",sx:{typography:"body1"},children:"Discount"}),(0,V.jsx)(y.Z,{align:"right",width:120,sx:{color:"error.main",typography:"body1"},children:d&&-d||0})]}),(0,V.jsxs)(F,{children:[(0,V.jsx)(y.Z,{colSpan:3}),(0,V.jsx)(y.Z,{align:"right",sx:{typography:"body1"},children:"Taxes"}),(0,V.jsx)(y.Z,{align:"right",width:120,sx:{typography:"body1"},children:"0  "})]}),(0,V.jsxs)(F,{children:[(0,V.jsx)(y.Z,{colSpan:3}),(0,V.jsx)(y.Z,{align:"right",sx:{typography:"body1"},children:"Shiping charges"}),(0,V.jsx)(y.Z,{align:"right",width:120,sx:{typography:"body1"},children:"0  "})]}),(0,V.jsxs)(F,{children:[(0,V.jsx)(y.Z,{colSpan:3}),(0,V.jsx)(y.Z,{align:"right",sx:{typography:"h6"},children:"Total"}),(0,V.jsx)(y.Z,{align:"right",width:140,sx:{typography:"h6"},children:l||0})]})]})]})})}),(0,V.jsx)(w.Z,{sx:{mt:5}}),(0,V.jsxs)(u.ZP,{container:!0,children:[(0,V.jsxs)(u.ZP,{item:!0,xs:12,md:9,sx:{py:3},children:[(0,V.jsx)(g.Z,{variant:"subtitle2",children:"NOTES"}),(0,V.jsx)(g.Z,{variant:"body2",children:"We appreciate your business. Should you need us to add VAT or extra notes let us know!"})]}),(0,V.jsxs)(u.ZP,{item:!0,xs:12,md:3,sx:{py:3,textAlign:"right"},children:[(0,V.jsx)(g.Z,{variant:"subtitle2",children:"Have a Question?"}),(0,V.jsx)(g.Z,{variant:"body2",children:"support@minimals.cc"})]})]})]})]})}function A(){var n=(0,c.K$)().themeStretch,i=(0,s.useState)({}),e=(0,r.Z)(i,2),h=e[0],j=e[1],Z=(0,o.UO)().id,u=(0,d.v9)((function(n){return n.order})).orders;return(0,s.useEffect)((function(){var n=u.find((function(n){return n.id===Number(Z)}));j(n)}),[Z,u]),console.log(h),(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(t.ql,{children:(0,V.jsx)("title",{children:" Invoice: View | Minimal UI"})}),(0,V.jsxs)(l.Z,{maxWidth:!n&&"lg",children:[(0,V.jsx)(x.Z,{heading:"Invoice Details",links:[{name:"Dashboard",href:a.vB.root},{name:"Orders",href:a.vB.orders.root},{name:"ORD-".concat(null===h||void 0===h?void 0:h.order_no)}]}),(0,V.jsx)(U,{invoice:h})]})]})}},42480:function(){}}]);
//# sourceMappingURL=791.68c9af59.chunk.js.map