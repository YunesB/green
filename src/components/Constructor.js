export class Constructor {
    constructor(data, poemTemplate, externalStr) {
        this._name = data.name,
        this._author = data.author,
        this._text = data.text,
        this._poemTemplate = poemTemplate,
        this._externalStr = externalStr
    }

    _getTemplate() {
        const listElement = document.getElementById(this._poemTemplate)
        .content
        .querySelector('.poem__list-item')
        .cloneNode(true);
        return listElement;
    }

    generateItem() {
        this._element = this._getTemplate();
        this._element.querySelector('.poem__name').textContent = this._name;
        this._element.querySelector('.poem__author').textContent = this._author;
        this._styleStr(this._externalStr);
        this._copyText();
        this._element.querySelector('.poem__text').innerHTML = this._text;
        return this._element;
    }
    _styleStr (data) {
        this._text = this._text.replace(data, `<span class="highlighted-word">${data}</span>`);
    }

    _copyText() {
        this._element.querySelector('.poem__button').addEventListener('click', () => {
            this._text.selection();
            document.execCommand("copy");
            alert("Copied the text: " + copyText);
        })
    }
}