import './index.css';
import {Popup} from '../components/Popup.js';
import { PopupWithStats } from '../components/PopupWithStats';
import {FormValidator} from '../components/FormValidator.js';
import {smooothScroll} from '../components/Scroll.js';

import {aboutLink, hintButton, searchPoem, refreshList,
    inputPoem, poemList, errorMessage, poemTextarea,
    categories, cardsList, userElement, userMenu,
    goLeftArrow, goRightArrow, cards, initiativeForm,
    allSelectorClasses
} from '../../src/utils/constants.js';

import {clearList, filterCards, getAnswer, 
    createCard, getInputValues, createListItem
} from '../utils/utils.js'


smooothScroll();
let n = 0;

// creation of class elements
const aboutPopup = new Popup('aboutPopup');
aboutPopup.setEventListeners();

const hintPopup = new Popup('hintPopup');
hintPopup.setEventListeners();

export const cardPopup = new PopupWithStats('initiativePopup');
cardPopup.setEventListeners();

const cardFormValidator = new FormValidator(allSelectorClasses, initiativeForm);
cardFormValidator.enableValidation();
cardFormValidator.disableSubmitButton();


//general functions
function onsearchPoem(evt) {
    evt.preventDefault();
    poemList.classList.add('display-item');
    const inputValue = inputPoem.value;
    searchPoem.classList.add('button_disabled')
    searchPoem.disabled = true;
    getAnswer(inputValue)
    .then(res => {
        if (res.length>0) {
            for (let i=0; i<res.length; i++) {
                const newItem = createListItem(res[i].fields, 'poemTemplate', inputValue, poemTextarea);
                poemList.append(newItem);        
            }
        } else {
            errorMessage.classList.add('display-item');
        }
    })
    .catch ((err) => {
        console.log(err);
    })
};

categories.onchange = function() {
    filterCards(cardsFilter);
};

function changeCards(data, button) {
    cardsList.innerHTML = "";
    const newCards = data.slice(n, n + 6);
    newCards.forEach((item) => {
        createCard(item);
    });
    if (n >= data.length - 6 || n === 0) {
        button.disabled = true;
        button.classList.add('initiatives__arrow_disabled');
    } else {
        button.disabled = false;
        button.classList.remove('initiatives__arrow_disabled');
    }
};

// initial cards
cards.slice(0, 6).forEach((item) => {
    createCard(item);
});

let cardsFilter = document.querySelectorAll('.card');


// Event Listeners
searchPoem.addEventListener('click', onsearchPoem);
document.addEventListener('click', (evt) => {
    if (evt.target === userElement) {
        userMenu.classList.add('display-item');
    } else {
        userMenu.classList.remove('display-item');
    }
});

refreshList.addEventListener('click', () => {clearList(poemList)})
aboutLink.addEventListener('click', () => {aboutPopup.open()});

hintButton.addEventListener('mouseover', () => {hintPopup.open()});
hintButton.addEventListener('mouseout', () => {hintPopup.close()});

goLeftArrow.addEventListener('click', () => {
    n = n - 6;
    changeCards(cards, goLeftArrow);
    goRightArrow.disabled = false;
    goRightArrow.classList.remove('initiatives__arrow_disabled');
    cardsFilter = document.querySelectorAll('.card')
});

goRightArrow.addEventListener('click', () => {
    n = n + 6;
    changeCards(cards, goRightArrow);
    goLeftArrow.disabled = false;
    goLeftArrow.classList.remove('initiatives__arrow_disabled');
    cardsFilter = document.querySelectorAll('.card')
});

initiativeForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    cards.unshift(getInputValues(initiativeForm));
    initiativeForm.reset();
    window.scrollTo({
        top: 700,
        behavior: "smooth"
    });
    cardsList.innerHTML = ""
    cards.slice(0, 6).forEach((item) => {
        createCard(item);
    });
});
