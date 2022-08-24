"use strict";(self.webpackChunkvirtual_keyboard=self.webpackChunkvirtual_keyboard||[]).push([[179],{807:()=>{const t={Backquote:["§","±",">","<"],Digit1:[1,"!","1","!"],Digit2:[2,"@","2",'"'],Digit3:[3,"#","3","№"],Digit4:[4,"$","4","%"],Digit5:[5,"%","5",":"],Digit6:[6,"^","6",","],Digit7:[7,"&","7","."],Digit8:[8,"*","8",";"],Digit9:[9,"(","9","("],Digit0:[0,")","0",")"],Minus:["-","_","-","_"],Equal:["=","+","=","+"],Backspace:["","","",""],Tab:["Tab","Tab","Tab","Tab"],KeyQ:["q","Q","й","Й"],KeyW:["w","W","ц","Ц"],KeyE:["e","E","у","У"],KeyR:["r","R","к","К"],KeyT:["t","T","е","Е"],KeyY:["y","Y","н","Н"],KeyU:["u","U","г","Г"],KeyI:["i","I","ш","Ш"],KeyO:["o","O","щ","Щ"],KeyP:["p","P","з","З"],BracketLeft:["[","{","х","Х"],BracketRight:["]","}","ъ","Ъ"],Backslash:["\\","|","ё","Ё"],CapsLock:["","","",""],KeyA:["a","A","ф","Ф"],KeyS:["s","S","ы","Ы"],KeyD:["d","D","в","В"],KeyF:["f","F","а","А"],KeyG:["g","G","п","П"],KeyH:["h","H","р","Р"],KeyJ:["j","J","о","О"],KeyK:["k","K","л","Л"],KeyL:["l","L","д","Д"],Semicolon:[";",":","ж","Ж"],Quote:["'",'"',"э","Э"],Enter:["\n","\n","\n","\n"],ShiftLeft:["","","",""],IntlBackslash:["`","~","]","["],KeyZ:["z","Z","я","Я"],KeyX:["x","X","ч","Ч"],KeyC:["c","C","с","С"],KeyV:["v","V","м","М"],KeyB:["b","B","и","И"],KeyN:["n","N","т","Т"],KeyM:["m","M","ь","Ь"],Comma:[",","<","б","Б"],Period:[".",">","ю","Ю"],Slash:["/","?","/","?"],ShiftRight:["","","",""],ControlLeft:["control","control","control","control"],AltLeft:["","","",""],MetaLeft:["command","command","command","command"],Space:[" "," "," "," "],MetaRight:["command","command","command","command"],AltRight:["option","option","option","option"],ArrowLeft:["left","left","left","left"],ArrowUp:["up","up","up","up"],ArrowDown:["down","down","down","up"],ArrowRight:["right","right","right","up"]},e=function(e){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=0;i&&(r=13);for(var s=document.querySelectorAll(".key");r<s.length;r+=1){var o=s[r].className.split(" ")[1];s[r].textContent=t[o][e]}};var i=!0;const r={optionFlag:!1,register:0,capsLockFlag:!1,capsLock:function(){this.capsLockFlag=!this.capsLockFlag},action:function(t,r){"CapsLock"!==t||"keydown"!==r&&"keyup"!==r&&"mousedown"!==r||(this.capsLock(),this.capsLockFlag?(document.querySelector(".".concat(t)).classList.add("active"),0===this.register&&(this.register=1,e(this.register)),2===this.register&&(this.register=3,e(this.register))):(document.querySelector(".".concat(t)).classList.remove("active"),1===this.register?(this.register=0,e(this.register)):(this.register=2,e(this.register)))),"keydown"===r&&("ShiftLeft"!==t&&"ShiftRight"!==t||(0===this.register&&(this.register=1,e(this.register)),2===this.register&&(this.register=3,e(this.register))),"AltLeft"!==t&&"AltRight"!==t||(this.optionFlag=!0),this.optionFlag&&"Space"===t&&2!==this.register&&(this.register=2,e(this.register)),this.optionFlag&&"Space"===t&&2===this.register&&(i=!i)&&(this.register=0,e(this.register))),"keyup"===r&&("ShiftLeft"!==t&&"ShiftRight"!==t||(1===this.register?(this.register=0,e(this.register)):(this.register=2,e(this.register))),"AltLeft"!==t&&"AltRight"!==t||(this.optionFlag=!1)),"mousedown"===r&&("ShiftLeft"!==t&&"ShiftRight"!==t||(0===this.register&&(this.register=1,e(this.register)),2===this.register&&(this.register=3,e(this.register)))),"mouseup"===r&&("ShiftLeft"!==t&&"ShiftRight"!==t||(1===this.register&&(this.register=0,e(this.register)),3===this.register&&(this.register=2,e(this.register))))}};function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var o=document.createElement("textarea");o.classList.add("text-area");var n="",a=document.createElement("div");a.classList.add("key-board"),Object.keys(t).forEach((function(e){var i,c,h,g,l=document.createElement("div");(i=l.classList).add.apply(i,["key",e].concat((g=[],"Backspace"===(h=e)&&g.push("key__backspace","font-size-zero"),"Tab"===h&&g.push("key__tab","font-size-zero"),"CapsLock"===h&&g.push("key__capslock","font-size-zero"),"Enter"===h&&g.push("key__enter","font-size-zero"),"ShiftLeft"===h&&g.push("key__shift-left","font-size-zero"),"ShiftRight"===h&&g.push("key__shift-right","font-size-zero"),"MetaLeft"!==h&&"MetaRight"!==h||g.push("key__alt"),"Space"===h&&g.push("key__space","font-size-zero"),"ArrowRight"!==h&&"ArrowLeft"!==h||g.push("key__arrow-bottom","font-size-zero"),"ArrowUp"===h&&g.push("key__arrow-up","font-size-zero"),"ArrowDown"===h&&g.push("key__arrow-down","font-size-zero"),function(t){if(Array.isArray(t))return s(t)}(c=g)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(c)||function(t,e){if(t){if("string"==typeof t)return s(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?s(t,e):void 0}}(c)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()))),l.textContent=t[e][0],l.addEventListener("mousedown",(function(){"CapsLock"!==e&&l.classList.add("active"),n+=l.textContent,"Backspace"===e&&(n=n.slice(0,n.length-1)),o.textContent=n,r.action(e,"mousedown")})),l.addEventListener("mouseup",(function(){"CapsLock"!==e&&l.classList.remove("active"),r.action(e,"mouseup")})),a.append(l)})),window.addEventListener("keydown",(function(e){"CapsLock"!==e.code&&a.querySelector(".".concat(e.code)).classList.add("active"),n+=t[e.code][r.register],"Backspace"===e.code&&(n=n.slice(0,n.length-1)),o.textContent=n,r.action(e.code,"keydown")})),window.addEventListener("keyup",(function(t){a.querySelector(".".concat(t.code)).classList.remove("active"),r.action(t.code,"keyup")})),document.querySelector("#root").append(o,a)}},t=>{t(t.s=807)}]);