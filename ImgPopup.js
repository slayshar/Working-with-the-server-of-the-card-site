class ImgPopup {
  constructor() {
    this.bigimg = document.querySelector(`.place-card__image__is-opened`);
    this.closeBtn = this.bigimg.querySelector(`.popup__close`);
  }
  open = (link) => {
    this.bigimg.style.display = `flex`;
    this.bigimg.querySelector(`.main-img`).src = link;
    greyArea.classList.add(`active`);
    document.body.style.overflow = `hidden`;
  };
  close = () => {
    this.bigimg.style.display = `none`;
    greyArea.classList.remove(`active`);
  };
  setEventListeners() {
    this.closeBtn.addEventListener(`click`, this.close);
  }
}
