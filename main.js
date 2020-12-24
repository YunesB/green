!function(e){var n={};function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(a,r,function(n){return e[n]}.bind(null,r));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";function a(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}t.r(n);var r=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.getElementById(n),this.handleEscClose=this._handleEscClose.bind(this)}return function(e,n,t){n&&a(e.prototype,n),t&&a(e,t)}(e,[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keyup",this.handleEscClose)}},{key:"openCard",value:function(e){this._popup.classList.add("popup_opened"),document.addEventListener("keyup",this.handleEscClose),this._popup.querySelector(".circle-chart-circle").animate([{strokeDasharray:100},{strokeDasharray:54}],{duration:800}),this.animateValue("voteCounter",0,e.votes,800)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keyup",this.handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"updatePopupInfo",value:function(e){this._popup.querySelector(".popup__heading").textContent=e.header,this._popup.querySelector(".popup__text").textContent=e.poem,this._popup.querySelector(".circle-chart-percentage").textContent=e.votes,this._popup.querySelector("#popupVoteName").textContent=e.author}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(n){n.target.closest(".popup__container")||e.close()})),this._popup.querySelector(".popup__close").addEventListener("click",(function(){e.close()}))}},{key:"animateValue",value:function(e,n,t,a){var r=document.getElementById(e),o=null;window.requestAnimationFrame((function e(i){o||(o=i);var s=Math.min((i-o)/a,1);r.innerHTML=Math.floor(s*(t-n)+n),s<1&&window.requestAnimationFrame(e)}))}}]),e}();function o(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var i=function(){function e(n,t,a,r){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=n.name,this._author=n.author,this._text=n.text,this._poemTemplate=t,this._externalStr=a,this._inputSelector=r}return function(e,n,t){n&&o(e.prototype,n),t&&o(e,t)}(e,[{key:"_getTemplate",value:function(){return document.getElementById(this._poemTemplate).content.querySelector(".poem__list-item").cloneNode(!0)}},{key:"generateItem",value:function(){return this._element=this._getTemplate(),this._element.querySelector(".poem__name").textContent=this._name,this._element.querySelector(".poem__author").textContent=this._author,this._styleStr(this._externalStr),this._copyText(this._externalStr,this._inputSelector),this._element.querySelector(".poem__text").innerHTML=this._text,this._element}},{key:"_styleStr",value:function(e){this._text=this._text.replace(e,'<span class="highlighted-word">'.concat(e,"</span>"))}},{key:"_copyText",value:function(e,n){var t=this;this._element.querySelector(".poem__button").addEventListener("click",(function(){t._text=t._text.replace('<span class="highlighted-word">'.concat(e,"</span>"),e),n.append(t._text)}))}}]),e}();function s(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var u=function(){function e(n,t){var a=n.data,r=a.header,o=a.poem,i=a.dataTag,s=a.votes,u=n.handleCardClick;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this._header=r,this._poem=o,this._dataTag=i,this._votes=s,this._handleCardClick=u,this._cardTemplate=t}return function(e,n,t){n&&s(e.prototype,n),t&&s(e,t)}(e,[{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplate).content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._element.querySelector(".card__heading").textContent=this._header,this._element.querySelector(".card__text").textContent=this._poem,this._element.querySelector(".card__vote-counter").textContent=this._votes,this._element.dataset.tags=this._dataTag,this._setEventListeners(),this._element}},{key:"_toggleLikestate",value:function(){var e=this._element.querySelector(".card__button"),n=this._element.querySelector(".card__like-counter");e.classList.contains("card__button_like_state_posted")?n.textContent--:n.textContent++,e.classList.toggle("card__button_like_state_posted")}},{key:"cardClick",value:function(){this._handleCardClick()}},{key:"_setEventListeners",value:function(){var e=this;this._element.addEventListener("click",(function(){e.cardClick()}))}}]),e}();function l(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var c=function(){function e(n,t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=t,this._inputList=Array.from(t.querySelectorAll(n.inputSelector)),this._button=t.querySelector(n.submitButtonSelector),this._buttonClass=n.inactiveButtonClass,this._inputErrorClass=n.inputErrorClass,this._errorClass=n.errorClass}return function(e,n,t){n&&l(e.prototype,n),t&&l(e,t)}(e,[{key:"enableSubmitButton",value:function(){this._button.classList.remove(this._buttonClass),this._button.disabled=!1}},{key:"disableSubmitButton",value:function(){this._button.classList.add(this._buttonClass),this._button.disabled=!0}},{key:"_showInputError",value:function(e,n){var t=this._form.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),t.textContent=n,t.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var n=this._form.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),n.classList.remove(this._errorClass),n.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return console.log(e.validity),!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableSubmitButton():this.enableSubmitButton()}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(n){n.addEventListener("input",(function(){e._checkInputValidity(n),e._toggleButtonState()}))}))}},{key:"removeErrors",value:function(){var e=this;this._inputList.forEach((function(n){e._hideInputError(n)}))}}]),e}();var d=[{header:"Бесплатная ночная электроэнергия для населения",poem:"Не мысля гордый свет забавить,\nВниманье дружбы возлюбя,\nХотел бы я тебе представить\nЗалог достойнее тебя,\nДостойнее души прекрасной,\nСвятой исполненной мечты,\nПоэзии живой и ясной,\nВысоких дум и простоты;\nНо так и быть — рукой пристрастной\nПрими собранье пестрых глав,\nПолусмешных, полупечальных,\nПростонародных, идеальных,\nНебрежный плод моих забав,\nБессонниц, легких вдохновений,\nНезрелых и увядших лет,\nУма холодных наблюдений\nИ сердца горестных замет.",dataTag:"welfare",votes:"2514",author:'Папуна Пипия (звукач сериала "Солдаты")'},{header:"Отказ от пластика, многоразовое использование стеклянной тары",poem:"Не мысля гордый свет забавить,\nВниманье дружбы возлюбя,\nХотел бы я тебе представить\nЗалог достойнее тебя,\nДостойнее души прекрасной,\nСвятой исполненной мечты,\nПоэзии живой и ясной,\nВысоких дум и простоты;\nНо так и быть — рукой пристрастной\nПрими собранье пестрых глав,\nПолусмешных, полупечальных,\nПростонародных, идеальных,\nНебрежный плод моих забав,\nБессонниц, легких вдохновений,\nНезрелых и увядших лет,\nУма холодных наблюдений\nИ сердца горестных замет.",dataTag:"plastic",votes:"754",author:"Какой-то Чел"},{header:"За отказ от мусоросжигания и за предотвращение образования отходов",poem:"Не мысля гордый свет забавить,\nВниманье дружбы возлюбя,\nХотел бы я тебе представить\nЗалог достойнее тебя,\nДостойнее души прекрасной,\nСвятой исполненной мечты,\nПоэзии живой и ясной,\nВысоких дум и простоты;\nНо так и быть — рукой пристрастной\nПрими собранье пестрых глав,\nПолусмешных, полупечальных,\nПростонародных, идеальных,\nНебрежный плод моих забав,\nБессонниц, легких вдохновений,\nНезрелых и увядших лет,\nУма холодных наблюдений\nИ сердца горестных замет.",dataTag:"garbage",votes:"648",author:"Пацанский Таз"},{header:"Ужесточить законы против жестокого обращения с животными",poem:"Не мысля гордый свет забавить,\nВниманье дружбы возлюбя,\nХотел бы я тебе представить\nЗалог достойнее тебя,\nДостойнее души прекрасной,\nСвятой исполненной мечты,\nПоэзии живой и ясной,\nВысоких дум и простоты;\nНо так и быть — рукой пристрастной\nПрими собранье пестрых глав,\nПолусмешных, полупечальных,\nПростонародных, идеальных,\nНебрежный плод моих забав,\nБессонниц, легких вдохновений,\nНезрелых и увядших лет,\nУма холодных наблюдений\nИ сердца горестных замет.",dataTag:"animals",votes:"325",author:"Сеня Лютый"},{header:"Ужесточить нормы выбросов углекислого газа для новых автомобилей до 95 г/км",poem:"Не мысля гордый свет забавить,\nВниманье дружбы возлюбя,\nХотел бы я тебе представить\nЗалог достойнее тебя,\nДостойнее души прекрасной,\nСвятой исполненной мечты,\nПоэзии живой и ясной,\nВысоких дум и простоты;\nНо так и быть — рукой пристрастной\nПрими собранье пестрых глав,\nПолусмешных, полупечальных,\nПростонародных, идеальных,\nНебрежный плод моих забав,\nБессонниц, легких вдохновений,\nНезрелых и увядших лет,\nУма холодных наблюдений\nИ сердца горестных замет.\nНе мысля гордый свет забавить,\nВниманье дружбы возлюбя,\nХотел бы я тебе представить\nЗалог достойнее тебя,\nДостойнее души прекрасной,\nСвятой исполненной мечты,\nПоэзии живой и ясной,\nВысоких дум и простоты;\nНо так и быть — рукой пристрастной\nПрими собранье пестрых глав,\nПолусмешных, полупечальных,\nПростонародных, идеальных,\nНебрежный плод моих забав,\nБессонниц, легких вдохновений,\nНезрелых и увядших лет,\nУма холодных наблюдений\nИ сердца горестных замет.",dataTag:"smoke",votes:"9343",author:"Михаил Павлович Терентьев"},{header:"Заменить реагенты на песок на тротуарах",poem:"Не мысля гордый свет забавить,\nВниманье дружбы возлюбя,\nХотел бы я тебе представить\nЗалог достойнее тебя,\nДостойнее души прекрасной,\nСвятой исполненной мечты,\nПоэзии живой и ясной,\nВысоких дум и простоты;\nНо так и быть — рукой пристрастной\nПрими собранье пестрых глав,\nПолусмешных, полупечальных,\nПростонародных, идеальных,\nНебрежный плод моих забав,\nБессонниц, легких вдохновений,\nНезрелых и увядших лет,\nУма холодных наблюдений\nИ сердца горестных замет.",dataTag:"welfare",votes:"5501",author:"Евгений Понасенков"},{header:"Сделать профессию уборщика и дворника высокооплачиваемой",poem:"Не мысля гордый свет забавить,\nВниманье дружбы возлюбя,\nХотел бы я тебе представить\nЗалог достойнее тебя,\nДостойнее души прекрасной,\nСвятой исполненной мечты,\nПоэзии живой и ясной,\nВысоких дум и простоты;\nНо так и быть — рукой пристрастной\nПрими собранье пестрых глав,\nПолусмешных, полупечальных,\nПростонародных, идеальных,\nНебрежный плод моих забав,\nБессонниц, легких вдохновений,\nНезрелых и увядших лет,\nУма холодных наблюдений\nИ сердца горестных замет.",dataTag:"welfare",votes:"2514",author:"Хабиб Нурмагомедов"},{header:"Организовать пункты выгоднооплачиваемого приема сортированного мусора",poem:"Не мысля гордый свет забавить,\nВниманье дружбы возлюбя,\nХотел бы я тебе представить\nЗалог достойнее тебя,\nДостойнее души прекрасной,\nСвятой исполненной мечты,\nПоэзии живой и ясной,\nВысоких дум и простоты;\nНо так и быть — рукой пристрастной\nПрими собранье пестрых глав,\nПолусмешных, полупечальных,\nПростонародных, идеальных,\nНебрежный плод моих забав,\nБессонниц, легких вдохновений,\nНезрелых и увядших лет,\nУма холодных наблюдений\nИ сердца горестных замет.",dataTag:"plastic",votes:"993",author:"Джо Роган"},{header:"Законодательно закрепить права домашних животных, ужесточить ответственность владельцев",poem:"Не мысля гордый свет забавить,\nВниманье дружбы возлюбя,\nХотел бы я тебе представить\nЗалог достойнее тебя,\nДостойнее души прекрасной,\nСвятой исполненной мечты,\nПоэзии живой и ясной,\nВысоких дум и простоты;\nНо так и быть — рукой пристрастной\nПрими собранье пестрых глав,\nПолусмешных, полупечальных,\nПростонародных, идеальных,\nНебрежный плод моих забав,\nБессонниц, легких вдохновений,\nНезрелых и увядших лет,\nУма холодных наблюдений\nИ сердца горестных замет.",dataTag:"animals",votes:"7369",author:"Илон Маск"},{header:"Запретить разведение и убийство животных ради меха и импорт меха",poem:"Не мысля гордый свет забавить,\nВниманье дружбы возлюбя,\nХотел бы я тебе представить\nЗалог достойнее тебя,\nДостойнее души прекрасной,\nСвятой исполненной мечты,\nПоэзии живой и ясной,\nВысоких дум и простоты;\nНо так и быть — рукой пристрастной\nПрими собранье пестрых глав,\nПолусмешных, полупечальных,\nПростонародных, идеальных,\nНебрежный плод моих забав,\nБессонниц, легких вдохновений,\nНезрелых и увядших лет,\nУма холодных наблюдений\nИ сердца горестных замет.",dataTag:"animals",votes:"1580",author:"Пашок Дуров"},{header:"Дополнить запреты курения в подъездах жилых домов",poem:"Не мысля гордый свет забавить,\nВниманье дружбы возлюбя,\nХотел бы я тебе представить\nЗалог достойнее тебя,\nДостойнее души прекрасной,\nСвятой исполненной мечты,\nПоэзии живой и ясной,\nВысоких дум и простоты;\nНо так и быть — рукой пристрастной\nПрими собранье пестрых глав,\nПолусмешных, полупечальных,\nПростонародных, идеальных,\nНебрежный плод моих забав,\nБессонниц, легких вдохновений,\nНезрелых и увядших лет,\nУма холодных наблюдений\nИ сердца горестных замет.\nНе мысля гордый свет забавить,\nВниманье дружбы возлюбя,\nХотел бы я тебе представить\nЗалог достойнее тебя,\nДостойнее души прекрасной,\nСвятой исполненной мечты,\nПоэзии живой и ясной,\nВысоких дум и простоты;\nНо так и быть — рукой пристрастной\nПрими собранье пестрых глав,\nПолусмешных, полупечальных,\nПростонародных, идеальных,\nНебрежный плод моих забав,\nБессонниц, легких вдохновений,\nНезрелых и увядших лет,\nУма холодных наблюдений\nИ сердца горестных замет.",dataTag:"welfare",votes:"13",author:"Артемий Лебедев"},{header:"Дополнение статьи 245 УК РФ «О жестоком обращении с животными",poem:"Не мысля гордый свет забавить,\nВниманье дружбы возлюбя,\nХотел бы я тебе представить\nЗалог достойнее тебя,\nДостойнее души прекрасной,\nСвятой исполненной мечты,\nПоэзии живой и ясной,\nВысоких дум и простоты;\nНо так и быть — рукой пристрастной\nПрими собранье пестрых глав,\nПолусмешных, полупечальных,\nПростонародных, идеальных,\nНебрежный плод моих забав,\nБессонниц, легких вдохновений,\nНезрелых и увядших лет,\nУма холодных наблюдений\nИ сердца горестных замет.",dataTag:"animals",votes:"1584",author:"Болотный Великан"},{header:"Бесплатная ночная электроэнергия для населения",poem:"Не мысля гордый свет забавить,\nВниманье дружбы возлюбя,\nХотел бы я тебе представить\nЗалог достойнее тебя,\nДостойнее души прекрасной,\nСвятой исполненной мечты,\nПоэзии живой и ясной,\nВысоких дум и простоты;\nНо так и быть — рукой пристрастной\nПрими собранье пестрых глав,\nПолусмешных, полупечальных,\nПростонародных, идеальных,\nНебрежный плод моих забав,\nБессонниц, легких вдохновений,\nНезрелых и увядших лет,\nУма холодных наблюдений\nИ сердца горестных замет.",dataTag:"welfare",votes:"2514",author:'Папуна Пипия (звукач сериала "Солдаты")'},{header:"Отказ от пластика, многоразовое использование стеклянной тары",poem:"Не мысля гордый свет забавить,\nВниманье дружбы возлюбя,\nХотел бы я тебе представить\nЗалог достойнее тебя,\nДостойнее души прекрасной,\nСвятой исполненной мечты,\nПоэзии живой и ясной,\nВысоких дум и простоты;\nНо так и быть — рукой пристрастной\nПрими собранье пестрых глав,\nПолусмешных, полупечальных,\nПростонародных, идеальных,\nНебрежный плод моих забав,\nБессонниц, легких вдохновений,\nНезрелых и увядших лет,\nУма холодных наблюдений\nИ сердца горестных замет.",dataTag:"plastic",votes:"754",author:"Какой-то Чел"},{header:"За отказ от мусоросжигания и за предотвращение образования отходов",poem:"Не мысля гордый свет забавить,\nВниманье дружбы возлюбя,\nХотел бы я тебе представить\nЗалог достойнее тебя,\nДостойнее души прекрасной,\nСвятой исполненной мечты,\nПоэзии живой и ясной,\nВысоких дум и простоты;\nНо так и быть — рукой пристрастной\nПрими собранье пестрых глав,\nПолусмешных, полупечальных,\nПростонародных, идеальных,\nНебрежный плод моих забав,\nБессонниц, легких вдохновений,\nНезрелых и увядших лет,\nУма холодных наблюдений\nИ сердца горестных замет.",dataTag:"garbage",votes:"648",author:"Пацанский Таз"},{header:"Ужесточить законы против жестокого обращения с животными",poem:"Не мысля гордый свет забавить,\nВниманье дружбы возлюбя,\nХотел бы я тебе представить\nЗалог достойнее тебя,\nДостойнее души прекрасной,\nСвятой исполненной мечты,\nПоэзии живой и ясной,\nВысоких дум и простоты;\nНо так и быть — рукой пристрастной\nПрими собранье пестрых глав,\nПолусмешных, полупечальных,\nПростонародных, идеальных,\nНебрежный плод моих забав,\nБессонниц, легких вдохновений,\nНезрелых и увядших лет,\nУма холодных наблюдений\nИ сердца горестных замет.",dataTag:"animals",votes:"325",author:"Сеня Лютый"},{header:"Ужесточить нормы выбросов углекислого газа для новых автомобилей до 95 г/км",poem:"Не мысля гордый свет забавить,\nВниманье дружбы возлюбя,\nХотел бы я тебе представить\nЗалог достойнее тебя,\nДостойнее души прекрасной,\nСвятой исполненной мечты,\nПоэзии живой и ясной,\nВысоких дум и простоты;\nНо так и быть — рукой пристрастной\nПрими собранье пестрых глав,\nПолусмешных, полупечальных,\nПростонародных, идеальных,\nНебрежный плод моих забав,\nБессонниц, легких вдохновений,\nНезрелых и увядших лет,\nУма холодных наблюдений\nИ сердца горестных замет.\nНе мысля гордый свет забавить,\nВниманье дружбы возлюбя,\nХотел бы я тебе представить\nЗалог достойнее тебя,\nДостойнее души прекрасной,\nСвятой исполненной мечты,\nПоэзии живой и ясной,\nВысоких дум и простоты;\nНо так и быть — рукой пристрастной\nПрими собранье пестрых глав,\nПолусмешных, полупечальных,\nПростонародных, идеальных,\nНебрежный плод моих забав,\nБессонниц, легких вдохновений,\nНезрелых и увядших лет,\nУма холодных наблюдений\nИ сердца горестных замет.",dataTag:"smoke",votes:"9343",author:"Михаил Павлович Терентьев"},{header:"Заменить реагенты на песок на тротуарах",poem:"Не мысля гордый свет забавить,\nВниманье дружбы возлюбя,\nХотел бы я тебе представить\nЗалог достойнее тебя,\nДостойнее души прекрасной,\nСвятой исполненной мечты,\nПоэзии живой и ясной,\nВысоких дум и простоты;\nНо так и быть — рукой пристрастной\nПрими собранье пестрых глав,\nПолусмешных, полупечальных,\nПростонародных, идеальных,\nНебрежный плод моих забав,\nБессонниц, легких вдохновений,\nНезрелых и увядших лет,\nУма холодных наблюдений\nИ сердца горестных замет.",dataTag:"welfare",votes:"5501",author:"Евгений Понасенков"}],h=document.getElementById("about"),p=document.querySelector(".add-initiative__show-hint"),f=document.getElementById("searchPoem"),m=document.getElementById("refreshList"),_=document.getElementById("inputPoem"),v=document.getElementById("poemList"),y=document.querySelector(".poem__default-item"),b=document.getElementById("poemTextarea"),g=document.getElementById("categories"),E=document.querySelector(".cards"),S=document.querySelector(".header__userpic"),L=document.querySelector(".header__menu"),k=document.querySelector(".initiatives__arrow_left"),w=document.querySelector(".initiatives__arrow_right"),C=document.getElementById("initiativeForm");function T(e,n){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return x(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return x(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==t.return||t.return()}finally{if(s)throw o}}}}function x(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}document.querySelectorAll('a[href^="#"').forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var n=this.getAttribute("href").substring(1),t=document.getElementById(n).getBoundingClientRect().top-0;window.scrollBy({top:t,behavior:"smooth"})}))}));var q=new r("aboutPopup");q.setEventListeners();var I=new r("hintPopup");I.setEventListeners();var B=new r("initiativePopup");B.setEventListeners();var A=new c({formSelector:".new-initiative__form",inputSelector:".new-initiative__input",submitButtonSelector:".new-initiative__submit",inactiveButtonClass:"button_disabled",inputErrorClass:"new-initiative__input_data_error",errorClass:"new-initiative__error_visible"},C);function P(e,n,t,a){return new i(e,n,t,a).generateItem()}A.enableValidation(),A.disableSubmitButton(),g.onchange=function(){!function(e){var n,t=T(e);try{for(t.s();!(n=t.n()).done;){var a=n.value;a.dataset.tags===g.value||""===g.value?(a.style.opacity="1",a.style.filter="grayscale(0)"):(a.style.opacity=".3",a.style.filter="grayscale(100%)")}}catch(e){t.e(e)}finally{t.f()}}(V)};var j=function(e){var n=new u({data:e,handleCardClick:function(){B.openCard(e),B.updatePopupInfo(e)}},"#cardTemplate").generateCard();E.append(n)};d.slice(0,6).forEach((function(e){j(e)}));var M=0;function O(e,n){E.innerHTML="",e.slice(M,M+6).forEach((function(e){j(e)})),M>=e.length-6||0===M?(n.disabled=!0,n.classList.add("initiatives__arrow_disabled")):(n.disabled=!1,n.classList.remove("initiatives__arrow_disabled"))}var V=document.querySelectorAll(".card");f.addEventListener("click",(function(e){e.preventDefault(),v.classList.add("display-item");var n,t=_.value;f.classList.add("button_disabled"),f.disabled=!0,(n=t,fetch("http://www.buymebuyme.xyz/?q=%20".concat(n,"%20"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return Promise.reject("Ошибка: ".concat(e.status," - ").concat(e.statusText))}))).then((function(e){if(e.length>0)for(var n=0;n<e.length;n++){var a=P(e[n].fields,"poemTemplate",t,b);v.append(a)}else y.classList.add("display-item")})).catch((function(e){console.log(e)}))})),document.addEventListener("click",(function(e){e.target===S?L.classList.add("display-item"):L.classList.remove("display-item")})),m.addEventListener("click",(function(){v.innerHTML="",f.classList.remove("button_disabled"),f.disabled=!1,v.classList.remove("display-item"),y.classList.remove("display-item")})),h.addEventListener("click",(function(){q.open()})),p.addEventListener("mouseover",(function(){I.open()})),p.addEventListener("mouseout",(function(){I.close()})),k.addEventListener("click",(function(){M-=6,O(d,k),w.disabled=!1,w.classList.remove("initiatives__arrow_disabled"),V=document.querySelectorAll(".card")})),w.addEventListener("click",(function(){M+=6,O(d,w),k.disabled=!1,k.classList.remove("initiatives__arrow_disabled"),V=document.querySelectorAll(".card")})),C.addEventListener("submit",(function(e){var n,t;e.preventDefault(),d.unshift((n=C.querySelectorAll(".new-initiative__input"),t={votes:0,dataTag:"N/A"},n.forEach((function(e){return t[e.name]=e.value})),t)),C.reset(),window.scrollTo({top:700,behavior:"smooth"}),E.innerHTML="",d.slice(0,6).forEach((function(e){j(e)}))}))}]);