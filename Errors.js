class Errors {
  constructor(editForm, cardForm) {
    this.editform = editForm;
    this.cardform = cardForm;
  }
  get editname() {
    return this.editform.querySelector(`.edit__input_type_name`);
  }
  get editjob() {
    return this.editform.querySelector(`.edit__input_type_job`);
  }
  get cardname() {
    return this.cardform.querySelector(`.popup__input_type_name`);
  }
  get cardlink() {
    return this.cardform.querySelector(`.popup__input_type_link-url`);
  }
  get editnameerror() {
    return this.editform.querySelector(`.userError`);
  }
  get editjoberror() {
    return this.editform.querySelector(`.jobError`);
  }
  get cardnameerror() {
    return this.cardform.querySelector(`.cardNameError`);
  }
  get cardlinkerror() {
    return this.cardform.querySelector(`.linkError`);
  }

  nameErrors = () => {
    if (this.editname.validity.valueMissing) {
      this.editnameerror.textContent = `Это обязательное поле`;
    } else if (
      this.editname.validity.tooShort ||
      this.editname.validity.tooLong
    ) {
      this.editnameerror.textContent = `Должно быть от 2 до 30 символов`;
    } else {
      this.editnameerror.textContent = ``;
    }
    if (this.editjob.validity.valueMissing) {
      this.editjoberror.textContent = `Это обязательное поле`;
    } else if (
      this.editjob.validity.tooShort ||
      this.editjob.validity.tooLong
    ) {
      this.editjoberror.textContent = `Должно быть от 2 до 30 символов`;
    } else {
      this.editjoberror.textContent = ``;
    }
  };

  cardErrors = () => {
    if (this.cardname.validity.valueMissing) {
      this.cardnameerror.textContent = `Это обязательное поле`;
    } else if (
      this.cardname.validity.tooShort ||
      this.cardname.validity.tooLong
    ) {
      this.cardnameerror.textContent = `Должно быть от 2 до 30 символов`;
    } else {
      this.cardnameerror.textContent = ``;
    }
    if (this.cardlink.validity.typeMismatch) {
      this.cardlinkerror.textContent = `Здесь должна быть ссылка`;
    } else {
      this.cardlinkerror.textContent = ``;
    }
  };

  setEventListeners() {
    this.editform.addEventListener(`input`, this.nameErrors);
    this.cardform.addEventListener(`input`, this.cardErrors);
  }
}
