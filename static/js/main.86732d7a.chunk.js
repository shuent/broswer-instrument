(this["webpackJsonpbrowser-instrument"]=this["webpackJsonpbrowser-instrument"]||[]).push([[0],{14:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n(0),i=n.n(o),r=n(7),c=n.n(r),s=(n(14),n(4)),d=n(8),u=n.n(d),l=n.p+"static/media/keyb.26965698.png",y=n(6);var p=function(e){var t=e.id,n=e.emoji,o=e.isCurrent,i=e.handleChange;return Object(a.jsx)("li",{onClick:i,"data-id":t,className:"cursor-pointer p-4 rounded-lg hover:shadow transition duration-100 ease-in-out bg-white ".concat(o&&"bg-gray-100"),children:n})},j=function(){window.AudioContext=window.AudioContext||window.webkitAudioContext;var e=new AudioContext,t=["acoustic_grand_piano","electric_guitar_clean","trumpet","violin"],n=["\ud83c\udfb9","\ud83c\udfb8","\ud83c\udfba","\ud83c\udfbb"],o=i.a.useState(t[0]),r=Object(s.a)(o,2),c=r[0],d=r[1],j=i.a.useState(n[0]),m=Object(s.a)(j,2),C=m[0],f=m[1],b=i.a.useState(null),x=Object(s.a)(b,2),h=x[0],k=x[1],g=Object(y.b)(C,null,{from:{opacity:0},enter:{opacity:1},leave:{opacity:0},config:{duration:150}}),w=function(e){var a=e.currentTarget.dataset.id;d(t[a]),f(n[a])},v=function(e){return t[e]===c},O=function(e){h&&!e.repeat&&(67===e.keyCode?h.play("C3"):70===e.keyCode?h.play("C#3"):86===e.keyCode?h.play("D3"):71===e.keyCode?h.play("D#3"):66===e.keyCode?h.play("E3"):78===e.keyCode?h.play("F3"):74===e.keyCode?h.play("F#3"):77===e.keyCode?h.play("G3"):75===e.keyCode?h.play("G#3"):188===e.keyCode?h.play("A3"):76===e.keyCode?h.play("A#3"):190===e.keyCode?h.play("B3"):191===e.keyCode&&h.play("C4"))},E=function(e){h&&h.stop()};return i.a.useEffect((function(){return document.addEventListener("keydown",O,!1),document.addEventListener("keyup",E,!1),function(){document.removeEventListener("keydown",O),document.removeEventListener("keyup",E)}}),[h]),i.a.useEffect((function(){u.a.instrument(e,c).then((function(e){return k(e)}))}),[c]),Object(a.jsxs)("div",{className:"pt-10 flex flex-col items-center justify-items-center",children:[Object(a.jsx)("h1",{className:"p-4 font-light font-serif text-4xl",children:"Browser Instrument"}),Object(a.jsx)("span",{className:"relative h-48 w-24",children:g.map((function(e){var t=e.item,n=e.props,o=e.key;return Object(a.jsx)(y.a.div,{style:n,className:"absolute mx-auto pt-8 text-8xl",children:t},o)}))}),Object(a.jsxs)("ul",{className:"w-96 flex text-4xl flex-row justify-between",children:[Object(a.jsx)(p,{id:0,emoji:n[0],isCurrent:v(0),handleChange:w}),Object(a.jsx)(p,{id:1,emoji:n[1],isCurrent:v(1),handleChange:w}),Object(a.jsx)(p,{id:2,emoji:n[2],isCurrent:v(2),handleChange:w}),Object(a.jsx)(p,{id:3,emoji:n[3],isCurrent:v(3),handleChange:w})]}),Object(a.jsx)("p",{className:"py-8 text-gray-500 font-semibold",children:"Use your keyboard to play ['C' for C3] throuh ['/' for C4]"}),Object(a.jsx)("img",{className:"md:max-w-2xl max-w-full",src:l,alt:"keyboard"})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),o(e),i(e),r(e)}))};c.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(j,{})}),document.getElementById("root")),m()}},[[29,1,2]]]);
//# sourceMappingURL=main.86732d7a.chunk.js.map