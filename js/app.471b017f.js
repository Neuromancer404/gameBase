(function(){"use strict";var n={2363:function(n,e,t){var s=t(9242),o=t(3396);const i={class:"rootMain"},a={class:"navMenu"},r={class:"container"};function l(n,e,t,s,l,c){const u=(0,o.up)("navMenu"),p=(0,o.up)("mainContainer");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o._)("div",a,[(0,o.Wm)(u,{class:""})]),(0,o._)("div",r,[(0,o.Wm)(p,{class:"mainContainer"})])])}const c={class:"rootNav"},u={class:"dockMenu"},p={class:"authorisation"};function d(n,e,t,i,a,r){const l=(0,o.up)("DockMenu"),d=(0,o.up)("authorisation-page");return(0,o.wg)(),(0,o.iD)("div",c,[(0,o._)("div",u,[(0,o.Wm)(l,{items:a.items,"on-selected":r.onSelected,theme:{primary:"#277da1",secondary:"#e5e5e5",tertiary:"#008ecc",textColor:"#000",textHoverColor:"#fff"}},null,8,["items","on-selected"])]),(0,o._)("div",p,[(0,o.wy)((0,o.Wm)(d,{onClose:r.closeModal,title:a.title,way:a.way},null,8,["onClose","title","way"]),[[s.F8,a.isVisible]])])])}var m=t(8772),f=t(7139);const v={class:"modal-backdrop"},g={class:"modal"},h={class:"modal-header"},_={class:"enter"},b=(0,o._)("p",{class:"select"},"Закрыть",-1),w=[b],y=["action"],C=(0,o._)("section",{class:"modal-body"},[(0,o._)("div",{class:"login"},[(0,o._)("p",null,"Логин:")]),(0,o._)("div",{class:"password"},[(0,o._)("input",{class:"login",name:"login"})]),(0,o._)("p",null,"Пароль:"),(0,o._)("input",{class:"password",name:"password"})],-1),k={class:"modal-footer"},x=(0,o._)("h2",null,"Вход",-1),j=[x];function O(n,e,t,i,a,r){return(0,o.wg)(),(0,o.j4)(s.uT,{name:"modal-fade"},{default:(0,o.w5)((()=>[(0,o._)("div",v,[(0,o._)("div",g,[(0,o._)("header",h,[(0,o.WI)(n.$slots,"header",{},(()=>[(0,o._)("h1",_,(0,f.zw)(t.title),1),(0,o._)("button",{type:"button",class:"btn-close",onClick:e[0]||(e[0]=(...n)=>r.close&&r.close(...n))},w)]))]),(0,o._)("form",{action:"./php/"+t.way+".php",method:"post"},[C,(0,o._)("footer",k,[(0,o.WI)(n.$slots,"footer",{},(()=>[(0,o._)("button",{type:"submit",class:"btn-green",onClick:e[1]||(e[1]=(...n)=>r.xhr&&r.xhr(...n))},j)]))])],8,y)])])])),_:3})}var M=t(7387),D={props:{title:String,way:String},data(){return{}},methods:{close(){this.$emit("close")},xhr(){M.$.getJSON("registration.php",(function(n){console.log("JSON Data: "+n)}))}}},S=t(89);const W=(0,S.Z)(D,[["render",O]]);var B=W,A={name:"App",components:{DockMenu:m.b,AuthorisationPage:B},data(){return{isVisible:!1,title:String,way:String,count:0,items:[{name:"Авторизация",menu:[{name:"Вход"},{name:"Регистрация"}]}]}},methods:{onSelected(n){switch(n.name){case"Регистрация":console.log("Регистрация"),this.isVisible=!0,this.title="Регистрация",this.way="registration";break;case"Вход":console.log("Вход"),this.isVisible=!0,this.title="Вход",this.way="authorisation";break}},closeModal(){this.isVisible=!1}}};const Z=(0,S.Z)(A,[["render",d]]);var z=Z;const G={class:"root"},E={class:"Header"},I={class:"carouselContainer"},P={class:"previewContainer"},U=(0,o._)("div",{class:"list"},[(0,o._)("ul",{class:"previewList"},[(0,o._)("li",null,[(0,o._)("h1",null,"Новости")]),(0,o._)("li",null,[(0,o._)("h1",null,"События")]),(0,o._)("li",null,[(0,o._)("h1",null,"Сиськи")]),(0,o._)("li",null,[(0,o._)("h1",null,"Письки")])])],-1);function q(n,e,t,s,i,a){const r=(0,o.up)("carouselContainer"),l=(0,o.up)("previewContainer"),c=(0,o.up)("gameContainer");return(0,o.wg)(),(0,o.iD)("div",G,[(0,o._)("div",E,[(0,o._)("div",I,[(0,o.Wm)(r,{class:""})]),(0,o._)("div",P,[(0,o.Wm)(l,{class:""})]),U]),(0,o.Wm)(c)])}const V={class:"rootCarousel"},T={class:"carousel__item"},F=["src"];function H(n,e,t,s,i,a){const r=(0,o.up)("Slide"),l=(0,o.up)("Carousel");return(0,o.wg)(),(0,o.iD)("div",V,[(0,o.Wm)(l,{autoplay:3e3,"wrap-around":!0,class:"Carousel"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.imagePath,(n=>((0,o.wg)(),(0,o.j4)(r,{key:n},{default:(0,o.w5)((()=>[(0,o._)("div",T,[(0,o._)("img",{id:"slide",class:"img",src:n},null,8,F)])])),_:2},1024)))),128))])),_:1})])}var L=t(1658),J={name:"App",data(){return{imagePath:["https://sun9-53.userapi.com/impg/zqOxEH6ujRBaXCG8Ijwysj_wuEnIRIBSBZGnkA/xa5yEBMXogc.jpg?size=1920x1080&quality=96&sign=fba8dde2f23495c3e382a5bbb866bc1b&type=album","https://sun9-4.userapi.com/impg/UcLuE4ls7cThsXrycRLiKwTLwBPah8QlhAGPMg/UB8OShWaCIE.jpg?size=1920x1080&quality=96&sign=373b84f9df669ed96f992a4f6ed0ffd6&type=album","https://sun9-3.userapi.com/impg/B_s2FcXsnGUHsANE60iIciJd6YfQnBFUzt5qkg/r83i5tB-lyM.jpg?size=1920x1080&quality=96&sign=3b9a45a60bb58a6ce567dbba5d339927&type=album","https://sun9-31.userapi.com/impg/ec_Avfo4cjZ9v822xxnUnUOADfgl_pcvOEhpVw/UG6z35Dv6Fs.jpg?size=1920x1080&quality=96&sign=001c2ae548706b304e40d06525c46052&type=album","https://sun9-65.userapi.com/impg/DMj1o5ko32SOVpLSkks6171gdPebRUrr3vdB2w/5DMY_iJ4Isk.jpg?size=2560x1412&quality=96&sign=842c3018d3cf95e15acf59df8e2c7b35&type=album"]}},components:{Slide:L.Mi,Carousel:L.lr}};const N=(0,S.Z)(J,[["render",H]]);var R=N;const X={class:"root"},$={class:"topGamesClass"},Y=(0,o._)("div",{class:"news"},null,-1);function K(n,e,t,s,i,a){const r=(0,o.up)("top-games");return(0,o.wg)(),(0,o.iD)("div",X,[(0,o._)("div",$,[(0,o.Wm)(r)]),Y])}function Q(n,e){return(0,o.wg)(),(0,o.iD)("div")}const nn={},en=(0,S.Z)(nn,[["render",Q]]);var tn=en,sn={components:{TopGames:tn},data(){},methods:{},mount:{}};const on=(0,S.Z)(sn,[["render",K]]);var an=on,rn=t(6949);const ln={class:"preview"},cn=(0,o._)("div",{class:"inner"},[(0,o._)("img",{class:"logo",src:rn}),(0,o._)("h1",null,"GameBase"),(0,o._)("h2",null,"Главный портал"),(0,o._)("h2",null,"о видеоиграх")],-1),un=[cn];function pn(n,e){return(0,o.wg)(),(0,o.iD)("div",ln,un)}const dn={},mn=(0,S.Z)(dn,[["render",pn]]);var fn=mn,vn={name:"App",components:{carouselContainer:R,GameContainer:an,previewContainer:fn}};const gn=(0,S.Z)(vn,[["render",q]]);var hn=gn,_n={name:"App",components:{navMenu:z,mainContainer:hn}};const bn=(0,S.Z)(_n,[["render",l]]);var wn=bn;(0,s.ri)(wn).mount("#app")},6949:function(n,e,t){n.exports=t.p+"img/logo.c62f10ff.png"}},e={};function t(s){var o=e[s];if(void 0!==o)return o.exports;var i=e[s]={exports:{}};return n[s].call(i.exports,i,i.exports,t),i.exports}t.m=n,function(){var n=[];t.O=function(e,s,o,i){if(!s){var a=1/0;for(u=0;u<n.length;u++){s=n[u][0],o=n[u][1],i=n[u][2];for(var r=!0,l=0;l<s.length;l++)(!1&i||a>=i)&&Object.keys(t.O).every((function(n){return t.O[n](s[l])}))?s.splice(l--,1):(r=!1,i<a&&(a=i));if(r){n.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=n.length;u>0&&n[u-1][2]>i;u--)n[u]=n[u-1];n[u]=[s,o,i]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var s in e)t.o(e,s)&&!t.o(n,s)&&Object.defineProperty(n,s,{enumerable:!0,get:e[s]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){t.p="/"}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,s){var o,i,a=s[0],r=s[1],l=s[2],c=0;if(a.some((function(e){return 0!==n[e]}))){for(o in r)t.o(r,o)&&(t.m[o]=r[o]);if(l)var u=l(t)}for(e&&e(s);c<a.length;c++)i=a[c],t.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return t.O(u)},s=self["webpackChunkgamebase"]=self["webpackChunkgamebase"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=t.O(void 0,[998],(function(){return t(2363)}));s=t.O(s)})();
//# sourceMappingURL=app.471b017f.js.map