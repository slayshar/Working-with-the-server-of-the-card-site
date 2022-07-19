const BASE_URL = `http://127.0.0.1:5000`;
const USER_ID = `62a11004753707ba8cdc5b8f`;
const endpoints = {
  users: 'users',
  cards: 'cards',
};
const cardArray = [];
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
const photo = document.querySelector(`.user-info__shadowphoto`);
const photoWindow = document.querySelector(`.photo`);
const photoInputForm = document.querySelector(`.photo__form`);
const photoSubmitBtn = document.querySelector(`.photo__button`);
