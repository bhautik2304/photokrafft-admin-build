"use strict";(self.webpackChunkphotokrafft_com=self.webpackChunkphotokrafft_com||[]).push([[438],{2438:function(e,n,i){i.r(n);var a=i(1413),l=i(29439),r=i(72791),s=i(67303),o=i(91614),t=i(53767),d=i(36151),c=i(57621),u=i(39281),m=i(79836),h=i(53382),p=i(35855),Z=i(53994),f=i(94454),g=i(13400),x=i(5289),j=i(65661),b=i(39157),v=i(48550),w=i(68096),C=i(30829),k=i(12674),y=i(23786),N=i(97123),A=i(59434),U=i(6907),_=i(5397),M=i(38820),W=i(738),L=i(72422),F=(i(74319),i(229),i(42142)),I=i(56488),S=i(48452),D=i(70188),T=i(38072),z=i(73379),H=i(80184),P=[{id:"invoiceNumber",label:"#",align:"left"},{id:"invoiceNumber",label:"Name",align:"left"},{id:"invoiceNumber",label:"Mobile No.",align:"left"},{id:"invoiceNumber",label:"Email Id",align:"left"},{id:"invoiceNumber",label:"Created At",align:"left"},{id:"invoiceNumber",label:"Action",align:"right"}],E={name:"",phone_no:"",email:"",password:"",img:"",role:""};n.default=function(){var e=(0,r.useState)(!1),n=(0,l.Z)(e,2),i=n[0],V=n[1],q=(0,r.useState)(!1),B=(0,l.Z)(q,2),K=B[0],O=B[1],R=(0,r.useState)(E),G=(0,l.Z)(R,2),J=G[0],Q=G[1],X=(0,r.useState)(null),Y=(0,l.Z)(X,2),$=(Y[0],Y[1]),ee=(0,A.I0)(),ne=(0,r.useState)({email:!1,mobile:!1}),ie=(0,l.Z)(ne,2),ae=ie[0],le=(ie[1],(0,A.v9)((function(e){return e.user})).users),re=function(){Q(E),ee((0,S.r)()),V(!i)},se=function(){Q(E),V(!i)};return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(o.Z,{children:[(0,H.jsxs)(t.Z,{spacing:2,className:"my-3",sx:{p:2},direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(U.ql,{children:(0,H.jsx)("title",{children:" Currencyzone | Photokraft"})}),(0,H.jsx)(z.Z,{heading:"Admin & User",links:[{name:"Dashboard",href:T.vB.dashbord},{name:"Admin & User List"}]})]}),(0,H.jsx)(d.Z,{variant:"contained",onClick:function(){O(!1),Q(E),V(!i)},color:"primary",children:"Create New User"})]}),(0,H.jsx)(c.Z,{children:(0,H.jsx)(u.Z,{sx:{position:"relative",overflow:"unset"},children:(0,H.jsx)(L.Z,{children:(0,H.jsxs)(m.Z,{stickyHeader:!0,"aria-label":"sticky table",children:[(0,H.jsx)(W.K,{headLabel:P}),(0,H.jsx)(h.Z,{children:le?le.map((function(e,n){return(0,H.jsxs)(p.Z,{hover:!0,children:[(0,H.jsx)(Z.Z,{padding:"checkbox",children:(0,H.jsx)(f.Z,{})}),(0,H.jsx)(Z.Z,{children:(0,H.jsx)(t.Z,{direction:"row",alignItems:"center",spacing:2,children:e.name})}),(0,H.jsx)(Z.Z,{children:e.phone_no}),(0,H.jsx)(Z.Z,{children:e.email}),(0,H.jsx)(Z.Z,{children:(0,F.Mu)(e.created_at)}),(0,H.jsxs)(Z.Z,{align:"right",children:[(0,H.jsx)(g.Z,{onClick:function(){!function(e){var n=s.Am.loading("Please wait...");I.h.userModule.delete(e).then((function(e){return console.log(e.data),200===!e.status?(s.Am.update(n,{render:"some thing went wrong",type:"error",isLoading:!1}),void setTimeout((function(){s.Am.dismiss(n)}),5e3)):e.data.code===D.hn.success?(s.Am.update(n,{render:e.data.message,type:"success",isLoading:!1}),ee((0,S.r)()),void setTimeout((function(){s.Am.dismiss(n)}),5e3)):(s.Am.update(n,{render:e.data.message,type:"error",isLoading:!1}),void setTimeout((function(){s.Am.dismiss(n)}),5e3))})).catch((function(e){console.log(e),s.Am.update(n,{render:"some thing went wrong",type:"error",isLoading:!1}),setTimeout((function(){s.Am.dismiss(n)}),5e3)}))}(e.id)},sx:{color:"error.main"},children:(0,H.jsx)(_.Z,{color:"error"})}),(0,H.jsx)(g.Z,{onClick:function(){Q((0,a.Z)((0,a.Z)({},e),{},{password:""})),O(!0),V(!i),$(null)},children:(0,H.jsx)(M.Z,{})})]})]})})):(0,H.jsx)(W.et,{isNotFound:1})})]})})})})]}),(0,H.jsxs)(x.Z,{open:i,onClose:function(){V(!i)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:[(0,H.jsx)(j.Z,{children:"Create New User"}),(0,H.jsxs)(b.Z,{children:[(0,H.jsxs)(t.Z,{spacing:2,children:[(0,H.jsx)(v.Z,{fullWidth:!0,label:"User Name",onChange:function(e){return Q((0,a.Z)((0,a.Z)({},J),{},{name:e.target.value}))},value:J.name}),(0,H.jsx)(v.Z,{fullWidth:!0,label:"User Mobile",error:ae.mobile,onChange:function(e){return Q((0,a.Z)((0,a.Z)({},J),{},{phone_no:e.target.value}))},value:J.phone_no}),(0,H.jsx)(v.Z,{fullWidth:!0,label:"User Email",error:ae.email,onChange:function(e){return Q((0,a.Z)((0,a.Z)({},J),{},{email:e.target.value}))},value:J.email}),!K&&(0,H.jsx)(v.Z,{fullWidth:!0,label:"User Password",onChange:function(e){return Q((0,a.Z)((0,a.Z)({},J),{},{password:e.target.value}))},value:J.password}),(0,H.jsxs)(w.Z,{fullWidth:!0,children:[(0,H.jsx)(C.Z,{id:"demo-simple-select-label",children:"User Role"}),(0,H.jsxs)(k.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",defaultValue:J.role,label:"Age",onChange:function(e){return Q((0,a.Z)((0,a.Z)({},J),{},{role:e.target.value}))},children:[(0,H.jsx)(y.Z,{value:"masteradmin",children:"Master Admin"}),(0,H.jsx)(y.Z,{value:"user",children:"User"})]})]}),(0,H.jsx)(v.Z,{type:"file",fullWidth:!0,placeholder:"Orientation Name",onChange:function(e){return Q((0,a.Z)((0,a.Z)({},J),{},{img:e.target.files[0]}))}})]}),(0,H.jsx)(N.Z,{children:K?(0,H.jsx)("div",{className:"my-3",children:(0,H.jsx)(d.Z,{variant:"contained",fullWidth:!0,color:"warning",onClick:function(){console.log(J);var e=new FormData;e.append("name",J.name),e.append("phone_no",J.phone_no),e.append("email",J.email),e.append("password",J.password),e.append("img",J.img),e.append("role",J.role),I.h.userModule.update(J.id,e,(function(){O(!1),V(!i),ee((0,S.r)()),Q(E)}),(function(){O(!1),V(!i),Q(E)}))},children:"Update"})}):(0,H.jsx)("div",{className:"my-3",children:(0,H.jsx)(d.Z,{variant:"contained",fullWidth:!0,color:"primary",onClick:function(){var e=new FormData;e.append("name",J.name),e.append("phone_no",J.phone_no),e.append("email",J.email),e.append("password",J.password),e.append("img",J.img),e.append("role",J.role),I.h.userModule.create(e,re,se)},children:"Create"})})})]})]})]})}},5397:function(e,n,i){var a=i(74223),l=i(80184);n.Z=(0,a.Z)((0,l.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete")}}]);
//# sourceMappingURL=438.176702bd.chunk.js.map