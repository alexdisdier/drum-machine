(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(28)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),s=a.n(r),i=(a(14),a(2)),d=a(3),c=a(6),l=a(4),u=a(5),p=a(1),m=(a(16),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).playSound=function(){var e=document.getElementById(a.props.keyPushed);a.props.displayGrandParent(e.id,e.innerText),"play"===a.props.dataFromDeck&&e.play()},a.playSound=a.playSound.bind(Object(p.a)(Object(p.a)(a))),a.handleKeyPress=a.handleKeyPress.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress)}},{key:"handleKeyPress",value:function(e){e.keyCode===this.props.keyCode&&this.playSound()}},{key:"render",value:function(){return o.a.createElement("button",{id:this.props.keyId,className:"drum-pad btn-drum",onClick:this.playSound},this.props.keyPushed,o.a.createElement("audio",{className:"clip",id:this.props.keyPushed,src:this.props.url},this.props.keyName))}}]),t}(n.Component)),h=(a(18),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).handleParentProps=function(){return a.props.handlerDisplayFromParent()},a.state={pad:[{id:1,keyPushed:"Q",keyCode:81,name:"heater 1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{id:2,keyPushed:"W",keyCode:87,name:"heater 2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{id:3,keyPushed:"E",keyCode:69,name:"heater 3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{id:4,keyPushed:"A",keyCode:65,name:"Chord_1",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},{id:5,keyPushed:"S",keyCode:83,name:"clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{id:6,keyPushed:"D",keyCode:68,name:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{id:7,keyPushed:"Z",keyCode:90,name:"Chord_2",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},{id:8,keyPushed:"X",keyCode:88,name:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{id:9,keyPushed:"C",keyCode:67,name:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}]},a.handleParentProps=a.handleParentProps.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"deck"},this.state.pad.map(function(t){return o.a.createElement(m,{key:t.id,keyId:t.id,keyName:t.name,dataFromDeck:e.props.dataFromApp,url:t.url,keyPushed:t.keyPushed,keyCode:t.keyCode,displayGrandParent:e.props.handlerDisplayFromGrandParent})}))}}]),t}(n.Component)),y=(a(20),function(e){return o.a.createElement("div",{id:"display"},o.a.createElement("ul",{className:e.dataFromControl},o.a.createElement("li",null,"key: ",e.displayId),o.a.createElement("li",null,"sound: ",e.displayName)))}),k=(a(22),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).state={isToggleOn:!1},a.powerToggle=a.powerToggle.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"powerToggle",value:function(){this.props.onPowerClick(),this.setState(function(e){return{isToggleOn:!e.isToggleOn}})}},{key:"render",value:function(){return o.a.createElement("div",{id:"btn-power-container"},o.a.createElement("label",{htmlFor:"btn-power"},"Power"),o.a.createElement("input",{type:"button",id:"btn-power",className:this.state.isToggleOn?"power-on":"power-off",onClick:this.powerToggle}),o.a.createElement("span",null))}}]),t}(n.Component)),b=(a(24),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(l.a)(t).call(this))).powerClicked=function(){e.props.onControlsClick(),"hide"===e.state.controlData?e.setState({controlData:"show"}):e.setState({controlData:"hide"})},e.displayName=function(){return e.props.onControlsClick()},e.state={controlData:"hide"},e.powerClicked=e.powerClicked.bind(Object(p.a)(Object(p.a)(e))),e}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"controls"},o.a.createElement(y,{dataFromControl:this.state.controlData,displayName:this.props.onDisplayName,displayId:this.props.onDisplayId}),o.a.createElement(k,{onPowerClick:this.powerClicked}))}}]),t}(n.Component)),f=(a(26),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).audioToggle=function(){"pause"===a.state.audio?a.setState({audio:"play"}):a.setState({audio:"pause"})},a.displayHandler=function(e,t){return a.setState({displayId:e,displayName:t})},a.state={audio:"pause",displayName:"",displayId:""},a.audioToggle=a.audioToggle.bind(Object(p.a)(Object(p.a)(a))),a.displayHandler=a.displayHandler.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App",id:"drum-machine"},o.a.createElement("header",null,o.a.createElement("h1",null,"Pad Controller")),o.a.createElement("div",{className:"pad-controller"},o.a.createElement("div",{className:"left-flex"},o.a.createElement(b,{onControlsClick:this.audioToggle,onDisplayName:this.state.displayName,onDisplayId:this.state.displayId})),o.a.createElement("div",{className:"right-flex"},o.a.createElement(h,{dataFromApp:this.state.audio,handlerDisplayFromGrandParent:this.displayHandler}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.b9181ebe.chunk.js.map