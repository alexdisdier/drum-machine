(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(32)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),l=(a(14),a(1)),i=a(2),u=a(4),m=a(3),s=a(5),p=a(6),d=(a(16),a(18),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={pad:[{key:"Q",name:"heater 1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{key:"W",name:"heater 2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{key:"E",name:"heater 3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{key:"A",name:"heater 4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{key:"S",name:"heater 5",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{key:"D",name:"heater 6",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{key:"Z",name:"heater 7",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{key:"X",name:"heater 8",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{key:"C",name:"heater 9",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"}]},a.playSound=a.playSound.bind(Object(p.a)(Object(p.a)(a))),a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"playSound",value:function(e){var t=document.getElementById("Q");console.log(t),t.play()}},{key:"render",value:function(){var e=this;return this.state.pad.map(function(t){return r.a.createElement("button",{className:"drum-pad btn-drum",onClick:e.playSound},t.key,r.a.createElement("audio",{key:t+1,className:"clip",id:t.key,src:t.url}))})}}]),t}(n.Component)),h=(a(20),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"deck"},r.a.createElement(d,null))}}]),t}(n.Component)),b=(a(22),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"display"},r.a.createElement("ul",null,r.a.createElement("li",null,"id: 1"),r.a.createElement("li",null,"clip name: pad name")))}}]),t}(n.Component)),f=(a(24),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={switch:!1},a.powerSwitch=a.powerSwitch.bind(Object(p.a)(Object(p.a)(a))),a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"powerSwitch",value:function(){this.state.switch?this.setState({switch:!1}):this.setState({switch:!0})}},{key:"render",value:function(){var e={background:"#7B7C78"};return this.state.switch&&(e.background="linear-gradient(orange, 80%, yellow)"),r.a.createElement("div",{id:"btn-power-container"},r.a.createElement("label",{htmlFor:"btn-power"},"Power"),r.a.createElement("input",{type:"button",id:"btn-power",style:e,onClick:this.powerSwitch}))}}]),t}(n.Component)),j=(a(26),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("input",{type:"range",step:"0.01",min:"0",max:"1"})}}]),t}(n.Component)),w=(a(28),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"controls"},r.a.createElement(b,null),r.a.createElement(f,null),r.a.createElement(j,null))}}]),t}(n.Component)),y=(a(30),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App",id:"drum-machine"},r.a.createElement("header",null,r.a.createElement("h1",null,"Pad Controller")),r.a.createElement("div",{className:"pad-controller"},r.a.createElement("div",{className:"left-flex"},r.a.createElement(w,null)),r.a.createElement("div",{className:"right-flex"},r.a.createElement(h,null))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.fc352dc2.chunk.js.map