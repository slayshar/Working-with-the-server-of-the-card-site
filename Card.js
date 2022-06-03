class Card {
  constructor(name, link) {
    this.name = name;
    this.link = link;
    this.card = null;
  }

  get Url() {
    return this.card
      .querySelector(`.place-card__image`)
      .style.backgroundImage.slice(4, -1)
      .replace(/"/g, '');
  }

  like = (event) => {
    this.card
      .querySelector('.place-card__like-icon')
      .classList.toggle(`place-card__like-icon_liked`);
  };

  remove = (event) => {
    this.card.remove();
    event.stopPropagation();
  };

  addEventListeners = () => {
    this.card
      .querySelector(`.place-card__like-icon`)
      .addEventListener(`click`, this.like);
    this.card
      .querySelector(`.place-card__delete-icon`)
      .addEventListener(`click`, this.remove);
  };

  create = () => {
    this.card = document.createElement(`div`);
    this.card.classList.add(`place-card`);
    const template = `
      <div class="place-card__image" style="background-image: url(${this.link})">
        <button class="place-card__delete-icon"></button>
      </div>
      <div class="place-card__description">
        <h3 class="place-card__name">${this.name}</h3>
        <button class="place-card__like-icon"></button>
      </div>`;
    this.card.insertAdjacentHTML('beforeend', template);
    this.addEventListeners();
  };

  render = () => {
    this.create();
    return this.card;
  };
}
