const BASE_URL = `http://127.0.0.1:5000`;
const endpoints = {
  users: 'users',
  cards: 'cards',
};
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
const cardArray = [];

const test = new UserApi();
const user = test.loadUser(`62a11004753707ba8cdc5b8f`);
const newUser = new UserNewApi(`62a11004753707ba8cdc5b8f`);
lastVersionOfUser = newUser.loadNewUser();
const cardtest = new AllCardsApi();
const cardsall = cardtest.loadCards();
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

//чтобы использовать PATCH нам нужно знать id пользователя, его нужно достать из UserApi, а дальше использовать в PATCH
