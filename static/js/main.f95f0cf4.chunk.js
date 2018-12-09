(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(28)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),s=a.n(o),d=(a(14),a(2)),l=a(3),c=a(6),i=a(4),p=a(5),m=a(1),u=(a(16),function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).playSoundHandler=function(){var e=document.getElementById(a.props.keyPushed);a.props.displayGrandParent(e.id,e.innerText),a.props.dataFromDeck&&e.play()},a.playSoundHandler=a.playSoundHandler.bind(Object(m.a)(Object(m.a)(a))),a.handleKeyPress=a.handleKeyPress.bind(Object(m.a)(Object(m.a)(a))),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress)}},{key:"handleKeyPress",value:function(e){e.keyCode===this.props.keyCode&&this.playSoundHandler()}},{key:"render",value:function(){return r.a.createElement("button",{id:this.props.keyId,className:"drum-pad btn-drum",onClick:this.playSoundHandler},this.props.keyPushed,r.a.createElement("audio",{className:"clip",id:this.props.keyPushed,src:this.props.url},this.props.keyName))}}]),t}(n.Component)),h=(a(18),function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).handleParentProps=function(){return a.props.handlerDisplayFromParent()},a.state={pad:[{id:1,keyPushed:"Q",keyCode:81,name:"heater 1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{id:2,keyPushed:"W",keyCode:87,name:"heater 2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{id:3,keyPushed:"E",keyCode:69,name:"heater 3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{id:4,keyPushed:"A",keyCode:65,name:"Chord_1",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},{id:5,keyPushed:"S",keyCode:83,name:"clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{id:6,keyPushed:"D",keyCode:68,name:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{id:7,keyPushed:"Z",keyCode:90,name:"Chord_2",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},{id:8,keyPushed:"X",keyCode:88,name:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{id:9,keyPushed:"C",keyCode:67,name:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}]},a.handleParentProps=a.handleParentProps.bind(Object(m.a)(Object(m.a)(a))),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"deck"},this.state.pad.map(function(t){return r.a.createElement(u,{key:t.id,keyId:t.id,keyName:t.name,dataFromDeck:e.props.dataFromApp,url:t.url,keyPushed:t.keyPushed,keyCode:t.keyCode,displayGrandParent:e.props.handlerDisplayFromGrandParent})}))}}]),t}(n.Component)),y=(a(20),function(e){return r.a.createElement("div",{id:"display"},r.a.createElement("ul",{className:e.dataFromControl},r.a.createElement("li",null,"key: ",e.displayId),r.a.createElement("li",null,"sound: ",e.displayName)))}),k=(a(22),function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).state={isToggleOn:!1},a.powerToggle=a.powerToggle.bind(Object(m.a)(Object(m.a)(a))),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"powerToggle",value:function(){this.props.onPowerClick(),this.setState(function(e){return{isToggleOn:!e.isToggleOn}})}},{key:"render",value:function(){return r.a.createElement("div",{id:"btn-power-container"},r.a.createElement("label",{htmlFor:"btn-power"},"Power"),r.a.createElement("input",{type:"button",id:"btn-power",className:this.state.isToggleOn?"power-on":"power-off",onClick:this.powerToggle}),r.a.createElement("span",null))}}]),t}(n.Component)),b=(a(24),function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(c.a)(this,Object(i.a)(t).call(this))).powerClicked=function(){e.props.onControlsClick(),"hide"===e.state.controlData?e.setState({controlData:"show"}):e.setState({controlData:"hide"})},e.displayName=function(){return e.props.onControlsClick()},e.state={controlData:"hide"},e.powerClicked=e.powerClicked.bind(Object(m.a)(Object(m.a)(e))),e}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"controls"},r.a.createElement(y,{dataFromControl:this.state.controlData,displayName:this.props.onDisplayName,displayId:this.props.onDisplayId}),r.a.createElement(k,{onPowerClick:this.powerClicked}))}}]),t}(n.Component)),f=(a(26),function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).togglePowerHandler=function(){var e=a.state.power;a.setState({power:!e})},a.displayHandler=function(e,t){return a.setState({displayId:e,displayName:t})},a.state={power:!1,displayName:"",displayId:""},a.togglePowerHandler=a.togglePowerHandler.bind(Object(m.a)(Object(m.a)(a))),a.displayHandler=a.displayHandler.bind(Object(m.a)(Object(m.a)(a))),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App",id:"drum-machine"},r.a.createElement("header",null,r.a.createElement("h1",null,"Pad Controller")),r.a.createElement("div",{className:"pad-controller"},r.a.createElement("div",{className:"left-flex"},r.a.createElement(b,{onControlsClick:this.togglePowerHandler,onDisplayName:this.state.displayName,onDisplayId:this.state.displayId})),r.a.createElement("div",{className:"right-flex"},r.a.createElement(h,{dataFromApp:this.state.power,handlerDisplayFromGrandParent:this.displayHandler}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.f95f0cf4.chunk.js.map