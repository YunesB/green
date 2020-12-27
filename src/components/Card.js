export class Card {
    constructor({data: {header, poem, dataTag, votes}, handleCardClick}, cardTemplate) {
        this._header = header,
        this._poem = poem,
        this._dataTag = dataTag,
        this._votes = votes,
        this._handleCardClick = handleCardClick,
        this._cardTemplate = cardTemplate
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardTemplate)
        .content
        .querySelector('.card')
        .cloneNode(true);
        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.card__heading').textContent = this._header;
        this._element.querySelector('.card__text').textContent = this._poem;
        this._element.querySelector('.card__vote-counter').textContent = this._votes;
        this._element.dataset.tags = this._dataTag;
        this._setEventListeners();

        return this._element;
    }

    _toggleLikestate() {
        const like = this._element.querySelector('.card__button');
        const likeCounter = this._element.querySelector('.card__like-counter');
        if (like.classList.contains('card__button_like_state_posted')) {
            likeCounter.textContent--;
        } else {
            likeCounter.textContent++;
        };
        like.classList.toggle('card__button_like_state_posted');
        // this._element.querySelector('.card__vote-counter').textContent++;
    }

    cardClick() {
        this._handleCardClick();
    }

    _setEventListeners() {
        // this._element.querySelector('.card__button_like').addEventListener('click', () => {
        //     this._toggleLikestate()
        // });

        this._element.addEventListener('click', () => {
            this.cardClick();
        })
    }
};