(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9361:function(e,t){"use strict";t.Z=function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}},5557:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(3678)}])},8045:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(9361).Z,r=i(4941).Z,o=i(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,i,s=e.src,l=e.sizes,p=e.unoptimized,m=void 0!==p&&p,x=e.priority,_=void 0!==x&&x,k=e.loading,I=e.lazyRoot,E=e.lazyBoundary,N=e.className,O=e.quality,L=e.width,R=e.height,C=e.style,P=e.objectFit,q=e.objectPosition,M=e.onLoadingComplete,W=e.placeholder,D=void 0===W?"empty":W,B=e.blurDataURL,Z=c(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),V=d.useContext(h.ImageConfigContext),U=d.useMemo(function(){var e=v||V||f.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort(function(e,t){return e-t}),i=e.deviceSizes.sort(function(e,t){return e-t});return a({},e,{allSizes:t,deviceSizes:i})},[V]),F=l?"responsive":"intrinsic";"layout"in Z&&(Z.layout&&(F=Z.layout),delete Z.layout);var G=S;if("loader"in Z){if(Z.loader){var H=Z.loader;G=function(e){e.config;var t=c(e,["config"]);return H(t)}}delete Z.loader}var T="";if(function(e){var t;return"object"==typeof e&&(w(e)||void 0!==e.src)}(s)){var J=w(s)?s.default:s;if(!J.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(B=B||J.blurDataURL,T=J.src,(!F||"fill"!==F)&&(R=R||J.height,L=L||J.width,!J.height||!J.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)))}s="string"==typeof s?s:T;var X=!_&&("lazy"===k||void 0===k);(s.startsWith("data:")||s.startsWith("blob:"))&&(m=!0,X=!1),b.has(s)&&(X=!1),U.unoptimized&&(m=!0);var Q=r(d.useState(!1),2),K=Q[0],Y=Q[1],$=r(g.useIntersection({rootRef:void 0===I?null:I,rootMargin:E||"200px",disabled:!X}),3),ee=$[0],et=$[1],ei=$[2],en=!X||et,er={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},eo={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ea=!1,es=z(L),el=z(R),ec=z(O),ed=Object.assign({},C,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:P,objectPosition:q}),eu="blur"!==D||K?{}:{backgroundSize:P||"cover",backgroundPosition:q||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(B,'")')};if("fill"===F)er.display="block",er.position="absolute",er.top=0,er.left=0,er.bottom=0,er.right=0;else if(void 0!==es&&void 0!==el){var ef=el/es,eg=isNaN(ef)?"100%":"".concat(100*ef,"%");"responsive"===F?(er.display="block",er.position="relative",ea=!0,eo.paddingTop=eg):"intrinsic"===F?(er.display="inline-block",er.position="relative",er.maxWidth="100%",ea=!0,eo.maxWidth="100%",t="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(es,"%27%20height=%27").concat(el,"%27/%3e")):"fixed"===F&&(er.display="inline-block",er.position="relative",er.width=es,er.height=el)}var eh={src:y,srcSet:void 0,sizes:void 0};en&&(eh=j({config:U,src:s,unoptimized:m,layout:F,width:es,quality:ec,sizes:l,loader:G}));var ep=s,em="imagesizes";em="imageSizes";var ev=(n(i={},"imageSrcSet",eh.srcSet),n(i,em,eh.sizes),n(i,"crossOrigin",Z.crossOrigin),i),eb=d.default.useLayoutEffect,ey=d.useRef(M),ex=d.useRef(s);d.useEffect(function(){ey.current=M},[M]),eb(function(){ex.current!==s&&(ei(),ex.current=s)},[ei,s]);var ew=a({isLazy:X,imgAttributes:eh,heightInt:el,widthInt:es,qualityInt:ec,layout:F,className:N,imgStyle:ed,blurStyle:eu,loading:k,config:U,unoptimized:m,placeholder:D,loader:G,srcString:ep,onLoadingCompleteRef:ey,setBlurComplete:Y,setIntersection:ee,isVisible:en,noscriptSizes:l},Z);return d.default.createElement(d.default.Fragment,null,d.default.createElement("span",{style:er},ea?d.default.createElement("span",{style:eo},t?d.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:t}):null):null,d.default.createElement(A,Object.assign({},ew))),_?d.default.createElement(u.default,null,d.default.createElement("link",Object.assign({key:"__nimg-"+eh.src+eh.srcSet+eh.sizes,rel:"preload",as:"image",href:eh.srcSet?void 0:eh.src},ev))):null)};var a=i(6495).Z,s=i(2648).Z,l=i(1598).Z,c=i(7273).Z,d=l(i(7294)),u=s(i(5443)),f=i(9309),g=i(7190),h=i(9977);i(3794);var p=i(2392);function m(e){return"/"===e[0]?e.slice(1):e}var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/utility/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0},b=new Set,y="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",x=new Map([["default",function(e){var t=e.config,i=e.src,n=e.width,r=e.quality;return i.endsWith(".svg")&&!t.dangerouslyAllowSVG?i:"".concat(p.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(r||75)}],["imgix",function(e){var t=e.config,i=e.src,n=e.width,r=e.quality,o=new URL("".concat(t.path).concat(m(i))),a=o.searchParams;return a.set("auto",a.getAll("auto").join(",")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||n.toString()),r&&a.set("q",r.toString()),o.href}],["cloudinary",function(e){var t,i=e.config,n=e.src,r=e.width,o=["f_auto","c_limit","w_"+r,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(i.path).concat(o).concat(m(n))}],["akamai",function(e){var t=e.config,i=e.src,n=e.width;return"".concat(t.path).concat(m(i),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}],]);function w(e){return void 0!==e.default}function j(e){var t=e.config,i=e.src,n=e.unoptimized,r=e.layout,a=e.width,s=e.quality,l=e.sizes,c=e.loader;if(n)return{src:i,srcSet:void 0,sizes:void 0};var d=function(e,t,i,n){var r=e.deviceSizes,a=e.allSizes;if(n&&("fill"===i||"responsive"===i)){for(var s=/(^|\s)(1?\d?\d)vw/g,l=[];c=s.exec(n);c)l.push(parseInt(c[2]));if(l.length){var c,d,u=.01*(d=Math).min.apply(d,o(l));return{widths:a.filter(function(e){return e>=r[0]*u}),kind:"w"}}return{widths:a,kind:"w"}}return"number"!=typeof t||"fill"===i||"responsive"===i?{widths:r,kind:"w"}:{widths:o(new Set([t,2*t].map(function(e){return a.find(function(t){return t>=e})||a[a.length-1]}))),kind:"x"}}(t,a,r,l),u=d.widths,f=d.kind,g=u.length-1;return{sizes:l||"w"!==f?l:"100vw",srcSet:u.map(function(e,n){return"".concat(c({config:t,src:i,quality:s,width:e})," ").concat("w"===f?e:n+1).concat(f)}).join(", "),src:c({config:t,src:i,quality:s,width:u[g]})}}function z(e){return"number"==typeof e?e:"string"==typeof e?parseInt(e,10):void 0}function S(e){var t,i=(null==(t=e.config)?void 0:t.loader)||"default",n=x.get(i);if(n)return n(e);throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(i))}function _(e,t,i,n,r,o){e&&e.src!==y&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){if(e.parentNode&&(b.add(t),"blur"===n&&o(!0),null==r?void 0:r.current)){var i=e.naturalWidth,a=e.naturalHeight;r.current({naturalWidth:i,naturalHeight:a})}}))}var A=function(e){var t=e.imgAttributes,i=(e.heightInt,e.widthInt),n=e.qualityInt,r=e.layout,o=e.className,s=e.imgStyle,l=e.blurStyle,u=e.isLazy,f=e.placeholder,g=e.loading,h=e.srcString,p=e.config,m=e.unoptimized,v=e.loader,b=e.onLoadingCompleteRef,y=e.setBlurComplete,x=e.setIntersection,w=e.onLoad,z=e.onError,S=(e.isVisible,e.noscriptSizes),A=c(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return g=u?"lazy":g,d.default.createElement(d.default.Fragment,null,d.default.createElement("img",Object.assign({},A,t,{decoding:"async","data-nimg":r,className:o,style:a({},s,l),ref:d.useCallback(function(e){x(e),(null==e?void 0:e.complete)&&_(e,h,r,f,b,y)},[x,h,r,f,b,y,]),onLoad:function(e){_(e.currentTarget,h,r,f,b,y),w&&w(e)},onError:function(e){"blur"===f&&y(!0),z&&z(e)}})),(u||"blur"===f)&&d.default.createElement("noscript",null,d.default.createElement("img",Object.assign({},A,j({config:p,src:h,unoptimized:m,layout:r,width:i,quality:n,sizes:S,loader:v}),{decoding:"async","data-nimg":r,style:s,className:o,loading:g}))))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t,i=e.rootRef,c=e.rootMargin,d=e.disabled||!a,u=n(r.useState(!1),2),f=u[0],g=u[1],h=n(r.useState(null),2),p=h[0],m=h[1];return r.useEffect(function(){if(a){if(!d&&!f&&p&&p.tagName){var e,t,n,r,u,h,m;return t=function(e){return e&&g(e)},u=(r=function(e){var t,i={root:e.root||null,margin:e.rootMargin||""},n=l.find(function(e){return e.root===i.root&&e.margin===i.margin});if(n&&(t=s.get(n)))return t;var r=new Map;return t={id:i,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=r.get(e.target),i=e.isIntersecting||e.intersectionRatio>0;t&&i&&t(i)})},e),elements:r},l.push(i),s.set(i,t),t}(n={root:null==i?void 0:i.current,rootMargin:c})).id,h=r.observer,(m=r.elements).set(p,t),h.observe(p),function(){if(m.delete(p),h.unobserve(p),0===m.size){h.disconnect(),s.delete(u);var e=l.findIndex(function(e){return e.root===u.root&&e.margin===u.margin});e>-1&&l.splice(e,1)}}}}else if(!f){var v=o.requestIdleCallback(function(){return g(!0)});return function(){return o.cancelIdleCallback(v)}}},[p,d,c,i,f]),[m,f,r.useCallback(function(){g(!1)},[])]};var r=i(7294),o=i(9311),a="function"==typeof IntersectionObserver,s=new Map,l=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3678:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return l}});var n=i(5893),r=i(9008),o=i.n(r),a=i(5675),s=i.n(a);function l(){return(0,n.jsxs)("div",{children:[(0,n.jsxs)(o(),{children:[(0,n.jsx)("title",{children:"Create Next App"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("main",{children:[(0,n.jsxs)("h1",{children:["Welcome to ",(0,n.jsx)("a",{href:"https://nextjs.org",children:"Next.js!"})]}),(0,n.jsxs)("p",{children:["Get started by editing ",(0,n.jsx)("code",{children:"pages/index.js"})]}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("a",{href:"https://nextjs.org/docs",children:[(0,n.jsx)("h2",{children:"Documentation →"}),(0,n.jsx)("p",{children:"Find in-depth information about Next.js features and API."})]}),(0,n.jsxs)("a",{href:"https://nextjs.org/learn",children:[(0,n.jsx)("h2",{children:"Learn →"}),(0,n.jsx)("p",{children:"Learn about Next.js in an interactive course with quizzes!"})]}),(0,n.jsxs)("a",{href:"https://github.com/vercel/next.js/tree/canary/examples",children:[(0,n.jsx)("h2",{children:"Examples →"}),(0,n.jsx)("p",{children:"Discover and deploy boilerplate example Next.js projects."})]}),(0,n.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",children:[(0,n.jsx)("h2",{children:"Deploy →"}),(0,n.jsx)("p",{children:"Instantly deploy your Next.js site to a public URL with Vercel."})]})]})]}),(0,n.jsx)("footer",{children:(0,n.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,n.jsx)("span",{children:(0,n.jsx)(s(),{src:"/vercel.svg",alt:"Vercel Logo",width:72,height:16})})]})})]})}},9008:function(e,t,i){e.exports=i(5443)},5675:function(e,t,i){e.exports=i(8045)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);