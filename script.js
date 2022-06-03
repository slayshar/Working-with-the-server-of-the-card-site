const place = document.querySelector(`.places-list`);
const greyArea = document.querySelector(`.grey_area`);
const editBtn = document.querySelector(`.user-info__edit`);
const editWindow = document.querySelector(`.edit`);
const cardWindow = document.querySelector(`.popup`);
const mainPopupBtn = document.querySelector(`.user-info__button`);
const editInputForm = document.querySelector(`.edit__form`);
const popupInputForm = document.querySelector(`.popup__form`);
const editSubmitBtn = document.querySelector(`.edit__button`);
const cardSubmitBtn = document.querySelector(`.popup__button`);
const cardUrl = document.querySelector(`.popup__input_type_link-url`);
const cardName = document.querySelector(`.popup__input_type_name`);

const loadName = new UserInfo(editWindow);
const editForm = new Popup(editWindow, editBtn);
const popupForm = new Popup(cardWindow, mainPopupBtn);
const closeBigImg = new ImgPopup();
const createErrors = new Errors(editInputForm, popupInputForm);
const validationForm = new FormValidator(
  editInputForm,
  editSubmitBtn,
  popupInputForm,
  cardSubmitBtn
);

closeBigImg.setEventListeners();
validationForm.setEventListeners();
createErrors.setEventListeners();

const initCards = () => {
  const cardArray = [];
  initialCards.forEach((card) => {
    const cardInstance = new Card(card.name, card.link);
    const cardNode = cardInstance.render();
    cardNode
      .querySelector(`.place-card__image`)
      .addEventListener(`click`, () => gettingUrl(cardInstance));
    cardArray.push(cardNode);
  });
  const readyCard = new CardList(place, cardArray);
  readyCard.render();
};
initCards();

const everythingAboutForms = () => {
  const openAndCloseForms = () => {
    editForm.open();
    popupForm.open();
  };
  openAndCloseForms();

  const resultForms = () => {
    editSubmitBtn.addEventListener(`click`, (event) => {
      event.preventDefault();
      loadName.updateUserInfo();
      editForm.enter();
    });

    cardSubmitBtn.addEventListener(`click`, (event) => {
      event.preventDefault();
      const userCardInstance = new Card(cardName.value, cardUrl.value);
      const userCardNode = userCardInstance.render();
      place.prepend(userCardNode);
      popupForm.enter();
    });
  };
  resultForms();
};
everythingAboutForms();
