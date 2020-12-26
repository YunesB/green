import { Popup } from "../components/Popup.js";

export class PopupWithStats extends Popup {
  openCard(data) {
    super.open();
    this._popup
      .querySelector(".circle-chart-circle")
      .animate([{ strokeDasharray: 100 }, { strokeDasharray: 54 }], {
        duration: 800,
      });
    this._animateValue("voteCounter", 0, data.votes, 800);
  }

  updatePopupInfo(data) {
    this._popup.querySelector(".popup__heading").textContent = data.header;
    this._popup.querySelector(".popup__text").textContent = data.poem;
    this._popup.querySelector(".circle-chart-percentage").textContent =
      data.votes;
    this._popup.querySelector("#popupVoteName").textContent = data.author;
  }

  // Код не мой, взял отсюда - https://stackoverflow.com/questions/16994662/count-animation-from-number-a-to-b
  _animateValue(id, start, end, duration) {
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

  setEventListeners() {
    super.setEventListeners();
    const voteButton = this._popup.querySelector(".popup__vote-button");
    voteButton.addEventListener("click", () => {
      this._popup.querySelector("#voteCounter").textContent++;
      voteButton.disabled = true;
      voteButton.classList.add("button_disabled");
    });
  }
}
