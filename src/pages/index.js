import './index.css';
import {Popup} from '../components/Popup.js';
import {Constructor} from '../components/Constructor.js';
import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';

import {aboutLink, hintButton, searchPoem, refreshList,
    inputPoem, poemList, errorMessage, poemTextarea,
    categories, cardsList, userElement, userMenu,
    goLeftArrow, goRightArrow, cards, initiativeForm,
    allSelectorClasses
} from '../../src/utils/constants.js';

const aboutPopup = new Popup('aboutPopup');
aboutPopup.setEventListeners();

const hintPopup = new Popup('hintPopup');
hintPopup.setEventListeners();

const cardPopup = new Popup('initiativePopup');
cardPopup.setEventListeners();

const cardFormValidator = new FormValidator(allSelectorClasses, initiativeForm);
cardFormValidator.enableValidation();

cardFormValidator.disableSubmitButton();


function createListItem(data, template, inputValue, inputSelector) {
    const newConstructor = new Constructor(data, template, inputValue, inputSelector);
    return newConstructor.generateItem();
};

function clearList(list) {
    list.innerHTML = ""
    searchPoem.classList.remove('button_disabled')
    searchPoem.disabled = false;
    poemList.classList.remove('display-item');
    errorMessage.classList.remove('display-item');
};


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

function filterCards(list) {
    for (let item of list) {
        if (item.dataset.tags === categories.value || categories.value === '') {
            item.style.opacity = '1';
            item.style.filter = 'grayscale(0)';
        } else {
            item.style.opacity = '.3';
            item.style.filter = 'grayscale(100%)';
        }
    }
};

categories.onchange = function() {
    filterCards(cardsFilter);
};

const createCard = (data) => {
    const card = new Card({
        data,
        handleCardClick: () => {
            cardPopup.openCard(data);
            cardPopup.updatePopupInfo(data);
        }
    }, "#cardTemplate");
        
    const cardElement = card.generateCard();
    cardsList.append(cardElement);
};

cards.slice(0, 6).forEach((item) => {
    createCard(item);
});

let n = 0;

function changeCards(data, button) {
    cardsList.innerHTML = "";
    const newCards = data.slice(n, n + 6);
    newCards.forEach((item) => {
        createCard(item);
    });
    console.log("n: " + n);
    console.log("data.length: " + data.length);
    if (n >= data.length - 6 || n === 0) {
        button.disabled = true;
        button.classList.add('initiatives__arrow_disabled');
    } else {
        button.disabled = false;
        button.classList.remove('initiatives__arrow_disabled');
    }
};

function getInputValues(form) {
    const inputList = form.querySelectorAll('.new-initiative__input');       
    let formValues = {
        votes: 0,
        dataTag: 'N/A'
    };
    inputList.forEach(input => formValues[input.name] = input.value);
    return formValues;
}

let cardsFilter = document.querySelectorAll('.card');

function getAnswer(data) {
    return fetch (`http://www.buymebuyme.xyz/?q=%20${data}%20`, {
        method: 'GET'
    })
    .then((res) => {
        return res.json();
    })
    .catch((res) => {
        return Promise.reject(`Ошибка: ${res.status} - ${res.statusText}`);
    })
};

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
        top: 500,
        behavior: "smooth"
    });
    cardsList.innerHTML = ""
    cards.slice(0, 6).forEach((item) => {
        createCard(item);
    });
    console.log(getInputValues(initiativeForm));
});
