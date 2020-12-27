import { Card } from "../components/Card.js";
import { ListItem } from "../components/ListItem.js";
import { cardsList } from "../utils/constants.js";
import { cardPopup } from "../pages/index.js";

export function clearList(list) {
  list.innerHTML = "";
  searchPoem.classList.remove("button_disabled");
  searchPoem.disabled = false;
  poemList.classList.remove("display-item");
}

export function filterCards(list) {
  for (let item of list) {
    if (item.dataset.tags === categories.value || categories.value === "") {
      item.style.opacity = "1";
      item.style.filter = "grayscale(0)";
    } else {
      item.style.opacity = ".3";
      item.style.filter = "grayscale(100%)";
    }
  }
}

export function getAnswer(data) {
  return fetch(`https://www.buymebuyme.xyz/?q=%20${data}%20`, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .catch((res) => {
      return Promise.reject(`Ошибка: ${res.status} - ${res.statusText}`);
    });
}

export const createCard = (data) => {
  const card = new Card(
    {
      data,
      handleCardClick: () => {
        cardPopup.openCard(data);
        cardPopup.updatePopupInfo(data);
      },
    },
    "#cardTemplate"
  );

  const cardElement = card.generateCard();
  cardsList.append(cardElement);
};

export function getInputValues(form) {
  const inputList = form.querySelectorAll(".new-initiative__input");
  let formValues = {
    votes: 0,
    dataTag: "N/A",
  };
  inputList.forEach((input) => (formValues[input.name] = input.value));
  return formValues;
}

export function createListItem(data, template, inputValue, inputSelector) {
  const newlistItem = new ListItem(data, template, inputValue, inputSelector);
  return newlistItem.generateItem();
}
