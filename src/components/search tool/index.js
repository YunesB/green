const submit = document.getElementById('submit');
const renew = document.getElementById('renew');
const input = document.getElementById('input');
const myList = document.getElementById('myList')


class Constructor {
    constructor(data, poemTemplate, externalStr) {
        this._name = data.name,
        this._author = data.author,
        this._text = data.text,
        this._poemTemplate = poemTemplate,
        this._externalStr = externalStr
    }

    _getTemplate() {
        const listElement = document.querySelector(this._poemTemplate)
        .content
        .querySelector('.list-item')
        .cloneNode(true);
        return listElement;
    }

    generateItem() {
        this._element = this._getTemplate();
        this._element.querySelector('.name').textContent = this._name;
        this._element.querySelector('.author').textContent = this._author;
        this._styleStr(this._externalStr);
        this._element.querySelector('.text').innerHTML = this._text;
        return this._element;
    }
    _styleStr (data) {
        this._text = this._text.replace(data, `<span class="highlighted-word">${data}</span>`);
    }
}

function createListItem(data, template, inputValue) {
    const newConstructor = new Constructor(data, template, inputValue);
    return newConstructor.generateItem();
}
function clearList(list) {
    list.innerHTML = ""
    submit.classList.remove('button_disabled')
    submit.disabled = false;
}


function onSubmit(evt) {
    evt.preventDefault();
    const inputValue = input.value;
    submit.classList.add('button_disabled')
    submit.disabled = true;
    getAnswer(inputValue)
    .then(res => {
        for (i=0; i<res.length; i++) { // i<5 поменять на i<res.length
            const newItem = createListItem(res[i].fields, 'template', inputValue);
            myList.append(newItem);        
        }
    })
    .catch ((err) => {
        console.log(err);
    })
};

function getAnswer(data) {
    return fetch (`http://buymebuyme.xyz?q=%20${data}%20`, {
        method: 'GET'
    })
    .then((res) => {
        return res.json();
    })
    .catch((res) => {
        return Promise.reject(`Ошибка: ${res.status} - ${res.statusText}`);
    })
};

submit.addEventListener('click', onSubmit);
renew.addEventListener('click', () => {clearList(myList)})

