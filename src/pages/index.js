import './index.css';
import {Popup} from '../components/Popup.js';
import {Constructor} from '../components/Constructor.js';
import {Card} from '../components/Card.js';
import {initialCards} from '../../src/utils/constants.js';

import {aboutLink, hintButton, searchPoem, refreshList,
    inputPoem, poemList, errorMessage, poemTextarea,
    categories, cardsList, userElement, userMenu
    } from '../../src/utils/constants.js';

import { CircularProgress } from '@material-ui/core';

const aboutPopup = new Popup('aboutPopup');
aboutPopup.setEventListeners();

const hintPopup = new Popup('hintPopup');
hintPopup.setEventListeners();

const cardPopup = new Popup('initiativePopup');
cardPopup.setEventListeners();


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
            console.log(res);
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
            console.log(item.dataset.tags)
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
            cardPopup.open();
            cardPopup.updatePopupInfo(data);
        }
    }, "#cardTemplate");
        
    const cardElement = card.generateCard();
    cardsList.prepend(cardElement);
};

initialCards.forEach((item) => {
    createCard(item);
})

const cardsFilter = document.querySelectorAll('.card');

function getAnswer(data) {
    return fetch (`https://www.buymebuyme.xyz/?q=%20${data}%20`, {
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

