(window["webpackJsonpfe-test"]=window["webpackJsonpfe-test"]||[]).push([[0],{22:function(e,t,a){e.exports=a(52)},27:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(13),r=a.n(l),i=a(2),s=a(3),o=a(5),u=a(4),m=a(6),E=(a(27),a(7)),d=a(9),h=a(8),p=function(e){function t(e){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(){var e=document.getElementsByClassName("xs-menu")[0],t=document.getElementsByClassName("menu-bars")[0];e.classList.toggle("active"),t.classList.toggle("active")}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{id:"header",className:"font-bold"},c.a.createElement("div",{className:"top-bar vertical-center center"},c.a.createElement("span",{className:"font-os uppercase"},"Free US Shipping & Returns")),c.a.createElement(E.Grid,{fluid:!0},c.a.createElement(E.Row,{className:"bottom-area vertical-center"},c.a.createElement(E.Col,{xs:4},c.a.createElement("div",{className:"menu-bars",onClick:function(){return e.handleClick()}},c.a.createElement("span",null)),c.a.createElement("div",{className:"xs-menu"},c.a.createElement("div",null,"ABOUT"),c.a.createElement("div",null,"MEN"),c.a.createElement("div",null,"WOMEN")),c.a.createElement("div",{className:"xs-hidden header-left-area"},c.a.createElement("span",null,"MEN"),c.a.createElement("span",null,"WOMEN"))),c.a.createElement(E.Col,{xs:4},c.a.createElement("div",{className:"rings center vertical-center"},c.a.createElement("svg",null,c.a.createElement("circle",{cx:"24",cy:"70",r:"22.5",fill:"none",stroke:"#7DC242",strokeWidth:"3px"}),c.a.createElement("circle",{cx:"50",cy:"70",r:"22.5",fill:"none",stroke:"#FFCF60",strokeWidth:"3px"})))),c.a.createElement(E.Col,{xs:4},c.a.createElement("div",{className:"right"},c.a.createElement("span",{style:{lineHeight:"200%"},className:"xs-hidden"},"ABOUT"),c.a.createElement("div",{className:"icons"},c.a.createElement(d.a,{className:"icon",icon:h.d,size:"2x"}),c.a.createElement(d.a,{className:"icon",icon:h.e,size:"2x"})))))))}}]),t}(c.a.Component),b=function(e){function t(e){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"prod-details"},c.a.createElement("h1",null," Product Details "))}}]),t}(c.a.Component),v=function(e){function t(e){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"recs"},c.a.createElement("h1",null," Recommended Products "))}}]),t}(c.a.Component),f=a(21),O=a.n(f),j=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(O.a,{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1},c.a.createElement("div",null,c.a.createElement("h3",null,"1")),c.a.createElement("div",null,c.a.createElement("h3",null,"2")),c.a.createElement("div",null,c.a.createElement("h3",null,"3")),c.a.createElement("div",null,c.a.createElement("h3",null,"4")),c.a.createElement("div",null,c.a.createElement("h3",null,"5")),c.a.createElement("div",null,c.a.createElement("h3",null,"6")))}}]),t}(c.a.Component),k=function(e){function t(e){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"features"},c.a.createElement("h1",null," Features "),c.a.createElement(j,null))}}]),t}(c.a.Component),C=a(14),N=function(e){function t(e){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"footer"},c.a.createElement("h1",null," FOOTER "),c.a.createElement("p",null,this.props.prop),c.a.createElement(d.a,{icon:C.a}),c.a.createElement(d.a,{icon:C.b}),c.a.createElement(d.a,{icon:h.c}),c.a.createElement(d.a,{icon:h.b}),c.a.createElement(d.a,{icon:h.a}))}}]),t}(c.a.Component),y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={products:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://anatta-demo-app.herokuapp.com/api/products?access_token=access").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({products:t})})).catch(console.log)}},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(p,null),c.a.createElement(E.Grid,{fluid:!0},c.a.createElement(E.Row,{reverse:!0},c.a.createElement(E.Col,{xs:12,sm:6},c.a.createElement(k,null)),c.a.createElement(E.Col,{xs:12,sm:6},c.a.createElement(b,null))),c.a.createElement(E.Row,null,c.a.createElement(E.Col,{xs:12},c.a.createElement(v,null)))),c.a.createElement(N,{prop:"prop"}))}}]),t}(n.Component);r.a.render(c.a.createElement(y,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.05477e1e.chunk.js.map