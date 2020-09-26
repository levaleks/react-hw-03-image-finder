(this["webpackJsonpreact-hw-03-image-finder"]=this["webpackJsonpreact-hw-03-image-finder"]||[]).push([[0],{25:function(n,e,t){n.exports=t(70)},30:function(n,e,t){},70:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(5),i=t.n(o),c=(t(30),t(20)),l=t.n(c);const s=l.a.create(),u=new class{constructor(n){this.httpClient=n}async findImages(n){const e=new URLSearchParams;Object.entries({key:"".concat("18417344-120a3a58b8df99373da43803d"),...n}).forEach(([n,t])=>{e.append(n,String(t))});const{data:t}=await this.httpClient.get("".concat("https://pixabay.com/api","/?").concat(e.toString()));return t}}(s);var p=t(1),d=t(2);function g(){const n=Object(p.a)(["\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-gap: 16px;\n    padding-bottom: ",";\n"]);return g=function(){return n},n}const h=d.a.div(g(),n=>n.isFullHeight?"0":"24px");function m(){const n=Object(p.a)(["\n    display: inline-block;\n    width: 100%;\n    font: inherit;\n    font-size: 20px;\n    border: none;\n    outline: none;\n    padding-left: 4px;\n    padding-right: 4px;\n\n    &::placeholder {\n        font: inherit;\n        font-size: 18px;\n    }\n"]);return m=function(){return n},n}function f(){const n=Object(p.a)(["\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    clip-path: inset(50%);\n    border: 0;\n"]);return f=function(){return n},n}function b(){const n=Object(p.a)(["\n    display: inline-block;\n    width: 48px;\n    height: 48px;\n    border: 0;\n    background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n    background-size: 40%;\n    background-repeat: no-repeat;\n    background-position: center;\n    opacity: 0.6;\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    cursor: pointer;\n    outline: none;\n\n    &:hover {\n        opacity: 1;\n    }\n"]);return b=function(){return n},n}function x(){const n=Object(p.a)(["\n    display: flex;\n    align-items: center;\n    width: 100%;\n    max-width: 600px;\n    background-color: #fff;\n    border-radius: 3px;\n    overflow: hidden;\n"]);return x=function(){return n},n}function E(){const n=Object(p.a)(["\n    top: 0;\n    left: 0;\n    position: sticky;\n    z-index: 1100;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: ",";\n    padding: 12px 24px;\n    color: #fff;\n    background: ",";\n    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),\n        0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n    transition: 0.4s;\n"]);return E=function(){return n},n}const y=d.a.header(E(),n=>n.isFullHeight?"100vh":"64px",n=>n.isFullHeight?"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)":"#3f51b5"),w=d.a.form(x()),v=d.a.button(b()),j=d.a.span(f()),O=d.a.input(m()),k=({onSearch:n,isFullHeight:e})=>r.a.createElement(y,{isFullHeight:e},r.a.createElement(w,{onSubmit:e=>{e.preventDefault();const t=e.target.query.value.trim().replace(/\s{2,}/g," ");n(t)}},r.a.createElement(v,{type:"submit"},r.a.createElement(j,null,"Search")),r.a.createElement(O,{name:"query",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})));function S(){const n=Object(p.a)(["\n    display: grid;\n    max-width: calc(100vw - 48px);\n    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n    grid-gap: 16px;\n    padding: 0;\n    list-style: none;\n    margin: 0 auto;\n"]);return S=function(){return n},n}const U=d.a.ul(S());function T(){const n=Object(p.a)(["\n    width: 100%;\n    height: 260px;\n    object-fit: cover;\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    &:hover {\n        transform: scale(1.03);\n        cursor: zoom-in;\n    }\n"]);return T=function(){return n},n}function q(){const n=Object(p.a)(["\n    border-radius: 2px;\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]);return q=function(){return n},n}const _=d.a.li(q()),F=d.a.img(T());function H(){const n=Object(p.a)(["\n    max-width: calc(100vw - 48px);\n    max-height: calc(100vh - 24px);\n    cursor: default;\n\n    img {\n        max-height: inherit;\n    }\n"]);return H=function(){return n},n}function I(){const n=Object(p.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.8);\n    z-index: 1200;\n    cursor: pointer;\n"]);return I=function(){return n},n}const L=d.a.div(I()),R=d.a.div(H()),z=({isShowing:n,hide:e,children:t})=>(Object(a.useEffect)(()=>{const n=n=>{"Escape"===n.key&&e()};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}},[e]),n?Object(o.createPortal)(r.a.createElement(L,{onClick:e},r.a.createElement(R,{onClick:n=>{n.stopPropagation()}},t)),document.body):null);var P=t(24),D=t.n(P);t(69);function A(){const n=Object(p.a)(["\n    margin: 0 auto;\n"]);return A=function(){return n},n}const C=d.a.div(A()),Q=()=>r.a.createElement(C,null,r.a.createElement(D.a,{type:"ThreeDots",color:"#E33371",height:80,width:80})),Y=({id:n,previewImgUrl:e,largeImgUrl:t})=>{const{isShowing:o,toggle:i}=(()=>{const[n,e]=Object(a.useState)(!1);return{isShowing:n,toggle:()=>{e(!n)}}})(),[c,l]=Object(a.useState)(!1);return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,null,r.a.createElement(F,{src:e,alt:String(n),onClick:i})),r.a.createElement(z,{isShowing:o,hide:i},r.a.createElement("img",{src:t,alt:String(n),onLoad:()=>l(!0)}),!c&&r.a.createElement(Q,null)))},B=({images:n})=>r.a.createElement(U,null,n.map(({id:n,webformatURL:e,largeImageURL:t})=>r.a.createElement(Y,{key:n,id:n,previewImgUrl:e,largeImgUrl:t})));function J(){const n=Object(p.a)(["\n    margin: 0 auto;\n    padding: 8px 16px;\n    border-radius: 2px;\n    background-color: #3f51b5;\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    text-align: center;\n    display: inline-block;\n    color: #fff;\n    border: 0;\n    text-decoration: none;\n    cursor: pointer;\n    font-family: inherit;\n    font-size: 18px;\n    line-height: 24px;\n    font-style: normal;\n    font-weight: 500;\n    min-width: 180px;\n    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0px rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n\n    &:hover,\n    &:focus {\n        background-color: #303f9f;\n    }\n"]);return J=function(){return n},n}const W=d.a.button(J()),M=({children:n,...e})=>r.a.createElement(W,Object.assign({type:"button"},e),n);var N=t(7);const $={query:{q:"",image_type:"photo",orientation:"horizontal",page:"1",per_page:12},hits:[],isLoading:!1};let G;!function(n){n.SET_QUERY="SET_QUERY",n.UPDATE_QUERY="UPDATE_QUERY",n.UPDATE_HITS="UPDATE_HITS"}(G||(G={}));const K=(n,e)=>{switch(e.type){case G.SET_QUERY:return Object(N.a)($,n=>{e.payload.query.q&&(n.isLoading=!0),Object.assign(n.query,e.payload.query)});case G.UPDATE_QUERY:return Object(N.a)(n,n=>{n.isLoading=!0,Object.assign(n.query,e.payload.query)});case G.UPDATE_HITS:return Object(N.a)(n,n=>{n.isLoading=!1,n.hits.push(...e.payload.hits)});default:return n}},V=()=>{const[{isLoading:n,query:e,hits:t},o]=Object(a.useReducer)(K,$),i=Object(a.useCallback)(()=>{const n=String(Number(e.page)+1);o({type:G.UPDATE_QUERY,payload:{query:{page:n}}})},[e.page]);return Object(a.useEffect)(()=>{e.q&&(async()=>{const{hits:n}=await u.findImages(e);o({type:G.UPDATE_HITS,payload:{hits:n||[]}})})()},[e]),Object(a.useEffect)(()=>{n||window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},[n]),r.a.createElement(h,{isFullHeight:!e.q&&!t.length},r.a.createElement(k,{onSearch:n=>{o({type:G.SET_QUERY,payload:{query:{q:n}}})},isFullHeight:!e.q&&!t.length}),r.a.createElement(B,{images:t}),n&&r.a.createElement(Q,null),Boolean(!n&&t.length)&&r.a.createElement(M,{onClick:i},"Load more"))},X=()=>r.a.createElement(V,null);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(n=>{n.unregister()}).catch(n=>{console.error(n.message)})}},[[25,1,2]]]);
//# sourceMappingURL=main.c74eeaeb.chunk.js.map