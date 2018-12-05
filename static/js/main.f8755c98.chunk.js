(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(30)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),c=a.n(r),s=(a(14),a(2)),i=a(3),l=a(5),u=a(4),d=a(6),m=a(1),p=(a(16),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).playSound=a.playSound.bind(Object(m.a)(Object(m.a)(a))),a.handleKeyPress=a.handleKeyPress.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"playSound",value:function(){var e=document.getElementById(this.props.keyPushed);"play"===this.props.dataFromDeck&&e.play()}},{key:"handleKeyPress",value:function(e){e.keyCode===this.props.keyCode&&this.playSound()}},{key:"render",value:function(){return o.a.createElement("button",{id:this.props.keyPushed,className:"drum-pad btn-drum",onClick:this.playSound},this.props.keyPushed,o.a.createElement("audio",{className:"clip",id:this.props.keyPushed,src:this.props.url}))}}]),t}(n.Component)),h=(a(18),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={pad:[{id:1,keyPushed:"Q",keyCode:81,name:"heater 1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{id:2,keyPushed:"W",keyCode:87,name:"heater 2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{id:3,keyPushed:"E",keyCode:82,name:"heater 3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{id:4,keyPushed:"A",keyCode:65,name:"Chord_1",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},{id:5,keyPushed:"S",keyCode:83,name:"clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{id:6,keyPushed:"D",keyCode:68,name:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{id:7,keyPushed:"Z",keyCode:90,name:"Chord_2",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},{id:8,keyPushed:"X",keyCode:88,name:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{id:9,keyPushed:"C",keyCode:67,name:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"deck"},this.state.pad.map(function(t){return o.a.createElement(p,{key:t.id,dataFromDeck:e.props.dataFromApp,url:t.url,keyPushed:t.keyPushed})}))}}]),t}(n.Component)),b=(a(20),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"display"},o.a.createElement("ul",{className:this.props.dataFromControl},o.a.createElement("li",null,"id: 1"),o.a.createElement("li",null,"clip name: pad name")))}}]),t}(n.Component)),y=(a(22),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={isToggleOn:!1},a.powerToggle=a.powerToggle.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"powerToggle",value:function(){this.props.onPowerClick(),this.setState(function(e){return{isToggleOn:!e.isToggleOn}})}},{key:"render",value:function(){return o.a.createElement("div",{id:"btn-power-container"},o.a.createElement("label",{htmlFor:"btn-power"},"Power"),o.a.createElement("input",{type:"button",id:"btn-power",className:this.state.isToggleOn?"power-on":"power-off",onClick:this.powerToggle}),o.a.createElement("span",null))}}]),t}(n.Component)),k=(a(24),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("input",{type:"range",step:"0.01",min:"0",max:"1"})}}]),t}(n.Component)),f=(a(26),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).powerClicked=function(){e.props.onControlsClick(),"hide"===e.state.controlData?e.setState({controlData:"show"}):e.setState({controlData:"hide"})},e.state={controlData:"hide"},e.powerClicked=e.powerClicked.bind(Object(m.a)(Object(m.a)(e))),e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"controls"},o.a.createElement(b,{dataFromControl:this.state.controlData}),o.a.createElement(y,{onPowerClick:this.powerClicked}),o.a.createElement(k,null))}}]),t}(n.Component)),O=(a(28),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={audio:"pause",dataFromGP:"g-p"},a.audioToggle=a.audioToggle.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"audioToggle",value:function(){"pause"===this.state.audio?(this.setState({audio:"play"}),console.log("Power is on, play")):(this.setState({audio:"pause"}),console.log("Power is off, pause"))}},{key:"render",value:function(){return o.a.createElement("div",{className:"App",id:"drum-machine"},o.a.createElement("header",null,o.a.createElement("h1",null,"Pad Controller")),o.a.createElement("div",{className:"pad-controller"},o.a.createElement("div",{className:"left-flex"},o.a.createElement(f,{onControlsClick:this.audioToggle})),o.a.createElement("div",{className:"right-flex"},o.a.createElement(h,{dataFromApp:this.state.audio}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.f8755c98.chunk.js.map