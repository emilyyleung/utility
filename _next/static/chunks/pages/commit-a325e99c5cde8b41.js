(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[105],{8047:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/commit",function(){return s(547)}])},547:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return o}});var n=s(5893),a=s(7294);function r(e){var t=e.label,s=e.name,a=e.value,r=e.rows,l=e.setValue,o=function(e){l(e.target.value)};return(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{htmlFor:s,className:"block pb-2 text-sm font-medium text-gray-700",children:t}),(0,n.jsx)("div",{className:"mt-1",children:(0,n.jsx)("textarea",{rows:r,name:s,id:s,className:"custom-scroll block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",value:a,onChange:o})})]})}function l(e){var t=e.title,s=e.value,a=e.setValue,r=e.min,l=e.max,o=e.step;return(0,n.jsxs)("label",{className:"block",children:[(0,n.jsx)("span",{className:"block text-sm font-medium text-gray-700 pb-2",children:t}),(0,n.jsxs)("div",{className:"grid grid-cols-[1fr_auto] place-items-center gap-2",children:[(0,n.jsx)("input",{type:"number",min:r,max:l,step:o,value:s,onChange:function(e){return a(e.target.value)},onKeyDown:function(e){"ArrowUp"===e.code||"ArrowDown"===e.code?a(e.target.value):e.preventDefault()},className:"rounded-md border-gray-300 shadow-sm form-input mt-1 block w-full"}),(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"w-6 h-6 text-slate-400",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"})})]})]})}function o(){var e=(0,a.useState)(""),t=e[0],s=e[1],o=(0,a.useState)(""),i=o[0],u=o[1],c=(0,a.useState)(50),m=c[0],d=c[1];return(0,a.useEffect)(function(){for(var e=t.split(" "),s=[],n="",a=0;a<e.length;a++){var r="",l=e[a];r=0==n.length?l:n+" "+l,a==e.length-1?s.push(r):r.length<=m?n=r:(s.push(n),n=l)}u(s.join("\n"))},[t,m]),(0,n.jsx)("div",{className:"bg-slate-200 min-h-screen",children:(0,n.jsxs)("div",{className:"mx-auto pt-10 max-w-3xl px-10 lg:px-0 ",children:[(0,n.jsx)("div",{className:"pb-10 w-52",children:(0,n.jsx)(l,{title:"Max message width",value:m,setValue:d,min:30,max:100,step:5})}),(0,n.jsx)(r,{label:"Write your commit message",name:"commit",rows:5,setValue:s,value:t}),(0,n.jsx)("p",{className:"pt-10 overflow-x-auto custom-scroll",style:{whiteSpace:"pre"},children:i})]})})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8047)}),_N_E=e.O()}]);