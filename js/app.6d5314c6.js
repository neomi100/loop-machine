(function(t){function e(e){for(var o,r,i=e[0],u=e[1],d=e[2],l=0,p=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);c&&c(e);while(p.length)p.shift()();return s.push.apply(s,d||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(o=!1)}o&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},a={app:0},s=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/loop-machine/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var c=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0de5":function(t,e,n){t.exports=n.p+"media/GrooveB_120bpm_Tanggu.3b9bb826.mp3"},"3c61":function(t,e,n){},5513:function(t,e,n){t.exports=n.p+"media/120_future_funk_beats_25.ef4b0d6b.mp3"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("loop-machine")],1)},s=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home main-layout"},[n("div",{staticClass:"btns-power"},[n("button",{staticClass:"btn-power stop",attrs:{title:"Stop"},on:{click:function(e){return t.stopSound()}}}),n("button",{class:["btn-power btn-play",{play:t.isPlay}],attrs:{title:"Play"},on:{click:function(e){return t.playSound()}}})]),n("pads-list",{attrs:{pads:t.pads}})],1)},i=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.pads?n("div",{staticClass:"card-grid"},t._l(t.pads,(function(e){return n("pad",{key:e.id,attrs:{pad:e},on:{setAudio:t.setAudio}})})),1):t._e()},d=[],c=(n("d81d"),n("4de4"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.pad?n("div",{class:[{active:t.isActive},"btn-audio"],on:{click:function(e){return t.getPad()}}},[n("span",{staticClass:"pad-name"},[t._v(t._s(t.pad.name))])]):t._e()}),l=[],p={props:["pad"],data:function(){return{isActive:!1}},methods:{getPad:function(){var t=this.pad;t.isPlay=!t.isPlay,this.isActive=!this.isActive,this.$emit("setAudio",t)}}},f=p,m=n("2877"),y=Object(m["a"])(f,c,l,!1,null,null,null),h=y.exports,b={props:["pads"],data:function(){return{padsForPlay:[]}},methods:{setAudio:function(t){t.isPlay||t.audio.pause(),this.padsForPlay=this.pads.map((function(e){return e.id===t.id?t:e})),this.padsForPlay=this.padsForPlay.filter((function(t){return t.isPlay})),this.$store.commit({type:"setAudio",pads:this.padsForPlay})}},components:{pad:h}},v=b,P=Object(m["a"])(v,u,d,!1,null,null,null),_=P.exports,g={name:"loop-machine",computed:{pads:function(){return this.$store.getters.sounds},isPlay:function(){return this.$store.getters.isPlay}},methods:{playSound:function(){this.$store.commit({type:"playSound"})},stopSound:function(){this.$store.commit({type:"stopSound"})}},created:function(){this.$store.dispatch({type:"getSounds"})},components:{PadsList:_}},S=g,w=Object(m["a"])(S,r,i,!1,null,null,null),O=w.exports,x={components:{LoopMachine:O}},A=x,k=Object(m["a"])(A,a,s,!1,null,null,null),j=k.exports,T=n("1da1"),E=(n("96cf"),n("2f62")),$=(n("159b"),[{name:"future funk",id:"001",isPlay:!1,url:"assets/audio/120_future_funk_beats_25.mp3",audio:new Audio(n("5513"))},{name:"stutter breakbeats",id:"002",isPlay:!1,url:"assets/audio/120_stutter_breakbeats_16.mp3",audio:new Audio(n("d39d"))},{name:"bass",id:"003",isPlay:!1,url:"assets/audio/Bass Warwick heavy funk groove on E 120 BPM.mp3",audio:new Audio(n("f7f9"))},{name:"electric guitar",id:"004",isPlay:!1,url:"assets/audio/electric guitar coutry slide 120bpm - B.mp3",audio:new Audio(n("6c2d"))},{name:"stompy slosh",id:"005",isPlay:!1,url:"assets/audio/FUD_120_StompySlosh.mp3",audio:new Audio(n("df30"))},{name:"groove tanggu",id:"006",isPlay:!1,url:"assets/audio/GrooveB_120bpm_Tanggu.mp3",audio:new Audio(n("0de5"))},{name:"maze politics",id:"007",isPlay:!1,url:"assets/audio/MazePolitics_120_Perc.mp3",audio:new Audio(n("ea9f"))},{name:"pas groove",id:"008",isPlay:!1,url:"assets/audio/PAS3GROOVE1.03B.mp3",audio:new Audio(n("dced"))},{name:"silent star",id:"009",isPlay:!1,url:"assets/audio/SilentStar_120_Em_OrganSynth.mp3",audio:new Audio(n("f4cd"))}]),B={query:M,playSound:C,stopSound:R};function M(){return F.apply(this,arguments)}function F(){return F=Object(T["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log($,"sounds"),t.abrupt("return",$);case 2:case"end":return t.stop()}}),t)}))),F.apply(this,arguments)}function C(t){t.forEach((function(t){t.audio.pause(),t.audio.currentTime=0,t.audio.play()}))}function R(t){t.forEach((function(t){console.log(t,"stop"),t.audio.pause(),t.audio.currentTime=0}))}o["a"].use(E["a"]);var G=new E["a"].Store({state:{sounds:null,interval:null,isPlay:!1,soundsToPlay:[]},getters:{sounds:function(t){return t.sounds},isPlay:function(t){return t.isPlay}},mutations:{getSounds:function(t,e){var n=e.sounds;t.sounds=n},setAudio:function(t,e){var n=e.pads;t.soundsToPlay=n},playSound:function(t){t.soundsToPlay.length&&(t.isPlay=!0,B.playSound(t.soundsToPlay),t.interval=setInterval((function(){t.soundsToPlay.length&&B.playSound(t.soundsToPlay)}),8e3))},stopSound:function(t){t.isPlay=!1,B.stopSound(t.soundsToPlay),clearInterval(t.interval)}},actions:{getSounds:function(t){return Object(T["a"])(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,B.query();case 4:return o=e.sent,n({type:"getSounds",sounds:o}),e.abrupt("return",o);case 9:throw e.prev=9,e.t0=e["catch"](1),console.log("Cannot load sounds"),e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))()}}});n("3c61");o["a"].config.productionTip=!1,new o["a"]({store:G,render:function(t){return t(j)}}).$mount("#app")},"6c2d":function(t,e,n){t.exports=n.p+"media/electric guitar coutry slide 120bpm - B.14c5bdf8.mp3"},d39d:function(t,e,n){t.exports=n.p+"media/120_stutter_breakbeats_16.8c298669.mp3"},dced:function(t,e,n){t.exports=n.p+"media/PAS3GROOVE1.03B.4a48ae8c.mp3"},df30:function(t,e,n){t.exports=n.p+"media/FUD_120_StompySlosh.75591530.mp3"},ea9f:function(t,e,n){t.exports=n.p+"media/MazePolitics_120_Perc.feb93502.mp3"},f4cd:function(t,e,n){t.exports=n.p+"media/SilentStar_120_Em_OrganSynth.d1e8bea8.mp3"},f7f9:function(t,e,n){t.exports=n.p+"media/Bass Warwick heavy funk groove on E 120 BPM.7eea86a4.mp3"}});
//# sourceMappingURL=app.6d5314c6.js.map