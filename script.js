(async function () {
  const test = new UserApi();
  const user = await test.loadUser();
  console.log(user);

  const updateUserData = (name, about) => {
    test.loadNewUser(name, about);
  };

  const cardtest = new AllCardsApi();
  const cardsall = cardtest.loadCards();
  const loadName = new UserInfo(editWindow, updateUserData);
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
})();
