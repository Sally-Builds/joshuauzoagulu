(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"713b":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{staticStyle:{"background-color":"#121212",width:"100vw"},attrs:{view:"hHh lpR fFf"}},[a("q-header",{staticClass:"bg-dark text-white"},[a("q-toolbar",[e._l(e.socials,(function(t,n){return a("q-btn",{key:n,class:t.class,style:{color:t.color},attrs:{icon:t.icon,flat:"",round:"",size:"14px"},on:{click:function(a){return e.social(t.link)}}})})),a("q-space"),a("q-btn",{staticClass:"logoutbig",attrs:{dense:"",flat:"",color:"grey",round:"",icon:"menu"},on:{click:function(t){e.right=!e.right}}})],2),a("q-toolbar",[a("q-space"),a("div",{staticClass:"center nav logout"},[a("q-btn",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#about",duration:900,lazy:!1,easing:"ease-in",offset:20,force:!0,cancelable:!0,onDone:e.onDone,x:!1,y:!0},expression:"{\n          el: '#about',\n          duration: 900,\n          lazy: false,\n          easing: 'ease-in',\n          offset: 20,\n          force: true,\n          cancelable: true,\n          onDone: onDone,\n          x: false,\n          y: true\n        }"}],staticClass:"a",attrs:{type:"a",flat:"",color:"grey",label:"About"}}),a("q-btn",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#tech",duration:900,lazy:!1,easing:"linear",offset:20,force:!0,cancelable:!0,onDone:e.onDone,x:!1,y:!0},expression:"{\n          el: '#tech',\n          duration: 900,\n          lazy: false,\n          easing: 'linear',\n          offset: 20,\n          force: true,\n          cancelable: true,\n          onDone: onDone,\n          x: false,\n          y: true\n        }"}],staticClass:"a",attrs:{type:"a",flat:"",color:"grey",label:"Skills"}}),a("q-btn",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#projects",duration:900,lazy:!1,easing:"linear",offset:20,force:!0,cancelable:!0,onDone:e.onDone,x:!1,y:!0},expression:"{\n          el: '#projects',\n          duration: 900,\n          lazy: false,\n          easing: 'linear',\n          offset: 20,\n          force: true,\n          cancelable: true,\n          onDone: onDone,\n          x: false,\n          y: true\n        }"}],staticClass:"a",attrs:{type:"a",flat:"",color:"grey",label:"Projects"}}),a("q-btn",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#contact",duration:900,lazy:!1,easing:"linear",offset:20,force:!0,cancelable:!0,onDone:e.onDone,x:!1,y:!0},expression:"{\n          el: '#contact',\n          duration: 900,\n          lazy: false,\n          easing: 'linear',\n          offset: 20,\n          force: true,\n          cancelable: true,\n          onDone: onDone,\n          x: false,\n          y: true\n        }"}],staticClass:"a",attrs:{type:"a",flat:"",color:"grey",label:"contact me"}})],1),a("q-space")],1)],1),a("q-drawer",{attrs:{side:"right",behavior:"mobile",overlay:"",width:200,bordered:"","content-class":"drawer a"},model:{value:e.right,callback:function(t){e.right=t},expression:"right"}},[a("q-scroll-area",{staticStyle:{height:"calc(100% - 150px)","margin-top":"150px","border-right":"1px solid #ddd"}},[a("q-list",{attrs:{padding:""}},[a("drawer")],1)],1),a("q-img",{staticClass:"absolute-top",staticStyle:{height:"150px"},attrs:{src:"https://cdn.quasar.dev/img/material.png"}},[a("div",{staticClass:"absolute-bottom bg-transparent"},[a("q-avatar",{staticClass:"q-mb-sm",attrs:{size:"56px"}},[a("img",{attrs:{src:"https://cdn.quasar.dev/img/boy-avatar.png"}})]),a("div",{staticClass:"text-weight-bold"},[e._v("Joshua Uzoagulu")]),a("div",[e._v("@web_developer")])],1)])],1),a("q-page-container",[a("router-view")],1)],1)},o=[],l=a("b06b"),s={components:{drawer:a("cb59").default},data(){return{right:!1,socials:[{icon:"ti-linkedin",color:"#0e76a8",link:"https://www.linkedin.com/in/joshua-uzoagulu-b67a70177",class:"a"},{icon:"ti-twitter-alt",color:"#00acee",link:"https://twitter.com/joshua_uzoagulu",class:"a q-mx-md"},{icon:"ti-github",color:"#4078c0",link:"https://github.com/Sally-Builds",class:"a"}]}},methods:{onDone(e){window.location.hash=e.id,console.log(e)},social(e){Object(l["a"])(e)}}},r=s,c=(a("89d3"),a("2877")),i=a("4d5a"),u=a("e359"),d=a("65c6"),b=a("9c40"),f=a("2c91"),g=a("9404"),p=a("4983"),h=a("1c1c"),m=a("068f"),v=a("cb32"),y=a("09e3"),w=a("4396"),x=a("eebe"),q=a.n(x),k=Object(c["a"])(r,n,o,!1,null,null,null);t["default"]=k.exports;q()(k,"components",{QLayout:i["a"],QHeader:u["a"],QToolbar:d["a"],QBtn:b["a"],QSpace:f["a"],QDrawer:g["a"],QScrollArea:p["a"],QList:h["a"],QImg:m["a"],QAvatar:v["a"],QPageContainer:y["a"]}),q()(k,"directives",{Scroll:w["a"]})},"89d3":function(e,t,a){"use strict";a("e87e")},cb59:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",e._l(e.links,(function(t,n){return a("q-item",{key:n,staticStyle:{color:"rgba(255,255,255,.5)"},attrs:{clickable:"",tag:"a",to:t.link}},[a("q-item-section",{staticClass:"text-center"},[a("q-item-label",[e._v(e._s(t.text))])],1)],1)})),1)},o=[],l={data(){return{links:[{link:"#about",text:"ABOUT"},{link:"#tech",text:"SKILLS"},{link:"#projects",text:"PROJECTS"},{link:"#contact",text:"CONTACT ME"}]}}},s=l,r=a("2877"),c=a("66e5"),i=a("4074"),u=a("0170"),d=a("eebe"),b=a.n(d),f=Object(r["a"])(s,n,o,!1,null,null,null);t["default"]=f.exports;b()(f,"components",{QItem:c["a"],QItemSection:i["a"],QItemLabel:u["a"]})},e87e:function(e,t,a){}}]);