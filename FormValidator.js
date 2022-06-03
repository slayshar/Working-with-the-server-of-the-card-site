class FormValidator {
  constructor(editform, editbtn, cardform, cardbtn) {
    this.editform = editform;
    this.cardform = cardform;
    this.editbtn = editbtn;
    this.cardbtn = cardbtn;
  }
  get editNameLength() {
    return this.editform.querySelector(`.edit__input_type_name`).value.length;
  }
  get editJobLength() {
    return this.editform.querySelector(`.edit__input_type_job`).value.length;
  }
  get cardNameLength() {
    return this.cardform.querySelector(`.popup__input_type_name`).value.length;
  }
  get cardLinkLength() {
    return this.cardform.querySelector(`.popup__input_type_link-url`).value
      .length;
  }
  validateEditForm = () => {
    if (this.editNameLength > 1 && this.editJobLength > 1) {
      this.editbtn.classList.add(`button__active`);
      this.editbtn.classList.remove(`button__deactive`);
      this.editbtn.removeAttribute('disabled');
    } else {
      this.editbtn.classList.remove(`button__active`);
      this.editbtn.classList.add(`button__deactive`);
      this.editbtn.setAttribute('disabled', true);
    }
  };
  validateCardForm = () => {
    if (
      this.cardNameLength > 1 &&
      this.cardLinkLength > 1 &&
      !this.cardform.querySelector(`.popup__input_type_link-url`).validity
        .typeMismatch
    ) {
      this.cardbtn.classList.add(`button__active`);
      this.cardbtn.classList.remove(`button__deactive`);
      this.cardbtn.removeAttribute('disabled');
    } else {
      this.cardbtn.classList.remove(`button__active`);
      this.cardbtn.classList.add(`button__deactive`);
      this.cardbtn.setAttribute('disabled', true);
    }
  };

  setEventListeners() {
    this.editform.addEventListener(`input`, this.validateEditForm);
    this.cardform.addEventListener(`input`, this.validateCardForm);
  }
}
