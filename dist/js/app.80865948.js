(function(t){function e(e){for(var s,i,c=e[0],o=e[1],l=e[2],u=0,d=[];u<c.length;u++)i=c[u],n[i]&&d.push(n[i][0]),n[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);v&&v(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,i=1;i<a.length;i++){var o=a[i];0!==n[o]&&(s=!1)}s&&(r.splice(e--,1),t=c(c.s=a[0]))}return t}var s={},n={app:0},r=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"3bc21d8b"}[t]+".js"}function c(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise(function(e,s){a=n[t]=[e,s]});e.push(a[2]=s);var r,o=document.createElement("script");o.charset="utf-8",o.timeout=120,c.nc&&o.setAttribute("nonce",c.nc),o.src=i(t),r=function(e){o.onerror=o.onload=null,clearTimeout(l);var a=n[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+s+": "+r+")");i.type=s,i.request=r,a[1](i)}n[t]=void 0}};var l=setTimeout(function(){r({type:"timeout",target:o})},12e4);o.onerror=o.onload=r,document.head.appendChild(o)}return Promise.all(e)},c.m=t,c.c=s,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(a,s,function(e){return t[e]}.bind(null,s));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var v=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("64a9"),n=a.n(s);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],i=(a("034f"),a("2877")),c={},o=Object(i["a"])(c,n,r,!1,null,null,null),l=o.exports,u=a("8c4f"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("MainPage")],1)},d=[],h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",{attrs:{light:""}},[s("v-content",[s("section",[s("v-parallax",{attrs:{src:a("767d"),height:"600"}},[s("v-layout",{staticClass:"white--text",attrs:{column:"","align-center":"","justify-center":""}},[s("h1",{staticClass:"white--text mb-2 display-1 text-xs-center"},[t._v("Hire Josh")]),s("div",{staticClass:"subheading mb-3 text-xs-center"},[t._v("Web Developer")]),s("v-btn",{staticClass:"blue lighten-2 mt-5",attrs:{dark:"",large:"",to:"/resume"}},[t._v("\n            View full resume\n          ")])],1)],1)],1),s("section",[s("v-layout",{staticClass:"my-5",attrs:{column:"",wrap:"","align-center":""}},[s("v-flex",{staticClass:"my-3",attrs:{xs12:"",sm4:""}},[s("div",{staticClass:"text-xs-center"},[s("h2",{staticClass:"headline"},[t._v("Experience")]),s("span",{staticClass:"subheading"},[t._v("\n              Past projects\n            ")])])]),s("v-flex",{attrs:{xs12:""}},[s("v-container",{attrs:{"grid-list-xl":""}},[s("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[s("v-flex",{attrs:{xs12:"",md4:""}},[s("v-card",{staticClass:"elevation-0 transparent",attrs:{flat:""}},[s("v-card-text",{staticClass:"text-xs-center"},[s("v-icon",{staticClass:"blue--text text--lighten-2",attrs:{"x-large":""}},[t._v("fas fa-hands-helping")])],1),s("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[s("div",{staticClass:"headline text-xs-center"},[t._v("Consulting")])]),s("v-card-text",[t._v("\n                    Two years experience in consulting with Accenture Italia! Worked on many namebrand projects \n                    such as KitKat, Jeep, Fiat, Unicredit and even a ticketing terminal used by thousands everyday: \n                    "),s("a",{attrs:{href:"https://www.italotreno.it/en/the-train/italo-ticket-office"}},[t._v("ItaloTreno")]),t._v(". (JavaScript, jQuery, TypeScript, REST APIs, Git)\n                  ")])],1)],1),s("v-flex",{attrs:{xs12:"",md4:""}},[s("v-card",{staticClass:"elevation-0 transparent",attrs:{flat:""}},[s("v-card-text",{staticClass:"text-xs-center"},[s("v-icon",{staticClass:"blue--text text--lighten-2",attrs:{"x-large":""}},[t._v("fas fa-code")])],1),s("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[s("div",{staticClass:"headline"},[t._v("SaaS")])]),s("v-card-text",[t._v("\n                    I spent my last year in Italy working on "),s("a",{attrs:{href:"https://www.crystal.ai"}},[t._v("crystal")]),t._v(" by iGenius. She's \n                    a virtual advisor that helps manage a client's brand. Track invoices, KPIs, and all your social \n                    media in one place. (React.js, Redux, Gitlab Automation, AmCharts, Node.js) \n                  ")])],1)],1),s("v-flex",{attrs:{xs12:"",md4:""}},[s("v-card",{staticClass:"elevation-0 transparent",attrs:{flat:""}},[s("v-card-text",{staticClass:"text-xs-center"},[s("v-icon",{staticClass:"blue--text text--lighten-2",attrs:{"x-large":""}},[t._v("fab fa-ethereum")])],1),s("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[s("div",{staticClass:"headline text-xs-center"},[t._v("Crypto")])]),s("v-card-text",[t._v("\n                    After moving back to the US, I worked remotely for Halo Platform building \n                    cryptocurrency exchanges. Their "),s("a",{attrs:{href:"https://www.halodex.io/"}},[t._v("decentralized exchange")]),t._v(" uses modular Vue.js ui components and is styled by \n                    vuetify (like this site). (Vue.js, Vuex, Apollo GraphQL, WebSockets)\n                  ")])],1)],1)],1)],1)],1)],1)],1),s("section",[s("v-parallax",{attrs:{src:a("629c"),height:"380"}},[s("v-layout",{attrs:{column:"","align-center":"","justify-center":""}},[s("div",{staticClass:"headline white--text mb-3 text-xs-center"},[t._v("The choice has never been easier")]),s("em",[t._v("Contact me today")]),s("v-btn",{staticClass:"blue lighten-2 mt-5",attrs:{dark:"",large:"",href:"mailto:shouppejosh@gmail.com"}},[t._v("\n            Email\n          ")])],1)],1)],1),s("section",[s("v-container",{attrs:{"grid-list-xl":""}},[s("v-layout",{staticClass:"my-5",attrs:{row:"",wrap:"","justify-center":""}},[s("v-flex",{attrs:{xs12:"",sm4:""}},[s("v-card",{staticClass:"elevation-0 transparent",attrs:{flat:""}},[s("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[s("div",{staticClass:"headline"},[t._v("Recent project")])]),s("v-card-actions",{staticClass:"justify-center"},[s("v-btn",{staticClass:"blue lighten-2 mt-5",attrs:{dark:"",large:"",to:"/music"}},[t._v("\n                  Free Music\n                ")])],1)],1)],1),s("v-flex",{attrs:{xs12:"",sm4:""}},[s("v-card",{staticClass:"elevation-0 transparent",attrs:{flat:""}},[s("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[s("div",{staticClass:"headline"},[t._v("Authorization")])]),s("v-card-text",[t._v("\n                I'm authorized to work in the USA.\n              ")])],1)],1),s("v-flex",{attrs:{xs12:"",sm4:""}},[s("v-card",{staticClass:"elevation-0 transparent",attrs:{flat:""}},[s("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[s("div",{staticClass:"headline"},[t._v("Contact me")])]),s("v-card-text",[t._v("\n                Email is always preferred\n              ")]),s("v-list",{staticClass:"transparent"},[s("v-list-tile",[s("v-list-tile-action",[s("v-icon",{staticClass:"blue--text text--lighten-2"},[t._v("fas fa-envelope")])],1),s("v-list-tile-content",[s("v-list-tile-title",[s("a",{attrs:{href:"mailto:shouppejosh@gmail.com"}},[t._v("shouppejosh@gmail.com")])])],1)],1),s("v-list-tile",[s("v-list-tile-action",[s("v-icon",{staticClass:"blue--text text--lighten-2"},[t._v("fab fa-linkedin")])],1),s("v-list-tile-content",[s("v-list-tile-title",[s("a",{attrs:{href:"https://www.linkedin.com/in/joshshouppe/"}},[t._v("/in/joshshouppe/")])])],1)],1),s("v-list-tile",[s("v-list-tile-action",[s("v-icon",{staticClass:"blue--text text--lighten-2"},[t._v("fab fa-github")])],1),s("v-list-tile-content",[s("v-list-tile-title",[s("a",{attrs:{href:"https://github.com/coozin"}},[t._v("/coozin")])])],1)],1)],1)],1)],1)],1)],1)],1)])],1)},f=[],p={name:"MainPage",props:{msg:String}},m=p,b=(a("57b8"),Object(i["a"])(m,h,f,!1,null,"11df5821",null)),g=b.exports,x={name:"home",components:{MainPage:g}},y=x,_=Object(i["a"])(y,v,d,!1,null,null,null),C=_.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-layout",{staticClass:"padding"},[a("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":""}},[a("v-btn",{staticClass:"blue lighten-2",attrs:{dark:"",large:"",to:"/"}},[t._v("\n        Home\n      ")]),a("v-card",{staticClass:"card-padding",attrs:{flat:""}},[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("h1",{staticClass:"headline mb-0"},[t._v("Josh Shouppe")]),a("div",{staticClass:"grey--text"},[t._v("Web Developer (React.js, Vue.js)")])])]),a("v-layout",[a("v-flex",{attrs:{xs12:"",md9:""}},[a("v-card-text",[a("div",[a("h3",{staticClass:"blue--text"},[t._v("Experience")])])]),a("v-card-text",[a("div",[a("div",[a("b",[t._v("Halo Platform")]),t._v(", Remote - "),a("i",[t._v("Frontend Engineer")])]),a("div",{staticClass:"grey--text"},[t._v("Feb 2018 - Nov 2018")]),a("blockquote",[t._v("Lead frontend development of centralized exchange (vue.js, vuex). \n                  Built admin portal and worked with admin REST APIs. Worked on decentralized \n                  exchange until launch. Using GraphQL created snapshots of tickers in node.js, \n                  adapted ticker data to OHLC for custom datafeed for TradingView chart. Customized \n                  and implemented charting. Using vuetify library, created frontend components for \n                  decentralized exchange. Worked with websockets for live datafeed. ")])])]),a("v-card-text",[a("div",[a("div",[a("b",[t._v("iGenius")]),t._v(", Milan, Italy - "),a("i",[t._v("Frontend Web Developer")])]),a("div",{staticClass:"grey--text"},[t._v("Feb 2017 - Feb 2018")]),a("blockquote",[t._v("Using react.js with redux, developed frontend components for virtual \n                  advisor to manage social channels and marketing strategies. Product called “Crystal”.")])])]),a("v-card-text",[a("div",[a("div",[a("b",[t._v("Accenture")]),t._v(", Milan, Italy - "),a("i",[t._v("Application Developer")])]),a("div",{staticClass:"grey--text"},[t._v("Feb 2015 - June 2017")]),a("blockquote",[t._v("Started out as intern due to language barrier, promoted to senior \n                  and given work visa once language and communication was sufficient. Developed \n                  frontend components consulting for companies such as Unicredit, Fiat, Jeep, Kitkat, \n                  Nestle, and Monte dei Paschi di Siena. JavaScript, REST, jQuery, SASS/LESS.")])])]),a("v-card-text",[a("div",[a("div",[a("b",[t._v("Zenzio")]),t._v(", Tampa, FL - "),a("i",[t._v("Jr. Web Developer")])]),a("div",{staticClass:"grey--text"},[t._v("Sep 2014 - Feb 2015")]),a("blockquote",[t._v("C#, MVC, HTML, CSS. Began career in frontend learning the basics.")])])]),a("v-card-text",[a("div",[a("h3",{staticClass:"blue--text"},[t._v("Education")])])]),a("v-card-text",[a("div",[a("div",[a("b",[t._v("University of South Florida")]),t._v(", Tampa, FL - "),a("i",[t._v("Management Information Systems")])]),a("div",{staticClass:"grey--text"},[t._v("Sep 2009 - Sep 2014")]),a("blockquote",[t._v("Bachelor of Science")])])])],1),a("v-flex",{staticClass:"hidden-sm-and-down",attrs:{xs12:"",md3:""}},[a("v-card-text",[a("div",[a("h3",{staticClass:"blue--text"},[t._v("Skills")])])]),a("v-card-text",[a("div",[a("blockquote",[t._v("JavaScript, Vue.js, vuex, react.js, redux, node.js, \n                  REST API’s, websockets, charting, TradingView, \n                  HTML5, CSS/SASS/LESS, Bootstrap, Vuetify, Material Design")])])]),a("v-card-text",[a("div",[a("h3",{staticClass:"blue--text"},[t._v("OS's")])])]),a("v-card-text",[a("div",[a("blockquote",[t._v("Linux (many distros), MacOS, Windows")])])]),a("v-card-text",[a("div",[a("h3",{staticClass:"blue--text"},[t._v("Languages")])])]),a("v-card-text",[a("div",[a("blockquote",[t._v("Native English")]),a("blockquote",[t._v("C1 Italian")])])])],1)],1)],1)],1)],1)],1)},w=[],j={name:"resume"},S=j,E=(a("8f94"),Object(i["a"])(S,k,w,!1,null,"6df27983",null)),T=E.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-container",[a("v-btn",{staticClass:"blue lighten-2",attrs:{dark:"",large:"",to:"/"}},[t._v("\n      Home\n    ")]),a("v-layout",{attrs:{"justify-center":""}},[a("h1",{staticClass:"display-1 mb-0"},[t._v("Listen for free")])]),a("v-layout",{attrs:{"justify-center":""}},[a("div",{staticClass:"subheader grey--text mb-5"},[t._v("with \n        "),a("a",{attrs:{href:"https://www.openwhyd.org"}},[t._v("openwhyd's")]),t._v(" api\n      ")])]),a("SearchMusic"),t.info&&t.info.tracks?a("div",t._l(t.info.tracks,function(t,e){return a("div",{key:e},[a("TrackCard",{attrs:{track:t}})],1)}),0):t._e()],1),t._v("\n  "+t._s(t.errors)+"\n")],1)},O=[],I=(a("386d"),a("cebc")),P=a("2f62"),A=a("bc3a"),M=a.n(A),R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mb-2 mt-2 ml-2 mr-2",attrs:{flat:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{md6:"",xs12:""}},[a("div",{staticClass:"my-center"},[a("iframe",{attrs:{src:t.songLink,frameborder:"0"}})])]),a("v-flex",{attrs:{md6:"",xs12:""}},[a("v-card-title",{staticClass:"justify-center",attrs:{"primary-title":""}},[a("div",[a("h3",{staticClass:"headline mb-0"},[t._v(t._s(t.track?t.track["uNm"]:""))]),a("div",[t._v(t._s(t.track?t.track["name"]:""))])])]),a("v-card-actions",{staticClass:"justify-center"},[a("v-btn",{staticClass:"blue lighten-2",attrs:{dark:"",large:""},on:{click:function(){return t.open()}}},[t._v("\n          Play on\n          "),t.songSource?a("v-icon",{attrs:{right:""}},[t._v("\n            "+t._s("yt"===t.songSource?"fab fa-youtube":"sc"===t.songSource?"fab fa-soundcloud":"fab fa-vimeo-v")+"\n          ")]):t._e()],1)],1)],1)],1)],1)},F=[],G=(a("28a5"),{name:"trackCard",props:{track:Object},data:function(){return{outLink:""}},watch:{track:function(){this.track&&null!==this.track&&this.track["eId"]&&this.checkTrackEid(this.track["eId"])}},created:function(){this.checkTrackEid(this.track["eId"])},methods:{checkTrackEid:function(t){if(t){var e=t.split("/",3),a=t.split("/playlists/",2),s=t.split("/tracks/",2);if(e[1])if("yt"===e[1])this.songSource="yt",this.songLink="https://www.youtube.com/embed/".concat(e[2]),this.outLink="https://www.youtube.com/watch?v=".concat(e[2]);else if("sc"===e[1]){this.songSource="sc";var n="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/";this.outLink="https://soundcloud.com/".concat(e[2]);var r=e[2];if(2===a.length)r="playlists/".concat(a[1]);else if(2===s.length){var i=s[1],c=i.split("/",2);r=2===c.length?"tracks/".concat(c[0]):"tracks/".concat(i)}var o=r.split("?",2);2===o.length?this.songLink="".concat(n).concat(o[0]):this.songLink="".concat(n).concat(r)}else"vi"===e[1]&&(this.songSource="vi",this.songLink="https://player.vimeo.com/video/".concat(e[2]),this.outLink="https://vimeo.com/".concat(e[2]))}},open:function(){window.open(this.outLink,"_blank")}}}),H=G,q=(a("8ee6"),Object(i["a"])(H,R,F,!1,null,"8a9fdc3e",null)),J=q.exports,z=function(){var t=this,e=this,a=e.$createElement,s=e._self._c||a;return s("v-layout",[s("v-toolbar",{attrs:{flat:"",color:"transparent"}},[s("v-text-field",{staticClass:"mt-1 ml-2",attrs:{flat:"",label:"Search for a song, artist or genre","prepend-inner-icon":"search","solo-inverted":""},model:{value:e.searchInput,callback:function(t){e.searchInput=t},expression:"searchInput"}}),s("v-btn",{staticClass:"blue lighten-2",attrs:{dark:"",large:""},on:{click:function(){return t.searchGenre()}}},[e._v("\n      Go\n    ")])],1)],1)},V=[],U={name:"searchMusic",data:function(){return{searchInput:""}},methods:Object(I["a"])({},Object(P["b"])(["SEARCH_GENRE"]),{searchGenre:function(){this.SEARCH_GENRE(this.searchInput),this.searchInput=""}})},W=U,N=Object(i["a"])(W,z,V,!1,null,null,null),$=N.exports,D=M.a.create({baseURL:"https://cors-anywhere.herokuapp.com/https://openwhyd.org/"}),B={name:"music",data:function(){return{info:null,errors:null}},components:{TrackCard:J,SearchMusic:$},computed:Object(I["a"])({},Object(P["c"])(["genre"])),watch:{genre:function(){""===this.genre?this.search(!0):this.search()}},created:function(){this.search(!0)},methods:{search:function(t){var e=this,a="search?q=".concat(this.genre);t&&(a="hot/"),D.get(a,{params:{format:"json",limit:20}}).then(function(a){e.info=t?a.data:a.data.results}).catch(function(t){e.errors=t})}}},K=B,Q=Object(i["a"])(K,L,O,!1,null,null,null),Y=Q.exports;s["default"].use(u["a"]);var Z=new u["a"]({routes:[{path:"/",name:"home",component:C},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/resume",name:"resume",component:T},{path:"/music",name:"music",component:Y}]});s["default"].use(P["a"]);var X=new P["a"].Store({state:{genre:"",searchType:""},mutations:{SEARCH_GENRE:function(t,e){t.genre=e},SEARCH_BY:function(t,e){t.searchType=e}},actions:{}}),tt=a("ce5b"),et=a.n(tt);a("bf40");s["default"].config.productionTip=!1,s["default"].use(et.a),new s["default"]({router:Z,store:X,render:function(t){return t(l)}}).$mount("#app")},"57b8":function(t,e,a){"use strict";var s=a("8018"),n=a.n(s);n.a},"629c":function(t,e,a){t.exports=a.p+"img/green.eb835837.jpg"},"64a9":function(t,e,a){},"767d":function(t,e,a){t.exports=a.p+"img/wallhaven.53e85f17.jpg"},8018:function(t,e,a){},"8ee6":function(t,e,a){"use strict";var s=a("eeb8"),n=a.n(s);n.a},"8f94":function(t,e,a){"use strict";var s=a("f891"),n=a.n(s);n.a},eeb8:function(t,e,a){},f891:function(t,e,a){}});
//# sourceMappingURL=app.80865948.js.map