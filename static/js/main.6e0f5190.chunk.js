(this["webpackJsonpcounter-app"]=this["webpackJsonpcounter-app"]||[]).push([[0],{13:function(t,n,e){},14:function(t,n,e){"use strict";e.r(n);var o=e(0),c=e(1),u=e.n(c),s=e(3),i=e.n(s),r=e(4),a=e(5),h=e(7),l=e(6),d=(e(13),function(t){return console.log("props "+JSON.stringify(t)),Object(o.jsx)("button",{onClick:function(){return"+"==t.sign?t.updateCount(1):t.updateCount(-1)},children:t.sign})}),j=function(t){Object(h.a)(e,t);var n=Object(l.a)(e);function e(t){var o;return Object(r.a)(this,e),(o=n.call(this,t)).state={count:1},console.log("constructor"),o}return Object(a.a)(e,[{key:"handleCount",value:function(t){this.setState((function(n){return{count:n.count+t}})),console.log("handleCount")}},{key:"render",value:function(){return console.log("render"),Object(o.jsxs)("div",{children:[Object(o.jsxs)("h1",{children:["Current count: ",this.state.count]}),Object(o.jsx)("hr",{}),Object(o.jsx)(d,{sign:"+",count:this.state.count,updateCount:this.handleCount.bind(this)}),Object(o.jsx)(d,{sign:"-",count:this.state.count,updateCount:this.handleCount.bind(this)})]})}}]),e}(c.Component),b=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,15)).then((function(n){var e=n.getCLS,o=n.getFID,c=n.getFCP,u=n.getLCP,s=n.getTTFB;e(t),o(t),c(t),u(t),s(t)}))};i.a.render(Object(o.jsx)(u.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),b()}},[[14,1,2]]]);
//# sourceMappingURL=main.6e0f5190.chunk.js.map