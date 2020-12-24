export class FormValidator {
    constructor(data, form) {
      this._form = form,
      this._inputList = Array.from(form.querySelectorAll(data.inputSelector)),
      this._button = form.querySelector(data.submitButtonSelector)
      this._buttonClass = data.inactiveButtonClass,
      this._inputErrorClass = data.inputErrorClass,
      this._errorClass = data.errorClass
    }

    enableSubmitButton () {
      this._button.classList.remove(this._buttonClass);
      this._button.disabled = false;
    };
  
    disableSubmitButton () {
      this._button.classList.add(this._buttonClass);
      this._button.disabled = true;
    };
  
    _showInputError(input, errorMessage) {
      const inputError = this._form.querySelector(`#${input.id}-error`);
      input.classList.add(this._inputErrorClass);
      inputError.textContent = errorMessage;
      inputError.classList.add(this._errorClass);
      console.log(errorMessage)
    }
  
    _hideInputError(input) {
      const inputError = this._form.querySelector(`#${input.id}-error`);
      input.classList.remove(this._inputErrorClass);
      inputError.classList.remove(this._errorClass);
      inputError.textContent = "";
    }
  
    _checkInputValidity(input) {
      if (!input.validity.valid) {
        this._showInputError(input, input.validationMessage);
      } else {
        this._hideInputError(input);
      }
    };
  
    _hasInvalidInput() {
      console.log(this._inputList);
      return this._inputList.some((input) => {
        return !input.validity.valid;
      })
    };  
  
    _toggleButtonState() {
      if (this._hasInvalidInput()) {
        this.disableSubmitButton();
      } else {
        this.enableSubmitButton();
      }
    };
  
    enableValidation() {
      this._form.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
      this._setEventListeners();
    };
  
    _setEventListeners() {
      this._inputList.forEach((input) => {
        input.addEventListener('input', () => {
          this._checkInputValidity(input);
          this._toggleButtonState();
        });
      });
    }

    removeErrors() {
      this._inputList.forEach((input) => {
        this._hideInputError(input)
      })
    }
}