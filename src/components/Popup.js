export class Popup {
    constructor (popupSelector) {
        this._popup = document.getElementById(popupSelector);
        this.handleEscClose = this._handleEscClose.bind(this);
    }

    open(data) {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keyup', this.handleEscClose);
        this._popup.querySelector('.circle-chart-circle').animate([
            { strokeDasharray: 100 }, { strokeDasharray: 54 }
        ], { duration: 800 });
        this.animateValue('voteCounter', 0, data.votes, 800);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keyup', this.handleEscClose);
    }

    _handleEscClose(evt) {
        if (evt.key === "Escape") {
            this.close();
        };
    }

    updatePopupInfo(data) {
        this._popup.querySelector('.popup__heading').textContent = data.header;
        this._popup.querySelector('.popup__text').textContent = data.poem;
        this._popup.querySelector('.circle-chart-percentage').textContent = data.votes;
        this._popup.querySelector('#popupVoteName').textContent = data.author;
    }

    setEventListeners() {
        this._popup.addEventListener('click', (evt) => {
            if (!evt.target.closest('.popup__container')) {
                this.close();
            }
        });
        
        this._popup.querySelector('.popup__close').addEventListener('click', () => {
            this.close();
        });
    }

    // Код не мой, взял отсюда - https://stackoverflow.com/questions/16994662/count-animation-from-number-a-to-b
    animateValue(id, start, end, duration) {
        const obj = document.getElementById(id);
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                obj.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
}