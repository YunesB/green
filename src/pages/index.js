import './index.css';
import {Popup} from '../components/Popup.js';
import {Constructor} from '../components/Constructor.js'

const aboutLink = document.getElementById('about');
const hintButton = document.querySelector('.add-initiative__show-hint');
const searchPoem = document.getElementById('searchPoem');
const refreshList = document.getElementById('refreshList');
const inputPoem = document.getElementById('inputPoem');
const poemList = document.getElementById('poemList');
const errorMessage = document.querySelector('.poem__default-item');
const poemTextarea = document.getElementById('poemTextarea');

const aboutPopup = new Popup('aboutPopup');
aboutPopup.setEventListeners();

const hintPopup = new Popup('hintPopup');
hintPopup.setEventListeners();


function createListItem(data, template, inputValue, inputSelector) {
    const newConstructor = new Constructor(data, template, inputValue, inputSelector);
    return newConstructor.generateItem();
}

function clearList(list) {
    list.innerHTML = ""
    searchPoem.classList.remove('button_disabled')
    searchPoem.disabled = false;
    poemList.classList.remove('display-item');
    errorMessage.classList.remove('display-item');
}


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
refreshList.addEventListener('click', () => {clearList(poemList)})
aboutLink.addEventListener('click', () => {aboutPopup.open()});
hintButton.addEventListener('mouseover', () => {hintPopup.open()});
hintButton.addEventListener('mouseout', () => {hintPopup.close()});

