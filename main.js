!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t),n.d(t,"cardPopup",(function(){return F}));var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.getElementById(t),this.handleEscClose=this._handleEscClose.bind(this)}var t,n,o;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keyup",this.handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keyup",this.handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){t.target.closest(".popup__container")||e.close()})),this._popup.querySelector(".popup__close").addEventListener("click",(function(){e.close()}))}}])&&r(t.prototype,n),o&&r(t,o),e}();function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(a,e);var t,n,r,o=l(a);function a(){return i(this,a),o.apply(this,arguments)}return t=a,(n=[{key:"openCard",value:function(e){u(p(a.prototype),"open",this).call(this),this._popup.querySelector(".circle-chart-circle").animate([{strokeDasharray:100},{strokeDasharray:54}],{duration:800}),this._animateValue("voteCounter",0,e.votes,800)}},{key:"updatePopupInfo",value:function(e){this._popup.querySelector(".popup__heading").textContent=e.header,this._popup.querySelector(".popup__text").textContent=e.poem,this._popup.querySelector(".circle-chart-percentage").textContent=e.votes,this._popup.querySelector("#popupVoteName").textContent=e.author}},{key:"_animateValue",value:function(e,t,n,r){var o=document.getElementById(e),a=null;window.requestAnimationFrame((function e(i){a||(a=i);var s=Math.min((i-a)/r,1);o.innerHTML=Math.floor(s*(n-t)+t),s<1&&window.requestAnimationFrame(e)}))}},{key:"setEventListeners",value:function(){var e=this;u(p(a.prototype),"setEventListeners",this).call(this);var t=this._popup.querySelector(".popup__vote-button");t.addEventListener("click",(function(){e._popup.querySelector("#voteCounter").textContent++,t.disabled=!0,t.classList.add("button_disabled")}))}}])&&s(t.prototype,n),r&&s(t,r),a}(o);function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=n,this._inputList=Array.from(n.querySelectorAll(t.inputSelector)),this._button=n.querySelector(t.submitButtonSelector),this._buttonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass}var t,n,r;return t=e,(n=[{key:"enableSubmitButton",value:function(){this._button.classList.remove(this._buttonClass),this._button.disabled=!1}},{key:"disableSubmitButton",value:function(){this._button.classList.add(this._buttonClass),this._button.disabled=!0}},{key:"_showInputError",value:function(e,t){var n=this._form.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableSubmitButton():this.enableSubmitButton()}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"removeErrors",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&h(t.prototype,n),r&&h(t,r),e}();var v=[{header:"Бесплатная ночная электроэнергия для населения",poem:"Не мысля гордый свет забавить,\nВниманье дружбы возлюбя,\nХотел бы я тебе представить\nЗалог достойнее тебя,\nДостойнее души прекрасной,\nСвятой исполненной мечты,\nПоэзии живой и ясной,\nВысоких дум и простоты;\nНо так и быть — рукой пристрастной\nПрими собранье пестрых глав,\nПолусмешных, полупечальных,\nПростонародных, идеальных,\nНебрежный плод моих забав,\nБессонниц, легких вдохновений,\nНезрелых и увядших лет,\nУма холодных наблюдений\nИ сердца горестных замет.",dataTag:"welfare",votes:"2514",author:'Папуна Пипия (звукач сериала "Солдаты")'},{header:"Отказ от пластика, многоразовое использование стеклянной тары",poem:"Не мысля гордый свет забавить,\nВниманье дружбы возлюбя,\nХотел бы я тебе представить\nЗалог достойнее тебя,\nДостойнее души прекрасной,\nСвятой исполненной мечты,\nПоэзии живой и ясной,\nВысоких дум и простоты;\nНо так и быть — рукой пристрастной\nПрими собранье пестрых глав,\nПолусмешных, полупечальных,\nПростонародных, идеальных,\nНебрежный плод моих забав,\nБессонниц, легких вдохновений,\nНезрелых и увядших лет,\nУма холодных наблюдений\nИ сердца горестных замет.",dataTag:"plastic",votes:"754",author:"Какой-то Чел"},{header:"За отказ от мусоросжигания и за предотвращение образования отходов",poem:"Не мысля гордый свет забавить,\nВниманье дружбы возлюбя,\nХотел бы я тебе представить\nЗалог достойнее тебя,\nДостойнее души прекрасной,\nСвятой исполненной мечты,\nПоэзии живой и ясной,\nВысоких дум и простоты;\nНо так и быть — рукой пристрастной\nПрими собранье пестрых глав,\nПолусмешных, полупечальных,\nПростонародных, идеальных,\nНебрежный плод моих забав,\nБессонниц, легких вдохновений,\nНезрелых и увядших лет,\nУма холодных наблюдений\nИ сердца горестных замет.",dataTag:"garbage",votes:"648",author:"Пацанский Таз"},{header:"Ужесточить законы против жестокого обращения с животными",poem:"Не мысля гордый свет забавить,\nВниманье дружбы возлюбя,\nХотел бы я тебе представить\nЗалог достойнее тебя,\nДостойнее души прекрасной,\nСвятой исполненной мечты,\nПоэзии живой и ясной,\nВысоких дум и простоты;\nНо так и быть — рукой пристрастной\nПрими собранье пестрых глав,\nПолусмешных, полупечальных,\nПростонародных, идеальных,\nНебрежный плод моих забав,\nБессонниц, легких вдохновений,\nНезрелых и увядших лет,\nУма холодных наблюдений\nИ сердца горестных замет.",dataTag:"animals",votes:"325",author:"Сеня Лютый"},{header:"Ужесточить нормы выбросов углекислого газа для новых автомобилей до 95 г/км",poem:"Не мысля гордый свет забавить,\nВниманье дружбы возлюбя,\nХотел бы я тебе представить\nЗалог достойнее тебя,\nДостойнее души прекрасной,\nСвятой исполненной мечты,\nПоэзии живой и ясной,\nВысоких дум и простоты;\nНо так и быть — рукой пристрастной\nПрими собранье пестрых глав,\nПолусмешных, полупечальных,\nПростонародных, идеальных,\nНебрежный плод моих забав,\nБессонниц, легких вдохновений,\nНезрелых и увядших лет,\nУма холодных наблюдений\nИ сердца горестных замет.\nНе мысля гордый свет забавить,\nВниманье дружбы возлюбя,\nХотел бы я тебе представить\nЗалог достойнее тебя,\nДостойнее души прекрасной,\nСвятой исполненной мечты,\nПоэзии живой и ясной,\nВысоких дум и простоты;\nНо так и быть — рукой пристрастной\nПрими собранье пестрых глав,\nПолусмешных, полупечальных,\nПростонародных, идеальных,\nНебрежный плод моих забав,\nБессонниц, легких вдохновений,\nНезрелых и увядших лет,\nУма холодных наблюдений\nИ сердца горестных замет.",dataTag:"smoke",votes:"9343",author:"Михаил Павлович Терентьев"},{header:"Заменить реагенты на песок на тротуарах",poem:"Не мысля гордый свет забавить,\nВниманье дружбы возлюбя,\nХотел бы я тебе представить\nЗалог достойнее тебя,\nДостойнее души прекрасной,\nСвятой исполненной мечты,\nПоэзии живой и ясной,\nВысоких дум и простоты;\nНо так и быть — рукой пристрастной\nПрими собранье пестрых глав,\nПолусмешных, полупечальных,\nПростонародных, идеальных,\nНебрежный плод моих забав,\nБессонниц, легких вдохновений,\nНезрелых и увядших лет,\nУма холодных наблюдений\nИ сердца горестных замет.",dataTag:"welfare",votes:"5501",author:"Евгений Понасенков"},{header:"Сделать профессию уборщика и дворника высокооплачиваемой",poem:"Не мысля гордый свет забавить,\nВниманье дружбы возлюбя,\nХотел бы я тебе представить\nЗалог достойнее тебя,\nДостойнее души прекрасной,\nСвятой исполненной мечты,\nПоэзии живой и ясной,\nВысоких дум и простоты;\nНо так и быть — рукой пристрастной\nПрими собранье пестрых глав,\nПолусмешных, полупечальных,\nПростонародных, идеальных,\nНебрежный плод моих забав,\nБессонниц, легких вдохновений,\nНезрелых и увядших лет,\nУма холодных наблюдений\nИ сердца горестных замет.",dataTag:"welfare",votes:"2514",author:"Хабиб Нурмагомедов"},{header:"Организовать пункты выгоднооплачиваемого приема сортированного мусора",poem:"Не мысля гордый свет забавить,\nВниманье дружбы возлюбя,\nХотел бы я тебе представить\nЗалог достойнее тебя,\nДостойнее души прекрасной,\nСвятой исполненной мечты,\nПоэзии живой и ясной,\nВысоких дум и простоты;\nНо так и быть — рукой пристрастной\nПрими собранье пестрых глав,\nПолусмешных, полупечальных,\nПростонародных, идеальных,\nНебрежный плод моих забав,\nБессонниц, легких вдохновений,\nНезрелых и увядших лет,\nУма холодных наблюдений\nИ сердца горестных замет.",dataTag:"plastic",votes:"993",author:"Джо Роган"},{header:"Законодательно закрепить права домашних животных, ужесточить ответственность владельцев",poem:"Не мысля гордый свет забавить,\nВниманье дружбы возлюбя,\nХотел бы я тебе представить\nЗалог достойнее тебя,\nДостойнее души прекрасной,\nСвятой исполненной мечты,\nПоэзии живой и ясной,\nВысоких дум и простоты;\nНо так и быть — рукой пристрастной\nПрими собранье пестрых глав,\nПолусмешных, полупечальных,\nПростонародных, идеальных,\nНебрежный плод моих забав,\nБессонниц, легких вдохновений,\nНезрелых и увядших лет,\nУма холодных наблюдений\nИ сердца горестных замет.",dataTag:"animals",votes:"7369",author:"Илон Маск"},{header:"Запретить разведение и убийство животных ради меха и импорт меха",poem:"Не мысля гордый свет забавить,\nВниманье дружбы возлюбя,\nХотел бы я тебе представить\nЗалог достойнее тебя,\nДостойнее души прекрасной,\nСвятой исполненной мечты,\nПоэзии живой и ясной,\nВысоких дум и простоты;\nНо так и быть — рукой пристрастной\nПрими собранье пестрых глав,\nПолусмешных, полупечальных,\nПростонародных, идеальных,\nНебрежный плод моих забав,\nБессонниц, легких вдохновений,\nНезрелых и увядших лет,\nУма холодных наблюдений\nИ сердца горестных замет.",dataTag:"animals",votes:"1580",author:"Пашок Дуров"},{header:"Дополнить запреты курения в подъездах жилых домов",poem:"Не мысля гордый свет забавить,\nВниманье дружбы возлюбя,\nХотел бы я тебе представить\nЗалог достойнее тебя,\nДостойнее души прекрасной,\nСвятой исполненной мечты,\nПоэзии живой и ясной,\nВысоких дум и простоты;\nНо так и быть — рукой пристрастной\nПрими собранье пестрых глав,\nПолусмешных, полупечальных,\nПростонародных, идеальных,\nНебрежный плод моих забав,\nБессонниц, легких вдохновений,\nНезрелых и увядших лет,\nУма холодных наблюдений\nИ сердца горестных замет.\nНе мысля гордый свет забавить,\nВниманье дружбы возлюбя,\nХотел бы я тебе представить\nЗалог достойнее тебя,\nДостойнее души прекрасной,\nСвятой исполненной мечты,\nПоэзии живой и ясной,\nВысоких дум и простоты;\nНо так и быть — рукой пристрастной\nПрими собранье пестрых глав,\nПолусмешных, полупечальных,\nПростонародных, идеальных,\nНебрежный плод моих забав,\nБессонниц, легких вдохновений,\nНезрелых и увядших лет,\nУма холодных наблюдений\nИ сердца горестных замет.",dataTag:"welfare",votes:"13",author:"Артемий Лебедев"},{header:"Дополнение статьи 245 УК РФ «О жестоком обращении с животными",poem:"Не мысля гордый свет забавить,\nВниманье дружбы возлюбя,\nХотел бы я тебе представить\nЗалог достойнее тебя,\nДостойнее души прекрасной,\nСвятой исполненной мечты,\nПоэзии живой и ясной,\nВысоких дум и простоты;\nНо так и быть — рукой пристрастной\nПрими собранье пестрых глав,\nПолусмешных, полупечальных,\nПростонародных, идеальных,\nНебрежный плод моих забав,\nБессонниц, легких вдохновений,\nНезрелых и увядших лет,\nУма холодных наблюдений\nИ сердца горестных замет.",dataTag:"animals",votes:"1584",author:"Болотный Великан"},{header:"Бесплатная ночная электроэнергия для населения",poem:"Не мысля гордый свет забавить,\nВниманье дружбы возлюбя,\nХотел бы я тебе представить\nЗалог достойнее тебя,\nДостойнее души прекрасной,\nСвятой исполненной мечты,\nПоэзии живой и ясной,\nВысоких дум и простоты;\nНо так и быть — рукой пристрастной\nПрими собранье пестрых глав,\nПолусмешных, полупечальных,\nПростонародных, идеальных,\nНебрежный плод моих забав,\nБессонниц, легких вдохновений,\nНезрелых и увядших лет,\nУма холодных наблюдений\nИ сердца горестных замет.",dataTag:"welfare",votes:"2514",author:'Папуна Пипия (звукач сериала "Солдаты")'},{header:"Отказ от пластика, многоразовое использование стеклянной тары",poem:"Не мысля гордый свет забавить,\nВниманье дружбы возлюбя,\nХотел бы я тебе представить\nЗалог достойнее тебя,\nДостойнее души прекрасной,\nСвятой исполненной мечты,\nПоэзии живой и ясной,\nВысоких дум и простоты;\nНо так и быть — рукой пристрастной\nПрими собранье пестрых глав,\nПолусмешных, полупечальных,\nПростонародных, идеальных,\nНебрежный плод моих забав,\nБессонниц, легких вдохновений,\nНезрелых и увядших лет,\nУма холодных наблюдений\nИ сердца горестных замет.",dataTag:"plastic",votes:"754",author:"Какой-то Чел"},{header:"За отказ от мусоросжигания и за предотвращение образования отходов",poem:"Не мысля гордый свет забавить,\nВниманье дружбы возлюбя,\nХотел бы я тебе представить\nЗалог достойнее тебя,\nДостойнее души прекрасной,\nСвятой исполненной мечты,\nПоэзии живой и ясной,\nВысоких дум и простоты;\nНо так и быть — рукой пристрастной\nПрими собранье пестрых глав,\nПолусмешных, полупечальных,\nПростонародных, идеальных,\nНебрежный плод моих забав,\nБессонниц, легких вдохновений,\nНезрелых и увядших лет,\nУма холодных наблюдений\nИ сердца горестных замет.",dataTag:"garbage",votes:"648",author:"Пацанский Таз"},{header:"Ужесточить законы против жестокого обращения с животными",poem:"Не мысля гордый свет забавить,\nВниманье дружбы возлюбя,\nХотел бы я тебе представить\nЗалог достойнее тебя,\nДостойнее души прекрасной,\nСвятой исполненной мечты,\nПоэзии живой и ясной,\nВысоких дум и простоты;\nНо так и быть — рукой пристрастной\nПрими собранье пестрых глав,\nПолусмешных, полупечальных,\nПростонародных, идеальных,\nНебрежный плод моих забав,\nБессонниц, легких вдохновений,\nНезрелых и увядших лет,\nУма холодных наблюдений\nИ сердца горестных замет.",dataTag:"animals",votes:"325",author:"Сеня Лютый"},{header:"Ужесточить нормы выбросов углекислого газа для новых автомобилей до 95 г/км",poem:"Не мысля гордый свет забавить,\nВниманье дружбы возлюбя,\nХотел бы я тебе представить\nЗалог достойнее тебя,\nДостойнее души прекрасной,\nСвятой исполненной мечты,\nПоэзии живой и ясной,\nВысоких дум и простоты;\nНо так и быть — рукой пристрастной\nПрими собранье пестрых глав,\nПолусмешных, полупечальных,\nПростонародных, идеальных,\nНебрежный плод моих забав,\nБессонниц, легких вдохновений,\nНезрелых и увядших лет,\nУма холодных наблюдений\nИ сердца горестных замет.\nНе мысля гордый свет забавить,\nВниманье дружбы возлюбя,\nХотел бы я тебе представить\nЗалог достойнее тебя,\nДостойнее души прекрасной,\nСвятой исполненной мечты,\nПоэзии живой и ясной,\nВысоких дум и простоты;\nНо так и быть — рукой пристрастной\nПрими собранье пестрых глав,\nПолусмешных, полупечальных,\nПростонародных, идеальных,\nНебрежный плод моих забав,\nБессонниц, легких вдохновений,\nНезрелых и увядших лет,\nУма холодных наблюдений\nИ сердца горестных замет.",dataTag:"smoke",votes:"9343",author:"Михаил Павлович Терентьев"},{header:"Заменить реагенты на песок на тротуарах",poem:"Не мысля гордый свет забавить,\nВниманье дружбы возлюбя,\nХотел бы я тебе представить\nЗалог достойнее тебя,\nДостойнее души прекрасной,\nСвятой исполненной мечты,\nПоэзии живой и ясной,\nВысоких дум и простоты;\nНо так и быть — рукой пристрастной\nПрими собранье пестрых глав,\nПолусмешных, полупечальных,\nПростонародных, идеальных,\nНебрежный плод моих забав,\nБессонниц, легких вдохновений,\nНезрелых и увядших лет,\nУма холодных наблюдений\nИ сердца горестных замет.",dataTag:"welfare",votes:"5501",author:"Евгений Понасенков"}],_=document.getElementById("about"),y=document.querySelector(".add-initiative__show-hint"),b=document.getElementById("searchPoem"),g=document.getElementById("refreshList"),E=document.getElementById("inputPoem"),S=document.getElementById("poemList"),w=(document.querySelector(".poem__default-item"),document.getElementById("poemTextarea")),L=document.getElementById("categories"),k=document.querySelector(".cards"),C=document.querySelector(".header__userpic"),T=document.querySelector(".header__menu"),x=document.querySelector(".initiatives__arrow_left"),q=document.querySelector(".initiatives__arrow_right"),I=document.getElementById("initiativeForm");function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t,n){var r=t.data,o=r.header,a=r.poem,i=r.dataTag,s=r.votes,u=t.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._header=o,this._poem=a,this._dataTag=i,this._votes=s,this._handleCardClick=u,this._cardTemplate=n}var t,n,r;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplate).content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._element.querySelector(".card__heading").textContent=this._header,this._element.querySelector(".card__text").textContent=this._poem,this._element.querySelector(".card__vote-counter").textContent=this._votes,this._element.dataset.tags=this._dataTag,this._setEventListeners(),this._element}},{key:"_toggleLikestate",value:function(){var e=this._element.querySelector(".card__button"),t=this._element.querySelector(".card__like-counter");e.classList.contains("card__button_like_state_posted")?t.textContent--:t.textContent++,e.classList.toggle("card__button_like_state_posted")}},{key:"cardClick",value:function(){this._handleCardClick()}},{key:"_setEventListeners",value:function(){var e=this;this._element.addEventListener("click",(function(){e.cardClick()}))}}])&&P(t.prototype,n),r&&P(t,r),e}();function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var B=function(){function e(t,n,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._author=t.author,this._text=t.text,this._poemTemplate=n,this._externalStr=r,this._inputSelector=o}var t,n,r;return t=e,(n=[{key:"_getTemplate",value:function(){return document.getElementById(this._poemTemplate).content.querySelector(".poem__list-item").cloneNode(!0)}},{key:"generateItem",value:function(){return this._element=this._getTemplate(),this._element.querySelector(".poem__name").textContent=this._name,this._element.querySelector(".poem__author").textContent=this._author,this._styleStr(this._externalStr),this._copyText(this._externalStr,this._inputSelector),this._element.querySelector(".poem__text").innerHTML=this._text,this._element}},{key:"_styleStr",value:function(e){this._text=this._text.replace(e,'<span class="highlighted-word">'.concat(e,"</span>"))}},{key:"_copyText",value:function(e,t){var n=this;this._element.querySelector(".poem__button").addEventListener("click",(function(){n._text=n._text.replace('<span class="highlighted-word">'.concat(e,"</span>"),e),t.append(n._text)}))}}])&&j(t.prototype,n),r&&j(t,r),e}();function A(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return M(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw a}}}}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var R=function(e){var t=new O({data:e,handleCardClick:function(){F.openCard(e),F.updatePopupInfo(e)}},"#cardTemplate").generateCard();k.append(t)};function D(e,t,n,r){return new B(e,t,n,r).generateItem()}document.querySelectorAll('a[href^="#"').forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var t=this.getAttribute("href").substring(1),n=document.getElementById(t).getBoundingClientRect().top-0;window.scrollBy({top:n,behavior:"smooth"})}))}));var V=0,H=new o("aboutPopup");H.setEventListeners();var N=new o("hintPopup");N.setEventListeners();var F=new f("initiativePopup");F.setEventListeners();var z=new m({formSelector:".new-initiative__form",inputSelector:".new-initiative__input",submitButtonSelector:".new-initiative__submit",inactiveButtonClass:"button_disabled",inputErrorClass:"new-initiative__input_data_error",errorClass:"new-initiative__error_visible"},I);function G(e,t){k.innerHTML="",e.slice(V,V+6).forEach((function(e){R(e)})),V>=e.length-6||0===V?(t.disabled=!0,t.classList.add("initiatives__arrow_disabled")):(t.disabled=!1,t.classList.remove("initiatives__arrow_disabled"))}z.enableValidation(),z.disableSubmitButton(),L.onchange=function(){!function(e){var t,n=A(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;r.dataset.tags===categories.value||""===categories.value?(r.style.opacity="1",r.style.filter="grayscale(0)"):(r.style.opacity=".3",r.style.filter="grayscale(100%)")}}catch(e){n.e(e)}finally{n.f()}}(U)},v.slice(0,6).forEach((function(e){R(e)}));var U=document.querySelectorAll(".card");b.addEventListener("click",(function(e){e.preventDefault(),S.classList.add("display-item");var t,n=E.value;b.classList.add("button_disabled"),b.disabled=!0,(t=n,fetch("https://www.buymebuyme.xyz/?q=%20".concat(t,"%20"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return Promise.reject("Ошибка: ".concat(e.status," - ").concat(e.statusText))}))).then((function(e){if(e.length>0)for(var t=0;t<e.length;t++){var r=D(e[t].fields,"poemTemplate",n,w);S.append(r)}else S.innerHTML='<li class="poem__default-item display-item">\n            К сожалению, по данному запросу ничего не найдено.\n          </li>'})).catch((function(e){console.log(e)}))})),document.addEventListener("click",(function(e){e.target===C?T.classList.add("display-item"):T.classList.remove("display-item")})),g.addEventListener("click",(function(){S.innerHTML="",searchPoem.classList.remove("button_disabled"),searchPoem.disabled=!1,poemList.classList.remove("display-item")})),_.addEventListener("click",(function(){H.open()})),y.addEventListener("mouseover",(function(){N.open()})),y.addEventListener("mouseout",(function(){N.close()})),x.addEventListener("click",(function(){V-=6,G(v,x),q.disabled=!1,q.classList.remove("initiatives__arrow_disabled"),U=document.querySelectorAll(".card")})),q.addEventListener("click",(function(){V+=6,G(v,q),x.disabled=!1,x.classList.remove("initiatives__arrow_disabled"),U=document.querySelectorAll(".card")})),I.addEventListener("submit",(function(e){var t,n;e.preventDefault(),w.textContent="",v.unshift((t=I.querySelectorAll(".new-initiative__input"),n={votes:0,dataTag:"N/A"},t.forEach((function(e){return n[e.name]=e.value})),n)),I.reset(),window.scrollTo({top:700,behavior:"smooth"}),k.innerHTML="",v.slice(0,6).forEach((function(e){R(e)}))}))}]);