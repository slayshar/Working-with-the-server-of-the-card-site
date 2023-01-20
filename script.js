(async function () {
  const test = new UserApi();
  const user = await test.loadUser();
  const updateUserData = (name, about) => {
    test.loadNewUser(name, about);
  };
  const startName = function () {
    document.querySelector(`.user-info__name`).textContent = user.name;
    document.querySelector(`.user-info__job`).textContent = user.about;
    document.querySelector(
      `.user-info__photo`
    ).style.backgroundImage = `url(${user.avatar})`;
  };
  startName();
  const cardtest = new AllCardsApi();
  const cardsall = cardtest.loadCards();
  const loadName = new UserInfo(editWindow, updateUserData);
  const editForm = new Popup(editWindow, editBtn);
  const popupForm = new Popup(cardWindow, mainPopupBtn);
  const photoForm = new Popup(photoWindow, photo);
  const closeBigImg = new ImgPopup();
  const photoChanger = new PhotoPopup(photoOriginal, photoInputForm);
  const createErrors = new Errors(
    editInputForm,
    popupInputForm,
    photoInputForm
  );
  const validationForm = new FormValidator(
    editInputForm,
    editSubmitBtn,
    popupInputForm,
    cardSubmitBtn,
    photoInputForm,
    photoSubmitBtn
  );

  closeBigImg.setEventListeners();
  validationForm.setEventListeners();
  createErrors.setEventListeners();

  const everythingAboutForms = () => {
    const openAndCloseForms = () => {
      editForm.open();
      popupForm.open();
      photoForm.open();
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
        userCardInstance.send();
        place.prepend(userCardNode);
        popupForm.enter();
      });

      photoSubmitBtn.addEventListener(`click`, (event) => {
        event.preventDefault();
        photoChanger.change();
        photoChanger.load();
        photoForm.enter();
      });
    };
    resultForms();
  };
  everythingAboutForms();

  //чтобы использовать PATCH нам нужно знать id пользователя, его нужно достать из UserApi, а дальше использовать в PATCH
  //просто так
})();
